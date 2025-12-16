import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const tracks = [
  "Movement of Churches",
  "Movement of Prayer",
  "Youth Track",
  "Marketplace Track",
  "CITYSERVE (MEET)",
  "Media Track",
  "Mental Health Track",
  "General Inquiry"
];

export function ContactForm() {
  const [selectedTrack, setSelectedTrack] = useState<string>("");
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit contact form");
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
      setSelectedTrack("");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate({
      ...data,
      trackInterest: selectedTrack || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            data-testid="input-name"
            placeholder="John Doe"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            data-testid="input-email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number (Optional)
          </Label>
          <Input
            id="phone"
            data-testid="input-phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="track" className="text-sm font-medium">
            Track of Interest (Optional)
          </Label>
          <Select value={selectedTrack} onValueChange={setSelectedTrack}>
            <SelectTrigger id="track" data-testid="select-track">
              <SelectValue placeholder="Select a track" />
            </SelectTrigger>
            <SelectContent>
              {tracks.map((track) => (
                <SelectItem key={track} value={track}>
                  {track}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          data-testid="textarea-message"
          placeholder="Tell us how you'd like to get involved..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        data-testid="button-submit-contact"
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
        disabled={contactMutation.isPending}
      >
        {contactMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
