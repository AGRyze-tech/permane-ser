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

const programas = [
  {
    title: 'Um Encontro Consigo',
    desc: 'Para quem busca reconectar-se com sua própria identidade e necessidades, num espaço de escuta e autoconhecimento.',
    msg: 'Olá Arlete, gostaria de saber mais sobre o programa "Um Encontro Consigo".',
  },
  {
    title: 'Sua Vida com Mais Propósito',
    desc: 'Para quem sente que o cotidiano perdeu sentido e busca reconstruir direção e motivação para viver.',
    msg: 'Olá Arlete, gostaria de saber mais sobre o programa "Sua Vida com Mais Propósito".',
  },
  {
    title: 'Sendo Mulher e Mãe',
    desc: 'Para mulheres que vivem a maternidade buscando não se perder de si mesmas no processo.',
    msg: 'Olá Arlete, gostaria de saber mais sobre o programa "Sendo Mulher e Mãe".',
  },
]

const etapas = [
  { num: '01', title: 'Primeira conversa', desc: 'Entendemos juntos sua demanda e história.' },
  { num: '02', title: 'Construção do processo', desc: 'Definimos juntos o caminho terapêutico mais adequado.' },
  { num: '03', title: 'Acompanhamento contínuo', desc: 'Sessões regulares com espaço de escuta e desenvolvimento.' },
]

const faqs = [
  {
    q: 'Como funciona a primeira sessão?',
    a: 'A primeira sessão é um espaço de acolhimento e escuta. Conversamos sobre o que te trouxe até aqui, sua história e expectativas. Sem pressão — é um primeiro encontro para que possamos nos conhecer.',
  },
  {
    q: 'Atende presencial ou online?',
    a: 'Ambos — você escolhe o formato mais confortável para você. Os atendimentos online acontecem por videochamada, com a mesma qualidade e acolhimento do presencial.',
  },
  {
    q: 'Qual a diferença entre os programas?',
    a: 'Cada programa tem um foco diferente, pensado para momentos específicos da vida. Na primeira conversa, identificamos juntos qual se encaixa melhor na sua realidade atual.',
  },
  {
    q: 'Quanto tempo dura o processo terapêutico?',
    a: 'O tempo varia de acordo com cada pessoa e demanda. A terapia é um processo singular — o ritmo é construído junto, com respeito ao seu momento.',
  },
  {
    q: 'Qual o valor das sessões?',
    a: 'Os valores são informados na conversa inicial pelo WhatsApp.',
  },
]

export default function AtendimentoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          minHeight: '100svh',
          background: 'var(--bg)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 5rem)',
          padding: '7rem clamp(1.5rem,5vw,4rem) 5rem',
          maxWidth: 1200,
          margin: '0 auto',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={eyebrowStyle}
          >
            ATENDIMENTO PSICOLÓGICO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 6vw, 3.6rem)',
              color: 'var(--text)',
              lineHeight: 1.2,
            }}
          >
            Permanecer sendo quem se é,{' '}
            <em style={{ color: 'var(--terracotta)' }}>mesmo nos momentos mais difíceis.</em>
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
            Psicoterapia individual com Arlete Klauck — TCC, presencial ou online, para quem busca se reconectar consigo mesmo sem abrir mão dos vínculos que importam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', alignItems: 'flex-start' }}
          >
            <a
              href={waLink('Olá Arlete, gostaria de agendar minha sessão de psicoterapia.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: '#fff',
                background: 'var(--green)',
                borderRadius: 6,
                padding: '0.8rem 1.75rem',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              {/* TODO: número WhatsApp + mensagem pré-preenchida */}
              Agendar minha sessão
            </a>
            <span
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                padding: '0.35rem 1rem',
              }}
            >
              TCC · Presencial e Online · 11+ anos de experiência
            </span>
          </motion.div>
        </div>

        {/* Hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            borderRadius: 14,
            overflow: 'hidden',
            aspectRatio: '4/5',
            background: 'var(--bg-alt)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 320,
          }}
        >
          {/* TODO: foto da Arlete em atendimento ou pose profissional */}
          <span style={{ fontFamily: 'var(--font-work-sans)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            [Foto Arlete — Atendimento]
          </span>
        </motion.div>
      </section>

      {/* ===== PROGRAMAS ===== */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={eyebrowStyle}>PROGRAMAS</p>
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
              Cada jornada tem um ponto de partida diferente.
            </h2>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {programas.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 400,
                      fontSize: '1.2rem',
                      color: 'var(--text)',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
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
                    {p.desc}
                  </p>
                  <a
                    href={waLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--terracotta)',
                      textDecoration: 'none',
                    }}
                  >
                    Saber mais →
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={eyebrowStyle}>COMO FUNCIONA</p>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                color: 'var(--text)',
              }}
            >
              Um processo construído junto.
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>
            {etapas.map((e, i) => (
              <FadeIn key={e.num} delay={i * 0.12}>
                <div
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'flex-start',
                    padding: '2rem 0',
                    borderBottom: i < etapas.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 300,
                      fontSize: '2.5rem',
                      color: 'var(--terracotta)',
                      lineHeight: 1,
                      flexShrink: 0,
                      width: 60,
                    }}
                  >
                    {e.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-fraunces)',
                        fontWeight: 400,
                        fontSize: '1.15rem',
                        color: 'var(--text)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {e.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                      }}
                    >
                      {e.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE A ABORDAGEM ===== */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <p style={eyebrowStyle}>A ABORDAGEM</p>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                color: 'var(--text)',
                lineHeight: 1.3,
                marginBottom: '1.5rem',
              }}
            >
              Terapia Cognitivo-Comportamental (TCC)
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '1.0625rem',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
              }}
            >
              Ciência aplicada ao cuidado emocional, com técnicas práticas para lidar com pensamentos, emoções e comportamentos que geram sofrimento. A TCC é uma das abordagens psicológicas com maior evidência científica no mundo — e na prática da Arlete, ela se traduz em acolhimento real, escuta genuína e ferramentas concretas para o seu dia a dia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={eyebrowStyle}>PERGUNTAS FREQUENTES</p>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                color: 'var(--text)',
              }}
            >
              Tire suas dúvidas.
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    overflow: 'hidden',
                    background: 'var(--bg-card)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      padding: '1.25rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: 'var(--text)',
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      style={{
                        color: 'var(--terracotta)',
                        fontSize: '1.25rem',
                        lineHeight: 1,
                        flexShrink: 0,
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.3s',
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? 350 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.8,
                        padding: '0 1.5rem 1.25rem',
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section
        style={{
          background: 'var(--green)',
          padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,5vw,4rem)',
          textAlign: 'center',
        }}
        className="grain-overlay grain-overlay-4"
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
            O primeiro passo para permanecer sendo quem você é.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href={waLink('Olá Arlete, gostaria de agendar minha primeira sessão.')}
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
              transition: 'opacity 0.2s',
            }}
          >
            Agendar minha sessão pelo WhatsApp
          </a>
        </FadeIn>
      </section>
    </>
  )
}
