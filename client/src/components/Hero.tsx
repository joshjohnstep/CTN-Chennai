import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroVideo from "@assets/generated_videos/chennai_aerial_golden_hour.mp4";
import heroBg from "@assets/generated_images/chennai_skyline_golden_hour.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Animated Grain Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="container relative z-20 px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block py-2 px-4 rounded-full bg-white/10 text-white/90 border border-white/20 text-xs font-medium uppercase tracking-[0.2em] mb-8 backdrop-blur-sm"
          >
            Chennai Transformation Network
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white leading-[1.1] mb-8 tracking-tight"
          >
            Whole Church.
            <br />
            Whole Gospel.
            <br />
            <span className="text-accent italic">Whole City.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light"
          >
            An Interdenominational and Intergenerational Movement for City
            Transformation. Connecting leaders from every sphere to catalyze lasting change in Chennai.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ContactDialog triggerText="Get Involved">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]" 
                data-testid="button-get-involved"
              >
                Get Involved
              </Button>
            </ContactDialog>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:text-white font-medium px-8 py-6 text-base transition-all duration-300 group" 
              asChild
            >
              <a href="#about">
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
