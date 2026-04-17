import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ClubsGallery } from '../components/shared/ClubsGallery'
import { LIME } from '../data/constants'

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-[#080808] pt-24">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link 
          to="/#work" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors mb-8"
          style={{ color: LIME }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </div>

      {/* Reusing the gallery component */}
      <ClubsGallery />
      
      {/* Footer padding */}
      <div className="h-24" />
    </div>
  )
}
