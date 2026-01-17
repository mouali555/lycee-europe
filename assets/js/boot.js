// js/boot.js — small cinematic boot overlay

const boot = document.getElementById('bootOverlay');
const skip = document.getElementById('skipBoot');

function hideBoot(){
  if (!boot) return;
  boot.setAttribute('aria-hidden', 'true');
  boot.classList.add('hidden');
}

skip?.addEventListener('click', hideBoot);

// Auto hide after a short beat
setTimeout(hideBoot, 3200);

// Allow ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideBoot();
});
