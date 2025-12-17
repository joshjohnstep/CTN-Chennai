import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrackCard } from "@/components/TrackCard";
import { ContactDialog } from "@/components/ContactDialog";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { 
  Church, 
  Users, 
  Briefcase, 
  HeartHandshake, 
  Video, 
  BrainCircuit, 
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";

import communityImg from "@assets/generated_images/diverse_community_unity.png";
import youthImg from "@assets/generated_images/young_adults_collaborating.png";
import marketplaceImg from "@assets/generated_images/modern_marketplace_professionals.png";
import socialImg from "@assets/generated_images/compassionate_social_action.png";

export default function Home() {
  const tracks = [
    {
      title: "Movement of Churches",
      description: "Building unity and growth across the Body of Christ. Strengthening existing congregations and supporting new church plants.",
      icon: Church,
      image: communityImg
    },
    {
      title: "Movement of Prayer",
      description: "Uniting the city through prayer. Gathering across regions and denominations to intercede for our city and leaders.",
      icon: Sparkles,
      image: undefined 
    },
    {
      title: "Youth Track",
      description: "Empowering the next generation of leaders through sports, music, and discipleship programs.",
      icon: Users,
      image: youthImg
    },
    {
      title: "Marketplace Track",
      description: "Equipping professionals and entrepreneurs to integrate faith with work and transform their industries.",
      icon: Briefcase,
      image: marketplaceImg
    },
    {
      title: "CITYSERVE (MEET)",
      description: "Empowering the Church to engage meaningfully with the marginalised and vulnerable communities.",
      icon: HeartHandshake,
      image: socialImg
    },
    {
      title: "Media Track",
      description: "Bridging the gap between Church and community through creative storytelling and fresh content.",
      icon: Video,
      image: undefined
    },
    {
      title: "Mental Health Track",
      description: "Restoring hope and wholeness through mental health awareness, care, and early intervention.",
      icon: BrainCircuit,
      image: undefined
    }
  ];

  const stats = [
    { number: "7", label: "Transformation Tracks" },
    { number: "100+", label: "Partner Churches" },
    { number: "1000s", label: "Lives Impacted" },
    { number: "1", label: "United Vision" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <main>
        <Hero />

        {/* Stats Bar */}
        <section className="bg-primary py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif font-semibold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 font-light tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <span className="inline-block text-accent font-medium uppercase tracking-[0.2em] text-sm mb-6">
                  Our Vision
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-4xl md:text-6xl font-serif font-semibold text-primary mb-8 leading-tight">
                  Connect. Collaborate. Create.
                  <br />
                  <span className="text-accent italic">Catalyse. Celebrate.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-light max-w-3xl mx-auto">
                  We are a growing movement of Christian leaders from various spheres of influence in the city—from Churches, NGOs, the Marketplace, Government spaces, and other sectors. Our vision is that the Whole Church will take the Whole Gospel to the Whole City, resulting in a transformed Chennai.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tracks Grid */}
        <section id="tracks" className="py-24 md:py-32 bg-gradient-to-b from-secondary/20 to-secondary/40">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-20">
              <span className="text-accent font-medium uppercase tracking-[0.2em] text-sm">
                Our Focus Areas
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary mt-4">
                Transformation Tracks
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {tracks.map((track, index) => (
                <TrackCard 
                  key={index}
                  title={track.title}
                  description={track.description}
                  icon={track.icon}
                  image={track.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-8 leading-tight">
                  Ready to Transform
                  <br />
                  <span className="italic text-accent">Chennai?</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-xl text-primary-foreground/80 mb-10 font-light leading-relaxed">
                  Join us in our mission to bring unity, hope, and wholeness to our city. Whether you are a leader, professional, or student, there is a place for you.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <ContactDialog triggerText="Partner With Us">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white font-medium px-12 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group" 
                    data-testid="button-partner"
                  >
                    Partner With Us
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </ContactDialog>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white border-t border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-medium uppercase tracking-[0.2em] text-sm mb-4 block">
                Stay Updated
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-4">
                Stay Connected
              </h3>
              <p className="text-muted-foreground mb-10 font-light text-lg">
                Subscribe to our newsletter to receive updates on events, opportunities, and stories of transformation happening across Chennai.
              </p>
              <div className="flex justify-center">
                <NewsletterSignup />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-950 text-white py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <div className="text-3xl font-serif font-semibold text-white tracking-tight mb-6">
                    CTN<span className="text-accent">.</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light">
                    An Interdenominational and Intergenerational Movement for City Transformation in Chennai.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-6 text-white uppercase tracking-[0.15em]">Contact Us</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <MapPin className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-light">Chennai, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-light">contact@ctnchennai.org</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-4 h-4 text-accent" />
                      </div>
                      <span className="font-light">+91 98765 43210</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-6 text-white uppercase tracking-[0.15em]">Quick Links</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li>
                      <a href="#about" className="hover:text-accent transition-colors font-light flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#tracks" className="hover:text-accent transition-colors font-light flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                        Our Tracks
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-accent transition-colors font-light flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Chennai Transformation Network. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
