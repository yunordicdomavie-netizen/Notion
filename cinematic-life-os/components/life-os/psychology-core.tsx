"use client"

import { useState } from "react"
import { Brain, Heart, Cloud, Moon, Flame, TrendingUp, TrendingDown, Minus, PenLine, Lightbulb, AlertTriangle } from "lucide-react"

interface EmotionEntry {
  day: string
  emotion: "great" | "good" | "neutral" | "low" | "struggling"
  note: string
}

interface Thought {
  id: string
  time: string
  content: string
  category: "overthinking" | "insight" | "worry" | "gratitude"
}

const weekEmotions: EmotionEntry[] = [
  { day: "Mon", emotion: "good", note: "Productive morning" },
  { day: "Tue", emotion: "great", note: "Breakthrough with German" },
  { day: "Wed", emotion: "neutral", note: "Tired but steady" },
  { day: "Thu", emotion: "low", note: "Overwhelmed by tasks" },
  { day: "Fri", emotion: "good", note: "Good study session" },
  { day: "Sat", emotion: "great", note: "Rest and reflection" },
  { day: "Sun", emotion: "good", note: "Prepared for the week" },
]

const emotionConfig = {
  great: { color: "bg-olive", height: "h-20", label: "Great" },
  good: { color: "bg-mountain-blue", height: "h-16", label: "Good" },
  neutral: { color: "bg-chart-4", height: "h-12", label: "Neutral" },
  low: { color: "bg-leather/70", height: "h-8", label: "Low" },
  struggling: { color: "bg-destructive/60", height: "h-4", label: "Struggling" },
}

const lateNightThoughts: Thought[] = [
  { id: "1", time: "2:14 AM", content: "What if I never become fluent in German? What if all this effort is for nothing?", category: "overthinking" },
  { id: "2", time: "1:47 AM", content: "Realized that growth is not linear. Bad days are part of the process.", category: "insight" },
  { id: "3", time: "3:02 AM", content: "The future feels uncertain. Will I ever feel truly at peace?", category: "worry" },
  { id: "4", time: "11:58 PM", content: "Grateful for this quiet space to rebuild myself.", category: "gratitude" },
]

const thoughtConfig = {
  overthinking: { icon: Cloud, color: "text-mountain-blue", bg: "bg-mountain-blue/10" },
  insight: { icon: Lightbulb, color: "text-chart-4", bg: "bg-chart-4/10" },
  worry: { icon: AlertTriangle, color: "text-leather", bg: "bg-leather/10" },
  gratitude: { icon: Heart, color: "text-olive", bg: "bg-olive/10" },
}

const psychMetrics = [
  { label: "Overthinking Level", value: 65, trend: "down", change: -12 },
  { label: "Attachment Healing", value: 45, trend: "up", change: 8 },
  { label: "Burnout Risk", value: 35, trend: "stable", change: 0 },
  { label: "Inner Peace", value: 58, trend: "up", change: 15 },
]

export function PsychologyCore() {
  const [activeThought, setActiveThought] = useState<string | null>(null)

  return (
    <section id="psychology" className="py-16 px-4 bg-espresso/5 relative overflow-hidden">
      {/* Ambient lighting effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-chart-4/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-mountain-blue/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-leather/10 rounded-full mb-4">
            <Brain className="w-4 h-4 text-leather" />
            <span className="text-sm font-medium text-leather tracking-wider uppercase">Inner World</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Psychology Core
          </h2>
          <p className="mt-3 text-muted-foreground italic font-[family-name:var(--font-caveat)] text-xl">
            Understanding the self, one thought at a time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Emotion Tracker */}
          <div className="lg:col-span-2 bg-card rounded-xl p-6 luxury-shadow border border-border">
            <h3 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-destructive/70" />
              Emotional Landscape
            </h3>

            {/* Week View */}
            <div className="flex items-end justify-between gap-2 h-32 mb-4">
              {weekEmotions.map((entry, index) => {
                const config = emotionConfig[entry.emotion]
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-full ${config.height} ${config.color} rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer`}
                      title={entry.note}
                    />
                    <span className="text-xs text-muted-foreground mt-2">{entry.day}</span>
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 justify-center text-xs">
              {Object.entries(emotionConfig).map(([key, config]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${config.color}`} />
                  <span className="text-muted-foreground">{config.label}</span>
                </div>
              ))}
            </div>

            {/* Psych Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {psychMetrics.map((metric, index) => (
                <div key={index} className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <div className={`flex items-center gap-1 text-xs ${
                      metric.trend === "up" ? "text-olive" : 
                      metric.trend === "down" ? "text-mountain-blue" : "text-muted-foreground"
                    }`}>
                      {metric.trend === "up" && <TrendingUp className="w-3 h-3" />}
                      {metric.trend === "down" && <TrendingDown className="w-3 h-3" />}
                      {metric.trend === "stable" && <Minus className="w-3 h-3" />}
                      {metric.change !== 0 && (metric.change > 0 ? `+${metric.change}%` : `${metric.change}%`)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          metric.value > 60 ? "bg-destructive/60" : 
                          metric.value > 40 ? "bg-chart-4" : "bg-olive"
                        }`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground w-10">{metric.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thoughts at 2AM */}
          <div className="bg-espresso/10 rounded-xl p-6 luxury-shadow border border-leather/20">
            <h3 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2">
              <Moon className="w-5 h-5 text-mountain-blue" />
              Thoughts at 2AM
            </h3>

            <div className="space-y-4">
              {lateNightThoughts.map((thought) => {
                const config = thoughtConfig[thought.category]
                const Icon = config.icon
                const isActive = activeThought === thought.id

                return (
                  <div
                    key={thought.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      isActive 
                        ? "bg-background border-leather/30" 
                        : "bg-background/50 border-border hover:border-leather/20"
                    }`}
                    onClick={() => setActiveThought(isActive ? null : thought.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-4 h-4 ${config.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {thought.content}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 font-[family-name:var(--font-caveat)]">
                          {thought.time}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Add thought button */}
            <button className="w-full mt-4 py-3 border border-dashed border-leather/30 rounded-lg text-muted-foreground hover:text-foreground hover:border-leather/50 transition-colors flex items-center justify-center gap-2">
              <PenLine className="w-4 h-4" />
              <span className="text-sm">Capture a thought...</span>
            </button>
          </div>
        </div>

        {/* Reflection prompt */}
        <div className="mt-8 bg-parchment/50 rounded-lg p-6 border border-border text-center">
          <Flame className="w-8 h-8 text-chart-4 mx-auto mb-3" />
          <p className="text-lg text-foreground font-medium">Today&apos;s Reflection</p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            &ldquo;What pattern have you noticed in your thoughts this week? 
            What would you tell your younger self about how you&apos;re handling things?&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
