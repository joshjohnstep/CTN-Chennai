import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to subscribe");
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setEmail("");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    newsletterMutation.mutate(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="input-newsletter-email"
        className="flex-1"
        disabled={newsletterMutation.isPending}
      />
      <Button
        type="submit"
        data-testid="button-subscribe-newsletter"
        className="bg-accent hover:bg-accent/90 text-white"
        disabled={newsletterMutation.isPending}
      >
        {newsletterMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          <>
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </>
        )}
      </Button>
    </form>
  );
}
