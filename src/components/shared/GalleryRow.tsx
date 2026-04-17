

export type GalleryItem = { 
  title: string; 
  cat: string; 
  aspect: string;
  src?: string;
  type?: 'image' | 'video';
  gradient?: string;
}

export function GalleryRow({ items, rowHeight, direction, duration }: {
  items: GalleryItem[]; rowHeight: number; direction: 'left' | 'right'; duration: number
}) {
  const animation =
    direction === 'left'
      ? `marquee ${duration}s linear infinite`
      : `scrollRight ${duration}s linear infinite`

  return (
    <div className="overflow-hidden" style={{ height: rowHeight }}>
      <div className="gallery-track flex gap-2 h-full" style={{ animation, width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl flex-shrink-0 group bg-[#111]"
            style={{ height: rowHeight, aspectRatio: item.aspect }}
          >
            {/* Visual content */}
            {item.src ? (
              item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )
            ) : (
              <div 
                className="w-full h-full" 
                style={{ background: item.gradient || '#1a1a1a' }} 
              />
            )}

            {/* Ghost initial — visible only if no image/video or as subtle overlay */}
            {!item.src && (
              <span
                className="absolute bottom-0 right-2 leading-none select-none pointer-events-none font-black"
                style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.07)' }}
              >
                {item.title[0]}
              </span>
            )}

            {/* Hover label */}
            <div
              className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 60%)', padding: '10px 12px' }}
            >
              <p className="text-white text-xs font-bold leading-tight">{item.title}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
