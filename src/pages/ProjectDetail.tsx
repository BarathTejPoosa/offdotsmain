import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '../data/content'
import { LIME, HERO_BG } from '../data/constants'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <h1 className="text-4xl font-black mb-6">Project Not Found</h1>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full bg-white text-black hover:opacity-85 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      {/* ─── Hero Section ─── */}
      <section 
        className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden"
        style={{ background: HERO_BG }}
      >
        {/* Background Gradient matching project brand */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 opacity-40 blur-[120px]"
          style={{ 
            background: `radial-gradient(circle at 50% 50%, ${
              project.gradient.includes(',') 
                ? project.gradient.split(',').pop()?.replace(')', '').trim() 
                : '#CAFF00'
            }, transparent 80%)` 
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-10 transition-colors"
              style={{ color: LIME }}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Work
            </Link>
            
            <p className="text-sm font-mono mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Project — {project.id}</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.9]">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center">
              {project.categories.map(cat => (
                <span key={cat} className="px-5 py-2 rounded-full border border-white/10 text-sm font-semibold">
                  {cat}
                </span>
              ))}
              <span className="text-sm font-mono text-white/40">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="container mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Metadata Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: LIME }}>Role</h3>
              <p className="text-white/60">Creative Direction, UI/UX Design, Strategy</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: LIME }}>Client</h3>
              <p className="text-white/60">{project.title} Global</p>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white italic">
              "The vision was to redefine what {project.categories[0]} feels like for the modern digital era."
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/45 max-w-2xl">
              {project.desc} We focused on creating a seamless blend of performance and aesthetics, ensuring that every touchpoint resonates with the brand's core values.
            </p>

            {/* Visual Mockup 1 (Full Width) */}
            <div 
              className="mt-8 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 group shadow-2xl bg-[#111]"
            >
              {project.gallery?.[0] ? (
                <img 
                  src={project.gallery[0]} 
                  alt={`${project.title} Mockup 1`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: project.gradient }}>
                  <p className="text-white/10 text-8xl font-black select-none pointer-events-none uppercase tracking-tighter">
                    {project.title}
                  </p>
                </div>
              )}
            </div>

            {/* Visual Mockup 2 & 3 (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-[#111]"
              >
                {project.gallery?.[1] ? (
                   <img 
                    src={project.gallery[1]} 
                    alt={`${project.title} Mockup 2`}
                    className="w-full h-full object-cover"
                   />
                ) : (
                  <div className="w-full h-full opacity-30" style={{ background: project.gradient, backgroundImage: 'radial-gradient(circle at 10% 10%, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                )}
              </div>
              <div 
                className="aspect-square rounded-3xl overflow-hidden border border-white/5 bg-[#111]"
              >
                {project.gallery?.[2] ? (
                   <img 
                    src={project.gallery[2]} 
                    alt={`${project.title} Mockup 3`}
                    className="w-full h-full object-cover"
                   />
                ) : (
                  <div className="w-full h-full opacity-30" style={{ background: project.gradient, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 40px' }} />
                )}
              </div>
            </div>


            {/* Visual Mockup 4 (Wide Content) */}
            <div 
              className="mt-8 relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/5 shadow-inner bg-[#111]"
            >
               {project.gallery?.[3] ? (
                  <img 
                    src={project.gallery[3]} 
                    alt={`${project.title} Mockup 4`}
                    className="w-full h-full object-cover"
                  />
               ) : (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ background: project.gradient }}>
                   <span className="text-white/5 text-[15rem] font-black rotate-12 whitespace-nowrap">
                    {project.title} {project.title} {project.title}
                   </span>
                </div>
               )}
            </div>

          </div>

        </div>
      </section>

      {/* ─── Footer Navigation ─── */}
      <section className="py-24 border-t border-white/5 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-12 text-white/20">Next Project</p>
          <Link 
            to={`/project/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}
            className="group text-center"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white hover:text-[#CAFF00] transition-colors duration-300 flex items-center gap-4">
              {projects[(projects.indexOf(project) + 1) % projects.length].title}
              <ArrowRight className="w-12 h-12 md:w-20 md:h-20 group-hover:translate-x-4 transition-transform duration-300" />
            </h2>
          </Link>
        </div>
      </section>
    </div>
  )
}
