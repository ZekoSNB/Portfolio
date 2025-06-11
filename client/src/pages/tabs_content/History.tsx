import { useState, useRef, MouseEvent } from 'react';
import '../../styles/History.css';

export function History() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const timelineData = [
    {
      year: '2020',
      description: 'Začiatky s programovaním – spoznával som základy HTML a neskôr som sa pustil do jednoduchých hier v Pythone.'
    },
    {
      year: '2021',
      description: 'Pokračoval som v rôznych projektoch v Pythone, skúšal som Flutter aj React a vytvoril som svoju prvú webovú stránku vo WordPresse pomocou Elementoru.'
    },
    {
      year: '2023',
      description: 'Začal som pracovať v digitálnej agentúre Weblox, kde som tvoril weby vo WordPresse pomocou Bricks buildera. Aktívne som sa zapájal do mládežníckych parlamentov a zároveň som ukončil základnú školu.'
    },
    {
      year: '2024',
      description: 'Začal som pracovať v Ametike, kde som dodnes. Intenzívne som sa venoval učeniu PHP a prehĺbil som svoje znalosti v Reacte.'
    },
    {
      year: '2025',
      description: 'Freelancujem a zároveň pracujem v Ametike. Zlepšujem sa v používaní CSS a vytváram svoje prvé aplikácie pomocou NextJS a Vite.'
    },
    {
      year: 'Budúcnosť',
      description: 'Do budúcna mám veľa plánov – som ešte len na začiatku cesty. Verím, že raz budem jazdiť na Porsche Panamere a Toyote Yaris GR.'
    }
  ];

  return (
    <div className="timeline-container" ref={containerRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <h3 className="timeline-year">{item.year}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
