"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Heart, MessageCircle, Calendar, MapPin } from "lucide-react"

interface MemoryCard {
  id: string
  image: string
  date: string
  location: string
  reflection: string
  lesson: string
  likes: number
}

const memories: MemoryCard[] = [
  {
    id: "1",
    image: "/images/germany.jpg",
    date: "March 2024",
    location: "A quiet afternoon",
    reflection: "Sometimes the most profound moments come in silence, when we stop searching and just exist.",
    lesson: "Presence is more valuable than productivity.",
    likes: 47
  },
  {
    id: "2",
    image: "/images/norway.jpg",
    date: "February 2024",
    location: "During a rainstorm",
    reflection: "Watched the rain for an hour today. Felt like the world was washing away all the unnecessary noise.",
    lesson: "Nature heals what busyness breaks.",
    likes: 82
  },
  {
    id: "3",
    image: "/images/slovenia.jpg",
    date: "January 2024",
    location: "Late night study",
    reflection: "The language is slowly making sense. Each small victory feels like unlocking a door to a new world.",
    lesson: "Consistency compounds into capability.",
    likes: 65
  },
  {
    id: "4",
    image: "/images/iceland.jpg",
    date: "December 2023",
    location: "Year in review",
    reflection: "Looking back at who I was a year ago. The growth is invisible day by day, but undeniable over time.",
    lesson: "Trust the process, even when you can't see the progress.",
    likes: 124
  },
  {
    id: "5",
    image: "/images/australia.jpg",
    date: "November 2023",
    location: "First German conversation",
    reflection: "Said my first full sentence in German to a stranger. They understood. That tiny moment meant everything.",
    lesson: "Courage is speaking before you're ready.",
    likes: 93
  },
  {
    id: "6",
    image: "/images/hero-alps.jpg",
    date: "October 2023",
    location: "The beginning",
    reflection: "Started this journey today. No idea where it will lead, but I know I need to try.",
    lesson: "Every transformation begins with a single decision.",
    likes: 156
  },
]

export function LifeFeed() {
  const [likedPosts, setLikedPosts] = useState<string[]>([])

  const toggleLike = (id: string) => {
    setLikedPosts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  return (
    <section id="feed" className="py-16 px-4 bg-background paper-texture">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart-4/10 rounded-full mb-4">
            <Camera className="w-4 h-4 text-chart-4" />
            <span className="text-sm font-medium text-chart-4 tracking-wider uppercase">Visual Diary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Life Feed
          </h2>
          <p className="mt-3 text-muted-foreground italic">
            Moments worth remembering
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {memories.map((memory, index) => {
            const isLiked = likedPosts.includes(memory.id)

            return (
              <div
                key={memory.id}
                className="break-inside-avoid bg-card rounded-xl overflow-hidden border border-border luxury-shadow hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={memory.image}
                    alt={memory.reflection}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                  
                  {/* Date overlay */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {memory.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    {memory.location}
                  </div>

                  {/* Reflection */}
                  <p className="text-foreground leading-relaxed mb-3">
                    {memory.reflection}
                  </p>

                  {/* Lesson */}
                  <div className="bg-parchment rounded-lg p-3 mb-4">
                    <p className="text-sm text-leather font-[family-name:var(--font-caveat)] text-lg">
                      Lesson: {memory.lesson}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(memory.id)}
                      className={`flex items-center gap-1.5 transition-colors ${
                        isLiked ? "text-destructive" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                      <span className="text-sm">{memory.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">Reflect</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Add memory prompt */}
        <div className="mt-10 text-center">
          <button className="px-8 py-4 border border-dashed border-leather/30 rounded-xl text-muted-foreground hover:text-foreground hover:border-leather/50 transition-all hover:bg-parchment/30">
            <Camera className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm">Capture a new moment...</span>
          </button>
        </div>
      </div>
    </section>
  )
}
