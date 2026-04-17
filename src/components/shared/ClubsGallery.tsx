import { LIME } from '../../data/constants'
import { clubAssets } from '../../data/content'

export function ClubsGallery() {
  return (
    <section aria-labelledby="clubs-heading" className="py-20" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: LIME }}>
              The Night Shift
            </p>
            <h2
              id="clubs-heading"
              className="font-black text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
            >
              Clubs & <span style={{ color: LIME }}>Nightlife.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            High-impact posters and motion design built for the culture of the night. Where every frame is a pulse.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {clubAssets.map((asset) => (
            <div 
              key={asset.id} 
              className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer bg-[#111]"
            >
              {/* Media Content */}
              <div 
                className="w-full relative overflow-hidden" 
                style={{ aspectRatio: asset.aspect }}
              >
                {asset.src ? (
                  asset.type === 'motion' || asset.type === 'video' ? (
                    <video 
                      src={asset.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img 
                      src={asset.src}
                      alt={asset.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )
                ) : null}

                {/* Subtle grain overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500 mix-blend-overlay"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Clubs */}
        <div className="mt-20 p-12 rounded-3xl border border-white/5 bg-[#0C0C0C] relative overflow-hidden text-center">
            {/* Ambient Background Glow */}
            <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, ${LIME} 0%, transparent 60%)` }} />
            
            <h3 className="relative z-10 text-3xl md:text-5xl font-black mb-6">Need a visual pulse for your venue?</h3>
            <p className="relative z-10 text-white/40 mb-10 max-w-lg mx-auto">We specialise in creating motion assets that dominate the screen and still posters that command the wall.</p>
            <a 
              href="#contact" 
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-black hover:scale-105 transition-all"
            >
              Start a Project
            </a>
        </div>

      </div>
    </section>
  )
}
