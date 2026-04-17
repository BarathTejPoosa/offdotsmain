import { LIME } from '../../data/constants'
import { footerLinks, socialLinks } from '../../data/content'

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="py-10"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" aria-label="Offdots — back to top" className="flex items-center">
          <img src="/Logo.svg" alt="Offdots Logo" className="h-4 w-auto md:h-5" />
        </a>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm list-none" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition-colors duration-200"
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-5 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              className="transition-colors duration-200"
              onMouseEnter={e => (e.currentTarget.style.color = LIME)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} Offdots. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
