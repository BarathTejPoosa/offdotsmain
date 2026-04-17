import { ArrowRight } from 'lucide-react'
import { LIME } from '../../data/constants'
import { galleryRow1, galleryRow2, galleryRow3 } from '../../data/content'
import { GalleryRow } from '../shared/GalleryRow'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Offdots — creative studio"
      className="relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Lime ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(202,255,0,0.1) 0%, transparent 70%)` }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 20%, black 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 20%, black 10%, transparent 70%)',
        }}
      />

      {/* Text block — deliberately minimal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-36 pb-12">
        <p
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: 'rgba(202,255,0,0.6)' }}
        >
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: LIME }} />
          Creative Studio
        </p>

        <h1
          className="font-black text-white leading-[1.0] tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
        >
          We go off<br />
          <span style={{ color: LIME }}>the dots.</span>
        </h1>

        <p
          className="text-lg mb-8 max-w-sm mx-auto"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          For brands that refuse to look like everyone else.
        </p>

        <a
          href="#work"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-85 hover:scale-[1.02] group"
          style={{ background: LIME, color: '#080808' }}
        >
          See Our Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </a>
      </div>

      {/* Scrolling gallery */}
      <div aria-hidden="true" className="relative z-10 flex flex-col gap-2 pb-0">
        <GalleryRow items={galleryRow1} rowHeight={200} direction="left"  duration={34} />
        <GalleryRow items={galleryRow2} rowHeight={230} direction="right" duration={27} />
        <GalleryRow items={galleryRow3} rowHeight={200} direction="left"  duration={42} />

        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0C0C0C 15%, transparent 100%)' }}
        />
      </div>
      <div className="h-16" />
    </section>
  )
}
