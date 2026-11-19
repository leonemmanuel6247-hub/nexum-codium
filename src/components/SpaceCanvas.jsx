import { useEffect, useRef } from 'react'

export default function SpaceCanvas({ theme, reducedMotion }) {
  const canvasRef = useRef(null)
  const themeRef = useRef(theme)
  themeRef.current = theme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const state = {
      w: 0,
      h: 0,
      dpr: 1,
      stars: [],
      nodes: [],
      streaks: [],
      nebulae: [],
      mouse: { x: 0, y: 0, tx: 0, ty: 0 },
    }
    let frame = 0
    let running = true

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      state.dpr = dpr
      state.w = window.innerWidth
      state.h = window.innerHeight
      canvas.width = Math.floor(state.w * dpr)
      canvas.height = Math.floor(state.h * dpr)
      canvas.style.width = `${state.w}px`
      canvas.style.height = `${state.h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const area = state.w * state.h
      const starCount = Math.min(220, Math.max(90, Math.floor(area / 9000)))
      state.stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * state.w,
        y: Math.random() * state.h,
        z: 0.35 + Math.random() * 1.4,
        r: 0.6 + Math.random() * 1.8,
        tw: Math.random() * Math.PI * 2,
      }))

      const nodeCount = Math.min(90, Math.max(40, Math.floor(area / 18000)))
      state.nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * state.w,
        y: Math.random() * state.h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.4 + Math.random() * 1.8,
      }))

      state.streaks = Array.from({ length: 22 }, () => ({
        x: Math.random() * state.w,
        y: Math.random() * state.h,
        len: 80 + Math.random() * 180,
        speed: 2.2 + Math.random() * 5.5,
        alpha: 0.18 + Math.random() * 0.35,
        h: 1 + Math.random() * 1.4,
      }))

      state.nebulae = [
        { x: state.w * 0.72, y: state.h * 0.28, r: state.w * 0.42, c: [0, 240, 255], a: 0.16 },
        { x: state.w * 0.18, y: state.h * 0.78, r: state.w * 0.38, c: [99, 102, 241], a: 0.14 },
        { x: state.w * 0.5, y: state.h * 0.08, r: state.w * 0.28, c: [16, 185, 129], a: 0.08 },
      ]
    }

    function draw() {
      const { w, h, stars, nodes, streaks, nebulae, mouse } = state
      const light = themeRef.current === 'light'
      ctx.clearRect(0, 0, w, h)

      const px = (mouse.x - 0.5) * 28
      const py = (mouse.y - 0.5) * 18

      if (!light) {
        nebulae.forEach((n, i) => {
          const pulse = 0.75 + Math.sin(Date.now() / 1800 + i) * 0.25
          const g = ctx.createRadialGradient(n.x + px * 0.4, n.y + py * 0.4, 0, n.x + px * 0.4, n.y + py * 0.4, n.r)
          g.addColorStop(0, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},${n.a * pulse})`)
          g.addColorStop(1, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0)`)
          ctx.fillStyle = g
          ctx.fillRect(0, 0, w, h)
        })

        streaks.forEach((st) => {
          const grad = ctx.createLinearGradient(st.x, st.y, st.x - st.len, st.y)
          grad.addColorStop(0, `rgba(0,240,255,${st.alpha})`)
          grad.addColorStop(0.6, `rgba(16,185,129,${st.alpha * 0.35})`)
          grad.addColorStop(1, 'rgba(0,240,255,0)')
          ctx.strokeStyle = grad
          ctx.lineWidth = st.h
          ctx.beginPath()
          ctx.moveTo(st.x, st.y)
          ctx.lineTo(st.x - st.len, st.y)
          ctx.stroke()
        })
      } else {
        nebulae.forEach((n, i) => {
          const pulse = 0.7 + Math.sin(Date.now() / 2200 + i) * 0.2
          const g = ctx.createRadialGradient(n.x + px * 0.3, n.y + py * 0.3, 0, n.x, n.y, n.r)
          const c = i === 1 ? [5, 150, 105] : [37, 99, 235]
          g.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${0.07 * pulse})`)
          g.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`)
          ctx.fillStyle = g
          ctx.fillRect(0, 0, w, h)
        })
      }

      const linkColor = light ? 'rgba(29,78,216,0.22)' : 'rgba(0,240,255,0.22)'
      const nodeColor = light ? 'rgba(29,78,216,0.55)' : 'rgba(0,240,255,0.7)'
      ctx.strokeStyle = linkColor
      ctx.fillStyle = nodeColor
      const maxDist = light ? 170 : 150
      const maxDist2 = maxDist * maxDist
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = dx * dx + dy * dy
          if (d < maxDist2) {
            ctx.globalAlpha = 1 - d / maxDist2
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      nodes.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      stars.forEach((s) => {
        const tw = 0.45 + Math.sin(s.tw) * 0.55
        const x = s.x + px * s.z * 0.35
        const y = s.y + py * s.z * 0.35
        ctx.globalAlpha = light ? tw * 0.45 : tw
        ctx.fillStyle = light ? '#1D4ED8' : '#E2E8F0'
        ctx.beginPath()
        ctx.arc(x, y, s.r * (light ? 0.7 : 1), 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1
    }

    function step() {
      if (!running) return
      const { w, h, stars, nodes, streaks, mouse } = state
      mouse.x += (mouse.tx - mouse.x) * 0.06
      mouse.y += (mouse.ty - mouse.y) * 0.06

      stars.forEach((s) => {
        s.x -= s.z * 0.45
        s.tw += 0.03 * s.z
        if (s.x < -8) {
          s.x = w + 8
          s.y = Math.random() * h
        }
      })

      nodes.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      })

      if (themeRef.current !== 'light') {
        streaks.forEach((st) => {
          st.x -= st.speed
          if (st.x + st.len < 0) {
            st.x = w + st.len
            st.y = Math.random() * h
          }
        })
      }

      draw()
      frame = requestAnimationFrame(step)
    }

    function onMove(e) {
      state.mouse.tx = e.clientX / state.w
      state.mouse.ty = e.clientY / state.h
    }
    function onResize() {
      resize()
      draw()
    }

    resize()
    if (reducedMotion) {
      draw()
    } else {
      frame = requestAnimationFrame(step)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [reducedMotion])

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />
}