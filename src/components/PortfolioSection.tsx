import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import logo from "./images/MantraGuideIcon.png";
const projects = [
  // { title: "FinFlow Dashboard", category: "Web App", color: "from-primary/20 to-teal-light/10" },
  { title: "Mantra Guide", category: "Mobile App", color: "from-teal-light/20 to-primary/10" },
  // { title: "EduVerse Platform", category: "SaaS Product", color: "from-primary/15 to-teal-light/15" },
  // { title: "ShopCraft E-commerce", category: "Web Development", color: "from-teal-light/15 to-primary/20" },
  // { title: "TaskZen Productivity", category: "UI/UX Design", color: "from-primary/20 to-teal-light/5" },
  // { title: "DataVault Analytics", category: "Dashboard", color: "from-teal-light/10 to-primary/15" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">Our Work</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer hover:border-primary/30 transition-all hover:-translate-y-1"
          >
<div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-background/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

  {/* Top Preview Area */}
  <a
    href="https://play.google.com/store/apps/details?id=com.shitalsurya.MantraGuide&hl=en_IN"
    target="_blank"
    rel="noopener noreferrer"
    className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
  >
    <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300">

      {/* App Logo */}
      <img
        src={logo}
        alt="Mantra Guide"
        className="h-10 w-10 object-contain"
      />
  <h3 className="text-lg font-semibold text-primary">
      Mantra Guide
    </h3>
      {/* External Link */}
      <ExternalLink
        size={22}
        className="text-white/70 group-hover:text-white transition-colors"
      />
    </div>
  </a>

  {/* Content */}
  <div className="p-6 space-y-2">
  

    <p className="text-sm text-muted-foreground">
      Mobile App
    </p>

    {/* CTA */}
    <a
      href="https://play.google.com/store/apps/details?id=com.shitalsurya.MantraGuide&hl=en_IN"
      target="_blank"
      className="inline-flex items-center gap-2 text-sm text-primary mt-3 group-hover:gap-3 transition-all"
    >
      View Project →
    </a>
  </div>
</div>
            {/* <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-2xl bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ExternalLink className="text-foreground/60" size={24} />
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">{project.category}</p>
              <h3 className="font-display font-semibold">{project.title}</h3>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
