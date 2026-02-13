import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function HomePage() {
  return (
    <div className="py-20 min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        {/* Left Side - Text */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground tracking-wide">Welcome to my portfolio</p>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Bernard Bioco
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Full-stack developer & creative designer crafting beautiful, functional digital experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 items-center pt-4 flex-wrap">
            <Link href="/projects">
              <Button className="px-8 py-6 text-lg font-semibold">
                View My Work
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-6 text-lg font-semibold">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-border shadow-xl">
          <Image
            src="/bernard.jpg"
            alt="Bernard Bioco"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Featured Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-2xl">
        <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
          <p className="text-3xl font-bold text-primary">50+</p>
          <p className="text-muted-foreground mt-2">Projects Completed</p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
          <p className="text-3xl font-bold text-primary">5+</p>
          <p className="text-muted-foreground mt-2">Years Experience</p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
          <p className="text-3xl font-bold text-primary">100%</p>
          <p className="text-muted-foreground mt-2">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
}