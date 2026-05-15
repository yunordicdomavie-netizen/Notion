"use client"

import { useState } from "react"
import { BookOpen, Languages, Database, DollarSign, Brain, Compass, BookMarked, FileText, Video, Bookmark } from "lucide-react"

interface KnowledgeCard {
  id: string
  title: string
  category: string
  icon: React.ElementType
  itemCount: number
  lastUpdated: string
  coverColor: string
  description: string
}

const knowledgeCategories: KnowledgeCard[] = [
  {
    id: "1",
    title: "German Language",
    category: "Languages",
    icon: Languages,
    itemCount: 127,
    lastUpdated: "Today",
    coverColor: "from-leather to-espresso",
    description: "Vocabulary, grammar rules, and conversation practice"
  },
  {
    id: "2",
    title: "SQL & Databases",
    category: "Technical",
    icon: Database,
    itemCount: 84,
    lastUpdated: "Yesterday",
    coverColor: "from-mountain-blue to-mountain-blue/70",
    description: "Queries, optimization, and database design patterns"
  },
  {
    id: "3",
    title: "Personal Finance",
    category: "Life Skills",
    icon: DollarSign,
    itemCount: 56,
    lastUpdated: "3 days ago",
    coverColor: "from-olive to-olive/70",
    description: "Budgeting, investing, and financial independence"
  },
  {
    id: "4",
    title: "Psychology",
    category: "Self-Development",
    icon: Brain,
    itemCount: 93,
    lastUpdated: "Today",
    coverColor: "from-chart-4 to-chart-4/70",
    description: "Attachment theory, cognitive biases, and mental models"
  },
  {
    id: "5",
    title: "Philosophy",
    category: "Wisdom",
    icon: BookMarked,
    itemCount: 41,
    lastUpdated: "Last week",
    coverColor: "from-espresso to-leather",
    description: "Stoicism, existentialism, and life philosophy"
  },
  {
    id: "6",
    title: "Travel Planning",
    category: "Dreams",
    icon: Compass,
    itemCount: 38,
    lastUpdated: "2 days ago",
    coverColor: "from-chart-5 to-mountain-blue",
    description: "Destinations, itineraries, and cultural notes"
  },
]

const recentNotes = [
  { type: "note", title: "German: Dative prepositions", time: "2 hours ago", icon: FileText },
  { type: "video", title: "SQL Joins Explained", time: "Yesterday", icon: Video },
  { type: "bookmark", title: "The Psychology of Money", time: "3 days ago", icon: Bookmark },
]

export function SecondBrain() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="brain" className="py-16 px-4 bg-card paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mountain-blue/10 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-mountain-blue" />
            <span className="text-sm font-medium text-mountain-blue tracking-wider uppercase">Knowledge Archive</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Second Brain
          </h2>
          <p className="mt-3 text-muted-foreground italic">
            Everything you&apos;ve learned, organized and accessible
          </p>
        </div>

        {/* Knowledge Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {knowledgeCategories.map((card) => {
            const Icon = card.icon
            const isHovered = hoveredCard === card.id

            return (
              <div
                key={card.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  isHovered ? "scale-[1.02]" : ""
                }`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Book-like card */}
                <div className="relative bg-background rounded-lg overflow-hidden border border-border luxury-shadow">
                  {/* Cover */}
                  <div className={`h-40 bg-gradient-to-br ${card.coverColor} p-6 relative overflow-hidden`}>
                    {/* Decorative lines */}
                    <div className="absolute top-4 left-4 right-4 h-px bg-primary-foreground/20" />
                    <div className="absolute top-8 left-4 right-4 h-px bg-primary-foreground/10" />
                    
                    <Icon className="w-12 h-12 text-primary-foreground/80 absolute bottom-4 right-4" />
                    
                    <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-semibold text-primary-foreground mt-2">
                      {card.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground font-medium">
                        {card.itemCount} items
                      </span>
                      <span className="text-muted-foreground">
                        Updated {card.lastUpdated}
                      </span>
                    </div>
                  </div>

                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/10 to-transparent" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-parchment rounded-lg p-6 border border-border">
          <h3 className="text-lg font-medium text-foreground mb-4">Recent Additions</h3>
          <div className="space-y-3">
            {recentNotes.map((note, index) => {
              const Icon = note.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-background rounded-lg border border-border hover:border-leather/30 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-leather/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-leather" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{note.title}</p>
                    <p className="text-xs text-muted-foreground">{note.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quote */}
        <p className="text-center mt-8 font-[family-name:var(--font-caveat)] text-xl text-muted-foreground">
          &ldquo;Knowledge is not power. Applied knowledge is power.&rdquo;
        </p>
      </div>
    </section>
  )
}
