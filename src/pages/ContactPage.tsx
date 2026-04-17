import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { TallyEmbed } from '../components/shared/TallyEmbed'
import { DARK_BG } from '../data/constants'

export default function ContactPage() {
  return (
    <div 
      className="min-h-screen fixed inset-0 z-[100] bg-[#080808] overflow-hidden" 
      style={{ background: DARK_BG }}
    >
      {/* Floating Close Button */}
      <Link 
        to="/" 
        className="fixed top-6 right-6 z-[110] p-3 rounded-full bg-black/50 border border-white/10 hover:border-white/20 transition-all backdrop-blur-md group"
        aria-label="Close and return to home"
      >
        <X className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
      </Link>

      {/* Full-screen Tally Form */}
      <div className="w-full h-full relative">
        <TallyEmbed formId="pbPr8E" title="Contact Us" fullScreen />
      </div>
    </div>
  )
}
