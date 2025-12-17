import { motion } from "framer-motion";
import { 
  LucideIcon, 
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface TrackCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  index: number;
}

export function TrackCard({ title, description, icon: Icon, image, index }: TrackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Card className="group overflow-hidden h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col bg-white">
        <div className="relative h-52 overflow-hidden bg-muted">
          <motion.div 
            className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-all duration-500 z-10"
            whileHover={{ opacity: 0.5 }}
          />
          {image ? (
            <motion.img 
              src={image} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/50 to-secondary">
              <Icon className="w-20 h-20 text-primary/15" strokeWidth={1} />
            </div>
          )}
          <motion.div 
            className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </motion.div>
        </div>
        
        <CardHeader className="pb-3 pt-6">
          <CardTitle className="text-xl font-serif font-semibold text-primary group-hover:text-accent transition-colors duration-300 flex justify-between items-center">
            {title}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow pb-6">
          <CardDescription className="text-base leading-relaxed text-muted-foreground font-light">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
