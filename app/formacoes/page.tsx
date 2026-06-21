'use client'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { E, eyebrow, Dot, sectionPad, FadeIn, waLink } from '../../lib/motion'

type TabKey = 'universidades' | 'educadores' | 'empresas'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'universidades', label: 'Universidades' },
  { key: 'educadores', label: 'Educadores' },
  { key: 'empresas', label: 'Empresas' },
]

const tabContent: Record<TabKey, { title: string; desc: string; details?: string; duration?: string; msg: string }[]> = {
  universidades: [
    {
      title: 'Palestra: Sobre Existir na vida acadêmica',
      desc: 'Uma palestra reflexiva sobre identidade, autocuidado, saúde emocional e pertencimento no contexto universitário. Conteúdo ideal para eventos de acolhimento e desenvolvimento profissional discente.',
      duration: '60–90 min · Presencial ou online',
      msg: 'Olá Arlete, gostaria de solicitar proposta para a palestra "Sobre Existir na vida acadêmica".',
    },
    {
      title: 'Seminário Vivencial: Sobre Existir — Entre aprender e se sustentar',
      desc: 'Espaço de aprofundamento que integra psicoeducação, reflexão e práticas vivenciais para fortalecer a consciência emocional e o pertencimento dos participantes.',
      duration: 'Sob demanda',
      msg: 'Olá Arlete, gostaria de solicitar proposta para o seminário vivencial "Sobre Existir — Entre aprender e se sustentar".',
    },
    {
      title: 'Oficina Vivencial: Sobre Existir e Permanecer em si',
      desc: 'Experiência prática e reflexiva voltada ao desenvolvimento pessoal e fortalecimento de recursos emocionais. Inclui exercícios vivenciais, rodas de conversa e convite à autorreflexão.',
      duration: 'Data e horário a definir',
      msg: 'Olá Arlete, gostaria de solicitar proposta para a oficina vivencial "Sobre Existir e Permanecer em si".',
    },
  ],
  educadores: [
    {
      title: 'Formação para Educadores',
      desc: 'Capacitação voltada para professores e equipes pedagógicas, com foco em saúde emocional, identidade docente e desenvolvimento humano em contexto educacional.',
      details: 'Conteúdo programático adaptado à realidade de cada instituição. Formatos presencial e online disponíveis.',
      msg: 'Olá Arlete, gostaria de solicitar proposta para a formação para educadores.',
    },
  ],
  empresas: [
    {
      title: 'Formação em Saúde Emocional e Desenvolvimento Humano',
      desc: 'Programas corporativos voltados para saúde mental, inteligência emocional e fortalecimento de equipes — adaptados à realidade e aos desafios de cada organização.',
      details: 'Conteúdo desenhado em parceria com a equipe de RH ou liderança. Formato workshop, treinamento ou palestra.',
      msg: 'Olá Arlete, gostaria de solicitar proposta de formação corporativa.',
    },
  ],
}

const diferenciais = [
  {
    title: 'Base científica',
    desc: 'TCC e formação acadêmica sólida — conteúdo com evidência e rigor sem perder a acessibilidade.',
    icon: ScienceIcon,
  },
  {
    title: 'Experiência real',
    desc: '11+ anos de atuação clínica que se traduzem em exemplos, linguagem e profundidade genuína.',
    icon: ExperienceIcon,
  },
  {
    title: 'Abordagem integrativa',
    desc: 'Psicologia + filosofia + biologia + sociologia para compreender o ser humano além do rótulo.',
    icon: IntegrativeIcon,
  },
]

export default function FormacoesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('universidades')
  const reduced = useReducedMotion()

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="grain-overlay"
        style={{
          minHeight: '100svh',
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
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: E }}
          style={{ display: 'inline-flex' }}
        >
          <span style={eyebrow}><Dot /> Formações e Palestras</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.12, ease: E }}
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
            color: 'var(--text)',
            lineHeight: 1.2,
            maxWidth: 760,
          }}
        >
          Saúde emocional e desenvolvimento humano — para instituições que querem ir além do óbvio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
          Palestras, oficinas e formações para universidades, educadores e empresas.
        </motion.p>

        {/* Tab filters */}
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.44, ease: E }}
          style={{ display: 'flex', gap: '0.5rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {/* Tab filter pill wrapper — double-bezel container */}
          <div
            role="tablist"
            aria-label="Público-alvo"
            style={{
              display: 'flex',
              gap: '0.375rem',
              background: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              borderRadius: 9999,
              padding: '0.3rem',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {tabs.map(t => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={activeTab === t.key ? 'true' : 'false'}
                aria-controls={`tabpanel-${t.key}`}
                id={`tab-${t.key}`}
                onClick={() => setActiveTab(t.key)}
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  padding: '0.475rem 1.25rem',
                  borderRadius: 9999,
                  border: 'none',
                  background: activeTab === t.key ? 'var(--green)' : 'transparent',
                  color: activeTab === t.key ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: `background 0.35s cubic-bezier(0.32,0.72,0,1), color 0.35s cubic-bezier(0.32,0.72,0,1)`,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ TAB CONTENT ════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              role="tabpanel"
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              initial={reduced ? {} : { opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reduced ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: E }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 16,
              }}>
                {tabContent[activeTab].map((item) => (
                  /* Double-bezel card */
                  <div
                    key={item.title}
                    style={{
                      background: 'rgba(192,133,82,0.05)',
                      border: '1px solid var(--border)',
                      borderRadius: '2rem',
                      padding: 6,
                    }}
                  >
                    <div style={{
                      background: 'var(--bg-card)',
                      borderRadius: 'calc(2rem - 6px)',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.85)',
                      padding: '2.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      height: '100%',
                    }}>
                      <h3 style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: '1.2rem',
                        color: 'var(--text)',
                        lineHeight: 1.35,
                      }}>{item.title}</h3>
                      <p style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.8,
                        flex: 1,
                      }}>{item.desc}</p>
                      {item.details && (
                        <p style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.7,
                          fontStyle: 'italic',
                        }}>{item.details}</p>
                      )}
                      {item.duration && (
                        <span style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--terracotta)',
                          background: 'var(--terracotta-soft)',
                          border: '1px solid rgba(192,133,82,0.3)',
                          borderRadius: 9999,
                          padding: '0.3rem 0.9rem',
                          alignSelf: 'flex-start',
                        }}>{item.duration}</span>
                      )}
                      {/* Button-in-button CTA */}
                      <a
                        href={waLink(item.msg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: '#fff',
                          background: 'var(--green)',
                          borderRadius: 9999,
                          padding: '0.4rem 0.4rem 0.4rem 1.25rem',
                          textDecoration: 'none',
                          alignSelf: 'flex-start',
                          transition: `background 0.35s cubic-bezier(0.32,0.72,0,1)`,
                        }}
                      >
                        Solicitar proposta
                        <span style={{
                          width: 28, height: 28,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.18)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '0.85rem',
                        }}>→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ POR QUE ARLETE KLAUCK ══════════════════════ */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Por que Arlete Klauck</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
              maxWidth: 580,
              margin: '0 auto',
              lineHeight: 1.25,
            }}>
              O que diferencia este trabalho.
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {diferenciais.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                {/* Double-bezel card */}
                <div style={{
                  background: 'rgba(31,59,44,0.05)',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  padding: 6,
                  height: '100%',
                }}>
                  <div style={{
                    background: 'var(--bg-alt)',
                    borderRadius: 'calc(2rem - 6px)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.75)',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    height: '100%',
                  }}>
                    {/* Icon in premium circle */}
                    <div style={{
                      width: 52, height: 52,
                      borderRadius: '50%',
                      background: 'var(--terracotta-soft)',
                      border: '1px solid rgba(192,133,82,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--terracotta)',
                      flexShrink: 0,
                    }}>
                      <d.icon />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 400,
                      fontSize: '1.15rem',
                      color: 'var(--text)',
                    }}>{d.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.8,
                    }}>{d.desc}</p>
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
            maxWidth: 620,
            margin: '0 auto',
          }}>
            Leve essa reflexão para sua instituição.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '1.25rem',
          }}>
            Entre em contato e receba uma proposta personalizada.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a
            href={waLink('Olá Arlete, gostaria de solicitar uma proposta de formação para minha instituição.')}
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: 'none',
              transition: `opacity 0.3s cubic-bezier(0.32,0.72,0,1)`,
            }}
          >
            Solicitar proposta
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
        </FadeIn>
      </section>
    </>
  )
}

/* ── Icons ────────────────────────────────────────────── */
function ScienceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  )
}

function ExperienceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IntegrativeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
