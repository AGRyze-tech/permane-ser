'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-fraunces)',
  fontStyle: 'italic',
  fontSize: '0.875rem',
  color: 'var(--terracotta)',
  letterSpacing: '0.08em',
  marginBottom: '1rem',
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

export default function SobrePage() {
  return (
    <>
      <section
        style={{
          minHeight: '100svh',
          background: 'var(--bg)',
          padding: '7.5rem clamp(1.5rem,5vw,4rem) 6rem',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem,6vw,5rem)',
            alignItems: 'center',
          }}
        >
          {/* Photo */}
          <FadeIn>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '-2rem',
                  background: 'var(--green-soft)',
                  borderRadius: '50%',
                  filter: 'blur(50px)',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  borderRadius: 14,
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  background: 'var(--bg-alt)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 360,
                }}
              >
                {/* TODO: foto profissional da Arlete */}
                <span style={{ fontFamily: 'var(--font-work-sans)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  [Foto Arlete]
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <FadeIn>
              <p style={eyebrowStyle}>ARLETE KLAUCK</p>
              <h1
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  color: 'var(--text)',
                  lineHeight: 1.25,
                  marginTop: '0.5rem',
                }}
              >
                Psicóloga clínica, administradora e escritora.
              </h1>
            </FadeIn>

            {[
              'Arlete Klauck é psicóloga clínica, administradora e escritora, com mais de 11 anos de experiência em atendimento psicológico. Especialista em Terapia Cognitivo-Comportamental (TCC), dedica-se ao estudo dos vínculos humanos, da identidade, do pertencimento e dos desafios da existência contemporânea.',
              'É autora do livro Sobre Existir e idealizadora do Permane\'Ser — um espaço dedicado à reflexão sobre identidade, cuidado, relacionamentos, saúde mental e desenvolvimento humano.',
              'Sua atuação integra psicologia, filosofia, biologia e sociologia para compreender questões fundamentais da experiência humana, sempre a partir de uma abordagem que une rigor científico e profunda humanidade.',
            ].map((para, i) => (
              <FadeIn key={i} delay={(i + 1) * 0.1}>
                <p
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.85,
                  }}
                >
                  {para}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={0.4}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {['TCC', '11+ anos de experiência', 'Autora', 'Idealizadora do Permane\'Ser'].map(chip => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.8125rem',
                      color: 'var(--terracotta)',
                      background: 'var(--terracotta-soft)',
                      border: '1px solid var(--terracotta)',
                      borderRadius: 100,
                      padding: '0.3rem 0.9rem',
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Link
                  href="/atendimento"
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#fff',
                    background: 'var(--green)',
                    borderRadius: 6,
                    padding: '0.7rem 1.4rem',
                    textDecoration: 'none',
                  }}
                >
                  Agendar atendimento
                </Link>
                <Link
                  href="/livros"
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--green)',
                    border: '1.5px solid var(--green)',
                    borderRadius: 6,
                    padding: '0.7rem 1.4rem',
                    textDecoration: 'none',
                  }}
                >
                  Ver livros
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
