"use client"

import { useState } from "react"
import { Zap, Heart, MessageCircle, BookOpen, Shield, Sparkles } from "lucide-react"

interface Stat {
  id: string
  name: string
  icon: React.ElementType
  level: number
  exp: number
  maxExp: number
  color: string
}

const stats: Stat[] = [
  { id: "1", name: "Discipline", icon: Shield, level: 12, exp: 340, maxExp: 500, color: "bg-leather" },
  { id: "2", name: "Confidence", icon: Zap, level: 8, exp: 180, maxExp: 400, color: "bg-olive" },
  { id: "3", name: "Communication", icon: MessageCircle, level: 6, exp: 220, maxExp: 350, color: "bg-mountain-blue" },
  { id: "4", name: "Knowledge", icon: BookOpen, level: 15, exp: 420, maxExp: 600, color: "bg-chart-4" },
  { id: "5", name: "Emotional Intelligence", icon: Heart, level: 9, exp: 280, maxExp: 450, color: "bg-destructive/70" },
  { id: "6", name: "Creativity", icon: Sparkles, level: 7, exp: 150, maxExp: 300, color: "bg-chart-5" },
]

const recentAchievements = [
  { title: "Early Bird", description: "Woke up before 6 AM for 7 days straight", exp: "+50 Discipline" },
  { title: "Bookworm", description: "Finished 3 books this month", exp: "+80 Knowledge" },
  { title: "Deep Thinker", description: "30 journal entries completed", exp: "+40 Emotional Intelligence" },
]

export function LifeRPG() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)

  // Calculate overall level
  const totalExp = stats.reduce((acc, stat) => acc + stat.exp, 0)
  const overallLevel = Math.floor(totalExp / 300)

  return (
    <section id="rpg" className="py-16 px-4 bg-card paper-texture">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-olive" />
            <span className="text-sm font-medium text-olive tracking-wider uppercase">Character Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Life RPG
          </h2>
          <p className="mt-3 text-muted-foreground italic">
            Level up your reality
          </p>
        </div>

        {/* Character Card */}
        <div className="bg-ivory rounded-xl p-8 luxury-shadow border border-border mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Character Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-parchment to-leather/20 flex items-center justify-center border-4 border-leather/30">
                <span className="text-5xl font-light text-leather">W</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-leather text-primary-foreground rounded-full text-sm font-medium">
                Lvl {overallLevel}
              </div>
            </div>

            {/* Character Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-foreground">The Wanderer</h3>
              <p className="text-muted-foreground mt-1">Class: Knowledge Seeker</p>
              <p className="text-sm text-muted-foreground mt-2 font-[family-name:var(--font-caveat)] text-lg">
                &ldquo;Building a life worth living, one day at a time.&rdquo;
              </p>

              {/* Overall EXP Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Total Experience</span>
                  <span>{totalExp} / {(overallLevel + 1) * 300} EXP</span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-leather to-olive rounded-full transition-all duration-500"
                    style={{ width: `${(totalExp % 300) / 300 * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            const isHovered = hoveredStat === stat.id
            const percentage = (stat.exp / stat.maxExp) * 100

            return (
              <div
                key={stat.id}
                className={`bg-background rounded-lg p-5 border border-border transition-all duration-300 cursor-pointer ${
                  isHovered ? "luxury-shadow scale-[1.02]" : "hover:border-leather/30"
                }`}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${stat.color}/10 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{stat.name}</h4>
                      <p className="text-xs text-muted-foreground">Level {stat.level}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-light text-leather">{stat.level}</span>
                </div>

                {/* EXP Bar */}
                <div className="relative">
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stat.color} rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>{stat.exp} EXP</span>
                    <span>{stat.maxExp} EXP</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Recent Achievements */}
        <div className="bg-parchment rounded-lg p-6 border border-border">
          <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-chart-4" />
            Recent Achievements
          </h3>

          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-background rounded-lg border border-border hover:border-leather/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-chart-4" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
                <span className="text-sm font-medium text-olive">{achievement.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
