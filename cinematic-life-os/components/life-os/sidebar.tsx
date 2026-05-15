"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Home, 
  Target, 
  Calendar, 
  Sparkles, 
  Brain, 
  BookOpen, 
  Camera, 
  Globe, 
  Building2,
  Cloud,
  Sun,
  CloudRain,
  Music,
  Play,
  Pause
} from "lucide-react"

const navItems = [
  { icon: Home, label: "Overview", id: "overview" },
  { icon: Target, label: "The Terminal", id: "terminal" },
  { icon: Calendar, label: "Daily OS", id: "daily" },
  { icon: Sparkles, label: "Life RPG", id: "rpg" },
  { icon: Brain, label: "Psychology", id: "psychology" },
  { icon: BookOpen, label: "Second Brain", id: "brain" },
  { icon: Camera, label: "Life Feed", id: "feed" },
  { icon: Globe, label: "World", id: "world" },
  { icon: Building2, label: "Apartment", id: "apartment" },
]

export function Sidebar() {
  const [time, setTime] = useState(new Date())
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric' 
    })
  }

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-sidebar paper-texture border-r border-sidebar-border flex flex-col z-50">
      {/* Profile Section */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-leather luxury-shadow">
              <Image 
                src="/images/profile.jpg" 
                alt="Profile" 
                width={64} 
                height={64}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-olive rounded-full border-2 border-sidebar" />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-sidebar-foreground">Wanderer</h2>
            <p className="text-sm text-muted-foreground italic">Building tomorrow</p>
          </div>
        </div>
        <blockquote className="text-sm italic text-muted-foreground border-l-2 border-leather pl-3 py-1">
          &ldquo;The journey of a thousand miles begins with a single step.&rdquo;
        </blockquote>
      </div>

      {/* Digital Clock */}
      <div className="px-6 py-4 border-b border-sidebar-border bg-sidebar-accent/30">
        <div className="text-center">
          <div className="text-4xl font-light tracking-widest text-leather">
            {formatTime(time)}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {formatDate(time)}
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="px-6 py-3 border-b border-sidebar-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-chart-4" />
          <span className="text-sm text-sidebar-foreground">22°C</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Cloud className="w-4 h-4" />
          <span>Partly cloudy</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-sidebar-accent text-sidebar-foreground luxury-shadow"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className={`w-4 h-4 ${activeSection === item.id ? "text-leather" : ""}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Focus Playlist */}
      <div className="p-4 border-t border-sidebar-border bg-sidebar-accent/20">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-leather flex items-center justify-center hover:bg-espresso transition-colors luxury-shadow"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-primary-foreground" />
            ) : (
              <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
            )}
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Focus Playlist</p>
            <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
              <Music className="w-3 h-3" />
              Rainy Day Study Session
            </p>
          </div>
        </div>
        {isPlaying && (
          <div className="mt-3 flex gap-0.5 items-end h-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-olive rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
