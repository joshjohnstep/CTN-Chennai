import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";

interface ContactDialogProps {
  children?: React.ReactNode;
  triggerText?: string;
}

export function ContactDialog({ children, triggerText = "Get in Touch" }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">Connect With Us</DialogTitle>
          <DialogDescription>
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
