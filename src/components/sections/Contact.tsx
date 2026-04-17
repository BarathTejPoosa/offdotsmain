import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { LIME } from '../../data/constants'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-36" style={{ background: '#080808' }}>
      {/* Lime radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(202,255,0,0.07) 0%, transparent 70%)' }}
      />
      {/* Lime dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(202,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 75%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p
          className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider mb-8 px-4 py-1.5 rounded-full border"
          style={{ borderColor: 'rgba(202,255,0,0.2)', background: 'rgba(202,255,0,0.06)', color: 'rgba(202,255,0,0.7)' }}
        >
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: LIME }} />
          AVAILABLE FOR NEW PROJECTS
        </p>

        <h2
          id="contact-heading"
          className="font-black text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}
        >
          Ready to go<br />
          <span style={{ color: LIME }}>off-script?</span>
        </h2>

        <p className="text-lg mb-12 leading-relaxed max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Let's build something the world hasn't seen yet.
        </p>

        <div className="flex justify-center">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] group"
            style={{ background: LIME, color: '#080808' }}
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
