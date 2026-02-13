import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
                BB
              </div>
              <h3 className="font-bold text-lg">Bernard Bioco</h3>
            </div>
            <p className="text-sm text-muted-foreground">Full-stack developer crafting beautiful digital experiences</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">📍 Cebu, Philippines</li>
              <li><a href="mailto:hi@bernardbioco.com" className="text-muted-foreground hover:text-foreground transition-colors">📧 hi@bernardbioco.com</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Bernard Bioco. All rights reserved.</p>
            <p>Crafted with ✨ and ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
}