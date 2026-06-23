'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { E, eyebrow, Dot, sectionPad, FadeIn, waLink } from '../../lib/motion'

const clinicaFotos: { src: string; alt: string }[] = [
  { src: '/clinica/clinica-05.jpg', alt: 'Clínica Divã — recepção' },
  { src: '/clinica/clinica-06.jpg', alt: 'Clínica Divã — sala de atendimento' },
  { src: '/clinica/clinica-08.jpg', alt: 'Clínica Divã — sala terapêutica' },
  { src: '/clinica/clinica-09.jpg', alt: 'Clínica Divã — espaço de atendimento' },
]

const programas = [
  {
    num: '01',
    title: 'Um Encontro Consigo',
    desc: 'Para quem busca reconectar-se com sua própria identidade e necessidades, num espaço de escuta e autoconhecimento.',
    free: true,
    msg: 'Olá Arlete, gostaria de saber mais sobre o programa em grupo "Um Encontro Consigo".',
  },
  {
    num: '02',
    title: 'Sua Vida com Mais Propósito',
    desc: 'Para quem sente que o cotidiano perdeu sentido e busca reconstruir direção e motivação para viver.',
    free: false,
    msg: 'Olá Arlete, gostaria de saber mais sobre o programa em grupo "Sua Vida com Mais Propósito".',
  },
  {
    num: '03',
    title: 'Sendo Mulher e Mãe',
    desc: 'Para mulheres que vivem a maternidade buscando não se perder de si mesmas no processo.',
    free: false,
    msg: 'Olá Arlete, gostaria de saber mais sobre o programa em grupo "Sendo Mulher e Mãe".',
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
    q: 'O que são os Programas em Grupo?',
    a: 'São programas com início e fim determinados, inspirados no livro Sobre Existir. Diferente da terapia de grupo, eles funcionam como uma imersão coletiva — com foco em autoconhecimento, pertencimento e vínculos. Cada programa tem um tema diferente. Um deles é gratuito.',
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
      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section
        className="grain-overlay"
        style={{
          minHeight: '100svh',
          background: 'var(--bg)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          alignItems: 'center',
          gap: 'clamp(2rem, 6vw, 5rem)',
          padding: '7rem clamp(1.5rem,5vw,4rem) clamp(2.5rem,6vw,5rem)',
          maxWidth: 1200,
          margin: '0 auto',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: E }}
            style={{ display: 'inline-flex' }}
          >
            <span style={eyebrow}><Dot /> Atendimento Psicológico</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.12, ease: E }}
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 6vw, 3.6rem)',
              color: 'var(--text)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            Permanecer sendo quem se é,{' '}
            <em style={{ color: 'var(--terracotta)', fontStyle: 'normal' }}>mesmo nos momentos mais difíceis.</em>
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
              maxWidth: 520,
            }}
          >
            Psicoterapia individual com Arlete Klauck — TCC, presencial ou online, para quem busca se reconectar consigo mesmo sem abrir mão dos vínculos que importam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.44, ease: E }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem', alignItems: 'flex-start' }}
          >
            {/* Button-in-button pill CTA */}
            <a
              href={waLink('Olá Arlete, gostaria de agendar minha sessão de psicoterapia.')}
              target="_blank"
              rel="noopener noreferrer"
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
                padding: '0.5rem 0.5rem 0.5rem 1.625rem',
                textDecoration: 'none',
                transition: `background 0.4s cubic-bezier(0.32,0.72,0,1)`,
              }}
            >
              Agendar minha sessão
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
            </a>
            <span style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              borderRadius: 9999,
              padding: '0.35rem 1rem',
            }}>
              TCC · Presencial e Online · 11+ anos de experiência
            </span>
          </motion.div>
        </div>

        {/* Hero photo — double-bezel frame */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: E }}
        >
          <div style={{
            background: 'rgba(31,59,44,0.07)',
            border: '1px solid rgba(31,59,44,0.12)',
            borderRadius: '2rem',
            padding: 8,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-2rem',
              background: 'var(--green-soft)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'relative',
              borderRadius: 'calc(2rem - 8px)',
              overflow: 'hidden',
              background: 'var(--bg-alt)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6)',
            }}
            className="photo-hero-inner"
            >
              {/* TODO: foto profissional da Arlete — atendimento */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ PROGRAMAS ═══════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Programas em Grupo</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
              lineHeight: 1.25,
              maxWidth: 560,
              margin: '0 auto',
            }}>
              Cada jornada tem um ponto de partida diferente.
            </h2>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '0.9375rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '1.25rem auto 0',
            }}>
              Programas com início e fim determinados, inspirados no livro <em>Sobre Existir</em>. São encontros em grupo — não são terapia de grupo — com foco em autoconhecimento, vínculos e pertencimento.
            </p>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {programas.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                {/* Double-bezel outer shell */}
                <div style={{
                  background: 'rgba(192,133,82,0.05)',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  padding: 6,
                  height: '100%',
                }}>
                  {/* Inner core */}
                  <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'calc(2rem - 6px)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.85)',
                    padding: '2.25rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: '-1.5rem',
                      right: '1.25rem',
                      fontFamily: 'var(--font-fraunces)',
                      fontStyle: 'italic',
                      fontSize: '7rem',
                      color: 'var(--bg-alt)',
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none' as const,
                    }}>{p.num}</span>
                    {p.free && (
                      <span style={{
                        alignSelf: 'flex-start',
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--green)',
                        background: 'rgba(31,59,44,0.1)',
                        border: '1px solid rgba(31,59,44,0.2)',
                        borderRadius: 9999,
                        padding: '0.2rem 0.75rem',
                        position: 'relative',
                      }}>Gratuito</span>
                    )}
                    <h3 style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      color: 'var(--text)',
                      lineHeight: 1.3,
                      position: 'relative',
                    }}>{p.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.9375rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.8,
                      flex: 1,
                      position: 'relative',
                    }}>{p.desc}</p>
                    <a
                      href={waLink(p.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: 'var(--terracotta)',
                        textDecoration: 'none',
                        position: 'relative',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Saber mais
                      <span style={{
                        width: 22, height: 22,
                        borderRadius: '50%',
                        background: 'var(--terracotta-soft)',
                        border: '1px solid rgba(192,133,82,0.3)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        flexShrink: 0,
                      }}>↗</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMO FUNCIONA ═══════════════════════════════ */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Como Funciona</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
            }}>
              Um processo construído junto.
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {etapas.map((e, i) => (
              <FadeIn key={e.num} delay={i * 0.12}>
                <div style={{
                  display: 'flex',
                  gap: '2.5rem',
                  alignItems: 'flex-start',
                  padding: '2.5rem 0',
                  borderBottom: i < etapas.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '3rem',
                    color: 'var(--terracotta)',
                    lineHeight: 1,
                    flexShrink: 0,
                    width: 64,
                    opacity: 0.6,
                  }}>{e.num}</span>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 400,
                      fontSize: '1.2rem',
                      color: 'var(--text)',
                      marginBottom: '0.5rem',
                    }}>{e.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '0.9375rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.8,
                    }}>{e.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLÍNICA DIVÃ ════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: '3rem' }}>
            <span style={eyebrow}><Dot /> Atendimento Presencial</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
              color: 'var(--text)',
              lineHeight: 1.25,
              maxWidth: 560,
            }}>
              Clínica Divã — um espaço pensado para você.
            </h2>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              maxWidth: 560,
              marginTop: '1rem',
            }}>
              Um ambiente acolhedor e reservado para os atendimentos presenciais de Arlete Klauck.
            </p>
          </FadeIn>

          {clinicaFotos.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 12,
            }}>
              {clinicaFotos.map((foto, i) => (
                <FadeIn key={foto.src} delay={i * 0.08}>
                  <div style={{
                    background: 'rgba(31,59,44,0.05)',
                    border: '1px solid var(--border)',
                    borderRadius: '2rem',
                    padding: 6,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      borderRadius: 'calc(2rem - 6px)',
                      overflow: 'hidden',
                      aspectRatio: '4/3',
                      position: 'relative',
                    }}>
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            /* Placeholder enquanto as fotos não chegam */
            <FadeIn>
              <div style={{
                background: 'rgba(31,59,44,0.04)',
                border: '1px dashed var(--border)',
                borderRadius: '2rem',
                padding: '3rem 2rem',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                }}>
                  Fotos da clínica em breve.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ═══ A ABORDAGEM ═════════════════════════════════ */}
      <section style={{ background: 'var(--bg-alt)', ...sectionPad }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <span style={{
            position: 'absolute',
            top: '-3rem',
            left: '-1rem',
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(6rem,15vw,12rem)',
            color: 'var(--border)',
            opacity: 0.6,
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none' as const,
          }}>&ldquo;</span>
          <FadeIn>
            <span style={eyebrow}><Dot /> A Abordagem</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
              color: 'var(--text)',
              lineHeight: 1.3,
              marginBottom: '1.75rem',
              position: 'relative',
            }}>
              Terapia Cognitivo-Comportamental (TCC)
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: '1.0625rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
              position: 'relative',
            }}>
              Ciência aplicada ao cuidado emocional, com técnicas práticas para lidar com pensamentos, emoções e comportamentos que geram sofrimento. A TCC é uma das abordagens psicológicas com maior evidência científica no mundo — e na prática da Arlete, ela se traduz em acolhimento real, escuta genuína e ferramentas concretas para o seu dia a dia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FAQ ═════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg)', ...sectionPad }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={eyebrow}><Dot /> Perguntas Frequentes</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
              color: 'var(--text)',
            }}>
              Tire suas dúvidas.
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                {/* Double-bezel accordion */}
                <div style={{
                  background: openFaq === i ? 'rgba(192,133,82,0.04)' : 'rgba(192,133,82,0.02)',
                  border: `1px solid ${openFaq === i ? 'rgba(192,133,82,0.35)' : 'var(--border)'}`,
                  borderRadius: '1.5rem',
                  padding: 5,
                  transition: `border-color 0.35s cubic-bezier(0.32,0.72,0,1), background 0.35s cubic-bezier(0.32,0.72,0,1)`,
                }}>
                  <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'calc(1.5rem - 5px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
                    overflow: 'hidden',
                  }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        padding: '1.375rem 1.625rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: 'var(--text)',
                      }}>{f.q}</span>
                      <span style={{
                        width: 28, height: 28,
                        borderRadius: '50%',
                        background: 'var(--terracotta-soft)',
                        border: '1px solid rgba(192,133,82,0.3)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--terracotta)',
                        fontSize: '1rem',
                        lineHeight: 1,
                        flexShrink: 0,
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                        transition: `transform 0.4s cubic-bezier(0.32,0.72,0,1)`,
                      }}>+</span>
                    </button>
                    <div style={{
                      maxHeight: openFaq === i ? 350 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.32,0.72,0,1)',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.85,
                        padding: '0 1.625rem 1.5rem',
                      }}>{f.a}</p>
                    </div>
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
            O primeiro passo para permanecer sendo quem você é.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href={waLink('Olá Arlete, gostaria de agendar minha primeira sessão.')}
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
            Agendar minha sessão
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
