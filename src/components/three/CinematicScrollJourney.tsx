import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SceneConfig {
  id: string;
  name: string;
  imageSrc: string;
  videoSrc: string;
  startProgress: number;
  endProgress: number;
  accent: string;
}

const SCENES: SceneConfig[] = [
  {
    id: 'hero-desk',
    name: 'Night Owl DevOps Workstation & Setup',
    imageSrc: './scenes/scene-1-hero-aws-core.jpg',
    videoSrc: './scenes/scene-1-hero-aws-core.mp4',
    startProgress: 0.0,
    endProgress: 0.25,
    accent: '#38BDF8',
  },
  {
    id: 'pipeline-focus',
    name: 'CI/CD Pipeline Flow & Docker Builds',
    imageSrc: './scenes/scene-2-pipeline-conduit.jpg',
    videoSrc: './scenes/scene-2-pipeline-conduit.mp4',
    startProgress: 0.2,
    endProgress: 0.5,
    accent: '#10B981',
  },
  {
    id: 'cloud-whiteboard',
    name: 'Multi-Region AWS Cloud Architecture Design',
    imageSrc: './scenes/scene-3-vpc-global-mesh.jpg',
    videoSrc: './scenes/scene-3-vpc-global-mesh.mp4',
    startProgress: 0.45,
    endProgress: 0.75,
    accent: '#818CF8',
  },
  {
    id: 'observability-night',
    name: 'Late Night 100% Healthy CloudWatch Telemetry',
    imageSrc: './scenes/scene-4-cloudwatch-hud.jpg',
    videoSrc: './scenes/scene-4-cloudwatch-hud.mp4',
    startProgress: 0.7,
    endProgress: 0.9,
    accent: '#38BDF8',
  },
  {
    id: 'production-sunrise',
    name: 'Dawn Release: 100% Zero-Downtime Deployment',
    imageSrc: './scenes/scene-5-production-portal.jpg',
    videoSrc: './scenes/scene-5-production-portal.mp4',
    startProgress: 0.85,
    endProgress: 1.0,
    accent: '#10B981',
  },
];

export const CinematicScrollJourney: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const targetTimes = useRef<number[]>([0, 0, 0, 0, 0]);
  const currentTimes = useRef<number[]>([0, 0, 0, 0, 0]);
  const isSeeking = useRef<boolean[]>([false, false, false, false, false]);
  const rafId = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  // Pre-prime all videos on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;
        video.load();
      }
    });
  }, []);

  // Continuous 60fps RAF Lerp Scrubbing Loop (lets-scroll engine standard)
  const scrubLoop = useCallback(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video && video.duration && !isNaN(video.duration) && video.readyState >= 2) {
        const target = targetTimes.current[idx];
        const cur = currentTimes.current[idx];

        // Smoothly interpolate time towards target
        const nextTime = cur + (target - cur) * 0.25;
        currentTimes.current[idx] = nextTime;

        // Apply to video if difference is noticeable and not already busy seeking
        if (Math.abs(video.currentTime - nextTime) > 0.02 && !isSeeking.current[idx]) {
          isSeeking.current[idx] = true;
          try {
            // Use fastSeek if available on browser
            if ('fastSeek' in video && typeof (video as unknown as { fastSeek: (t: number) => void }).fastSeek === 'function') {
              (video as unknown as { fastSeek: (t: number) => void }).fastSeek(nextTime);
            } else {
              video.currentTime = nextTime;
            }
          } catch {
            video.currentTime = nextTime;
          }
        }
      }
    });

    rafId.current = requestAnimationFrame(scrubLoop);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(scrubLoop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [scrubLoop]);

  // Scroll listener that updates target video times
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(progress);

        // Map scroll to target video durations
        SCENES.forEach((scene, idx) => {
          const video = videoRefs.current[idx];
          if (video && video.duration && !isNaN(video.duration)) {
            if (progress >= scene.startProgress && progress <= scene.endProgress) {
              const sceneProgress =
                (progress - scene.startProgress) / (scene.endProgress - scene.startProgress);
              targetTimes.current[idx] = Math.max(0, Math.min(video.duration, sceneProgress * video.duration));
            } else if (progress < scene.startProgress) {
              targetTimes.current[idx] = 0;
            } else {
              targetTimes.current[idx] = video.duration;
            }
          }
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (reducedMotion) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
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
      opacity = 1 - Math.pow(distFromMid / halfWidth, 2);
      opacity = Math.max(0, Math.min(1, opacity * 1.6));
    }

    const scale = 1.04 + (scrollProgress - startProgress) * 0.06;

    return { opacity, scale };
  };

  // Parallax transform with 3D perspective tilt
  const tiltX = reducedMotion ? 0 : -mouseOffset.y * 4;
  const tiltY = reducedMotion ? 0 : mouseOffset.x * 4;
  const panX = reducedMotion ? 0 : -mouseOffset.x * 10;
  const panY = reducedMotion ? 0 : -mouseOffset.y * 10;

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
              {/* High-FPS Scrubbed Video Element */}
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={scene.videoSrc}
                poster={scene.imageSrc}
                muted
                playsInline
                autoPlay={false}
                preload="auto"
                onSeeked={() => {
                  isSeeking.current[idx] = false;
                }}
                className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] transition-transform duration-500"
                style={{
                  transform: `scale(${scale})`,
                }}
                onError={(e) => {
                  // Fallback to poster image if error occurs
                  (e.currentTarget as HTMLVideoElement).style.display = 'none';
                }}
              />

              {/* Poster Backup Layer */}
              <img
                src={scene.imageSrc}
                alt={scene.name}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] transition-transform duration-500 -z-10"
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

        {/* Ambient Dark Overlay for Typography Contrast */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div>

      {/* Anime DevOps Story Chapter HUD in Bottom Left */}
      <div className="absolute bottom-4 left-6 hidden lg:flex items-center gap-3 bg-surface-300/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700/80 text-[11px] font-mono text-slate-300 z-10 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-400">DevOps Story Chapter:</span>
        <span className="text-sky-400 font-semibold">
          {SCENES.find((s) => scrollProgress >= s.startProgress && scrollProgress <= s.endProgress)?.name || SCENES[0].name}
        </span>
      </div>
    </div>
  );
};
