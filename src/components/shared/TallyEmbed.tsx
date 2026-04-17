import { useEffect } from 'react'

interface TallyEmbedProps {
  formId: string
  title?: string
  fullScreen?: boolean
}

export function TallyEmbed({ formId, title = 'Contact form', fullScreen = false }: TallyEmbedProps) {
  useEffect(() => {
    // Dynamically load the Tally script
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    
    // Check if script already exists
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script)
    }

    return () => {
      // Optional: document.body.removeChild(script)
    }
  }, [])

  if (fullScreen) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          data-tally-src={`https://tally.so/r/${formId}?transparentBackground=1`}
          width="100%"
          height="100%"
          style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            bottom: 0, 
            left: 0, 
            border: 0,
            margin: 0,
            height: 'calc(100% + 64px)' // Push badge out of view
          }}
          title={title}
        />
      </div>
    )
  }

  return (
    <div className="w-full min-h-[500px] mt-12 rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-sm relative">
      <div className="overflow-hidden h-full w-full">
        <iframe
          data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
          loading="lazy"
          width="100%"
          height="500"
          style={{ border: 'none', margin: 0, height: '560px', marginBottom: '-60px' }} // Crop bottom
          title={title}
        />
      </div>
    </div>
  )
}
