'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { E, eyebrow, Dot, sectionPad, FadeIn } from '../../lib/motion'

const livros = [
  {
    title: 'Sobre Existir',
    subtitle: 'Para se acolher, se cuidar e seguir',
    cover: '/livros/sobre-existir.jpg',
    available: true,
    comingSoon: false,
    amazonLink: 'https://www.amazon.com.br/s?k=Sobre+Existir+Arlete+Klauck', // TODO: link direto do produto
    secondLabel: 'Uiclap',
    secondLink: 'https://loja.uiclap.com/titulo/ua412113', // TODO: confirmar link
  },
  {
    title: 'Ser & Amar',
    subtitle: 'O desafio de permanecer fiel a si mesmo sem abrir mão dos vínculos',
    cover: '',
    available: false,
    comingSoon: false,
    amazonLink: '',
    secondLabel: '',
    secondLink: '',
  },
  {
    title: 'Baralho dos Pensamentos Automáticos Negativos',
    subtitle: 'Promovendo a reestruturação cognitiva — Editora Sinopsys',
    cover: '/livros/baralho-pensamentos.jpg',
    available: true,
    comingSoon: false,
    amazonLink: 'https://a.co/d/01gpDDnQ',
    secondLabel: 'Sinopsys',
    secondLink: 'https://sinopsyseditora.com.br', // TODO: link direto do produto na Sinopsys
  },
  {
    title: 'Baralho dos Esquemas Emocionais',
    subtitle: 'Regulação Emocional na Prática Clínica — Editora Artesã',
    cover: '',
    available: false,
    comingSoon: true,
    amazonLink: '',
    secondLabel: '',
    secondLink: '',
  },
  {
    title: 'Imagem Corporal',
    subtitle: 'Identificando e reestruturando distorções',
    cover: '/livros/imagem-corporal.jpg',
    available: true,
    comingSoon: false,
    amazonLink: 'https://www.amazon.com.br/s?k=Imagem+Corporal+Arlete+Klauck', // TODO: link direto do produto
    secondLabel: 'Rick Jogos',
    secondLink: 'https://rickjogos.com.br', // TODO: link direto do produto na Rick Jogos
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
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  function validateField(field: 'name' | 'email', value: string) {
    if (field === 'name' && !value.trim()) return 'Por favor, informe seu nome.'
    if (field === 'email') {
      if (!value.trim()) return 'Por favor, informe seu e-mail.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Informe um e-mail válido.'
    }
    return undefined
  }

  function handleBlur(field: 'name' | 'email', value: string) {
    const error = validateField(field, value)
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nameErr = validateField('name', name)
    const emailErr = validateField('email', email)
    if (nameErr || emailErr) {
      setErrors({ name: nameErr, email: emailErr })
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="grain-overlay"
        style={{
          minHeight: '60svh',
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7rem clamp(1.5rem,5vw,4rem) clamp(2.5rem,6vw,5rem)',
          textAlign: 'center',
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: E }}
          style={{ display: 'inline-flex' }}
        >
          <span style={eyebrow}><Dot /> Livros e Recursos</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: E }}
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
            color: 'var(--text)',
            lineHeight: 1.2,
            maxWidth: 720,
          }}
        >
          Palavras que ajudam a permanecer sendo quem você é.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: E }}
          style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.85,
            marginTop: '1.5rem',
            maxWidth: 520,
          }}
        >
          Livros, baralhos terapêuticos e materiais clínicos de Arlete Klauck.
        </motion.p>
      </section>

      {/* ═══ LIVROS GRID ════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Publicações</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
            }}>
              Obras de Arlete Klauck
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 16,
          }}>
            {livros.map((livro, i) => (
              <FadeIn key={livro.title} delay={i * 0.08}>
                {/* Double-bezel book card */}
                <div style={{
                  background: livro.available ? 'rgba(192,133,82,0.05)' : 'rgba(138,117,96,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  padding: 6,
                  height: '100%',
                  opacity: livro.available ? 1 : 0.8,
                }}>
                  <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'calc(2rem - 6px)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.85)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}>
                    {/* Cover area */}
                    <div style={{
                      aspectRatio: '3/4',
                      background: 'var(--bg-alt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {livro.cover ? (
                        <Image
                          src={livro.cover}
                          alt={`Capa — ${livro.title}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 640px) 100vw, 280px"
                        />
                      ) : (
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      )}
                      {!livro.available && (
                        <span style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: '#fff',
                          background: 'var(--text-muted)',
                          borderRadius: 9999,
                          padding: '0.2rem 0.7rem',
                        }}>Em breve</span>
                      )}
                    </div>

                    {/* Info */}
                    <div style={{
                      padding: '1.375rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      flex: 1,
                    }}>
                      <h3 style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'var(--text)',
                        lineHeight: 1.3,
                      }}>{livro.title}</h3>
                      {livro.subtitle && (
                        <p style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                        }}>{livro.subtitle}</p>
                      )}

                      {livro.available ? (
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '0.75rem', flexWrap: 'wrap' }}>
                          <a
                            href={livro.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontFamily: 'var(--font-work-sans)',
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                              color: '#fff',
                              background: 'var(--green)',
                              borderRadius: 9999,
                              padding: '0.35rem 0.35rem 0.35rem 0.875rem',
                              textDecoration: 'none',
                              transition: `background 0.3s cubic-bezier(0.32,0.72,0,1)`,
                            }}
                          >
                            Amazon
                            <span style={{
                              width: 22, height: 22,
                              borderRadius: '50%',
                              background: 'rgba(255,255,255,0.18)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              fontSize: '0.7rem',
                            }}>↗</span>
                          </a>
                          {livro.secondLink && (
                            <a
                              href={livro.secondLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.3rem',
                                fontFamily: 'var(--font-work-sans)',
                                fontSize: '0.8125rem',
                                fontWeight: 500,
                                color: 'var(--terracotta)',
                                background: 'var(--terracotta-soft)',
                                border: '1px solid var(--terracotta-border)',
                                borderRadius: 9999,
                                padding: '0.35rem 0.35rem 0.35rem 0.875rem',
                                textDecoration: 'none',
                                transition: `background 0.3s cubic-bezier(0.32,0.72,0,1)`,
                              }}
                            >
                              {livro.secondLabel}
                              <span style={{
                                width: 22, height: 22,
                                borderRadius: '50%',
                                background: 'rgba(201,146,94,0.15)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                fontSize: '0.7rem',
                              }}>↗</span>
                            </a>
                          )}
                        </div>
                      ) : livro.comingSoon ? (
                        <span style={{
                          marginTop: 'auto',
                          paddingTop: '0.75rem',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--terracotta)',
                          fontWeight: 500,
                        }}>Em publicação — em breve nas livrarias</span>
                      ) : (
                        <button
                          disabled
                          style={{
                            marginTop: 'auto',
                            paddingTop: '0.75rem',
                            fontFamily: 'var(--font-work-sans)',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            background: 'var(--bg-alt)',
                            border: '1px solid var(--border)',
                            borderRadius: 9999,
                            padding: '0.55rem 1rem',
                            cursor: 'not-allowed',
                            opacity: 0.6,
                          }}
                        >Em desenvolvimento</button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BIBLIOTECA GRATUITA ════════════════════════ */}
      <section id="biblioteca" style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Biblioteca Permane&apos;Ser — Gratuito</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
              lineHeight: 1.25,
              maxWidth: 580,
              margin: '0 auto',
            }}>
              Materiais para você começar agora, sem custo.
            </h2>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginTop: '1rem',
            }}>
              Inventários, escalas e exercícios de autoconhecimento — para download gratuito.
            </p>
          </FadeIn>

          {!submitted ? (
            <FadeIn delay={0.1}>
              {/* Double-bezel form card */}
              <div style={{
                background: 'rgba(192,133,82,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '2rem',
                padding: 6,
                maxWidth: 560,
                margin: '0 auto',
              }}>
                <div style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'calc(2rem - 6px)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.85)',
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  textAlign: 'center',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: '1.35rem',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                  }}>Acesse gratuitamente</h3>
                  <p style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '1.75rem',
                  }}>
                    Informe seu nome e e-mail para liberar os materiais gratuitos da Biblioteca Permane&apos;Ser.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', textAlign: 'left' }}>
                      <label htmlFor="lib-name" style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                      }}>
                        Nome <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                      </label>
                      <input
                        id="lib-name"
                        type="text"
                        placeholder="Ex: Ana Silva"
                        value={name}
                        onChange={e => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })) }}
                        onBlur={e => handleBlur('name', e.target.value)}
                        required
                        autoComplete="name"
                        aria-describedby={errors.name ? 'lib-name-error' : undefined}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: 10,
                          border: errors.name ? '1px solid #c0392b' : '1px solid var(--border)',
                          background: 'var(--bg)',
                          color: 'var(--text)',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.9375rem',
                        }}
                      />
                      {errors.name && (
                        <span id="lib-name-error" role="alert" style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8rem',
                          color: '#c0392b',
                          marginTop: '0.1rem',
                        }}>{errors.name}</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', textAlign: 'left' }}>
                      <label htmlFor="lib-email" style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                      }}>
                        E-mail <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>*</span>
                      </label>
                      <input
                        id="lib-email"
                        type="email"
                        placeholder="Ex: ana@email.com"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })) }}
                        onBlur={e => handleBlur('email', e.target.value)}
                        required
                        autoComplete="email"
                        aria-describedby={errors.email ? 'lib-email-error' : undefined}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: 10,
                          border: errors.email ? '1px solid #c0392b' : '1px solid var(--border)',
                          background: 'var(--bg)',
                          color: 'var(--text)',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.9375rem',
                        }}
                      />
                      {errors.email && (
                        <span id="lib-email-error" role="alert" style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8rem',
                          color: '#c0392b',
                          marginTop: '0.1rem',
                        }}>{errors.email}</span>
                      )}
                    </div>
                    {/* Button-in-button submit */}
                    <button
                      type="submit"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.375rem',
                        marginTop: '0.25rem',
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: '#fff',
                        background: 'var(--green)',
                        borderRadius: 9999,
                        padding: '0.5rem 0.5rem 0.5rem 1.625rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: `background 0.3s cubic-bezier(0.32,0.72,0,1)`,
                      }}
                    >
                      Quero acesso gratuito
                      <span style={{
                        width: 36, height: 36,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.18)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '1rem',
                      }}>→</span>
                    </button>
                    <p style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.25rem',
                    }}>Sem spam. Apenas conteúdo relevante.</p>
                  </form>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div role="status" aria-live="polite" style={{ maxWidth: 680, margin: '0 auto' }}>
                <p style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: '1rem',
                  color: 'var(--terracotta)',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  fontWeight: 500,
                }}>
                  Acesso liberado, {name.split(' ')[0]}!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {materiais.map((m) => (
                    /* Double-bezel material card */
                    <div key={m.title} style={{
                      background: 'rgba(192,133,82,0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: '1.5rem',
                      padding: 5,
                    }}>
                      <div style={{
                        background: 'var(--bg-card)',
                        borderRadius: 'calc(1.5rem - 5px)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'var(--terracotta)',
                          background: 'var(--terracotta-soft)',
                          border: '1px solid rgba(192,133,82,0.3)',
                          borderRadius: 4,
                          padding: '0.2rem 0.6rem',
                          flexShrink: 0,
                        }}>{m.type}</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.9375rem', fontWeight: 400, color: 'var(--text)' }}>
                            {m.title}
                          </p>
                          <p style={{ fontFamily: 'var(--font-work-sans)', fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: 1.6 }}>
                            {m.desc}
                          </p>
                        </div>
                        {/* TODO: link real do arquivo */}
                        <button disabled style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          background: 'var(--bg-alt)',
                          border: '1px solid var(--border)',
                          borderRadius: 9999,
                          padding: '0.4rem 1rem',
                          cursor: 'not-allowed',
                          flexShrink: 0,
                          opacity: 0.6,
                        }}>Em breve</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ═══ CTA FINAL ═══════════════════════════════════ */}
      <section
        className="grain-overlay grain-overlay-4"
        style={{
          background: 'var(--green)',
          padding: 'clamp(3rem,10vw,9rem) clamp(1.5rem,5vw,4rem)',
          textAlign: 'center',
        }}
      >
        <FadeIn>
          <h2 style={{
            fontFamily: 'var(--font-fraunces)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            color: '#fff',
            lineHeight: 1.2,
            maxWidth: 620,
            margin: '0 auto',
          }}>
            Continue essa jornada com a leitura certa.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <button
            onClick={() => {
              document.getElementById('biblioteca')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              marginTop: '3rem',
              fontFamily: 'var(--font-work-sans)',
              fontWeight: 500,
              fontSize: '0.9375rem',
              color: 'var(--green)',
              background: '#fff',
              borderRadius: 9999,
              padding: '0.5rem 0.5rem 0.5rem 1.75rem',
              border: 'none',
              cursor: 'pointer',
              transition: `opacity 0.3s cubic-bezier(0.32,0.72,0,1)`,
            }}
          >
            Ver biblioteca gratuita
            <span style={{
              width: 38, height: 38,
              borderRadius: '50%',
              background: 'rgba(31,59,44,0.12)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1rem',
            }}>↓</span>
          </button>
        </FadeIn>
      </section>
    </>
  )
}
