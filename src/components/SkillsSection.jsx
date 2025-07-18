import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Sword, Shield, Zap, Eye, Target, Flame, Crown, Star, ChevronRight, Sparkles } from "lucide-react";

const Skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "Frontend", exp: 4500, maxExp: 5000 },
  { name: "JavaScript", level: 85, category: "Frontend", exp: 4250, maxExp: 5000 },
  { name: "React.js", level: 80, category: "Frontend", exp: 4000, maxExp: 5000 },
  { name: "jQuery", level: 70, category: "Frontend", exp: 3500, maxExp: 5000 },

  // Backend
  { name: "Node.js", level: 80, category: "Backend", exp: 4000, maxExp: 5000 },
  { name: "Express.js", level: 75, category: "Backend", exp: 3750, maxExp: 5000 },
  { name: "Flask", level: 75, category: "Backend", exp: 3750, maxExp: 5000 },

  // Programming Languages
  { name: "C++", level: 85, category: "Languages", exp: 4250, maxExp: 5000 },
  { name: "Python", level: 80, category: "Languages", exp: 4000, maxExp: 5000 },
  { name: "SAP ABAP", level: 65, category: "Languages", exp: 3250, maxExp: 5000 },

  // Databases
  { name: "MySQL", level: 75, category: "Database", exp: 3750, maxExp: 5000 },
  { name: "MongoDB", level: 70, category: "Database", exp: 3500, maxExp: 5000 },

  // Tools
  { name: "Git & GitHub", level: 85, category: "Tools", exp: 4250, maxExp: 5000 },
  { name: "VS Code", level: 90, category: "Tools", exp: 4500, maxExp: 5000 },
  { name: "MCP Server", level: 60, category: "Tools", exp: 3000, maxExp: 5000 },
  { name: "Docker", level: 60, category: "Tools", exp: 3000, maxExp: 5000 },

  // Design
  { name: "Photoshop", level: 70, category: "Design", exp: 3500, maxExp: 5000 },
  { name: "Illustrator", level: 65, category: "Design", exp: 3250, maxExp: 5000 },
  { name: "Canva", level: 80, category: "Design", exp: 4000, maxExp: 5000 },

  // Concepts
  { name: "DSA", level: 85, category: "Concepts", exp: 4250, maxExp: 5000 },
  { name: "OOP", level: 80, category: "Concepts", exp: 4000, maxExp: 5000 },
  { name: "Machine Learning", level: 70, category: "Concepts", exp: 3500, maxExp: 5000 },
];

const categoryConfig = {
  all: { icon: Crown, color: "from-purple-400 to-pink-400", name: "ALL SKILLS" },
  Frontend: { icon: Sword, color: "from-blue-400 to-cyan-400", name: "FRONTEND" },
  Backend: { icon: Shield, color: "from-green-400 to-teal-400", name: "BACKEND" },
  Languages: { icon: Flame, color: "from-orange-400 to-red-400", name: "LANGUAGES" },
  Database: { icon: Eye, color: "from-purple-400 to-indigo-400", name: "DATABASE" },
  Tools: { icon: Target, color: "from-gray-400 to-slate-400", name: "TOOLS" },
  Design: { icon: Star, color: "from-pink-400 to-rose-400", name: "DESIGN" },
  Concepts: { icon: Zap, color: "from-yellow-400 to-amber-400", name: "CONCEPTS" },
};

const categories = Object.keys(categoryConfig);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAnimatedSkills(new Set());
    const timer = setTimeout(() => {
      setAnimatedSkills(new Set(filteredSkills.map((_, index) => index)));
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredSkills = Skills.filter((skill) => 
    activeCategory === "all" || skill.category === activeCategory
  );

  const getRankBadge = (level) => {
    if (level >= 90) return { rank: "S", color: "from-yellow-400 to-amber-500", glow: "shadow-yellow-400/50", textColor: "text-yellow-400" };
    if (level >= 80) return { rank: "A", color: "from-blue-400 to-cyan-500", glow: "shadow-blue-400/50", textColor: "text-blue-400" };
    if (level >= 70) return { rank: "B", color: "from-green-400 to-teal-500", glow: "shadow-green-400/50", textColor: "text-green-400" };
    if (level >= 60) return { rank: "C", color: "from-purple-400 to-pink-500", glow: "shadow-purple-400/50", textColor: "text-purple-400" };
    return { rank: "D", color: "from-red-400 to-orange-500", glow: "shadow-red-400/50", textColor: "text-red-400" };
  };

  const totalLevel = Skills.reduce((acc, skill) => acc + skill.level, 0);
  const playerLevel = Math.floor(totalLevel / Skills.length);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Header */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 animate-pulse rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-wider font-mono">
                    【 STATUS WINDOW 】
                  </h2>
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                </div>
                
                <div className="flex items-center justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-mono">LEVEL:</span>
                    <span className="text-2xl font-bold text-cyan-400">{playerLevel}</span>
                  </div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-mono">TOTAL EXP:</span>
                    <span className="text-2xl font-bold text-green-400">{Skills.reduce((acc, skill) => acc + skill.exp, 0).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Category Tabs */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-3 shadow-2xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const config = categoryConfig[category];
                const IconComponent = config.icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "group relative px-6 py-3 rounded-xl transition-all duration-300 font-mono font-bold text-sm tracking-wider",
                      "hover:scale-105 border backdrop-blur-sm",
                      activeCategory === category
                        ? `bg-gradient-to-r ${config.color} text-black border-border shadow-lg transform scale-105`
                        : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <IconComponent className="h-4 w-4" />
                      {config.name}
                    </span>
                    {activeCategory === category && (
                      <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent rounded-xl animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const isAnimated = animatedSkills.has(index);
            const rankBadge = getRankBadge(skill.level);
            
            return (
              <div
                key={`${skill.name}-${activeCategory}`}
                className={`group relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/20 ${
                  isAnimated ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Enhanced glowing border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${rankBadge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10 p-6">
                  {/* Enhanced Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${rankBadge.color} animate-pulse shadow-lg`}></div>
                      <h3 className="font-mono font-bold text-foreground text-lg tracking-wider">
                        {skill.name.toUpperCase()}
                      </h3>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${rankBadge.color} text-black font-bold text-sm shadow-lg relative overflow-hidden`}>
                      <span className="relative z-10">{rankBadge.rank}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Level and EXP */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-muted-foreground font-mono text-sm">LEVEL</span>
                      <span className={`text-2xl font-bold font-mono ${rankBadge.textColor}`}>{skill.level}</span>
                    </div>
                    
                    {/* Enhanced EXP Bar */}
                    <div className="relative">
                      <div className="w-full bg-muted/30 h-3 rounded-full overflow-hidden backdrop-blur-sm">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${rankBadge.color} transition-all duration-1000 ease-out relative overflow-hidden shadow-lg`}
                          style={{
                            width: isAnimated ? `${skill.level}%` : '0%'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-muted-foreground font-mono text-xs">EXP</span>
                        <span className="text-muted-foreground font-mono text-xs">
                          {skill.exp.toLocaleString()} / {skill.maxExp.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Skill Description */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                      <ChevronRight className="h-3 w-3" />
                      <span>PROFICIENCY: </span>
                      <span className={`font-bold ${rankBadge.textColor}`}>
                        {skill.level >= 85 ? 'MASTER' : skill.level >= 70 ? 'EXPERT' : skill.level >= 60 ? 'SKILLED' : 'NOVICE'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Player Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 animate-pulse rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center font-mono tracking-wider">
                【 PLAYER STATISTICS 】
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-blue-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">{Skills.length}</div>
                  <div className="text-muted-foreground font-mono text-sm tracking-wider">SKILLS</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-yellow-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">{Skills.filter(s => s.level >= 85).length}</div>
                  <div className="text-muted-foreground font-mono text-sm tracking-wider">S-RANK</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">{categories.length - 1}</div>
                  <div className="text-muted-foreground font-mono text-sm tracking-wider">CATEGORIES</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-purple-400 font-mono mb-2 group-hover:scale-110 transition-transform duration-300">{playerLevel}</div>
                  <div className="text-muted-foreground font-mono text-sm tracking-wider">AVG LEVEL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};