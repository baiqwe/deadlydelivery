import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 mt-auto py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-horror text-primary mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="space-y-2 text-sm">
              {siteConfig.links.twitter && (
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  Twitter
                </a>
              )}
              {siteConfig.links.github && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2">Not affiliated with Roblox Corporation or Flat Head Studio.</p>
        </div>
      </div>
    </footer>
  )
}

