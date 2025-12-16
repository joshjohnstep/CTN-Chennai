import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./ContactDialog";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/chennai_skyline_golden_hour.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply z-10" />
        <img
          src={heroBg}
          alt="Chennai Skyline"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 px-4 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            Chennai Transformation Network
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Whole Church. <br />
            Whole Gospel. <br />
            <span className="text-accent">Whole City.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            An Interdenominational and Intergenerational Movement for City
            Transformation. Connecting leaders from every sphere to catalyze change in Chennai.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <ContactDialog triggerText="Get Involved">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8" data-testid="button-get-involved">
                Get Involved
              </Button>
            </ContactDialog>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white group" asChild>
              <a href="#about">
                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
