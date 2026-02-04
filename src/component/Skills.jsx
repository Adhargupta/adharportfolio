import { Code2, Terminal, Database, Cpu } from "lucide-react";

export default function SkillsGrid() {
  const items = [
    {
      icon: Code2,
      title: "Frontend Logic",
      desc: "React, Tailwind, Framer Motion. I build interfaces that convert visitors into paying customers.",
    },
    {
      icon: Terminal,
      title: "Backend Systems",
      desc: "Node.js, Python (Flask/FastAPI). APIs designed to handle Black Friday traffic without crashing.",
    },
    {
      icon: Database,
      title: "Data Architecture",
      desc: "MongoDB, SQL. Optimized schemas because a slow database is a lost customer.",
    },
    {
      icon: Cpu,
      title: "Smart Automations",
      desc: "Scikit-learn, Pandas. Why hire more staff when code can do the work for you?",
    },
  ];

  return (
    <section className="border border-white/10 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 hover:bg-white/5 transition-colors"
            >
              <Icon className="h-7 w-7 text-primary mb-6 opacity-80" />

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
