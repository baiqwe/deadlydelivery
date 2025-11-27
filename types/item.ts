export interface Item {
  slug: string
  name: string
  location: string
  type: string
  description: string
  stats: Record<string, string | undefined>
}

