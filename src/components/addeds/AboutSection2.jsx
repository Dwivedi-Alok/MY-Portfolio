import { Briefcase, Code, User } from 'lucide-react';
import resume from '../assets/Alok_resume.pdf';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Passionate Web Developer & Tech Creator</h3>
            
            <p className="text-muted-foreground">
              I craft stellar digital experiences with a focus on frontend development, blending sleek design with 
              high-performance code. My full-stack skills let me build responsive, intuitive apps from concept to launch.
            </p>
            
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me immersed in manga/anime, experimenting with creative tech projects, 
              or exploring graphic design and photography.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a 
                href={resume} 
                download 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I create full-stack web applications that are scalable, user-friendly, and built with modern technologies — combining my passion for AI and clean design.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack & UI/UX</h4>
                  <p className="text-muted-foreground">
                    I build full-stack web applications with a strong focus on UI/UX — combining clean design, smooth user experiences, and scalable backend systems, driven by my passion for AI and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects</h4>
                  <p className="text-muted-foreground">
                    My projects range from full-stack web apps to AI-powered tools. I've built responsive user interfaces, implemented backend APIs, integrated real-time features with WebSockets, and developed intelligent systems using modern technologies like React, Node.js, Flask, and more — all with a focus on usability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>A
    </section>
  );
};