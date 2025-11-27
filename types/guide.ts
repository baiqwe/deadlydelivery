export interface GuideContent {
  section: string
  text: string
}

export interface Guide {
  slug: string
  title: string
  category: string
  difficulty: string
  author: string
  lastUpdated: string
  description: string
  content: GuideContent[]
  tags: string[]
}

