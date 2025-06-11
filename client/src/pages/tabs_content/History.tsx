import styled from 'styled-components';
import { useState, useRef, MouseEvent } from 'react';

const TimelineContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  padding: 1rem 0;
  margin: 0;
  display: flex;
  align-items: stretch;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

const TimelineWrapper = styled.div`
  display: inline-flex;
  padding: 0 1rem;
  gap: 1.5rem;
  min-width: min-content;
  height: 100%;
  align-items: stretch;
  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 1rem;
  }
`;

const TimelineItem = styled.div`
  width: 280px;
  height: auto;
  min-height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const Year = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: normal;
  overflow-y: auto;
  max-height: 150px;
  margin: 0;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

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
    <TimelineContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <TimelineWrapper>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <Year>{item.year}</Year>
            <Description>{item.description}</Description>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
}
