import React, { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    period: "2026 — Present",
    role: "Fullstack Developer",
    company: "Personal Projects & Practice",
    description:
      "Actively building and improving fullstack applications using React and modern JavaScript. Focused on creating responsive UIs, clean component architecture, and improving problem-solving skills through real-world projects.",
    technologies: ["React", "AI integration", "Tailwind CSS","Node.js","Next.js"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Front-end Developer",
    company: "Academic & Personal Projects",
    description:
      "Developed multiple frontend projects including a quiz application, a news platform, and interactive landing pages. Gained hands-on experience with component design, state management, and responsive layouts.",
    technologies: ["React", "Git", "AI Integration"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "Web Development Learner",
    company: "Self-Learning Journey",
    description:
      "Learned the fundamentals of web development including HTML, CSS, and JavaScript. Built small applications and practiced core concepts such as DOM manipulation, layouts, and basic application logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "2023 — 2024",
    role: "Programming Beginner",
    company: "Foundations & Practice",
    description:
      "Started programming with a focus on understanding core concepts, logic building, and basic problem solving. Practiced regularly through small exercises and beginner projects to build a strong foundation.",
    technologies: ["C++", "Basic Algorithms", "Problem Solving","Python"],
    current: false,
  },
];

function Experience() {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      
      // Start animation when section enters viewport
      if (sectionTop < windowHeight && sectionBottom > 0) {
        // Calculate scroll progress through the section
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - sectionTop) / (windowHeight + sectionRect.height)
        ));

        // Set timeline height based on scroll progress
        const maxHeight = timelineRef.current.scrollHeight;
        setTimelineHeight(scrollProgress * maxHeight);

        // Show items progressively based on scroll
        const itemsToShow = Math.floor(scrollProgress * experiences.length * 1.5);
        const newVisibleItems = experiences.map((_, idx) => idx < itemsToShow);
        setVisibleItems(newVisibleItems);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-teal-400 text-sm font-medium tracking-wider uppercase">
            My Learning Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-teal-400">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              grows with every project.
            </span>
          </h2>

          <p className="text-gray-400">
            A timeline of my growth as a developer, from learning the fundamentals to
            building real-world projects and steadily improving my skills through
            hands-on practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div 
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-teal-500/70 via-teal-500/30 to-transparent md:-translate-x-1/2 transition-all duration-300 ease-out"
            style={{ 
              height: `${timelineHeight}px`,
              boxShadow: '0 0 40px rgba(20, 184, 166, 0.35), 0 0 80px rgba(20, 184, 166, 0.25)'
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative grid md:grid-cols-2 gap-8 transition-all duration-700 ${
                  visibleItems[idx] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-teal-500 rounded-full -translate-x-1/2 ring-4 ring-gray-900 z-10 transition-all duration-500 ${
                    visibleItems[idx] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${idx * 100 + 200}ms`
                  }}
                >
                  {exp.current && visibleItems[idx] && (
                    <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 hover:bg-gray-800/70">
                    <span className="text-sm text-teal-500 font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-400 mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;