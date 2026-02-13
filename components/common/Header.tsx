import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header className="py-5 border-b border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
              BB
            </div>
            <span className="font-bold hidden sm:inline">Bernard Bioco</span>
          </Link>
          {/* Navigations */}
          <nav>
            <ul className="flex items-center gap-8">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">About</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Projects</Link></li>
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <Button>Contact</Button>
          </div>
        </div>
      </div>
    </header>
  )
}