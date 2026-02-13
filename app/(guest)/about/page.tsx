export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
      </div>

      {/* Bio Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm <span className="font-semibold text-foreground">Bernard Bioco</span>, a passionate full-stack developer with a keen eye for design. I specialize in creating elegant, performant web applications that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 5 years of experience in web development, I've had the privilege of working with startups and established companies to bring their visions to life. I believe in writing clean, maintainable code and crafting intuitive user experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-80 flex items-center justify-center border border-border">
          <div className="text-center space-y-4">
            <div className="text-6xl">👨‍💻</div>
            <p className="text-muted-foreground">Full-Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">My Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "✨", title: "Quality First", desc: "I prioritize code quality and user experience above all" },
            { icon: "🚀", title: "Innovation", desc: "Always exploring new technologies and best practices" },
            { icon: "🤝", title: "Collaboration", desc: "Believing in the power of teamwork and communication" },
            { icon: "🎯", title: "User-Centric", desc: "Every decision is made with the end-user in mind" },
          ].map((value) => (
            <div key={value.title} className="p-6 rounded-lg border border-border bg-card">
              <p className="text-4xl mb-3">{value.icon}</p>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}