'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/atendimento', label: 'Atendimento' },
  { href: '/formacoes', label: 'Formações' },
  { href: '/livros', label: 'Livros' },
  { href: '/sobre', label: 'Sobre' },
]

const E = 'cubic-bezier(0.32, 0.72, 0, 1)'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ─── Floating island pill ─────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          borderRadius: 9999,
          background: 'var(--nav-pill-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--nav-pill-border)',
          padding: '0.375rem',
          boxShadow: 'var(--nav-pill-shadow)',
          whiteSpace: 'nowrap',
          maxWidth: 'calc(100vw - 2rem)',
          transition: `box-shadow 0.5s ${E}`,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '1.0625rem',
            color: 'var(--green)',
            textDecoration: 'none',
            padding: '0.3rem 0.875rem',
            borderRadius: 9999,
            flexShrink: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {/* TODO: inserir logo oficial */}
          Permane&apos;Ser
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ width: 1, height: 14, background: 'var(--border)', marginRight: '0.375rem', flexShrink: 0 }} />
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.8125rem',
                fontWeight: pathname === l.href ? 500 : 400,
                color: pathname === l.href ? 'var(--terracotta)' : 'var(--text-muted)',
                textDecoration: 'none',
                padding: '0.3rem 0.725rem',
                borderRadius: 9999,
                background: pathname === l.href ? 'var(--terracotta-soft)' : 'transparent',
                transition: `color 0.3s ${E}, background 0.3s ${E}`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <span style={{ width: 1, height: 14, background: 'var(--border)', marginLeft: '0.375rem', flexShrink: 0 }} />
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <ThemeToggle />

          {/* CTA — desktop only, button-in-button */}
          <a
            href={`https://wa.me/55?text=${encodeURIComponent('Olá Arlete, gostaria de agendar uma conversa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontFamily: 'var(--font-work-sans)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#fff',
              background: 'var(--green)',
              borderRadius: 9999,
              padding: '0.4rem 0.4rem 0.4rem 1rem',
              textDecoration: 'none',
              transition: `background 0.4s ${E}`,
            }}
          >
            {/* TODO: número de WhatsApp da Arlete */}
            Agendar
            <span style={{
              width: 26, height: 26,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              flexShrink: 0,
              transition: `transform 0.4s ${E}`,
            }}>
              →
            </span>
          </a>

          {/* Hamburger — mobile only, morphs to X */}
          <button
            type="button"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="nav-hamburger"
            style={{
              width: 44, height: 44,
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Top bar → first diagonal */}
            <span style={{
              position: 'absolute',
              width: 15, height: 1.5,
              background: 'var(--text)',
              borderRadius: 2,
              transform: menuOpen
                ? 'translateY(0) rotate(45deg)'
                : 'translateY(-3.5px) rotate(0deg)',
              transition: `transform 0.45s ${E}`,
            }} />
            {/* Bottom bar → second diagonal */}
            <span style={{
              position: 'absolute',
              width: 15, height: 1.5,
              background: 'var(--text)',
              borderRadius: 2,
              transform: menuOpen
                ? 'translateY(0) rotate(-45deg)'
                : 'translateY(3.5px) rotate(0deg)',
              transition: `transform 0.45s ${E}`,
            }} />
          </button>
        </div>
      </nav>

      {/* ─── Full-screen cinematic overlay ────────────────── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--menu-overlay-bg)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: `opacity 0.45s ${E}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '7rem 2.5rem 4rem',
        }}
      >
        <div style={{ maxWidth: 520 }}>
          {/* Staggered mask reveals */}
          {links.map((l, i) => (
            <div
              key={l.href}
              style={{ overflow: 'hidden', marginBottom: '0.0625rem' }}
            >
              <Link
                href={l.href}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 400,
                  fontSize: 'clamp(2.25rem, 10vw, 4rem)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  lineHeight: 1.1,
                  paddingBottom: '0.875rem',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '0.875rem',
                  transform: menuOpen ? 'translateY(0)' : 'translateY(110%)',
                  opacity: menuOpen ? 1 : 0,
                  transition: `transform 0.65s ${E} ${i * 0.08}s, opacity 0.4s ease ${i * 0.08}s`,
                }}
              >
                <span>{l.label}</span>
                <span style={{
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  color: 'var(--terracotta)',
                  fontFamily: 'var(--font-fraunces)',
                }}>
                  ↗
                </span>
              </Link>
            </div>
          ))}

          {/* CTA in overlay — button-in-button pill */}
          <div style={{
            marginTop: '2.5rem',
            transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
            opacity: menuOpen ? 1 : 0,
            transition: `transform 0.65s ${E} 0.38s, opacity 0.4s ease 0.38s`,
          }}>
            <a
              href={`https://wa.me/55?text=${encodeURIComponent('Olá Arlete, gostaria de agendar uma conversa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#fff',
                background: 'var(--green)',
                borderRadius: 9999,
                padding: '0.6rem 0.6rem 0.6rem 1.625rem',
                textDecoration: 'none',
              }}
            >
              Agendar uma conversa
              <span style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta          { display: none !important; }
        }
      `}</style>
    </>
  )
}
