import { useState } from 'react'
import { LIME } from '../../data/constants'
import { services } from '../../data/content'

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services" aria-labelledby="services-heading" className="py-28" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: LIME }}>
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-black text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}
          >
            How we go off the dots.
          </h2>
          <p className="max-w-sm mx-auto text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Four disciplines. One obsession: making you unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ Icon, title, desc }, i) => (
            <article
              key={i}
              className="rounded-2xl p-7 transition-all duration-300 cursor-default"
              style={{
                background: hoveredService === i ? '#1a1a1a' : '#161616',
                border: hoveredService === i ? `1px solid rgba(202,255,0,0.2)` : '1px solid rgba(255,255,255,0.07)',
                transform: hoveredService === i ? 'translateY(-3px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div aria-hidden="true" className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(202,255,0,0.1)' }}>
                <Icon className="w-5 h-5" style={{ color: LIME }} />
              </div>
              <h3 className="font-bold text-lg mb-2 transition-colors duration-200" style={{ color: hoveredService === i ? LIME : '#fff' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
