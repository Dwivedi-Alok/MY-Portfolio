import { Briefcase, Code, User, Download, Sparkles, Zap, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import resume from '../assets/Alok_resume.pdf';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { icon: Code, title: "Web Development", color: "from-blue-500 to-purple-600", bgColor: "bg-blue-500/10" },
    { icon: User, title: "Full-Stack & UI/UX", color: "from-purple-500 to-pink-600", bgColor: "bg-purple-500/10" },
    { icon: Briefcase, title: "Projects", color: "from-pink-500 to-red-600", bgColor: "bg-pink-500/10" }
  ];

  const descriptions = [
    "I create full-stack web applications that are scalable, user-friendly, and built with modern technologies — combining my passion for AI and clean design.",
    "I build full-stack web applications with a strong focus on UI/UX — combining clean design, smooth user experiences, and scalable backend systems, driven by my passion for AI and modern web technologies.",
    "My projects range from full-stack web apps to AI-powered tools. I've built responsive user interfaces, implemented backend APIs, integrated real-time features with WebSockets, and developed intelligent systems using modern technologies like React, Node.js, Flask, and more — all with a focus on usability and performance."
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden"> 
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About <span className="inline-flex items-center gap-2">Me <Sparkles className="h-8 w-8 text-primary animate-pulse" /></span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Crafting the future of web experiences, one line of code at a time
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Passionate Web Developer & Tech Creator
              </h3>
              <div className="absolute -top-2 -left-4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-purple-500/5 transition-all duration-300">
                  <Zap className="h-6 w-6 text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    I craft stellar digital experiences with a focus on frontend development, blending sleek design with 
                    high-performance code. My full-stack skills let me build responsive, intuitive apps from concept to launch.
                  </p>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-pink-500/5 transition-all duration-300">
                  <Target className="h-6 w-6 text-purple-500 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    When I'm not coding, you'll find me immersed in manga/anime, experimenting with creative tech projects, 
                    or exploring graphic design and photography.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="group relative px-8 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href={resume} 
                download 
                className="group px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-center relative overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="flex items-center gap-2 justify-center">
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>
            </div>
          </div>
          
          {/* Right Column - Interactive Cards */}
          <div className={`grid grid-cols-1 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeCard === index ? 'scale-105 z-10' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${skill.bgColor} relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-6 w-6 text-primary relative z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </div>
                    
                    <div className="text-left flex-1">
                      <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className={`text-muted-foreground group-hover:text-foreground transition-all duration-300 ${
                        activeCard === index ? 'text-foreground' : ''
                      }`}>
                        {descriptions[index]}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                         style={{
                           background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                           animation: activeCard === index ? 'shimmer 2s infinite' : 'none'
                         }}>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </section>
  );
};