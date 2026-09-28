export default defineNuxtPlugin(nuxtApp => {
  const motion = useState('motion-enabled', () => true)
  const observers = new WeakMap<Element, IntersectionObserver>()
  nuxtApp.vueApp.directive('reveal', {
    mounted(element: HTMLElement) {
      if (!motion.value || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
      if (element.getBoundingClientRect().top < innerHeight - 20) return
      element.classList.add('reveal-ready')
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      }, { threshold: 0, rootMargin: '0px 0px -20px 0px' })
      observer.observe(element)
      observers.set(element, observer)
    },
    unmounted(element: HTMLElement) { observers.get(element)?.disconnect(); observers.delete(element) },
  })
})
