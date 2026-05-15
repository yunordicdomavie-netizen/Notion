"use client"

import { useState, useEffect } from "react"
import { Coffee, BookOpen, Code, Dumbbell, Moon, Sun, CheckCircle2, Circle, Timer, PenLine } from "lucide-react"

interface TimeBlock {
  id: string
  time: string
  activity: string
  icon: React.ElementType
  duration: string
  completed: boolean
}

interface Task {
  id: string
  text: string
  completed: boolean
  priority: "high" | "medium" | "low"
}

interface Habit {
  id: string
  name: string
  streak: number
  completed: boolean
}

const timeBlocks: TimeBlock[] = [
  { id: "1", time: "06:00", activity: "Morning Routine", icon: Sun, duration: "1h", completed: true },
  { id: "2", time: "07:00", activity: "Deep Work - German", icon: BookOpen, duration: "2h", completed: true },
  { id: "3", time: "09:00", activity: "Coffee Break", icon: Coffee, duration: "30m", completed: true },
  { id: "4", time: "09:30", activity: "SQL Practice", icon: Code, duration: "2h", completed: false },
  { id: "5", time: "12:00", activity: "Lunch & Rest", icon: Coffee, duration: "1h", completed: false },
  { id: "6", time: "13:00", activity: "Deep Work - Projects", icon: Code, duration: "3h", completed: false },
  { id: "7", time: "16:00", activity: "Exercise", icon: Dumbbell, duration: "1h", completed: false },
  { id: "8", time: "17:00", activity: "Reading", icon: BookOpen, duration: "1h", completed: false },
  { id: "9", time: "22:00", activity: "Wind Down", icon: Moon, duration: "1h", completed: false },
]

const initialTasks: Task[] = [
  { id: "1", text: "Complete SQL Chapter 5", completed: false, priority: "high" },
  { id: "2", text: "Review German vocabulary", completed: true, priority: "high" },
  { id: "3", text: "Journal entry for today", completed: false, priority: "medium" },
  { id: "4", text: "Update budget spreadsheet", completed: false, priority: "medium" },
  { id: "5", text: "Read 20 pages", completed: false, priority: "low" },
]

const initialHabits: Habit[] = [
  { id: "1", name: "German", streak: 47, completed: true },
  { id: "2", name: "Exercise", streak: 12, completed: false },
  { id: "3", name: "Journal", streak: 23, completed: false },
  { id: "4", name: "Reading", streak: 8, completed: true },
  { id: "5", name: "Meditation", streak: 5, completed: false },
]

export function DailyOS() {
  const [tasks, setTasks] = useState(initialTasks)
  const [habits, setHabits] = useState(initialHabits)
  const [focusTime, setFocusTime] = useState(25 * 60) // 25 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning && focusTime > 0) {
      interval = setInterval(() => {
        setFocusTime((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, focusTime])

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h))
  }

  const priorityColors = {
    high: "border-l-destructive",
    medium: "border-l-chart-4",
    low: "border-l-olive",
  }

  return (
    <section id="daily" className="py-16 px-4 bg-background paper-texture relative">
      {/* Coffee stain decoration */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-leather/5 blur-sm" />
      <div className="absolute bottom-32 left-16 w-16 h-16 rounded-full bg-leather/8 blur-sm" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Daily Operating System
          </h2>
          <p className="mt-3 text-muted-foreground italic font-[family-name:var(--font-caveat)] text-xl">
            A calm day, intentionally designed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Timeline */}
          <div className="bg-card rounded-lg p-6 luxury-shadow border border-border">
            <h3 className="text-xl font-medium text-foreground mb-6 flex items-center gap-2">
              <Timer className="w-5 h-5 text-leather" />
              Today&apos;s Flow
            </h3>

            <div className="space-y-1">
              {timeBlocks.map((block, index) => {
                const Icon = block.icon
                const isActive = index === 3 // Current block

                return (
                  <div
                    key={block.id}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                      isActive 
                        ? "bg-leather/10 border border-leather/20" 
                        : block.completed 
                          ? "opacity-60" 
                          : "hover:bg-parchment/50"
                    }`}
                  >
                    {/* Time */}
                    <div className="w-14 text-sm font-medium text-muted-foreground">
                      {block.time}
                    </div>

                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      block.completed ? "bg-olive/20" : isActive ? "bg-leather/20" : "bg-muted"
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        block.completed ? "text-olive" : isActive ? "text-leather" : "text-muted-foreground"
                      }`} />
                    </div>

                    {/* Activity */}
                    <div className="flex-1">
                      <p className={`font-medium ${block.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {block.activity}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="text-sm text-muted-foreground">
                      {block.duration}
                    </div>

                    {/* Status */}
                    {block.completed && (
                      <CheckCircle2 className="w-4 h-4 text-olive" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Tasks & Focus */}
          <div className="space-y-6">
            {/* Focus Timer */}
            <div className="bg-ivory rounded-lg p-6 luxury-shadow border border-border text-center">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Focus Session
              </h3>
              <div className="text-6xl font-light text-leather tracking-widest mb-4">
                {formatTimer(focusTime)}
              </div>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="px-8 py-3 bg-leather text-primary-foreground rounded-lg hover:bg-espresso transition-colors luxury-shadow font-medium"
              >
                {isTimerRunning ? "Pause" : "Start Focus"}
              </button>
            </div>

            {/* Today's Tasks */}
            <div className="bg-card rounded-lg p-6 luxury-shadow border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4 flex items-center gap-2">
                <PenLine className="w-5 h-5 text-leather" />
                Today&apos;s Tasks
              </h3>

              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-l-4 cursor-pointer transition-all hover:bg-parchment/50 ${
                      priorityColors[task.priority]
                    } ${task.completed ? "opacity-60" : ""}`}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-olive flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={`flex-1 ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Habit Tracker */}
            <div className="bg-card rounded-lg p-6 luxury-shadow border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Daily Habits
              </h3>

              <div className="grid grid-cols-5 gap-3">
                {habits.map((habit) => (
                  <button
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                      habit.completed 
                        ? "bg-olive/10 border-olive/30" 
                        : "bg-background border-border hover:border-leather/30"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      habit.completed ? "bg-olive/20" : "bg-muted"
                    }`}>
                      {habit.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-olive" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-foreground">{habit.name}</span>
                    <span className="text-xs text-muted-foreground">{habit.streak} days</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journal Reminder */}
        <div className="mt-8 bg-parchment rounded-lg p-6 border border-border text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-leather/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <PenLine className="w-8 h-8 text-leather mx-auto mb-3" />
          <p className="text-lg text-foreground font-medium">Evening Journal Reminder</p>
          <p className="text-muted-foreground mt-1 font-[family-name:var(--font-caveat)] text-lg">
            &ldquo;What did you learn today? What are you grateful for?&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
