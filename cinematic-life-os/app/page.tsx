import { Sidebar } from "@/components/life-os/sidebar"
import { HeroCollage } from "@/components/life-os/hero-collage"
import { Terminal } from "@/components/life-os/terminal"
import { DailyOS } from "@/components/life-os/daily-os"
import { LifeRPG } from "@/components/life-os/life-rpg"
import { PsychologyCore } from "@/components/life-os/psychology-core"
import { SecondBrain } from "@/components/life-os/second-brain"
import { LifeFeed } from "@/components/life-os/life-feed"
import { WorldExploration } from "@/components/life-os/world-exploration"
import { DigitalApartment } from "@/components/life-os/digital-apartment"

export default function LifeOSPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72">
        {/* Hero Scrapbook Collage */}
        <HeroCollage />

        {/* The Terminal - Departure Board */}
        <Terminal />

        {/* Daily Operating System */}
        <DailyOS />

        {/* Life RPG - Character Development */}
        <LifeRPG />

        {/* Psychology Core */}
        <PsychologyCore />

        {/* Second Brain - Knowledge Archive */}
        <SecondBrain />

        {/* Life Feed - Visual Diary */}
        <LifeFeed />

        {/* World Exploration - Travel Dreams */}
        <WorldExploration />

        {/* Digital Apartment - Emotional Rooms */}
        <DigitalApartment />

        {/* Footer */}
        <footer className="py-12 px-4 bg-espresso/5 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-[family-name:var(--font-caveat)] text-2xl text-muted-foreground mb-2">
              &ldquo;The best time to plant a tree was 20 years ago. The second best time is now.&rdquo;
            </p>
            <p className="text-sm text-muted-foreground">
              Life OS — Your cinematic journey to becoming
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
