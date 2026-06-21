'use client'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

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
      {/* ===== HERO ===== */}
      <section
        className="grain-overlay"
        style={{
          minHeight: '100svh',
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
          FORMAÇÕES E PALESTRAS
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
            maxWidth: 760,
          }}
        >
          Saúde emocional e desenvolvimento humano — para instituições que querem ir além do óbvio.
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
          Palestras, oficinas e formações para universidades, educadores e empresas.
        </motion.p>

        {/* Tab filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', gap: '0.5rem', marginTop: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {tabs.map(t => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(t.key)}
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.55rem 1.4rem',
                borderRadius: 100,
                border: '1.5px solid',
                borderColor: activeTab === t.key ? 'var(--green)' : 'var(--border)',
                background: activeTab === t.key ? 'var(--green)' : 'transparent',
                color: activeTab === t.key ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ===== TAB CONTENT ===== */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 16,
                }}
              >
                {tabContent[activeTab].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.875rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 400,
                        fontSize: '1.15rem',
                        color: 'var(--text)',
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.75,
                        flex: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    {item.details && (
                      <p
                        style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.7,
                          fontStyle: 'italic',
                        }}
                      >
                        {item.details}
                      </p>
                    )}
                    {item.duration && (
                      <span
                        style={{
                          fontFamily: 'var(--font-work-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--terracotta)',
                          background: 'var(--terracotta-soft)',
                          border: '1px solid var(--terracotta)',
                          borderRadius: 100,
                          padding: '0.3rem 0.9rem',
                          alignSelf: 'flex-start',
                        }}
                      >
                        {item.duration}
                      </span>
                    )}
                    <a
                      href={waLink(item.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#fff',
                        background: 'var(--green)',
                        borderRadius: 6,
                        padding: '0.6rem 1.25rem',
                        textDecoration: 'none',
                        alignSelf: 'flex-start',
                        transition: 'background 0.2s',
                      }}
                    >
                      Solicitar proposta →
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== POR QUE CONTRATAR A ARLETE ===== */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={eyebrowStyle}>POR QUE ARLETE KLAUCK</p>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                color: 'var(--text)',
                maxWidth: 600,
                margin: '0 auto',
                lineHeight: 1.3,
              }}
            >
              O que diferencia este trabalho.
            </h2>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {diferenciais.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div
                  style={{
                    background: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <span style={{ color: 'var(--terracotta)' }}>
                    <d.icon />
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 400,
                      fontSize: '1.1rem',
                      color: 'var(--text)',
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.75,
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
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
            Leve essa reflexão para sua instituição.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              marginTop: '1.25rem',
            }}
          >
            Entre em contato e receba uma proposta personalizada.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a
            href={waLink('Olá Arlete, gostaria de solicitar uma proposta de formação para minha instituição.')}
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: 'none',
            }}
          >
            Solicitar proposta pelo WhatsApp
          </a>
        </FadeIn>
      </section>
    </>
  )
}

/* ---- Icons ---- */
function ScienceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </svg>
  )
}

function ExperienceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IntegrativeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
