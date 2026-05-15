"use client"

import { useState } from "react"
import { Sofa, BookOpen, Bed, TreePine, Archive, Telescope, ChevronRight, Lamp, Coffee, Music, Moon, Sun } from "lucide-react"

interface Room {
  id: string
  name: string
  icon: React.ElementType
  description: string
  mood: string
  color: string
  activities: string[]
}

const rooms: Room[] = [
  {
    id: "living",
    name: "Living Room",
    icon: Sofa,
    description: "The heart of daily life. Where ideas are born and plans are made.",
    mood: "Warm & Welcoming",
    color: "from-chart-4/20 to-chart-4/5",
    activities: ["Morning planning", "Evening reflection", "Creative thinking"]
  },
  {
    id: "study",
    name: "Study Room",
    icon: BookOpen,
    description: "A sanctuary of focus. Where knowledge transforms into wisdom.",
    mood: "Deep & Focused",
    color: "from-mountain-blue/20 to-mountain-blue/5",
    activities: ["German practice", "SQL learning", "Reading sessions"]
  },
  {
    id: "bedroom",
    name: "Bedroom",
    icon: Bed,
    description: "Where the day ends and dreams begin. Rest is not laziness.",
    mood: "Calm & Restful",
    color: "from-leather/20 to-leather/5",
    activities: ["Sleep tracking", "Morning rituals", "Dream journal"]
  },
  {
    id: "balcony",
    name: "Balcony",
    icon: TreePine,
    description: "Fresh air and perspective. Nature&apos;s gentle reminder to breathe.",
    mood: "Fresh & Inspiring",
    color: "from-olive/20 to-olive/5",
    activities: ["Coffee ritual", "Nature gazing", "Phone-free time"]
  },
  {
    id: "basement",
    name: "Basement",
    icon: Archive,
    description: "The archives. Where memories and lessons are stored.",
    mood: "Nostalgic & Deep",
    color: "from-espresso/20 to-espresso/5",
    activities: ["Memory review", "Old journal reading", "Lesson extraction"]
  },
  {
    id: "observatory",
    name: "Observatory",
    icon: Telescope,
    description: "Looking outward and upward. Dreaming of what could be.",
    mood: "Dreamy & Ambitious",
    color: "from-chart-5/20 to-chart-5/5",
    activities: ["Goal visualization", "Future planning", "Star gazing"]
  },
]

export function DigitalApartment() {
  const [activeRoom, setActiveRoom] = useState<Room>(rooms[0])
  const [timeOfDay, setTimeOfDay] = useState<"day" | "night">("day")

  return (
    <section id="apartment" className="py-16 px-4 bg-background paper-texture relative overflow-hidden">
      {/* Ambient background */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${
        timeOfDay === "night" ? "bg-espresso/10" : "bg-transparent"
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-leather/10 rounded-full mb-4">
            <Lamp className="w-4 h-4 text-leather" />
            <span className="text-sm font-medium text-leather tracking-wider uppercase">Inner Sanctuary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Digital Apartment
          </h2>
          <p className="mt-3 text-muted-foreground italic">
            Every room represents a part of your journey
          </p>
        </div>

        {/* Time toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-card rounded-full p-1 border border-border">
            <button
              onClick={() => setTimeOfDay("day")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                timeOfDay === "day" 
                  ? "bg-chart-4/20 text-chart-4" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span className="text-sm">Day Mode</span>
            </button>
            <button
              onClick={() => setTimeOfDay("night")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                timeOfDay === "night" 
                  ? "bg-mountain-blue/20 text-mountain-blue" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span className="text-sm">Night Mode</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Room Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-4 border border-border luxury-shadow">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 px-2">
                Rooms
              </h3>
              <div className="space-y-2">
                {rooms.map((room) => {
                  const Icon = room.icon
                  const isActive = activeRoom.id === room.id

                  return (
                    <button
                      key={room.id}
                      onClick={() => setActiveRoom(room)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        isActive 
                          ? "bg-leather/10 border border-leather/20" 
                          : "hover:bg-parchment border border-transparent"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-leather/20" : "bg-muted"
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-leather" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                          {room.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{room.mood}</p>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-leather" />}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Active Room Display */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl overflow-hidden border border-border luxury-shadow bg-gradient-to-br ${activeRoom.color}`}>
              {/* Room header */}
              <div className="p-8 border-b border-border/50">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <activeRoom.icon className="w-8 h-8 text-leather" />
                      <h3 className="text-3xl font-light text-foreground">{activeRoom.name}</h3>
                    </div>
                    <p className="text-muted-foreground max-w-md">
                      {activeRoom.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Mood</p>
                    <p className="text-lg font-medium text-foreground">{activeRoom.mood}</p>
                  </div>
                </div>
              </div>

              {/* Room content */}
              <div className="p-8">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  Activities in this space
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {activeRoom.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-leather/30 transition-colors cursor-pointer"
                    >
                      <p className="text-foreground font-medium">{activity}</p>
                    </div>
                  ))}
                </div>

                {/* Room ambiance */}
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Coffee className="w-4 h-4" />
                    <span className="text-sm">{timeOfDay === "day" ? "Morning coffee" : "Herbal tea"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Music className="w-4 h-4" />
                    <span className="text-sm">{timeOfDay === "day" ? "Ambient focus" : "Soft piano"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lamp className="w-4 h-4" />
                    <span className="text-sm">{timeOfDay === "day" ? "Natural light" : "Warm lamp"}</span>
                  </div>
                </div>
              </div>

              {/* Inspirational quote */}
              <div className="px-8 pb-8">
                <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                  <p className="text-center font-[family-name:var(--font-caveat)] text-xl text-muted-foreground">
                    {activeRoom.id === "living" && "\"Home is where the heart finds peace.\""}
                    {activeRoom.id === "study" && "\"The mind is not a vessel to be filled, but a fire to be kindled.\""}
                    {activeRoom.id === "bedroom" && "\"Sleep is the golden chain that ties health and our bodies together.\""}
                    {activeRoom.id === "balcony" && "\"In every walk with nature, one receives far more than he seeks.\""}
                    {activeRoom.id === "basement" && "\"Those who cannot remember the past are condemned to repeat it.\""}
                    {activeRoom.id === "observatory" && "\"Shoot for the moon. Even if you miss, you'll land among the stars.\""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
