'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const WA_BASE = 'https://wa.me/55' // TODO: número de WhatsApp da Arlete

function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-fraunces)',
  fontStyle: 'italic',
  fontSize: '0.875rem',
  color: 'var(--terracotta)',
  letterSpacing: '0.08em',
  marginBottom: '1rem',
}

const sectionPad: React.CSSProperties = {
  padding: 'clamp(4rem,10vw,7rem) clamp(1.5rem,5vw,4rem)',
}

function FadeIn({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 20 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const livros = [
  {
    title: 'Imagem Corporal',
    subtitle: 'Identificando e reestruturando distorções',
    price: 'R$ 89,00',
    available: true,
    msg: 'Olá Arlete, gostaria de comprar o livro "Imagem Corporal: Identificando e reestruturando distorções".',
  },
  {
    title: 'Baralho dos Pensamentos Automáticos Negativos',
    subtitle: 'Promovendo a reestruturação cognitiva',
    price: 'R$ 213,00',
    available: true,
    msg: 'Olá Arlete, gostaria de comprar o "Baralho dos Pensamentos Automáticos Negativos".',
  },
  {
    title: 'Sobre Existir',
    subtitle: 'Para se acolher, se cuidar e seguir',
    price: 'R$ 68,00',
    available: true,
    msg: 'Olá Arlete, gostaria de comprar o livro "Sobre Existir".',
  },
  {
    title: 'Ser & Amar',
    subtitle: 'O desafio de permanecer fiel a si mesmo sem abrir mão dos vínculos',
    price: 'Em desenvolvimento',
    available: false,
    msg: '',
  },
]

const materiais = [
  {
    title: 'Inventário de Autoconhecimento',
    type: 'PDF',
    desc: 'Reflexões guiadas para compreender seus padrões, valores e necessidades.',
  },
  {
    title: 'Escala de Bem-Estar Emocional',
    type: 'PDF',
    desc: 'Um instrumento de autoanálise para mapear seu estado emocional atual.',
  },
  {
    title: 'Exercício: Identificando Vínculos que Sustentam',
    type: 'PDF',
    desc: 'Uma prática reflexiva para reconhecer as relações que nutrem sua identidade.',
  },
]

export default function LivrosPage() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitted(true)
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="grain-overlay"
        style={{
          minHeight: '60svh',
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7rem clamp(1.5rem,5vw,4rem) 5rem',
          textAlign: 'center',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={eyebrowStyle}
        >
          LIVROS E RECURSOS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
            color: 'var(--text)',
            lineHeight: 1.25,
            maxWidth: 720,
          }}
        >
          Palavras que ajudam a permanecer sendo quem você é.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            marginTop: '1.5rem',
            maxWidth: 520,
          }}
        >
          Livros, baralhos terapêuticos e materiais clínicos de Arlete Klauck.
        </motion.p>
      </section>

      {/* ===== LIVROS GRID ===== */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={eyebrowStyle}>PUBLICAÇÕES</p>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                color: 'var(--text)',
              }}
            >
              Obras de Arlete Klauck
            </h2>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {livros.map((livro, i) => (
              <FadeIn key={livro.title} delay={i * 0.08}>
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    opacity: livro.available ? 1 : 0.75,
                  }}
                >
                  {/* Cover placeholder */}
                  <div
                    style={{
                      aspectRatio: '3/4',
                      background: 'var(--bg-alt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* TODO: capa do livro */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    {!livro.available && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: '#fff',
                          background: 'var(--text-muted)',
                          borderRadius: 100,
                          padding: '0.2rem 0.7rem',
                        }}
                      >
                        Em breve
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div
                    style={{
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 400,
                        fontSize: '1rem',
                        color: 'var(--text)',
                        lineHeight: 1.3,
                      }}
                    >
                      {livro.title}
                    </h3>
                    {livro.subtitle && (
                      <p
                        style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        {livro.subtitle}
                      </p>
                    )}
                    <span
                      style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 400,
                        fontSize: '1.05rem',
                        color: livro.available ? 'var(--terracotta)' : 'var(--text-muted)',
                        marginTop: 'auto',
                        paddingTop: '0.5rem',
                      }}
                    >
                      {livro.price}
                    </span>
                    {livro.available ? (
                      <a
                        href={waLink(livro.msg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: '0.75rem',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: '#fff',
                          background: 'var(--green)',
                          borderRadius: 6,
                          padding: '0.55rem 1rem',
                          textDecoration: 'none',
                          textAlign: 'center',
                          transition: 'background 0.2s',
                        }}
                      >
                        {/* TODO: confirmar fluxo de venda — checkout próprio ou link externo */}
                        Comprar
                      </a>
                    ) : (
                      <button
                        disabled
                        style={{
                          marginTop: '0.75rem',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          background: 'var(--bg-alt)',
                          border: '1px solid var(--border)',
                          borderRadius: 6,
                          padding: '0.55rem 1rem',
                          cursor: 'not-allowed',
                        }}
                      >
                        Em breve
                      </button>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BIBLIOTECA GRATUITA ===== */}
      <section
        id="biblioteca"
        style={{ background: 'var(--bg)', ...sectionPad }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={eyebrowStyle}>BIBLIOTECA PERMANE&apos;SER — GRATUITO</p>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                color: 'var(--text)',
                lineHeight: 1.3,
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              Materiais para você começar agora, sem custo.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginTop: '1rem',
              }}
            >
              Inventários, escalas e exercícios de autoconhecimento — para download gratuito.
            </p>
          </FadeIn>

          {/* Lead magnet form or unlocked materials */}
          {!submitted ? (
            <FadeIn delay={0.1}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  maxWidth: 560,
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontWeight: 400,
                    fontSize: '1.3rem',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Acesse gratuitamente
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1.75rem',
                  }}
                >
                  Informe seu nome e e-mail para liberar os materiais gratuitos da Biblioteca Permane&apos;Ser.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <label
                      htmlFor="lib-name"
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                      }}
                    >
                      Nome <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                    </label>
                    <input
                      id="lib-name"
                      type="text"
                      placeholder="Ex: Ana Silva"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      autoComplete="name"
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: 8,
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text)',
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <label
                      htmlFor="lib-email"
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                      }}
                    >
                      E-mail <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                    </label>
                    <input
                      id="lib-email"
                      type="email"
                      placeholder="Ex: ana@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: 8,
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text)',
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      padding: '0.8rem 1.5rem',
                      borderRadius: 8,
                      border: 'none',
                      background: 'var(--green)',
                      color: '#fff',
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                      marginTop: '0.25rem',
                    }}
                  >
                    Quero acesso gratuito
                  </button>
                  <p
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.25rem',
                    }}
                  >
                    Sem spam. Apenas conteúdo relevante.
                  </p>
                </form>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '1rem',
                    color: 'var(--terracotta)',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontWeight: 500,
                  }}
                >
                  Acesso liberado, {name.split(' ')[0]}!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {materiais.map((m) => (
                    <div
                      key={m.title}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 10,
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'var(--terracotta)',
                          background: 'var(--terracotta-soft)',
                          border: '1px solid var(--terracotta)',
                          borderRadius: 4,
                          padding: '0.2rem 0.6rem',
                          flexShrink: 0,
                        }}
                      >
                        {m.type}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: 'var(--font-work-sans)', fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text)' }}>
                          {m.title}
                        </p>
                        <p style={{ fontFamily: 'var(--font-work-sans)', fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          {m.desc}
                        </p>
                      </div>
                      {/* TODO: link real do arquivo para download */}
                      <button
                        disabled
                        style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          background: 'var(--bg-alt)',
                          border: '1px solid var(--border)',
                          borderRadius: 6,
                          padding: '0.45rem 1rem',
                          cursor: 'not-allowed',
                          flexShrink: 0,
                        }}
                      >
                        Em breve
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section
        className="grain-overlay grain-overlay-4"
        style={{
          background: 'var(--green)',
          padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,5vw,4rem)',
          textAlign: 'center',
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: '#fff',
              lineHeight: 1.25,
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            Continue essa jornada com a leitura certa.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <button
            onClick={() => {
              document.getElementById('biblioteca')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-block',
              marginTop: '2.5rem',
              fontFamily: 'var(--font-work-sans)',
              fontWeight: 500,
              fontSize: '0.9375rem',
              color: 'var(--green)',
              background: '#fff',
              borderRadius: 6,
              padding: '0.8rem 2rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Ver biblioteca gratuita
          </button>
        </FadeIn>
      </section>
    </>
  )
}
