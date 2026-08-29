import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollTopologyGraph } from './ScrollTopologyGraph';
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

  if (!webGLSupported) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
          className="w-full h-full"
        >
          <ScrollTopologyGraph reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>
    </div>
  );
};
