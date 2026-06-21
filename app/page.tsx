'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { E, eyebrow, sectionPad, FadeIn } from '../lib/motion'

/* ── Data ─────────────────────────────────────────────── */
const heroLines = [
  '"Como permanecer sendo',
  'quem somos numa época que',
  'nos convida a performar,',
  'competir, agradar e nos adaptar?"',
]

const dirCards = [
  { icon: HeartIcon, label: 'Quero terapia', href: '/atendimento' },
  { icon: DiplomaIcon, label: 'Sou de uma universidade', href: '/formacoes' },
  { icon: PeopleIcon, label: 'Quero formar minha equipe', href: '/formacoes' },
  { icon: BookIcon, label: 'Quero livros e recursos', href: '/livros' },
]

const frentes = [
  {
    num: '01',
    title: 'Atendimento Psicológico',
    desc: 'Psicoterapia individual, online ou presencial, com escuta acolhedora e abordagem científica.',
    href: '/atendimento',
    className: 'frente-bento-1',
  },
  {
    num: '02',
    title: 'Formações',
    desc: 'Palestras e oficinas para universidades, educadores e empresas sobre saúde emocional e desenvolvimento humano.',
    href: '/formacoes',
    className: 'frente-bento-2',
  },
  {
    num: '03',
    title: 'Livros e Recursos',
    desc: 'Livros, baralhos terapêuticos e materiais clínicos para profissionais e leitores.',
    href: '/livros',
    className: 'frente-bento-3',
  },
  {
    num: '04',
    title: 'Biblioteca Gratuita',
    desc: 'Materiais, inventários, escalas e exercícios gratuitos para autoconhecimento.',
    href: '/livros#biblioteca',
    className: 'frente-bento-4',
  },
]

/* ── Page ─────────────────────────────────────────────── */
export default function HomePage() {
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
        {/* Eyebrow pill */}
        <motion.span
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: E }}
          style={eyebrow}
        >
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--terracotta)', flexShrink: 0 }} />
          Psicologia · Identidade · Pertencimento
        </motion.span>

        {/* Headline — line-by-line with blur */}
        <h1
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 400,
            fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
            color: 'var(--text)',
            lineHeight: 1.18,
            maxWidth: 820,
            margin: '0 auto',
          }}
        >
          {heroLines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.12 + i * 0.16, ease: E }}
              style={{ display: 'block' }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.85, ease: E }}
          style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'var(--text-muted)',
            maxWidth: 520,
            margin: '2rem auto 0',
            lineHeight: 1.8,
          }}
        >
          Ser, ficar e pertencer. Um espaço para permanecer sendo quem se é — sem abrir mão dos vínculos que dão sentido à vida.
        </motion.p>

        {/* Direction cards — 2×2 double-bezel grid */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.05, ease: E }}
          className="dir-cards-grid"
          style={{
            gap: 10,
            margin: '3rem auto 0',
            width: 'min(100%, 680px)',
          }}
        >
          {dirCards.map(({ icon: Icon, label, href }) => (
            <DirCard key={href + label} Icon={Icon} label={label} href={href} />
          ))}
        </motion.div>
      </section>

      {/* ═══ O CONCEITO ══════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          {/* Decorative large quotation mark */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-3rem',
              left: '-1.5rem',
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(6rem, 15vw, 12rem)',
              fontWeight: 300,
              color: 'var(--border)',
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              opacity: 0.7,
            }}
          >
            &#8220;
          </span>

          <FadeIn>
            <span style={eyebrow}>O conceito</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                color: 'var(--text)',
                lineHeight: 1.68,
                position: 'relative',
              }}
            >
              O conceito Permane&apos;Ser nasceu da busca por uma pergunta essencial — como permanecer sendo quem somos em uma época que nos convida constantemente a performar, competir, agradar, aparecer e nos adaptar?
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '1.0625rem',
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                marginTop: '1.75rem',
              }}
            >
              É um convite à reflexão sobre existência, vínculos, identidade, pertencimento e cuidado. Um lugar dedicado ao desenvolvimento humano sem que seja necessário abrir mão de quem somos ou dos vínculos que dão sentido à vida.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SOBRE ARLETE ════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 7vw, 6rem)',
            alignItems: 'center',
          }}
        >
          {/* Photo — double-bezel frame */}
          <FadeIn>
            <div
              style={{
                /* Outer shell */
                background: 'rgba(31,59,44,0.07)',
                borderRadius: '2rem',
                padding: 8,
                border: '1px solid var(--green-soft)',
                boxShadow: '0 24px 80px rgba(31,59,44,0.1)',
                position: 'relative',
              }}
            >
              {/* Green ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-3rem',
                  background: 'var(--green-soft)',
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
              {/* Inner core */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: 'calc(2rem - 8px)',
                  overflow: 'hidden',
                  background: 'var(--bg-alt)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="photo-hero-inner"
              >
                {/* TODO: foto profissional da Arlete */}
                <span style={{ fontFamily: 'var(--font-work-sans)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  [Foto Arlete]
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <FadeIn>
              <span style={eyebrow}>Sobre Arlete</span>
              <h2
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
                  color: 'var(--text)',
                  lineHeight: 1.25,
                  marginTop: '0.625rem',
                }}
              >
                Psicóloga clínica, administradora e escritora.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p style={{ fontFamily: 'var(--font-work-sans)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
                Arlete Klauck é psicóloga clínica, administradora e escritora, com mais de 11 anos de experiência em atendimento psicológico. Especialista em Terapia Cognitivo-Comportamental (TCC), dedica-se ao estudo dos vínculos humanos, da identidade, do pertencimento e dos desafios da existência contemporânea.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p style={{ fontFamily: 'var(--font-work-sans)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
                É autora do livro <em>Sobre Existir</em> e idealizadora do Permane&apos;Ser. Sua atuação integra psicologia, filosofia, biologia e sociologia para compreender questões fundamentais da experiência humana.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['TCC', '11+ anos', 'Autora', 'Idealizadora'].map(chip => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.8125rem',
                      color: 'var(--terracotta)',
                      background: 'var(--terracotta-soft)',
                      border: '1px solid rgba(192,133,82,0.25)',
                      borderRadius: 9999,
                      padding: '0.325rem 0.9rem',
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              {/* Button-in-button CTA */}
              <Link
                href="/atendimento"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--green)',
                  border: '1.5px solid var(--green)',
                  borderRadius: 9999,
                  padding: '0.55rem 0.55rem 0.55rem 1.375rem',
                  textDecoration: 'none',
                  transition: `background 0.4s cubic-bezier(0.32,0.72,0,1), color 0.4s cubic-bezier(0.32,0.72,0,1)`,
                  marginTop: '0.25rem',
                  alignSelf: 'flex-start',
                }}
              >
                Conhecer o trabalho da Arlete
                <span style={{
                  width: 30, height: 30,
                  borderRadius: '50%',
                  background: 'var(--green-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  flexShrink: 0,
                }}>
                  →
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ AS 4 FRENTES — Bento grid ═══════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={eyebrow}>Onde você se encaixa</span>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 400,
                fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
                color: 'var(--text)',
                lineHeight: 1.25,
                maxWidth: 600,
                margin: '0.625rem auto 0',
              }}
            >
              Permane&apos;Ser para cada momento e cada propósito.
            </h2>
          </FadeIn>

          <div className="grid-frentes">
            {frentes.map((f, i) => (
              <FadeIn key={f.num} delay={i * 0.07} className={f.className}>
                <FrenteCard {...f} />
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
          padding: 'clamp(3.5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)',
          textAlign: 'center',
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.9rem, 5.5vw, 3.2rem)',
              color: '#fff',
              lineHeight: 1.2,
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            Permanecer sendo quem se é começa com um passo.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '1.25rem',
            }}
          >
            Escolha o caminho que faz sentido para você agora.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            {/* Primary — button-in-button pill */}
            <Link
              href="/atendimento"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: 'var(--green)',
                background: '#fff',
                borderRadius: 9999,
                padding: '0.6rem 0.6rem 0.6rem 1.5rem',
                textDecoration: 'none',
              }}
            >
              Quero terapia
              <span style={{
                width: 34, height: 34,
                borderRadius: '50%',
                background: 'var(--green-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                flexShrink: 0,
              }}>
                →
              </span>
            </Link>

            {/* Secondary — outline pill */}
            <Link
              href="/formacoes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                color: '#fff',
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.45)',
                borderRadius: 9999,
                padding: '0.6rem 0.6rem 0.6rem 1.5rem',
                textDecoration: 'none',
              }}
            >
              Quero saber sobre formações
              <span style={{
                width: 34, height: 34,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                flexShrink: 0,
              }}>
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}

/* ── Direction card — double-bezel ──────────────────────── */
function DirCard({ Icon, label, href }: { Icon: React.FC; label: string; href: string }) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        background: 'rgba(192,133,82,0.06)',
        border: '1px solid var(--border)',
        borderRadius: '1.5rem',
        padding: 5,
        textDecoration: 'none',
        transition: `transform 0.25s cubic-bezier(0.32,0.72,0,1), border-color 0.25s ease, box-shadow 0.25s ease`,
        boxShadow: '0 2px 12px rgba(42,33,24,0.04)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = 'translateY(-3px)'
        el.style.borderColor = 'rgba(192,133,82,0.5)'
        el.style.boxShadow = '0 10px 32px rgba(42,33,24,0.09)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = '0 2px 12px rgba(42,33,24,0.04)'
      }}
    >
      {/* Inner core */}
      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: 'calc(1.5rem - 5px)',
          padding: '1.125rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
      >
        <span style={{ color: 'var(--terracotta)', flexShrink: 0 }}>
          <Icon />
        </span>
        <span style={{
          flex: 1,
          fontFamily: 'var(--font-work-sans)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--text)',
          textAlign: 'left',
        }}>
          {label}
        </span>
        {/* Trailing nested icon circle */}
        <span style={{
          width: 28, height: 28,
          borderRadius: '50%',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          flexShrink: 0,
          background: 'var(--bg)',
        }}>
          →
        </span>
      </div>
    </Link>
  )
}

/* ── Frente card — double-bezel + bento ─────────────────── */
function FrenteCard({
  num, title, desc, href,
}: {
  num: string; title: string; desc: string; href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        /* Outer shell */
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'rgba(227,211,190,0.28)',
        border: '1px solid var(--border)',
        borderRadius: '2rem',
        padding: 6,
        textDecoration: 'none',
        boxShadow: '0 2px 20px rgba(42,33,24,0.045)',
        transition: `transform 0.25s cubic-bezier(0.32,0.72,0,1), border-color 0.25s ease, box-shadow 0.25s ease`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = 'translateY(-4px)'
        el.style.borderColor = 'rgba(192,133,82,0.45)'
        el.style.boxShadow = '0 16px 48px rgba(42,33,24,0.12)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = '0 2px 20px rgba(42,33,24,0.045)'
      }}
    >
      {/* Inner core */}
      <div
        style={{
          flex: 1,
          background: 'var(--bg-card)',
          borderRadius: 'calc(2rem - 6px)',
          padding: '2rem',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.85)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
        }}
      >
        {/* Decorative number — large ghost */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-2rem',
            right: '0.75rem',
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 300,
            fontSize: '8rem',
            color: 'var(--bg-alt)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {num}
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 400,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
            color: 'var(--text)',
            lineHeight: 1.3,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {desc}
        </p>

        {/* Micro button-in-button CTA */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            marginTop: '0.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-work-sans)',
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'var(--terracotta)',
          }}>
            Saiba mais
          </span>
          <span style={{
            width: 22, height: 22,
            borderRadius: '50%',
            background: 'var(--terracotta-soft)',
            border: '1px solid rgba(192,133,82,0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.65rem',
            color: 'var(--terracotta)',
          }}>
            →
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ── Icons — ultra-light SVG ─────────────────────────────── */
function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function DiplomaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}
