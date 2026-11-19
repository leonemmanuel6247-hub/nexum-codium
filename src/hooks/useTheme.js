import { useEffect, useState } from 'react'

export function useTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    try {
      localStorage.setItem('nc-theme', 'dark')
    } catch (e) {
      /* ignore */
    }
  }, [])

  return { theme: 'dark' }
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    return window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  })
  useEffect(() => {
    if (!window.matchMedia) return undefined
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export function useInView(ref, options = { threshold: 0.2 }) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      })
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, options])
  return inView
}