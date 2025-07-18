import { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "jQuery", level: 70, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express.js", level: 75, category: "Backend" },
  { name: "Flask", level: 75, category: "Backend" },

  // Programming Languages
  { name: "C++", level: 85, category: "Languages" },
  { name: "Python", level: 80, category: "Languages" },
  { name: "SAP ABAP", level: 65, category: "Languages" },

  // Databases
  { name: "MySQL", level: 75, category: "Database" },
  { name: "MongoDB", level: 70, category: "Database" },

  // Tools
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "MCP Server", level: 60, category: "Tools" },
  {name:"Docker",level:60,category:"Tools"},
  // Design
  { name: "Photoshop", level: 70, category: "Design" },
  { name: "Illustrator", level: 65, category: "Design" },
  { name: "Canva", level: 80, category: "Design" },

  // Concepts
  { name: "DSA", level: 85, category: "Concepts" },
  { name: "OOP", level: 80, category: "Concepts" },
  { name: "Machine Learning", level: 70, category: "Concepts" },
];
const categories = ["all", "Frontend", "Backend", "Languages", "Database", "Tools", "Design", "Concepts"];

export const SkillsSection=()=>{
    const [activecategory,setActivecategory]=useState("all");
    const filteredSkill=Skills.filter((skill)=>activecategory==="all" ||skill.category==activecategory )
return <section id="skills" className="py-24 px-4 relative bg-seconary/30">
 <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    My <span className="text-primary">Skills</span>

    </h2>
    <div className="flex flex-wrap justify-center gap-4 mb-12">
     {categories.map((category,key)=>{
       return (

           <button key={key} 
           onClick={()=>setActivecategory((category))}
           className={cn(
            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
           activecategory===category ? "bg-primary text-primary-foreground ":"bg-secondary/70 text-foreground hover:bg-secondary"
        )}>{category}</button>
       ) 
     })}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkill.map((skill, Key) => (
            <div key={Key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                 <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level+"%"
                  }}
                 />
                </div>
                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
            </div>
        ))}

    </div>
 </div>
</section>
}