import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-horror text-primary mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Oops! The page you&apos;re looking for has been devoured by monsters. 
          Don&apos;t worry, we&apos;ll help you get back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Button>
          </Link>
          <Link href="/guide">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Search className="mr-2 h-5 w-5" />
              View Guide
            </Button>
          </Link>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold mb-4 text-primary">Popular Pages:</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Deadly Delivery Codes - Latest Active Codes
              </Link>
            </li>
            <li>
              <Link href="/guide" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Deadly Delivery Guide & Wiki
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

