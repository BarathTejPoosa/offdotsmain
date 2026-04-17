import { marqueeItems } from '../../data/content'
import { LIME } from '../../data/constants'

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden py-4"
      style={{
        background: '#111111',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}
    >
      <div className="marquee-track flex whitespace-nowrap">
        {marqueeItems.map((item, i) => (
          <span
            key={i}
            className="mx-7 text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: item === '✦' ? LIME : 'rgba(255,255,255,0.25)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
