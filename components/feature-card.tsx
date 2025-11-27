import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureCardProps {
  title: string
  description: string
  icon?: string
  href?: string
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  const content = (
    <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 h-full group cursor-pointer">
      <CardContent className="p-6">
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

