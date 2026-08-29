import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { InfrastructureHeroScene } from './InfrastructureHeroScene';
import { StaticFallbackTopology } from './StaticFallbackTopology';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Error boundary for 3D canvas
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('WebGL Rendering fallback triggered:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const TopologyCanvas: React.FC = () => {
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return <StaticFallbackTopology />;
  }

  return (
    <div className="w-full h-full min-h-[360px] md:min-h-[440px] relative">
      <WebGLErrorBoundary fallback={<StaticFallbackTopology />}>
        <Suspense fallback={<StaticFallbackTopology />}>
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            className="w-full h-full"
          >
            <InfrastructureHeroScene reducedMotion={reducedMotion} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>

      {/* Subtle overlay legend */}
      <div className="absolute bottom-2 right-3 pointer-events-none hidden sm:flex items-center gap-2 bg-surface-300/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 text-[11px] font-mono text-slate-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Infrastructure Graph Active</span>
      </div>
    </div>
  );
};
