import { useEffect, useRef, useState } from 'react'

const cache = new Map()

export function useAsciiFrames(src, enabled = true) {
  const [data, setData] = useState(() => cache.get(src) || null)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    if (!enabled) return undefined
    if (cache.has(src)) {
      setData(cache.get(src))
      return undefined
    }
    let cancelled = false
    fetch(src)
      .then((res) => res.json())
      .then((json) => {
        cache.set(src, json)
        if (!cancelled && mounted.current) setData(json)
      })
      .catch(() => {})
    return () => {
      cancelled = true
      mounted.current = false
    }
  }, [src, enabled])

  return data
}