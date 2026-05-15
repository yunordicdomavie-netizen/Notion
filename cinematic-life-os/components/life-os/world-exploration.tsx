"use client"

import { useState } from "react"
import Image from "next/image"
import { Globe, MapPin, Calendar, DollarSign, Heart, Plane, Star, ChevronRight } from "lucide-react"

interface Destination {
  id: string
  name: string
  country: string
  image: string
  description: string
  plannedDate: string
  estimatedCost: string
  highlights: string[]
  status: "dreaming" | "planning" | "saving" | "booked"
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "Swiss Alps",
    country: "Switzerland",
    image: "/images/hero-alps.jpg",
    description: "Rolling green meadows, snow-capped peaks, and the freedom of wide open spaces. The dream that started it all.",
    plannedDate: "Summer 2026",
    estimatedCost: "$3,500",
    highlights: ["Interlaken", "Grindelwald", "Lauterbrunnen", "Zermatt"],
    status: "saving"
  },
  {
    id: "2",
    name: "Bavaria",
    country: "Germany",
    image: "/images/germany.jpg",
    description: "Fairytale castles, ancient forests, and the warmth of German culture. A chance to practice the language in its homeland.",
    plannedDate: "Fall 2025",
    estimatedCost: "$2,200",
    highlights: ["Munich", "Neuschwanstein", "Black Forest", "Heidelberg"],
    status: "planning"
  },
  {
    id: "3",
    name: "Norwegian Fjords",
    country: "Norway",
    image: "/images/norway.jpg",
    description: "Dramatic cliffs plunging into crystal waters. A landscape that makes you feel small in the best way possible.",
    plannedDate: "2027",
    estimatedCost: "$4,000",
    highlights: ["Bergen", "Geirangerfjord", "Trolltunga", "Northern Lights"],
    status: "dreaming"
  },
  {
    id: "4",
    name: "Waterfalls & Glaciers",
    country: "Iceland",
    image: "/images/iceland.jpg",
    description: "Fire and ice. A land that feels like another planet, raw and untouched.",
    plannedDate: "2028",
    estimatedCost: "$3,800",
    highlights: ["Reykjavik", "Golden Circle", "Skogafoss", "Blue Lagoon"],
    status: "dreaming"
  },
  {
    id: "5",
    name: "Lake Bled",
    country: "Slovenia",
    image: "/images/slovenia.jpg",
    description: "Europe's hidden gem. Emerald waters, a island church, and alpine serenity.",
    plannedDate: "2026",
    estimatedCost: "$1,800",
    highlights: ["Lake Bled", "Ljubljana", "Postojna Cave", "Triglav"],
    status: "planning"
  },
  {
    id: "6",
    name: "Great Ocean Road",
    country: "Australia",
    image: "/images/australia.jpg",
    description: "Endless coastline, golden sunsets, and the vastness of the southern hemisphere.",
    plannedDate: "2029",
    estimatedCost: "$5,500",
    highlights: ["Melbourne", "Twelve Apostles", "Great Barrier Reef", "Sydney"],
    status: "dreaming"
  },
]

const statusConfig = {
  dreaming: { color: "bg-mountain-blue/10 text-mountain-blue border-mountain-blue/30", label: "Dreaming" },
  planning: { color: "bg-chart-4/10 text-chart-4 border-chart-4/30", label: "Planning" },
  saving: { color: "bg-olive/10 text-olive border-olive/30", label: "Saving" },
  booked: { color: "bg-destructive/10 text-destructive border-destructive/30", label: "Booked" },
}

export function WorldExploration() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [favoriteDestinations, setFavoriteDestinations] = useState<string[]>(["1"])

  const toggleFavorite = (id: string) => {
    setFavoriteDestinations(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    )
  }

  return (
    <section id="world" className="py-16 px-4 bg-card paper-texture">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive/10 rounded-full mb-4">
            <Globe className="w-4 h-4 text-olive" />
            <span className="text-sm font-medium text-olive tracking-wider uppercase">Dream Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            World Exploration
          </h2>
          <p className="mt-3 text-muted-foreground italic font-[family-name:var(--font-caveat)] text-xl">
            &ldquo;The world is a book, and those who do not travel read only one page.&rdquo;
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => {
            const isFavorite = favoriteDestinations.includes(destination.id)
            const status = statusConfig[destination.status]

            return (
              <div
                key={destination.id}
                className="group bg-background rounded-xl overflow-hidden border border-border luxury-shadow hover-lift cursor-pointer"
                onClick={() => setSelectedDestination(destination)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/20 to-transparent" />

                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}>
                    {status.label}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(destination.id)
                    }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-background"
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
                  </button>

                  {/* Destination Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-cream">{destination.name}</h3>
                    <p className="text-cream/80 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {destination.country}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {destination.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.plannedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-foreground font-medium">
                      <DollarSign className="w-4 h-4 text-olive" />
                      <span>{destination.estimatedCost}</span>
                    </div>
                  </div>

                  {/* Highlights preview */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-parchment rounded text-xs text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{destination.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Travel Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Countries Dreamed", value: "6", icon: Globe },
            { label: "Estimated Total", value: "$20,800", icon: DollarSign },
            { label: "Target Year", value: "2029", icon: Calendar },
            { label: "Currently Saving", value: "32%", icon: Star },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-parchment rounded-lg p-5 text-center border border-border">
                <Icon className="w-6 h-6 text-leather mx-auto mb-2" />
                <div className="text-2xl font-light text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4 font-[family-name:var(--font-caveat)] text-xl">
            Every journey begins with a single step of imagination
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-leather text-primary-foreground rounded-lg hover:bg-espresso transition-colors luxury-shadow">
            <Plane className="w-4 h-4" />
            Start Planning
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal would go here for detailed view */}
      {selectedDestination && (
        <div 
          className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <div 
            className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto luxury-shadow"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl font-semibold text-cream">{selectedDestination.name}</h3>
                <p className="text-cream/80">{selectedDestination.country}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-foreground mb-4">{selectedDestination.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-parchment p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Planned Date</p>
                  <p className="font-medium">{selectedDestination.plannedDate}</p>
                </div>
                <div className="bg-parchment p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Estimated Cost</p>
                  <p className="font-medium">{selectedDestination.estimatedCost}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Highlights</p>
              <div className="flex flex-wrap gap-2">
                {selectedDestination.highlights.map((h, i) => (
                  <span key={i} className="px-3 py-1 bg-olive/10 text-olive rounded-full text-sm">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
