import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SceneConfig {
  id: string;
  name: string;
  src: string;
  startProgress: number;
  endProgress: number;
  accent: string;
}

const SCENES: SceneConfig[] = [
  {
    id: 'hero-core',
    name: 'AWS Cloud Core & EC2 Fleet',
    src: './scenes/scene-1-hero-aws-core.jpg',
    startProgress: 0.0,
    endProgress: 0.25,
    accent: '#FF9900',
  },
  {
    id: 'pipeline-conduit',
    name: 'Automated CI/CD Pipeline & Quality Gate',
    src: './scenes/scene-2-pipeline-conduit.jpg',
    startProgress: 0.2,
    endProgress: 0.5,
    accent: '#38BDF8',
  },
  {
    id: 'vpc-mesh',
    name: 'Multi-Region VPC Peering Network',
    src: './scenes/scene-3-vpc-global-mesh.jpg',
    startProgress: 0.45,
    endProgress: 0.75,
    accent: '#A855F7',
  },
  {
    id: 'cloudwatch-hud',
    name: 'CloudWatch Telemetry & Mission Control',
    src: './scenes/scene-4-cloudwatch-hud.jpg',
    startProgress: 0.7,
    endProgress: 0.9,
    accent: '#E7157B',
  },
  {
    id: 'production-portal',
    name: 'Zero-Downtime Live Production Gateway',
    src: './scenes/scene-5-production-portal.jpg',
    startProgress: 0.85,
    endProgress: 1.0,
    accent: '#10B981',
  },
];

export const CinematicScrollJourney: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = Math.min(1, Math.max(0, window.scrollY / totalHeight));
            setScrollProgress(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (reducedMotion) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      setMouseOffset({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reducedMotion]);

  // Calculate opacity and scale for each scene based on scrollProgress
  const calculateSceneState = (scene: SceneConfig) => {
    const { startProgress, endProgress } = scene;
    const mid = (startProgress + endProgress) / 2;
    const halfWidth = (endProgress - startProgress) / 2;

    let opacity = 0;
    if (scrollProgress >= startProgress && scrollProgress <= endProgress) {
      const distFromMid = Math.abs(scrollProgress - mid);
      // Bell curve opacity
      opacity = 1 - Math.pow(distFromMid / halfWidth, 2);
      opacity = Math.max(0, Math.min(1, opacity * 1.5));
    }

    // Gentle camera zoom forward
    const scale = 1.05 + (scrollProgress - startProgress) * 0.08;

    return { opacity, scale };
  };

  // Parallax transform with 3D perspective tilt
  const tiltX = reducedMotion ? 0 : -mouseOffset.y * 6;
  const tiltY = reducedMotion ? 0 : mouseOffset.x * 6;
  const panX = reducedMotion ? 0 : -mouseOffset.x * 15;
  const panY = reducedMotion ? 0 : -mouseOffset.y * 15;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background select-none"
      style={{
        perspective: '1200px',
      }}
    >
      {/* 3D Parallax Canvas Container */}
      <div
        className="w-full h-full relative transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${panX}px, ${panY}px, 0px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layered Cinematic Background Scenes */}
        {SCENES.map((scene, idx) => {
          const { opacity, scale } = calculateSceneState(scene);

          return (
            <div
              key={scene.id}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out overflow-hidden"
              style={{
                opacity: opacity,
                zIndex: idx,
              }}
            >
              <img
                src={scene.src}
                alt={scene.name}
                className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] transition-transform duration-500"
                style={{
                  transform: `scale(${scale})`,
                }}
              />
              {/* Cinematic Vignette & Ambient Radial Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            </div>
          );
        })}

        {/* Ambient Dark Overlay to Ensure High Contrast for Typography */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div>

      {/* Cybernetic Telemetry HUD Watermark in Bottom Left */}
      <div className="absolute bottom-4 left-6 hidden lg:flex items-center gap-3 bg-surface-300/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-[11px] font-mono text-slate-400 z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>AWS Cloud Telemetry Stream</span>
        <span className="text-slate-600">|</span>
        <span className="text-amber-400">
          Scene: {SCENES.find((s) => scrollProgress >= s.startProgress && scrollProgress <= s.endProgress)?.name || SCENES[0].name}
        </span>
      </div>
    </div>
  );
};
