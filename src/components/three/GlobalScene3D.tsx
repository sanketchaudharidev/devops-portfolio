import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AwsCloudHero3D } from './AwsCloudHero3D';
import { CinematicScrollJourney } from './CinematicScrollJourney';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const GlobalScene3D: React.FC = () => {
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Cinematic Scroll-Driven Sequence Background Layer */}
      <CinematicScrollJourney />

      {/* 2. WebGL 3D Overlay Layer (Pulsing constellation, orbital rings, and nodes) */}
      {webGLSupported && (
        <div className="absolute inset-0 opacity-60">
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 7.8], fov: 45 }}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              dpr={[1, 1.5]}
              className="w-full h-full"
            >
              <AwsCloudHero3D reducedMotion={reducedMotion} />
            </Canvas>
          </Suspense>
        </div>
      )}
    </div>
  );
};
