'use client'
import { motion, useReducedMotion } from 'framer-motion'

const WA_BASE = 'https://wa.me/55' // TODO: número de WhatsApp da Arlete
function waLink(msg: string) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}

const E: [number, number, number, number] = [0.32, 0.72, 0, 1]

const eyebrow: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'var(--terracotta-soft)',
  border: '1px solid rgba(192,133,82,0.28)',
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

const Dot = () => (
  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--terracotta)', flexShrink: 0 }} />
)

const sectionPad: React.CSSProperties = {
  padding: 'clamp(3rem,10vw,9rem) clamp(1.5rem,5vw,4rem)',
}

function FadeIn({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={reduced ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.85, delay, ease: E }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const formacoes = [
  { year: '2012', label: 'Graduação em Psicologia' },
  { year: '2013', label: 'Especialização em Terapia Cognitivo-Comportamental' },
  { year: '2015', label: 'Especialização em Avaliação Psicológica' },
  { year: '2019', label: 'Especialização em Terapia do Esquema' },
  { year: '2024', label: 'Especialização em Diagnóstico e Intervenção em TDAH' },
]

export default function SobrePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="grain-overlay"
        style={{
          minHeight: '100svh',
          background: 'var(--bg)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          alignItems: 'center',
          gap: 'clamp(3rem,6vw,5rem)',
          padding: '7rem clamp(1.5rem,5vw,5rem) clamp(2.5rem,6vw,5rem)',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Text column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: E }}
            style={{ display: 'inline-flex' }}
          >
            <span style={eyebrow}><Dot /> Sobre Arlete Klauck</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.12, ease: E }}
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
              color: 'var(--text)',
              lineHeight: 1.2,
            }}
          >
            Psicóloga — CRP 07/19888
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: 0.28, ease: E }}
            style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
              marginTop: '1.5rem',
              maxWidth: 480,
            }}
          >
            Mais de 11 anos dedicados à saúde emocional, ao autoconhecimento e ao desenvolvimento humano. Meu trabalho nasce da convicção de que existir com autenticidade é possível — e que às vezes precisamos de suporte para isso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.44, ease: E }}
            style={{ display: 'flex', gap: '0.75rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
          >
            {/* Button-in-button CTA — atendimento */}
            <a
              href="/atendimento"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#fff',
                background: 'var(--green)',
                borderRadius: 9999,
                padding: '0.5rem 0.5rem 0.5rem 1.75rem',
                textDecoration: 'none',
                transition: `background 0.35s cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              Atendimento
              <span style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1rem',
              }}>→</span>
            </a>

            {/* Ghost secondary CTA */}
            <a
              href={waLink('Olá Arlete, gostaria de conhecer melhor o seu trabalho.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--text)',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: 9999,
                padding: '0.5rem 1.5rem',
                textDecoration: 'none',
                transition: `border-color 0.3s cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Photo — double-bezel frame */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.18, ease: E }}
          style={{ position: 'relative', maxWidth: 420, margin: '0 auto', width: '100%' }}
        >
          {/* Green ambient glow */}
          <div style={{
            position: 'absolute',
            inset: '-12%',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(31,59,44,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
          {/* Outer shell */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            background: 'rgba(31,59,44,0.07)',
            border: '1px solid rgba(31,59,44,0.12)',
            borderRadius: '2rem',
            padding: 8,
            boxShadow: '0 24px 60px -12px rgba(31,59,44,0.12)',
          }}>
            {/* Inner core */}
            <div
              className="photo-hero-inner"
              style={{
                borderRadius: 'calc(2rem - 8px)',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.7)',
                background: 'var(--bg-alt)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* TODO: foto profissional de Arlete */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ TRAJETÓRIA ═════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <FadeIn>
            <span style={eyebrow}><Dot /> Trajetória</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
            }}>
              Uma construção contínua.
            </h2>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
              maxWidth: 640,
              marginBottom: '3.5rem',
            }}>
              Ao longo de mais de uma década, tenho integrado diferentes perspectivas — da TCC à Terapia do Esquema, da avaliação psicológica ao TDAH — para oferecer um atendimento cada vez mais completo e humano.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {formacoes.map((f, i) => (
              <FadeIn key={f.year} delay={i * 0.07}>
                {/* Double-bezel timeline card */}
                <div style={{
                  background: 'rgba(192,133,82,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: '1.5rem',
                  padding: 5,
                }}>
                  <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'calc(1.5rem - 5px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
                    padding: '1.125rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      color: 'var(--terracotta)',
                      minWidth: 44,
                      flexShrink: 0,
                    }}>{f.year}</span>
                    <div style={{
                      width: 1,
                      alignSelf: 'stretch',
                      background: 'var(--border)',
                      flexShrink: 0,
                    }} />
                    <p style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.9375rem',
                      color: 'var(--text)',
                      lineHeight: 1.5,
                    }}>{f.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABORDAGEM CLÍNICA ══════════════════════════ */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'center',
        }}>
          <FadeIn>
            <span style={eyebrow}><Dot /> Abordagem Clínica</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
            }}>
              Integração como princípio.
            </h2>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
            }}>
              A Terapia Cognitivo-Comportamental forma a espinha dorsal do meu trabalho — com protocolos baseados em evidências e uma visão de que pensamentos, emoções e comportamentos se influenciam mutuamente.
            </p>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
              marginTop: '1rem',
            }}>
              A isso se somam elementos da Terapia do Esquema, da neurociência e de uma perspectiva filosófica sobre o existir — que acredita que o ser humano não se reduz a diagnósticos.
            </p>
          </FadeIn>

          {/* Large pull-quote — decorative */}
          <FadeIn delay={0.1}>
            <div style={{ position: 'relative', padding: 'clamp(2rem, 4vw, 3rem)' }}>
              {/* Decorative quotation mark */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 'clamp(6rem, 15vw, 10rem)',
                  lineHeight: 1,
                  color: 'var(--border)',
                  opacity: 0.6,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >&ldquo;</span>
              {/* Double-bezel quote card */}
              <div style={{
                background: 'rgba(31,59,44,0.05)',
                border: '1px solid var(--border)',
                borderRadius: '2rem',
                padding: 6,
                marginTop: '2.5rem',
              }}>
                <div style={{
                  background: 'var(--bg-alt)',
                  borderRadius: 'calc(2rem - 6px)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.75)',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                    color: 'var(--text)',
                    lineHeight: 1.6,
                  }}>
                    Existir com autenticidade não é um destino — é uma prática cotidiana de se conhecer e permanecer fiel a si mesmo.
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    marginTop: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}>
                    — Arlete Klauck
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FRENTES DE ATUAÇÃO ═════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Frentes de Atuação</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
            }}>
              Onde este trabalho acontece.
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 12,
          }}>
            {[
              { label: 'Clínica Particular', desc: 'Atendimento individual online e presencial' },
              { label: 'Publicações', desc: 'Livros e ferramentas clínicas para profissionais e pacientes' },
              { label: 'Formações', desc: 'Palestras e workshops para universidades e empresas' },
              { label: 'Conteúdo Digital', desc: 'Psicoeducação com profundidade e acessibilidade' },
            ].map((f, i) => (
              <FadeIn key={f.label} delay={i * 0.07}>
                <div style={{
                  background: 'rgba(31,59,44,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: '1.5rem',
                  padding: 5,
                  height: '100%',
                }}>
                  <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'calc(1.5rem - 5px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
                    padding: '1.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 400,
                      fontSize: '1rem',
                      color: 'var(--text)',
                    }}>{f.label}</h3>
                    <p style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                    }}>{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
            maxWidth: 580,
            margin: '0 auto',
          }}>
            Pronto para começar?
          </h2>
          <p style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '1.25rem',
          }}>
            Escolha como prefere dar o primeiro passo.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            {/* Button-in-button CTA — atendimento */}
            <a
              href="/atendimento"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: 'var(--green)',
                background: '#fff',
                borderRadius: 9999,
                padding: '0.5rem 0.5rem 0.5rem 1.75rem',
                textDecoration: 'none',
                transition: `opacity 0.3s cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              Atendimento clínico
              <span style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: 'rgba(31,59,44,0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1rem',
              }}>→</span>
            </a>

            {/* Button-in-button CTA — livros */}
            <a
              href="/livros"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: '#fff',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 9999,
                padding: '0.5rem 0.5rem 0.5rem 1.75rem',
                textDecoration: 'none',
                transition: `background 0.3s cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              Ver publicações
              <span style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1rem',
              }}>→</span>
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
