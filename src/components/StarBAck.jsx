import React, { useEffect, useState } from 'react';

export default function StarBack() {
  const [stars, setStars] = useState([]);
  const [Meteors, setMeteors] = useState([]);
  const [isDark,setIsDark]=useState(
    document.documentElement.classList.contains('dark')
  );

  const generateStars = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const numOfStars = Math.floor((width * height) / 10000);
const newStars = [];
for (let i = 0; i < numOfStars; i++) {
  newStars.push({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
  });
}
 

    setStars(newStars);
  };
 const generateMeteor  = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const numOfMeteors = 4
const newMeteors = [];
for (let i = 0; i < numOfMeteors; i++) {
  newMeteors.push({
    id: i,
    size: Math.random() *  + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: Math.random() * 15,
    animationDuration: Math.random() * 3 + 3,
  });
}


    setMeteors(newMeteors);
  };
  useEffect(() => {
   if(isDark){
    generateStars();
    generateMeteor();}
    // Regenerate on window resize
    
    const handleResize = () => {
      if(isDark){

        generateStars();
        generateMeteor();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: '50%',
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {Meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: '50%',
            width: `${meteor.size*50}px`,
            height: `${meteor.size*2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
}
