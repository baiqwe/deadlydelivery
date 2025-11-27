import { Metadata } from 'next'
import Link from 'next/link'
import questsDataRaw from '@/data/quests.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, ArrowRight, Trophy, Coins, Package, MapPin, AlertCircle } from 'lucide-react'
import type { Quest } from '@/types/quest'

const questsData = questsDataRaw as Quest[]
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Deadly Delivery Quests - Class Unlocks & Objectives | DeadlyBlox',
  description: 'Complete quest list for Deadly Delivery. Learn how to unlock classes, complete objectives, and earn rewards.',
  alternates: {
    canonical: '/quests',
  },
}

const difficultyColors = {
  Easy: 'bg-green-500/20 text-green-400 border-green-500/50',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
  Hard: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
  Extreme: 'bg-red-500/20 text-red-400 border-red-500/50',
}

const typeColors = {
  'Class Unlock': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
  'Main Objective': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'Side Challenge': 'bg-pink-500/20 text-pink-400 border-pink-500/50',
}

export default function QuestsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-horror text-primary">Quests & Objectives</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Complete quests to unlock classes, earn rewards, and progress through Deadly Delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {questsData.map((quest) => (
            <Card
              key={quest.id}
              className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{quest.title}</CardTitle>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${difficultyColors[quest.difficulty as keyof typeof difficultyColors] || difficultyColors.Medium}`}>
                    {quest.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${typeColors[quest.type as keyof typeof typeColors] || 'bg-gray-500/20 text-gray-400 border-gray-500/50'}`}>
                    {quest.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{quest.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Objectives */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Objectives
                  </h3>
                  <ul className="space-y-2">
                    {quest.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rewards */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Rewards
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {quest.rewards.coins > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 text-xs">
                        <Coins className="w-3 h-3" />
                        {quest.rewards.coins.toLocaleString()} Coins
                      </span>
                    )}
                    {quest.rewards.items.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/20 text-primary border border-primary/50 text-xs"
                      >
                        <Package className="w-3 h-3" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-white/5">
                  <MapPin className="w-4 h-4" />
                  <span>Location: {quest.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

