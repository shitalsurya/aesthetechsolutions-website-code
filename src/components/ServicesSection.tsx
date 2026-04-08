import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Lightbulb, Rocket } from "lucide-react";

const services = [
  { icon: Palette, title: "Video Editing & Motion", desc: "We craft high-quality videos optimized for digital platforms and brand impact." },
  { icon: Globe, title: "3D Design & Visualization", desc: "High-quality 3D assets that add depth, realism, and innovation to your brand." },
  { icon: Smartphone, title: "Web & Mobile App Development", desc: "High-performance web applications and mobile apps that deliver seamless experiences across devices." },
  { icon: Lightbulb, title: "UI/UX Design & Product Strategy", desc: "From ideation to roadmap — we help define your digital product vision and go-to-market approach." },
  { icon: Rocket, title: "Graphic Design Services", desc: "We create impactful designs tailored for digital platforms, marketing campaigns, and brand communication." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Services That <span className="gradient-text">Drive Growth</span>
        </h2>
        <p className="text-muted-foreground">End-to-end digital solutions designed to transform your ideas into impactful products.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 group hover:border-primary/30 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
    <service.icon className="text-primary" size={22} />
  </div>

  <h3 className="font-display font-semibold text-lg">
    {service.title}
  </h3>
</div>
 {/* What We Offer */}
  {/* <p className="text-sm font-medium mb-2">
    ✅ What We Offer
  </p>
   <div className="text-sm font-semibold flex flex-wrap gap-x-2">
    <span>Thumbnail</span>
    <span>•</span>
    <span>Poster</span>
    <span>•</span>
    <span>Banner</span>
    <span>•</span>
    <span>Social Media Creatives</span>
  </div> */}
            {/* <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <service.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3> */}
            <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
