<script setup>
import * as THREE from 'three'

const emit = defineEmits(['nearby', 'enter', 'move'])
const canvas = ref(null)
let renderer, scene, camera, animation, observer
let yaw = 0, pitch = -.025, lastFrame = 0, stateClock = 0, lastNearby = ''
const velocity = new THREE.Vector3()
const keys = new Set()
const portals = []
const gauntlets = []
const portalsData = [
  { id: 'formations', title: 'FORMATIONS', subtitle: 'Choisir sa trajectoire', to: '/filieres', side: -1, z: -8, color: 0x75e9ef, key: '01' },
  { id: 'clubs', title: 'VIE LYCÉENNE', subtitle: 'Clubs · sport · projets', to: '/clubs', side: 1, z: -17, color: 0xffaa72, key: '02' },
  { id: 'nexus', title: 'NEXUS STUDIO', subtitle: 'Entrer dans l’imaginaire', to: '/nexus', side: -1, z: -27, color: 0x72e5ee, key: '03' },
  { id: 'chat', title: 'LE COLLECTIF', subtitle: 'Discuter avec les élèves', to: '/chat', side: 1, z: -37, color: 0xffaa72, key: '04' },
]

function material(color, roughness = .7, metalness = .1, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra })
}
function box(parent, size, position, mat, cast = false) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat)
  mesh.position.set(...position); mesh.castShadow = cast; mesh.receiveShadow = true; parent.add(mesh); return mesh
}
function makeSurfaceTexture(base, detail, seed, repeatX, repeatY) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 512
  const ctx = canvas.getContext('2d'); ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512)
  let value = seed
  const random = () => { value = (value * 16807) % 2147483647; return (value - 1) / 2147483646 }
  for (let i = 0; i < 4200; i++) {
    const alpha = .025 + random() * .13; ctx.fillStyle = detail; ctx.globalAlpha = alpha
    const width = random() > .94 ? 8 + random() * 24 : 1 + random() * 3
    ctx.fillRect(random() * 512, random() * 512, width, .5 + random() * 2.2)
  }
  ctx.globalAlpha = .2; ctx.strokeStyle = '#070d10'; ctx.lineWidth = 1
  for (let i = 0; i < 8; i++) { const y = 24 + i * 64; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke() }
  ctx.globalAlpha = 1
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(repeatX, repeatY); texture.anisotropy = 4
  return texture
}
function makeLabel(data) {
  const label = document.createElement('canvas'); label.width = 768; label.height = 192
  const ctx = label.getContext('2d')
  ctx.fillStyle = '#08141b'; ctx.fillRect(0, 0, 768, 192)
  ctx.strokeStyle = `#${data.color.toString(16).padStart(6, '0')}`; ctx.lineWidth = 5; ctx.strokeRect(5, 5, 758, 182)
  ctx.font = '700 23px Arial'; ctx.fillStyle = '#92aeb2'; ctx.fillText(`LYCÉE EUROPE  /  ${data.key}`, 32, 48)
  ctx.font = '700 49px Arial'; ctx.fillStyle = '#edf8f6'; ctx.fillText(data.title, 32, 113)
  ctx.font = '400 25px Arial'; ctx.fillStyle = '#93cbd0'; ctx.fillText(data.subtitle, 32, 155)
  const texture = new THREE.CanvasTexture(label); texture.colorSpace = THREE.SRGBColorSpace
  return new THREE.Mesh(new THREE.PlaneGeometry(2.7, .68), new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide }))
}
function addPortal(data) {
  const group = new THREE.Group(); group.position.set(data.side * 6.79, 0, data.z); group.rotation.y = data.side < 0 ? Math.PI / 2 : -Math.PI / 2
  scene.add(group)
  const glow = new THREE.MeshBasicMaterial({ color: data.color, transparent: true, opacity: .24, side: THREE.DoubleSide })
  const dark = material(0x102128, .32, .2, { emissive: data.color, emissiveIntensity: .16 })
  box(group, [2.05, 2.98, .14], [0, 1.5, 0], dark)
  box(group, [.09, 3.24, .13], [-1.1, 1.62, .06], new THREE.MeshBasicMaterial({ color: data.color }))
  box(group, [.09, 3.24, .13], [1.1, 1.62, .06], new THREE.MeshBasicMaterial({ color: data.color }))
  box(group, [2.27, .09, .13], [0, 3.2, .06], new THREE.MeshBasicMaterial({ color: data.color }))
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.82, 2.72), glow); glass.position.set(0, 1.52, .1); group.add(glass)
  const label = makeLabel(data); label.position.set(0, 3.62, .12); group.add(label)
  box(group, [2.3, .04, .42], [0, .02, .1], material(0x101d22, .55, .15))
  const marker = new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 10), new THREE.MeshBasicMaterial({ color: data.color })); marker.position.set(0, 3.33, .12); group.add(marker)
  portals.push({ ...data, group, marker, origin: new THREE.Vector3(data.side * 4.45, 1.6, data.z) })
}
function makeScene() {
  scene = new THREE.Scene(); scene.background = new THREE.Color(0x0b151b); scene.fog = new THREE.FogExp2(0x0b151b, .016)
  camera = new THREE.PerspectiveCamera(74, 1, .08, 120); camera.position.set(0, 1.68, 7)
  scene.add(camera)
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: false, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75)); renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.16
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap

  scene.add(new THREE.HemisphereLight(0xbfe8eb, 0x182227, 2.0))
  const keyLight = new THREE.DirectionalLight(0xd2e8df, 2.2); keyLight.position.set(-3, 8, 7); keyLight.castShadow = true; keyLight.shadow.mapSize.set(1024, 1024); scene.add(keyLight)
  const warmLight = new THREE.PointLight(0xffa66d, 54, 19, 2); warmLight.position.set(0, 4.5, -13); scene.add(warmLight)
  for (const z of [-3, -11, -20, -30, -41]) { const lamp = new THREE.PointLight(0x70e6ef, 23, 12, 2); lamp.position.set(0, 4.8, z); scene.add(lamp) }

  // Two small red-and-gold gauntlets stay at the edge of the visor view.
  const armorRed = material(0x8a3029, .28, .72, { emissive: 0x2b0a08, emissiveIntensity: .2 })
  const armorGold = material(0xc58a42, .3, .72, { emissive: 0x37200a, emissiveIntensity: .22 })
  const palmCore = new THREE.MeshBasicMaterial({ color: 0x8af5ff })
  for (const side of [-1, 1]) {
    const arm = new THREE.Group(); arm.position.set(side * .46, -.56, -1.48); arm.rotation.z = -side * .13; arm.rotation.x = -.18; camera.add(arm); gauntlets.push({ arm, side })
    box(arm, [.24, .38, .29], [side * -.03, -.12, 0], armorRed, true)
    box(arm, [.27, .075, .31], [side * -.03, .055, 0], armorGold, true)
    const palm = new THREE.Mesh(new THREE.SphereGeometry(.17, 14, 12), armorRed); palm.scale.set(1, .78, .62); palm.position.set(side * .055, .13, -.06); arm.add(palm)
    const palmLight = new THREE.Mesh(new THREE.CircleGeometry(.095, 20), palmCore); palmLight.position.set(side * .055, .14, .048); arm.add(palmLight)
    for (let finger = 0; finger < 4; finger++) {
      const digit = new THREE.Mesh(new THREE.CapsuleGeometry(.031, .10, 3, 6), armorRed)
      digit.position.set(side * .055 + (finger - 1.5) * .077, .29 - Math.abs(finger - 1.4) * .018, -.055); digit.rotation.z = (finger - 1.5) * -.08; arm.add(digit)
    }
    const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(.035, .09, 3, 6), armorGold); thumb.position.set(side * -.15, .12, -.08); thumb.rotation.z = side * -.78; arm.add(thumb)
  }

  const floor = material(0xffffff, .84, .22, { map: makeSurfaceTexture('#253238', '#8ba0a0', 811, 2, 18) }), ceiling = material(0x171f23, .82, .08), wall = material(0xffffff, .8, .12, { map: makeSurfaceTexture('#465153', '#bcc4b7', 192, 4, 15) }), lowerWall = material(0x222f33, .74, .17), trim = material(0x809195, .45, .42), glass = new THREE.MeshPhysicalMaterial({ color: 0x69bbc3, roughness: .18, metalness: .2, transparent: true, opacity: .28, emissive: 0x16353a, emissiveIntensity: .3 })
  box(scene, [14, .24, 70], [0, -.15, -18], floor)
  const grid = new THREE.GridHelper(70, 70, 0x53bac0, 0x345159); grid.position.set(0, -.017, -18); grid.material.transparent = true; grid.material.opacity = .19; scene.add(grid)
  box(scene, [14, .18, 70], [0, 5.3, -18], ceiling)
  box(scene, [.28, 5.5, 70], [-7, 2.6, -18], wall)
  box(scene, [.28, 5.5, 70], [7, 2.6, -18], wall)
  box(scene, [14, .17, 70], [0, .13, -18], trim)
  for (const x of [-6.78, 6.78]) box(scene, [.17, .56, 70], [x, .43, -18], lowerWall)
  for (const y of [.66, 1.06, 4.35, 4.52]) { box(scene, [.055, .035, 70], [-6.82, y, -18], trim); box(scene, [.055, .035, 70], [6.82, y, -18], trim) }
  for (let i = 0; i < 12; i++) {
    const z = 8 - i * 5.4
    box(scene, [13.7, .12, .18], [0, 5.04, z], material(0x28363a, .65, .3))
    box(scene, [1.5, .035, 2.6], [0, 5.18, z - 1.45], material(i % 3 ? 0x29383b : 0x34464a, .6, .2))
    box(scene, [.16, .06, 2.9], [-4.9, .015, z], material(0xd8a36a, .5, .25, { emissive: 0x6e3e20, emissiveIntensity: .2 }))
    box(scene, [.16, .06, 2.9], [4.9, .015, z], material(0xd8a36a, .5, .25, { emissive: 0x6e3e20, emissiveIntensity: .2 }))
  }

  for (let i = 0; i < 17; i++) {
    const z = 9 - i * 3.5
    box(scene, [13.4, .04, .07], [0, 5.16, z], material(i % 2 ? 0x70dce0 : 0xffa66d, .3, .2, { emissive: i % 2 ? 0x4ea6aa : 0x9e583a, emissiveIntensity: 1.1 }))
    box(scene, [.05, 4.6, .04], [-6.78, 2.6, z], trim)
    box(scene, [.05, 4.6, .04], [6.78, 2.6, z], trim)
  }
  for (const data of portalsData) addPortal(data)

  for (const side of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      const z = -2 - i * 7.0
      const blocked = portals.some(portal => portal.side === side && Math.abs(portal.z - z) < 3.4)
      if (blocked) continue
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.7), glass)
      pane.position.set(side * 6.84, 3.02, z); pane.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2; scene.add(pane)
      box(scene, [.07, .07, 2.3], [side * 6.8, 4, z], trim)
      box(scene, [.07, .07, 2.3], [side * 6.8, 2.04, z], trim)
    }
  }

  // Atrium glazing at the far end and a warm school courtyard beyond it.
  const exitGlow = new THREE.MeshBasicMaterial({ color: 0x6baeb2, transparent: true, opacity: .34, side: THREE.DoubleSide })
  const exitGlass = new THREE.Mesh(new THREE.PlaneGeometry(11.8, 4.1), exitGlow); exitGlass.position.set(0, 2.8, -52.8); scene.add(exitGlass)
  box(scene, [12, .11, .1], [0, 4.92, -52.72], trim); box(scene, [12, .11, .1], [0, .75, -52.72], trim)
  for (const x of [-5.8, -2.9, 0, 2.9, 5.8]) box(scene, [.09, 4.2, .12], [x, 2.8, -52.72], trim)
  const horizon = material(0x213941, .9, 0, { emissive: 0x142b2c, emissiveIntensity: .2 })
  for (let i = 0; i < 11; i++) { const h = 1.2 + (i * 37 % 19) / 10; box(scene, [1.2 + (i % 3) * .5, h, .65], [-5.1 + i * 1.02, h / 2 + .3, -55 + (i % 3) * .18], horizon) }
  for (const x of [-3.6, 3.6]) {
    const pot = material(0x344238, .95), bark = material(0x735640, .95), greens = [material(0x4a735d, .92), material(0x618368, .9), material(0x315d4e, .94)]
    box(scene, [.78, .56, .78], [x, .28, -13], pot)
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.12, .2, 1.3, 8), bark); trunk.position.set(x, 1.15, -13); scene.add(trunk)
    for (let leaf = 0; leaf < 11; leaf++) {
      const angle = leaf * 2.399, radius = .18 + (leaf % 4) * .12, height = 1.25 + Math.floor(leaf / 4) * .47
      const crown = new THREE.Mesh(new THREE.SphereGeometry(.32 + (leaf % 3) * .045, 11, 8), greens[leaf % greens.length])
      crown.position.set(x + Math.cos(angle) * radius, height, -13 + Math.sin(angle) * radius); crown.scale.set(1.12, 1.02, .9); crown.castShadow = true; scene.add(crown)
    }
  }
  for (const side of [-1, 1]) for (const z of [-21.5, -23.1, -24.7, -39]) {
    const x = side * 4.92, steel = material(0x344145, .72, .32), seat = material(0x765c42, .76, .2)
    box(scene, [1.55, .08, .35], [x, .55, z], seat, true)
    box(scene, [1.55, .08, .34], [x, .88, z - .13], steel, true)
    for (const legX of [-.64, .64]) { box(scene, [.075, .5, .08], [x + legX, .28, z], steel); box(scene, [.075, .31, .08], [x + legX, .76, z - .13], steel) }
  }
  for (const side of [-1, 1]) for (let index = 0; index < 4; index++) {
    const data = { key: `0${index + 1}`, title: ['SCIENCES','ATELIERS','BIBLIOTHÈQUE','PROJETS'][index], subtitle: 'LYCÉE EUROPE · DUNKERQUE', color: side < 0 ? 0x7ae2e7 : 0xffab72 }
    const sign = makeLabel(data); sign.scale.set(.66, .66, 1); sign.position.set(side * 6.82, 4.58, -4 - index * 11); sign.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2; scene.add(sign)
  }

  const badge = makeLabel({ key: 'ACCUEIL', title: 'LYCÉE EUROPE', subtitle: 'DUNKERQUE  /  CAMPUS', color: 0x86e9e8 })
  badge.scale.set(1.55, 1.55, 1); badge.position.set(0, 4.25, -45); scene.add(badge)
}
function resize() {
  if (!renderer || !canvas.value) return
  const rect = canvas.value.getBoundingClientRect(); if (!rect.width || !rect.height) return
  renderer.setSize(rect.width, rect.height, false); camera.aspect = rect.width / rect.height; camera.updateProjectionMatrix()
}
let isPointerDragging = false
let lastPointerX = 0, lastPointerY = 0

function onKeyDown(event) {
  if (event.repeat) return
  if (event.target?.matches?.('input,textarea,select,[contenteditable="true"]')) return
  const key = event.key.toLowerCase()
  const code = event.code
  if (['w','a','s','d','z','q','arrowup','arrowdown','arrowleft','arrowright','shift',' '].includes(key) ||
      ['KeyW','KeyA','KeyS','KeyD','KeyZ','KeyQ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','ShiftLeft','ShiftRight'].includes(code)) {
    event.preventDefault()
  }
  keys.add(key)
  if (code === 'KeyW' || key === 'z' || key === 'w') keys.add('w')
  if (code === 'KeyA' || key === 'q' || key === 'a') keys.add('a')
  if (code === 'KeyS' || key === 's') keys.add('s')
  if (code === 'KeyD' || key === 'd') keys.add('d')
  if (key === 'e' || key === ' ' || code === 'Space' || code === 'KeyE') interact()
  if (key === 'r' || code === 'KeyR') { camera.position.set(0, 1.68, 7); yaw = 0; pitch = -.025 }
  if ((key === 'escape' || code === 'Escape') && document.pointerLockElement) document.exitPointerLock()
}
function onKeyUp(event) {
  const key = event.key.toLowerCase()
  const code = event.code
  keys.delete(key)
  if (code === 'KeyW' || key === 'z' || key === 'w') { keys.delete('w'); keys.delete('z') }
  if (code === 'KeyA' || key === 'q' || key === 'a') { keys.delete('a'); keys.delete('q') }
  if (code === 'KeyS' || key === 's') keys.delete('s')
  if (code === 'KeyD' || key === 'd') keys.delete('d')
}
function onMouseMove(event) {
  if (document.pointerLockElement === canvas.value) {
    yaw -= event.movementX * .00215
    pitch = THREE.MathUtils.clamp(pitch - event.movementY * .0018, -1.08, 1.08)
  } else if (isPointerDragging) {
    const dx = event.clientX - lastPointerX
    const dy = event.clientY - lastPointerY
    lastPointerX = event.clientX
    lastPointerY = event.clientY
    yaw -= dx * .003
    pitch = THREE.MathUtils.clamp(pitch - dy * .0025, -1.08, 1.08)
  }
}
function onCanvasPointerDown(event) {
  if (event.pointerType === 'touch') { canvas.value?.setPointerCapture?.(event.pointerId); return }
  isPointerDragging = true
  lastPointerX = event.clientX
  lastPointerY = event.clientY
  if (matchMedia('(pointer:fine)').matches && document.pointerLockElement !== canvas.value) {
    canvas.value?.requestPointerLock?.()
  }
}
function onWindowPointerUp() {
  isPointerDragging = false
}
function onCanvasPointerMove(event) {
  if (event.pointerType !== 'touch' || !event.buttons) return
  yaw -= event.movementX * .004; pitch = THREE.MathUtils.clamp(pitch - event.movementY * .003, -1.08, 1.08)
}
function virtualDown(key, event) { event.preventDefault(); keys.add(key) }
function virtualUp(key) { keys.delete(key) }
function interact() {
  const nearest = portals.map(portal => ({ portal, distance: camera.position.distanceTo(portal.origin) })).sort((a,b) => a.distance - b.distance)[0]
  if (nearest && nearest.distance < 4.4) { const { id, title, subtitle, to, key } = nearest.portal; emit('enter', { id, title, subtitle, to, key }) }
}
function update(dt) {
  const speed = keys.has('shift') ? 7.7 : 4.1
  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw))
  const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw))
  const move = new THREE.Vector3()
  if (keys.has('z') || keys.has('w') || keys.has('arrowup')) move.add(forward)
  if (keys.has('s') || keys.has('arrowdown')) move.sub(forward)
  if (keys.has('d')) move.add(right)
  if (keys.has('q') || keys.has('a')) move.sub(right)
  if (keys.has('arrowleft')) yaw += dt * 1.8
  if (keys.has('arrowright')) yaw -= dt * 1.8
  const walking = move.lengthSq() > 0
  const targetVelocity = walking ? move.normalize().multiplyScalar(speed) : new THREE.Vector3()
  velocity.lerp(targetVelocity, Math.min(1, dt * (walking ? 8.5 : 11)))
  if (velocity.lengthSq() > .004) {
    const nextX = THREE.MathUtils.clamp(camera.position.x + velocity.x * dt, -5.65, 5.65)
    const nextZ = THREE.MathUtils.clamp(camera.position.z + velocity.z * dt, -48.6, 5.8)
    const collision = (x, z) => {
      for (const side of [-1, 1]) if (Math.abs(x - side * 3.6) < .62 && Math.abs(z + 13) < .68) return true
      for (const side of [-1, 1]) for (const benchZ of [-21.5, -23.1, -24.7, -39]) if (Math.abs(x - side * 4.92) < 1.02 && Math.abs(z - benchZ) < .48) return true
      return false
    }
    if (!collision(nextX, camera.position.z)) camera.position.x = nextX
    if (!collision(camera.position.x, nextZ)) camera.position.z = nextZ
  }
  const moving = velocity.length() > .18
  const gait = moving ? Math.sin(performance.now() * .012) : 0
  camera.position.y = 1.68 + (moving ? Math.abs(gait) * .026 : 0)
  for (const { arm, side } of gauntlets) { arm.position.y = -.56 + gait * .035; arm.rotation.z = -side * (.13 + gait * .025) }
  camera.rotation.set(pitch, yaw, 0, 'YXZ')
  for (const portal of portals) {
    const distance = camera.position.distanceTo(portal.origin)
    const active = distance < 5.7
    portal.marker.scale.setScalar(active ? 1.8 + Math.sin(performance.now() * .009) * .35 : 1)
    portal.group.children[0].material.emissiveIntensity = active ? .62 : .16
    if (active && lastNearby !== portal.id) { lastNearby = portal.id; const { id, title, subtitle, to, key } = portal; emit('nearby', { id, title, subtitle, to, key, distance }) }
  }
  const nearest = portals.find(portal => camera.position.distanceTo(portal.origin) < 5.7)
  if (!nearest && lastNearby) { lastNearby = ''; emit('nearby', null) }
  if (stateClock > .12) { emit('move', { walking: moving, x: camera.position.x, z: camera.position.z, yaw }); stateClock = 0 }
}
function render(now = 0) {
  animation = requestAnimationFrame(render)
  const dt = Math.min((now - (lastFrame || now)) / 1000, .04); lastFrame = now; stateClock += dt
  update(dt); renderer.render(scene, camera)
}
onMounted(async () => {
  await nextTick()
  try {
    const canvasEl = canvas.value || document.querySelector('.lycee-world-canvas')
    if (!canvasEl) {
      console.warn('Canvas 3D introuvable lors du montage')
      return
    }
    canvas.value = canvasEl
    makeScene()
    resize()
    observer = new ResizeObserver(resize)
    observer.observe(canvasEl)
    window.addEventListener('resize', resize)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', () => keys.clear())
    window.addEventListener('pointerup', onWindowPointerUp)
    document.addEventListener('mousemove', onMouseMove)
    animation = requestAnimationFrame(render)
  }
  catch (error) { console.error('Impossible de démarrer le campus 3D', error) }
})
onUnmounted(() => {
  cancelAnimationFrame(animation); observer?.disconnect(); window.removeEventListener('resize', resize); window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('pointerup', onWindowPointerUp); document.removeEventListener('mousemove', onMouseMove); renderer?.dispose()
})
</script>

<template>
  <canvas ref="canvas" class="lycee-world-canvas" aria-label="Couloir 3D du Lycée Europe. Cliquez pour regarder à la souris, puis utilisez W A S D pour vous déplacer. Approchez-vous d’une porte et appuyez sur E pour entrer." @pointerdown="onCanvasPointerDown" @pointermove="onCanvasPointerMove" />
  <div class="world-touch-pad" aria-label="Commandes tactiles"><button aria-label="Avancer" @pointerdown.stop="virtualDown('w',$event)" @pointerup="virtualUp('w')" @pointerleave="virtualUp('w')">▲</button><div><button aria-label="Aller à gauche" @pointerdown.stop="virtualDown('a',$event)" @pointerup="virtualUp('a')" @pointerleave="virtualUp('a')">◀</button><button aria-label="Reculer" @pointerdown.stop="virtualDown('s',$event)" @pointerup="virtualUp('s')" @pointerleave="virtualUp('s')">▼</button><button aria-label="Aller à droite" @pointerdown.stop="virtualDown('d',$event)" @pointerup="virtualUp('d')" @pointerleave="virtualUp('d')">▶</button></div></div>
</template>

<style scoped>
.lycee-world-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;cursor:crosshair;touch-action:none}
.world-touch-pad{display:none;position:absolute;z-index:4;left:12px;bottom:20px;width:138px;pointer-events:auto}.world-touch-pad>button{display:block;margin:auto}.world-touch-pad>div{display:flex;justify-content:space-between}.world-touch-pad button{width:40px;height:40px;border:1px solid #8de6e86e;background:#09171cae;color:#cff5f1;backdrop-filter:blur(8px);touch-action:none}
@media(max-width:620px){.world-touch-pad{display:block}}
</style>
