import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SceneConfig {
  id: string;
  name: string;
  imageSrc: string;
  videoSrc: string;
  start: number;
  end: number;
}

const BASE_PATH = typeof import.meta !== 'undefined' && (import.meta as any).env?.BASE_URL ? (import.meta as any).env.BASE_URL : './';

// 5 Scene intervals with smooth crossfades
const SCENES: SceneConfig[] = [
  {
    id: 'hero-desk',
    name: '1. Night Owl DevOps Desk',
    imageSrc: `${BASE_PATH}scenes/scene-1-hero-aws-core.jpg`,
    videoSrc: `${BASE_PATH}scenes/scene-1-hero-aws-core.mp4`,
    start: 0.0,
    end: 0.22,
  },
  {
    id: 'pipeline-focus',
    name: '2. CI/CD Pipeline & Docker',
    imageSrc: `${BASE_PATH}scenes/scene-2-pipeline-conduit.jpg`,
    videoSrc: `${BASE_PATH}scenes/scene-2-pipeline-conduit.mp4`,
    start: 0.22,
    end: 0.44,
  },
  {
    id: 'cloud-whiteboard',
    name: '3. AWS Cloud Whiteboard',
    imageSrc: `${BASE_PATH}scenes/scene-3-vpc-global-mesh.jpg`,
    videoSrc: `${BASE_PATH}scenes/scene-3-vpc-global-mesh.mp4`,
    start: 0.44,
    end: 0.66,
  },
  {
    id: 'observability-night',
    name: '4. CloudWatch Observability',
    imageSrc: `${BASE_PATH}scenes/scene-4-cloudwatch-hud.jpg`,
    videoSrc: `${BASE_PATH}scenes/scene-4-cloudwatch-hud.mp4`,
    start: 0.66,
    end: 0.88,
  },
  {
    id: 'production-sunrise',
    name: '5. Sunrise Zero-Downtime Release',
    imageSrc: `${BASE_PATH}scenes/scene-5-production-portal.jpg`,
    videoSrc: `${BASE_PATH}scenes/scene-5-production-portal.mp4`,
    start: 0.88,
    end: 1.0,
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

  // Initialize and prime all videos on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;
        video.currentTime = 0.01;
        video.play().catch(() => {});
      }
    });
  }, []);

  // 60fps RAF Lerp Scrubbing Loop
  const scrubLoop = useCallback(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video && video.duration && !isNaN(video.duration)) {
        const target = targetTimes.current[idx];
        const cur = currentTimes.current[idx];

        const nextTime = cur + (target - cur) * 0.25;
        currentTimes.current[idx] = nextTime;

        if (Math.abs(video.currentTime - nextTime) > 0.03 && !isSeeking.current[idx]) {
          isSeeking.current[idx] = true;
          try {
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

  // Scroll listener that updates progress and video target times
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(progress);

        SCENES.forEach((scene, idx) => {
          const video = videoRefs.current[idx];
          if (video && video.duration && !isNaN(video.duration)) {
            if (progress >= scene.start && progress <= scene.end) {
              const sceneProgress = (progress - scene.start) / (scene.end - scene.start);
              targetTimes.current[idx] = Math.max(0, Math.min(video.duration, sceneProgress * video.duration));
            } else if (progress < scene.start) {
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

  // Precise Crossfade Opacity (NEVER 0 at page start)
  const getSceneOpacity = (idx: number) => {
    const scene = SCENES[idx];
    const { start, end } = scene;
    const fadeZone = 0.05; // 5% crossfade margin

    // First scene is 100% visible at scroll = 0
    if (idx === 0) {
      if (scrollProgress <= start + 0.12) return 1;
      if (scrollProgress > end) return 0;
      return Math.max(0, (end - scrollProgress) / fadeZone);
    }

    // Last scene stays visible until end
    if (idx === SCENES.length - 1) {
      if (scrollProgress >= end - 0.12) return 1;
      if (scrollProgress < start) return 0;
      return Math.min(1, (scrollProgress - start) / fadeZone);
    }

    // Middle scenes
    if (scrollProgress < start - fadeZone || scrollProgress > end + fadeZone) return 0;
    if (scrollProgress >= start && scrollProgress <= end) return 1;
    if (scrollProgress < start) return (scrollProgress - (start - fadeZone)) / fadeZone;
    return (end + fadeZone - scrollProgress) / fadeZone;
  };

  // Parallax transform with 3D perspective tilt
  const tiltX = reducedMotion ? 0 : -mouseOffset.y * 3;
  const tiltY = reducedMotion ? 0 : mouseOffset.x * 3;
  const panX = reducedMotion ? 0 : -mouseOffset.x * 8;
  const panY = reducedMotion ? 0 : -mouseOffset.y * 8;

  // Active scene name for HUD
  const activeSceneName =
    SCENES.find((s) => scrollProgress >= s.start && scrollProgress <= s.end)?.name || SCENES[0].name;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090D16] select-none"
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
          const opacity = getSceneOpacity(idx);

          return (
            <div
              key={scene.id}
              className="absolute inset-0 transition-opacity duration-500 ease-linear overflow-hidden"
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
                preload="auto"
                onSeeked={() => {
                  isSeeking.current[idx] = false;
                }}
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
                onError={(e) => {
                  (e.currentTarget as HTMLVideoElement).style.display = 'none';
                }}
              />

              {/* Poster Backup Layer (always under the video) */}
              <img
                src={scene.imageSrc}
                alt={scene.name}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08] -z-10"
              />

              {/* Light Vignette so Text is 100% Legible while Anime Art is Bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
            </div>
          );
        })}
      </div>

      {/* Anime DevOps Story Chapter HUD in Bottom Left */}
      <div className="absolute bottom-4 left-6 hidden lg:flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700/80 text-[11px] font-mono text-slate-300 z-10 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-400">Scene:</span>
        <span className="text-sky-400 font-semibold">{activeSceneName}</span>
      </div>
    </div>
  );
};
