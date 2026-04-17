import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { LIME } from '../../data/constants'
import { navLinks } from '../../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
      return
    }

    const sections = ['home', 'work', 'services', 'about']
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHomePage])

  // Prevent scroll and toggle class when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('menu-is-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('menu-is-open')
    }
  }, [isMenuOpen])

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isMenuOpen ? 'transparent' : (scrolled ? 'rgba(12,12,12,0.92)' : 'transparent'),
          backdropFilter: scrolled && !isMenuOpen ? 'blur(18px)' : 'none',
          borderBottom: scrolled && !isMenuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-[70]">
          <Link 
            to="/" 
            aria-label="Offdots — home" 
            className="flex items-center"
            onClick={() => {
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              setIsMenuOpen(false)
            }}
          >
            <img src="/Logo.svg" alt="Offdots Logo" className="h-4 w-auto md:h-4" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = isHomePage && activeSection === sectionId
              const finalHref = isHomePage ? href : `/${href}`

              return (
                <li key={label}>
                  <a
                    href={finalHref}
                    className="text-sm font-bold transition-all duration-300 relative group"
                    style={{ 
                      color: isActive ? LIME : 'rgba(255,255,255,0.45)' 
                    }}
                    onMouseEnter={e => !isActive && (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => !isActive && (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {label}
                    <span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 transition-transform duration-300 origin-left"
                      style={{ 
                        background: LIME,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        opacity: isActive ? 1 : 0
                      }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-85"
              style={{ background: LIME, color: '#0C0C0C' }}
            >
              Let's Talk <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 flex flex-col bg-[#0A0A0A] transition-all duration-500 md:hidden ${
            isMenuOpen ? 'opacity-100 z-[60] pointer-events-auto' : 'opacity-0 z-[-1] pointer-events-none'
          }`}
          style={{ height: '100vh', width: '100vw' }}
        >
          <div className="flex-1 flex flex-col px-8 pt-32 pb-12 gap-12 overflow-y-auto w-full">
            <ul className="flex flex-col gap-8 list-none w-full">
              {navLinks.map(({ label, href }, idx) => {
                const finalHref = isHomePage ? href : `/${href}`
                return (
                  <li 
                    key={label}
                    style={{ 
                      transitionDelay: `${idx * 100}ms`,
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                    }}
                    className="transition-all duration-500"
                  >
                    <a
                      href={finalHref}
                      className="text-5xl font-black text-white hover:text-[#CAFF00] transition-colors leading-none"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
            
            <div 
              className="mt-auto transition-all duration-700 delay-300 w-full"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 w-full py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-200 active:scale-95"
                style={{ background: LIME, color: '#080808' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
