import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "🛍️",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "✓",
      link: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard with custom charts, real-time data sync, and export functionality.",
      tags: ["Next.js", "D3.js", "MongoDB"],
      image: "📊",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Feed",
      description: "Full-stack social platform with user authentication, feed algorithm, messaging, and image optimization.",
      tags: ["Next.js", "Node.js", "Redis", "AWS S3"],
      image: "📱",
      link: "#",
    },
    {
      id: 5,
      title: "Weather Prediction API",
      description: "RESTful API service for weather prediction using machine learning and historical data analysis.",
      tags: ["Node.js", "Python", "TensorFlow"],
      image: "🌤️",
      link: "#",
    },
    {
      id: 6,
      title: "Design System",
      description: "Comprehensive design system and component library used across multiple applications with full documentation.",
      tags: ["React", "TypeScript", "Storybook"],
      image: "🎨",
      link: "#",
    },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">My Projects</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A showcase of my recent work and side projects. Each project represents my commitment to quality and innovation.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative p-6 rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:border-primary/50 flex flex-col"
          >
            {/* Project Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{project.image}</div>

            {/* Project Content */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Button */}
            <a href={project.link}>
              <Button variant="ghost" className="w-full mt-auto group-hover:bg-primary/10">
                View Project →
              </Button>
            </a>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 p-12 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-accent/5 text-center space-y-6">
        <h2 className="text-3xl font-bold">Got an interesting project in mind?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always excited to collaborate on new and challenging projects. Let's build something amazing together!
        </p>
        <Button className="px-8 py-6 text-lg font-semibold">
          Start a Project
        </Button>
      </div>
    </div>
  );
}