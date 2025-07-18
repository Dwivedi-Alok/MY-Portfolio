import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Something went wrong!",
          description: "Please try again later or contact via email.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 text-muted-foreground px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-lg">
          Got an idea, project, or just want to say hi? I'm always open to meaningful conversations and exciting collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-10 text-muted-foreground">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4 text-left">Contact Info</h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
                  <a href="mailto:alok7855@gmail.com" className="text-base hover:text-primary transition">
                    alok7855@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Phone</p>
                  <a href="tel:+919315804493" className="text-base hover:text-primary transition">
                    +91 9315804493
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">Location</p>
                  <p className="text-base">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
  <h4 className="font-medium mb-4 text-left">Connect With Me</h4>
  <div className="flex space-x-4">
    <a
      href="https://www.linkedin.com/in/alok-kumar-dwivedi-836942178/"
      target="_blank"
      className="hover:text-primary transition-transform hover:scale-110"
    >
      <Linkedin />
    </a>
    <a
      href="https://x.com/AlokDwi174"
      target="_blank"
      className="hover:text-primary transition-transform hover:scale-110"
    >
      <Twitter />
    </a>
    <a
      href="https://www.instagram.com/alokdwivedi_14/"
      target="_blank"
      className="hover:text-primary transition-transform hover:scale-110"
    >
      <Instagram />
    </a>
    <a
      href="https://github.com/Dwivedi-Alok"
      target="_blank"
      className="hover:text-primary transition-transform hover:scale-110"
    >
      <Github />
    </a>
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Alok Kumar Dwivedi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Let's collaborate on a project!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 text-white bg-primary rounded-md shadow-md flex items-center justify-center gap-2 hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
