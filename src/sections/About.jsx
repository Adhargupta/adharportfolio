import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import React from 'react'
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];
function About() {
  return (
    <section id='about' className='min-h-screen py-20 relative overflow-hidden'>
    <div className='container mx-auto px-6 relative z-10'>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* left Column */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white">
              {" "}
              one component at a time.
            </span>
          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I'm a frontend developer who genuinely enjoys the process of turning simple
              ideas into meaningful digital experiences. What started as curiosity about
              how websites are built slowly became a habit of learning, experimenting,
              and building things from scratch.
            </p>
            <p>
              I primarily work with React, modern JavaScript, and Tailwind CSS, and I love
              the challenge of creating interfaces that feel smooth, thoughtful, and easy
              to use. For me, good code isn’t just about functionality — it’s about
              clarity, maintainability, and the experience it creates for the user.
            </p>
            <p>
              Outside of coding, I spend time exploring new tools, refining my skills
              through personal projects, and learning from the developer community. I’m
              someone who values steady growth, curiosity, and the discipline of getting
              a little better every day.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My goal is to build digital experiences that feel simple, thoughtful, and
              genuinely enjoyable — products that solve real problems and code that
              remains easy to understand and improve."
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </div>
    </section>
  )
}

export default About