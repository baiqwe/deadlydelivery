export interface QuestRewards {
  coins: number
  items: string[]
}

export interface Quest {
  id: string
  title: string
  type: string
  difficulty: string
  description: string
  objectives: string[]
  rewards: QuestRewards
  location: string
}

