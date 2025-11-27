import Link from 'next/link'
import type { Item } from '@/types/item'

interface ItemTableProps {
  items: Item[]
}

export default function ItemTable({ items }: ItemTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-card/50 backdrop-blur-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-black/30 border-b border-white/10">
            <th className="px-6 py-3 text-left text-xs font-medium text-primary-foreground uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary-foreground uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary-foreground uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary-foreground uppercase tracking-wider">
              Rarity
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {items.map((item) => (
            <tr key={item.slug} className="hover:bg-black/20 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href={`/item/${item.slug}`}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                {item.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                {item.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                  {item.stats.rarity || 'Common'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

