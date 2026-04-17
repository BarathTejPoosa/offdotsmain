import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { LIME } from '../../data/constants'
import { projects, filterTabs } from '../../data/content'

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredCard, setHoveredCard]   = useState<string | null>(null)

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.categories.includes(activeFilter))

  return (
    <section id="work" aria-labelledby="work-heading" className="max-w-7xl mx-auto px-6 py-28">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: LIME }}>
          Selected Work
        </p>
        <h2
          id="work-heading"
          className="font-black text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}
        >
          Work that breaks the mold.
        </h2>
        <p className="max-w-lg mx-auto text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Every project starts with one question: what would everyone else do here? Then we do the opposite.
        </p>
      </div>

      {/* Filter */}
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2.5 justify-center mb-10">
        {filterTabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            aria-pressed={activeFilter === tab}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={
              activeFilter === tab
                ? { background: LIME, color: '#0C0C0C', fontWeight: 700 }
                : { background: 'transparent', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.1)' }
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(project => (
          <Link
            key={project.id}
            to={project.id === 'clubs' ? '/clubs' : `/project/${project.id}`}
            aria-label={`${project.title} — ${project.categories.join(', ')}`}
            className="rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 relative block"
            style={{
              background: '#141414',
              border: hoveredCard === project.id ? `1px solid rgba(202,255,0,0.25)` : '1px solid rgba(255,255,255,0.07)',
              transform: hoveredCard === project.id ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredCard === project.id ? '0 16px 40px rgba(0,0,0,0.4)' : 'none',
            }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <article>
              {/* Visual area */}
              <div className="relative overflow-hidden group/img" style={{ aspectRatio: '4/3', background: project.gradient }}>
                {project.cover ? (
                  <img 
                    src={project.cover} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <span aria-hidden="true" className="absolute bottom-4 right-5 text-[5.5rem] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(255,255,255,0.08)' }}>
                    {project.id === 'clubs' ? 'CLUB' : project.id}
                  </span>
                )}

                {/* Hover scrim */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(0,0,0,0.6)' }}
                >
                  <span
                    aria-hidden="true"
                    className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 transform scale-90 group-hover:scale-100"
                    style={{
                      background: LIME, color: '#080808'
                    }}
                  >
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-white mb-1.5">{project.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.categories.map(cat => (
                      <span key={cat} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(202,255,0,0.1)', color: LIME }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <time className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }} dateTime={project.year}>{project.year}</time>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

    </section>
  )
}
