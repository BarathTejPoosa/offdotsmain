import { Palette, Globe, Zap, Target } from 'lucide-react'

export const galleryRow1 = [
  { title: 'Pure Leaf Branding', cat: 'Branding', src: '/assets/work/club/branding/pure_leaf/coffee_cup_mockup.jpg', type: 'image' as const, aspect: '3/4' },
  { title: 'Motion Sequence', cat: 'Motion',   src: '/assets/hero/268904192_332972555049806_5460978736915554086_n.mp4', type: 'video' as const, aspect: '9/16' },
  { title: 'Brand Identity', cat: 'Design',   src: '/assets/hero/Page1.jpeg', type: 'image' as const, aspect: '3/4' },
  { title: 'Startix Identity', cat: 'Branding', src: '/assets/work/club/branding/startix/slice_1.png', type: 'image' as const, aspect: '4/3' },
  { title: 'Motion Loop',    cat: 'Motion',   src: '/assets/hero/273324105_627221855240743_5048082962001317934_n.mp4', type: 'video' as const, aspect: '16/9' },
]

export const galleryRow2 = [
  { title: 'Concept Art',    cat: 'Editorial', src: '/assets/hero/Page12.jpeg', type: 'image' as const, aspect: '4/3' },
  { title: 'Pure Leaf Cafe', cat: 'Mockup',    src: '/assets/work/club/branding/pure_leaf/cafe_branding_mockup.jpg', type: 'image' as const, aspect: '3/4' },
  { title: 'Kinetic Type',   cat: 'Motion',    src: '/assets/hero/274596556_548246396234922_5033851150714061918_n.mp4', type: 'video' as const, aspect: '16/9' },
  { title: 'Startix Digital', cat: 'Branding',  src: '/assets/work/club/branding/startix/slice_4.png', type: 'image' as const, aspect: '4/3' },
  { title: 'Editorial Look', cat: 'Editorial', src: '/assets/hero/Page3.jpeg', type: 'image' as const, aspect: '4/3' },
]

export const galleryRow3 = [
  { title: 'Poster Design',  cat: 'Print',     src: '/assets/hero/Page4.jpeg', type: 'image' as const, aspect: '3/4' },
  { title: 'Abstract Loop',  cat: 'Motion',    src: '/assets/hero/277234235_375789937726808_2491064685162418637_n.mp4', type: 'video' as const, aspect: '9/16' },
  { title: 'Holding Cup',    cat: 'Branding',  src: '/assets/work/club/branding/pure_leaf/holding_cup_mockup.jpg', type: 'image' as const, aspect: '4/3' },
  { title: 'Visual Texture', cat: 'Design',    src: '/assets/hero/Page6.jpeg', type: 'image' as const, aspect: '3/4' },
  { title: 'Brand Story',    cat: 'Branding',  src: '/assets/hero/Page7.jpeg', type: 'image' as const, aspect: '4/3' },
]

export const projects = [
  { 
    id: 'pure-leaf', 
    title: 'Pure Leaf', 
    desc: 'Sustainable coffee branding that connects organic roots with modern urban lifestyle.',  
    categories: ['Branding', 'Package'], 
    year: '2024', 
    cover: '/assets/work/club/branding/pure_leaf/coffee_cup_mockup.jpg',
    gallery: [
      '/assets/work/club/branding/pure_leaf/coffee_cup_mockup.jpg',
      '/assets/work/club/branding/pure_leaf/cafe_branding_mockup.jpg',
      '/assets/work/club/branding/pure_leaf/holding_cup_mockup.jpg'
    ],
    gradient: 'linear-gradient(135deg, #2D1B14, #4A3228)' // Earthy coffee tones
  },
  { 
    id: 'startix', 
    title: 'Startix', 
    desc: 'Modular visual identity for a tech startup ecosystem focusing on rapid scalability.', 
    categories: ['Branding', 'Digital'],   
    year: '2024', 
    cover: '/assets/work/club/branding/startix/slice_1.png',
    gallery: [
      '/assets/work/club/branding/startix/slice_1.png',
      '/assets/work/club/branding/startix/slice_2.png',
      '/assets/work/club/branding/startix/slice_3.png',
      '/assets/work/club/branding/startix/slice_4.png'
    ],
    gradient: 'linear-gradient(135deg, #001220, #004e92)' // Deep blue tech tones
  },
  { 
    id: 'clubs', 
    title: 'The Night Shift', 
    desc: 'Comprehensive visual identity and motion posters for the global club circuit.', 
    categories: ['Clubs'], 
    year: '2024', 
    cover: '/assets/hero/Page11.jpeg',
    gallery: ['/assets/hero/Page11.jpeg', '/assets/hero/Page12.jpeg'],
    gradient: 'linear-gradient(135deg, #12002b, #480048)'
  },
]

export const services = [
  { Icon: Palette, title: 'Brand & Identity',   desc: 'We go beyond logos. We build the visual language that makes your brand immediately, unmistakably yours.' },
  { Icon: Globe,   title: 'Web Design & Dev',   desc: 'Websites that don\'t just look good \u2014 they perform. Every interaction designed to hold attention and drive action.' },
  { Icon: Zap,     title: 'Motion & Animation', desc: 'Still brands move too slowly. We add the dimension of time to make your story impossible to scroll past.' },
  { Icon: Target,  title: 'Creative Strategy',  desc: 'The thinking that sits behind every great brand decision. We help you figure out what to say before we say it.' },
]

export const filterTabs   = ['All', 'Branding', 'Clubs']

export const marqueeItems = [
  'BRAND IDENTITY','✦','WEB DESIGN','✦','MOTION GRAPHICS','✦','STRATEGY','✦','CREATIVE DIRECTION','✦','UI/UX','✦','ART DIRECTION','✦',
  'BRAND IDENTITY','✦','WEB DESIGN','✦','MOTION GRAPHICS','✦','STRATEGY','✦','CREATIVE DIRECTION','✦','UI/UX','✦','ART DIRECTION','✦',
]

export const aboutStats = [
  { num: '80+', label: 'Projects Delivered' },
  { num: '40+', label: 'Happy Clients'       },
  { num: '5',   label: 'Years Active'        },
]

export const recognitionAwards = []

export const clubAssets = [
  { id: 1, type: 'poster',  src: '/assets/hero/Page1.jpeg',   title: 'Midnight Pulse', client: 'Vanguard Club', aspect: '2/3'  },
  { id: 2, type: 'motion',  src: '/assets/hero/273324105_627221855240743_5048082962001317934_n.mp4', title: 'Cyber Drift', client: 'Neon Heights', aspect: '9/16' },
  { id: 3, type: 'video',   src: '/assets/hero/268904192_332972555049806_5460978736915554086_n.mp4', title: 'Afterhours', client: 'The Vault', aspect: '16/9' },
  { id: 4, type: 'poster',  src: '/assets/hero/Page2.jpeg',   title: 'Square Beat', client: 'Cloud 9', aspect: '1/1' },
  { id: 5, type: 'motion',  src: '/assets/hero/274596556_548246396234922_5033851150714061918_n.mp4', title: 'Basement Flow', client: 'Sub-Zero', aspect: '9/16' },
  { id: 6, type: 'poster',  src: '/assets/hero/Page3.jpeg',   title: 'Prism View', client: 'Lightwave', aspect: '1/1' },
  { id: 7, type: 'motion',  src: '/assets/hero/277234235_375789937726808_2491064685162418637_n.mp4', title: 'Velvet Story', client: 'Ruby Room', aspect: '9/16' },
  { id: 8, type: 'poster',  src: '/assets/hero/Page4.jpeg',   title: 'Deep Square', client: 'Obsidian', aspect: '1/1' },
  { id: 9, type: 'poster',  src: '/assets/hero/Page5.jpeg',   title: 'Neon Flux', client: 'Retro Grade', aspect: '2/3' },
  { id: 10, type: 'poster', src: '/assets/hero/Page6.jpeg',   title: 'Solid State', client: 'Monolith', aspect: '1/1' },
  { id: 11, type: 'poster', src: '/assets/hero/Page7.jpeg',   title: 'Glow Box', client: 'Luminal', aspect: '1/1' },
  { id: 12, type: 'poster', src: '/assets/hero/Page10.jpeg',  title: 'Pixel Dust', client: 'Bit-Map', aspect: '1/1' },
  { id: 13, type: 'poster', src: '/assets/hero/Page11.jpeg',  title: 'Pure Black', client: 'Void', aspect: '2/3' },
  { id: 14, type: 'poster', src: '/assets/hero/Page12.jpeg',  title: 'Grid Lock', client: 'Matrix', aspect: '1/1' },
  { id: 15, type: 'poster', src: '/assets/hero/Page21.jpeg',  title: 'Chroma', client: 'Spectrum', aspect: '3/4' },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/offdots' },
  { label: 'Twitter', href: 'https://twitter.com/offdots' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/offdots' },
]
