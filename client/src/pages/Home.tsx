import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrackCard } from "@/components/TrackCard";
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
  Phone
} from "lucide-react";

// Images
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
      // Fallback image usage
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

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <main>
        <Hero />

        {/* Vision Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Connect. Collaborate. Create. <br />
                <span className="text-accent">Catalyse. Celebrate.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We are a growing movement of Christian leaders from various spheres of influence in the city—from Churches, NGOs, the Marketplace, Government spaces, and other sectors. Our vision is that the Whole Church will take the Whole Gospel to the Whole City, resulting in a transformed Chennai.
              </p>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
            </div>
          </div>
        </section>

        {/* Tracks Grid */}
        <section id="tracks" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Focus Areas</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Transformation Tracks</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Chennai?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join us in our mission to bring unity, hope, and wholeness to our city. Whether you are a leader, professional, or student, there is a place for you.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 text-lg shadow-lg">
              Partner With Us
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <a className="text-2xl font-serif font-bold text-white tracking-tight mb-6 block">
                  CTN<span className="text-accent">.</span>
                </a>
                <p className="text-gray-400 leading-relaxed">
                  An Interdenominational and Intergenerational Movement for City Transformation in Chennai.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>contact@ctnchennai.org</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Our Tracks</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Chennai Transformation Network. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
