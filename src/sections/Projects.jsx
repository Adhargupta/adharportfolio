import React, { useState } from 'react'
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "QuickBite",
    subtitle: "AI Food Decision Assistant",
    metric: "Under 30s Decisions",
    tag: "AI WEB APP",
    description:
      "QuickBite is an AI-powered food recommendation platform designed to help users decide what to eat in under 30 seconds. The landing experience focuses on bold visuals, smooth transitions, and clear CTAs. Users can discover meals based on cravings, time, and budget, with an intuitive flow, animated UI elements, and full mobile responsiveness.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "AI API"],
    image: "/projects/Project1.png",
    link: 'https://quickbites-seven.vercel.app/'
  },  
  {
    id: 2,
    title: "AI Powered Quiz App",
    subtitle: "Interactive Learning Tool",
    metric: "Smart Feedback System",
    tag: "EDTECH APP",
    description:
      "An interactive quiz application that generates questions with multiple options and gives instant visual feedback — green for correct, red for incorrect. Includes score tracking, back navigation, and an 'Ask AI' feature that explains the correct answer using AI when a user selects an option. Fully responsive and designed for learning-focused UX.",
    tech: ["React", "JavaScript", "Tailwind CSS", "AI API"],
    image: "/projects/Project2.png",
    link: 'https://quizs-lime.vercel.app'
  },
  {
    id: 3,
    title: "NewsMag – News Application",
    subtitle: "Real-time News Reader",
    metric: "Multi-Category Feed",
    tag: "NEWS PLATFORM",
    description:
      "A responsive news application that fetches and displays news across multiple categories including Technology, Business, Health, Sports, and Entertainment. Includes a search feature, category-based navigation, image previews, and redirects users to the original news source for full articles.",
    tech: ["React", "News API", "Tailwind CSS"],
    image: "/projects/Project4.png",
    link: 'https://newsapp-ten-psi.vercel.app'
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    subtitle: "Two Player Strategy Game",
    metric: "Winner Detection",
    tag: "GAME LOGIC",
    description:
      "A clean and minimal Tic Tac Toe game designed for two players. Players take turns by clicking on grid blocks, with the game automatically detecting wins, draws, and highlighting the winner. Focused on simple game logic, smooth interactions, and a distraction-free interface.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/projects/Project3.png",
    link: 'https://tictactoe-green-eight.vercel.app'
  },
];


function Projects() {
  const [active, setActive] = useState(projects[0]);
  return (
    <section id='projects' className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-18">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT LIST */}
          <div className="lg:col-span-5 space-y-2 animate-fade-in">
            {projects.map((project, idx) => {
              const isActive = active.id === project.id;

              return (
                <div
                  key={project.id}
                  onClick={() => setActive(project)}
                  className={`py-6 md:py-10 border-t border-white/10 cursor-pointer group transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-80 transition-transform duration-700"
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-3">
                    <h3
                      className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                        isActive ? "text-white" : "text-white/80"
                      }
                      group-hover:pl-2 md:group-hover:pl-2 transition-all duration-300`}
                    >
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-gray-500">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono text-green-400 group-hover:pl-2 md:group-hover:pl-2 transition-all duration-300 delay-75">
                      {project.subtitle}
                    </span>

                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-1 -translate-y-1"
                          : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT PREVIEW CARD */}
          <div className="lg:col-span-7">
            <div className="glass rounded-2xl overflow-hidden glow-border">
              {/* Image */}
              <div className="relative h-[380px] w-full overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />

                <div className="absolute bottom-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {active.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {active.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="font-mono text-xs text-green-400">
                    DEPLOYED_STATUS: LIVE
                  </span>
                    <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                    >
                      Visit Site <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Projects