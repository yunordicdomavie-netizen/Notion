"use client"

import { useState } from "react"
import { Plane, CheckCircle2, Clock, AlertCircle, ChevronRight } from "lucide-react"

interface Goal {
  id: string
  destination: string
  gate: string
  status: "boarding" | "on-time" | "delayed" | "completed"
  progress: number
  eta: string
  notes: string
}

const goals: Goal[] = [
  {
    id: "1",
    destination: "German A2 Certification",
    gate: "A1",
    status: "boarding",
    progress: 65,
    eta: "Q3 2025",
    notes: "Duolingo streak: 47 days"
  },
  {
    id: "2",
    destination: "SQL Mastery",
    gate: "B2",
    status: "on-time",
    progress: 40,
    eta: "Q4 2025",
    notes: "Advanced queries in progress"
  },
  {
    id: "3",
    destination: "Psychology Knowledge",
    gate: "C3",
    status: "on-time",
    progress: 55,
    eta: "Ongoing",
    notes: "Reading: Thinking, Fast and Slow"
  },
  {
    id: "4",
    destination: "Financial Freedom",
    gate: "D1",
    status: "delayed",
    progress: 25,
    eta: "2028",
    notes: "Emergency fund: 60%"
  },
  {
    id: "5",
    destination: "Switzerland Trip",
    gate: "E5",
    status: "on-time",
    progress: 15,
    eta: "Summer 2026",
    notes: "Saving in progress..."
  },
]

const statusConfig = {
  boarding: { 
    icon: Plane, 
    color: "text-olive", 
    bg: "bg-olive/10", 
    label: "Boarding",
    borderColor: "border-olive/30"
  },
  "on-time": { 
    icon: Clock, 
    color: "text-mountain-blue", 
    bg: "bg-mountain-blue/10", 
    label: "On Time",
    borderColor: "border-mountain-blue/30"
  },
  delayed: { 
    icon: AlertCircle, 
    color: "text-chart-4", 
    bg: "bg-chart-4/10", 
    label: "Delayed",
    borderColor: "border-chart-4/30"
  },
  completed: { 
    icon: CheckCircle2, 
    color: "text-olive", 
    bg: "bg-olive/10", 
    label: "Arrived",
    borderColor: "border-olive/30"
  },
}

export function Terminal() {
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null)

  return (
    <section id="terminal" className="py-16 px-4 bg-card paper-texture">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-leather/10 rounded-full mb-4">
            <Plane className="w-4 h-4 text-leather" />
            <span className="text-sm font-medium text-leather tracking-wider uppercase">Life Departures</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            The Terminal
          </h2>
          <p className="mt-3 text-muted-foreground italic">
            Your life goals, departing soon
          </p>
        </div>

        {/* Departure Board */}
        <div className="bg-ivory rounded-lg overflow-hidden luxury-shadow border border-border">
          {/* Board Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-leather/5 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <div className="col-span-1">Gate</div>
            <div className="col-span-4">Destination</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-3">Progress</div>
            <div className="col-span-2 text-right">ETA</div>
          </div>

          {/* Goals List */}
          <div className="divide-y divide-border">
            {goals.map((goal) => {
              const status = statusConfig[goal.status]
              const StatusIcon = status.icon
              const isHovered = hoveredGoal === goal.id

              return (
                <div
                  key={goal.id}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center transition-all duration-300 cursor-pointer ${
                    isHovered ? "bg-parchment" : "hover:bg-parchment/50"
                  }`}
                  onMouseEnter={() => setHoveredGoal(goal.id)}
                  onMouseLeave={() => setHoveredGoal(null)}
                >
                  {/* Gate */}
                  <div className="col-span-1">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-leather/10 text-leather font-semibold text-sm">
                      {goal.gate}
                    </span>
                  </div>

                  {/* Destination */}
                  <div className="col-span-4">
                    <h3 className="font-medium text-foreground group-hover:text-leather transition-colors">
                      {goal.destination}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-[family-name:var(--font-caveat)] text-base">
                      {goal.notes}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color} border ${status.borderColor}`}>
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-leather rounded-full transition-all duration-500"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground w-10 text-right">
                        {goal.progress}%
                      </span>
                    </div>
                  </div>

                  {/* ETA */}
                  <div className="col-span-2 text-right flex items-center justify-end gap-2">
                    <span className="text-sm text-foreground font-medium">
                      {goal.eta}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom quote */}
        <p className="text-center mt-8 font-[family-name:var(--font-caveat)] text-xl text-muted-foreground">
          Every destination was once just a dream at the gate.
        </p>
      </div>
    </section>
  )
}
