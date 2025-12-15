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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="relative h-48 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/30">
              <Icon className="w-16 h-16 text-primary/20" />
            </div>
          )}
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors flex justify-between items-center">
            {title}
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
