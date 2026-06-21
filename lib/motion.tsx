'use client'
import { motion, useReducedMotion } from 'framer-motion'

export const E: [number, number, number, number] = [0.32, 0.72, 0, 1]

const HIDDEN        = { opacity: 0, y: 28, filter: 'blur(4px)' }
const HIDDEN_MOBILE = { opacity: 0, y: 20 }
const VISIBLE        = { opacity: 1, y: 0, filter: 'blur(0px)' }
const VISIBLE_MOBILE = { opacity: 1, y: 0 }
const EMPTY = {}

const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

export const eyebrow: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'var(--terracotta-soft)',
  border: '1px solid var(--terracotta-border)',
  borderRadius: 9999,
  padding: '0.325rem 1rem',
  fontFamily: 'var(--font-work-sans)',
  fontSize: '0.6875rem',
  fontWeight: 500,
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
  color: 'var(--terracotta)',
  marginBottom: '1.75rem',
}

const dotStyle: React.CSSProperties = {
  width: 5,
  height: 5,
  borderRadius: '50%',
  background: 'var(--terracotta)',
  flexShrink: 0,
}

export const Dot = () => <span style={dotStyle} />

export const sectionPad: React.CSSProperties = {
  padding: 'clamp(3rem,10vw,9rem) clamp(1.5rem,5vw,4rem)',
}

export function FadeIn({
  children,
  delay = 0,
  style,
  className,
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}) {
  const reduced = useReducedMotion()
  const h = isMobile ? HIDDEN_MOBILE : HIDDEN
  const v = isMobile ? VISIBLE_MOBILE : VISIBLE
  return (
    <motion.div
      className={className}
      initial={reduced ? EMPTY : h}
      whileInView={reduced ? EMPTY : v}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.85, delay, ease: E }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export const WA_BASE = 'https://wa.me/55' // TODO: número de WhatsApp da Arlete
export function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}
