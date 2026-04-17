import { ArrowRight } from 'lucide-react'
import { LIME } from '../../data/constants'
import { aboutStats } from '../../data/content'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: LIME }}>
            The Studio
          </p>
          <h2 id="about-heading" className="font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
            Built for the<br />
            <span style={{ color: LIME }}>unconventional.</span>
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Offdots was born from a simple frustration too many brands looking the same, sounding the same, playing it safe. We're the studio for founders and teams who are done with that.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
            We bring obsessive craft to every engagement from the first strategy session to final pixel. No templates. No playbooks. Just sharp thinking and bold execution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:opacity-85"
            style={{ background: LIME, color: '#0C0C0C' }}
          >
            Work With Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {aboutStats.map(s => (
            <div
              key={s.label}
              className="rounded-2xl p-7 transition-all duration-200"
              style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(202,255,0,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
            >
              <div className="text-4xl font-black mb-2" style={{ color: LIME }}>{s.num}</div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
