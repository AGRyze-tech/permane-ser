'use client'
import Link from 'next/link'

export function Footer() {
  return (
    <footer
      style={{
        background: '#14110D',
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 5rem) 0',
        color: 'rgba(255,255,255,0.4)',
        fontFamily: 'var(--font-work-sans)',
        fontSize: '0.8125rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
        }}
      >
        {/* Col 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Permane&apos;Ser
          </span>
          <p style={{ lineHeight: 1.7, maxWidth: 220 }}>
            Ser, ficar e pertencer.
          </p>
          {/* Social icons placeholder */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            {/* TODO: links das redes sociais da Arlete */}
            <a
              href="#"
              aria-label="Instagram"
              style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '0.25rem' }}>Navegue</span>
          {[
            { href: '/atendimento', label: 'Atendimento' },
            { href: '/formacoes', label: 'Formações' },
            { href: '/livros', label: 'Livros' },
            { href: '/sobre', label: 'Sobre' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '0.25rem' }}>Recursos</span>
          {[
            { href: '/livros#biblioteca', label: 'Biblioteca Gratuita' },
            { href: '/livros', label: 'Livros' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Col 4 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '0.25rem' }}>Contato</span>
          <a
            href={`https://wa.me/55?text=${encodeURIComponent('Olá Arlete!')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
          >
            {/* TODO: número de WhatsApp da Arlete */}
            WhatsApp
          </a>
          <a
            href="mailto:contato@permaneSer.com.br"
            style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
          >
            {/* TODO: e-mail oficial */}
            E-mail
          </a>
          <form
            onSubmit={e => e.preventDefault()}
            style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}
          >
            <input
              type="email"
              placeholder="Seu e-mail"
              aria-label="Inscrever-se na newsletter"
              autoComplete="email"
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.8rem',
                outline: 'none',
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: 6,
                border: 'none',
                background: 'var(--terracotta)',
                color: '#fff',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              OK
            </button>
          </form>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <span>© 2026 Permane&apos;Ser — Arlete Klauck</span>
        <span>
          Desenvolvido por{' '}
          <span style={{ color: 'rgba(255,255,255,0.55)' }}>RyzeSystems</span>
        </span>
      </div>
    </footer>
  )
}
