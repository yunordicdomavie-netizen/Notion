"use client"

import Image from "next/image"
import { MapPin, Compass, Stamp } from "lucide-react"

const destinations = [
  { name: "Germany", image: "/images/germany.jpg", rotation: -3, top: "5%", left: "2%" },
  { name: "Norway", image: "/images/norway.jpg", rotation: 4, top: "60%", left: "0%" },
  { name: "Iceland", image: "/images/iceland.jpg", rotation: -2, top: "8%", right: "2%" },
  { name: "Slovenia", image: "/images/slovenia.jpg", rotation: 3, top: "55%", right: "3%" },
  { name: "Australia", image: "/images/australia.jpg", rotation: -4, bottom: "5%", left: "35%" },
]

export function HeroCollage() {
  return (
    <section id="overview" className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-parchment paper-texture" />
      
      {/* Watercolor stains */}
      <div className="absolute inset-0 watercolor-stain opacity-60" />
      
      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain" />

      {/* Main hero image - Swiss Alps */}
      <div className="relative z-10 flex items-center justify-center py-12 px-4">
        <div className="relative max-w-5xl w-full">
          {/* Main scrapbook frame */}
          <div 
            className="relative aspect-[16/10] rounded-sm overflow-hidden luxury-shadow animate-fade-in-up"
            style={{ 
              transform: "rotate(-0.5deg)",
              boxShadow: "0 25px 50px -12px rgba(66, 54, 48, 0.25), 0 0 0 1px rgba(66, 54, 48, 0.1)"
            }}
          >
            {/* Tape decorations */}
            <div className="absolute -top-3 left-1/4 w-20 h-6 tape-effect rotate-3 z-20" />
            <div className="absolute -top-2 right-1/3 w-16 h-5 tape-effect -rotate-2 z-20" />
            
            <Image
              src="/images/hero-alps.jpg"
              alt="Swiss Alps - Dreams of Freedom"
              fill
              className="object-cover"
              priority
            />
            
            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-espresso/20" />
            
            {/* Quote overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-[family-name:var(--font-caveat)] text-3xl md:text-5xl text-cream text-center drop-shadow-lg">
                &ldquo;Discipline today, freedom tomorrow.&rdquo;
              </p>
            </div>

            {/* Handwritten annotations */}
            <div className="absolute top-6 left-6 font-[family-name:var(--font-caveat)] text-cream/90 text-lg rotate-[-5deg]">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Swiss Alps, 2025
              </span>
            </div>

            <div className="absolute top-8 right-8 font-[family-name:var(--font-caveat)] text-cream/80 text-base rotate-[3deg]">
              where dreams live
            </div>
          </div>

          {/* Floating destination fragments */}
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="absolute w-32 md:w-44 aspect-[4/3] animate-float hover-lift cursor-pointer group"
              style={{
                transform: `rotate(${dest.rotation}deg)`,
                top: dest.top,
                left: dest.left,
                right: dest.right,
                bottom: dest.bottom,
                animationDelay: `${index * 0.5}s`,
                zIndex: 5,
              }}
            >
              <div className="relative w-full h-full rounded-sm overflow-hidden border-4 border-cream shadow-lg">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-caveat)] text-leather text-sm whitespace-nowrap">
                {dest.name}
              </div>
            </div>
          ))}

          {/* Decorative elements */}
          <div className="absolute -bottom-4 right-20 opacity-70">
            <Compass className="w-16 h-16 text-leather/40 rotate-12" />
          </div>

          <div className="absolute top-1/4 -left-8 opacity-50 rotate-[-15deg]">
            <div className="w-16 h-20 border-2 border-leather/30 rounded-sm flex items-center justify-center">
              <Stamp className="w-8 h-8 text-leather/50" />
            </div>
          </div>

          {/* Map sketch decoration */}
          <svg className="absolute -right-12 top-1/3 w-24 h-24 opacity-20" viewBox="0 0 100 100">
            <path 
              d="M10,50 Q30,20 50,50 T90,50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-leather"
            />
            <circle cx="50" cy="50" r="3" className="fill-leather" />
            <circle cx="20" cy="40" r="2" className="fill-leather/50" />
            <circle cx="80" cy="45" r="2" className="fill-leather/50" />
          </svg>
        </div>
      </div>

      {/* Bottom ripped paper edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background ripped-edge" />
    </section>
  )
}
