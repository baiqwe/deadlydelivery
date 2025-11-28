import { Card, CardContent } from '@/components/ui/card'
import { User, Award, BookOpen, CheckCircle } from 'lucide-react'

interface AuthorBioProps {
  authorName?: string
  authorRole?: string
  expertise?: string[]
  experience?: string
}

export function AuthorBio({ 
  authorName = "DeadlyBlox Team",
  authorRole = "Deadly Delivery Expert",
  expertise = ["Game Guides", "Code Verification", "Strategy Analysis"],
  experience = "100+ hours of gameplay experience"
}: AuthorBioProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/5 mt-8">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-foreground">{authorName}</h3>
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-3">{authorRole}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                <span>{experience}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Expertise: {expertise.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

