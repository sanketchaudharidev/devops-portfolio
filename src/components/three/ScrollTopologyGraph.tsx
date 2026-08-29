import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Node3D {
  name: string;
  sub: string;
  pos: [number, number, number];
  color: string;
  size: number;
}

const TOPOLOGY_NODES: Node3D[] = [
  // Stage 1: Source & Code
  { name: "Git Commit", sub: "Source", pos: [-4, 2.5, -1], color: "#38bdf8", size: 0.28 },
  { name: "GitHub/GitLab", sub: "Webhooks", pos: [-2.8, 1.2, 0.5], color: "#60a5fa", size: 0.24 },

  // Stage 2: CI / Build / Quality
  { name: "Jenkins Pipeline", sub: "Declarative", pos: [-1.4, 2.2, -0.5], color: "#3b82f6", size: 0.32 },
  { name: "SonarQube Gate", sub: "Code Quality", pos: [-0.2, 0.8, 1.0], color: "#10b981", size: 0.26 },

  // Stage 3: Containers & IaC
  { name: "Docker Build", sub: "Containers", pos: [1.2, 2.0, 0.2], color: "#06b6d4", size: 0.30 },
  { name: "Terraform State", sub: "IaC", pos: [1.8, 0.4, -1.2], color: "#8b5cf6", size: 0.26 },
  { name: "Kubernetes Pods", sub: "Orchestration", pos: [2.8, 1.6, 0.8], color: "#326ce5", size: 0.34 },

  // Stage 4: AWS Cloud & DB
  { name: "AWS EC2 / ELB", sub: "Compute", pos: [4.2, 0.2, -0.4], color: "#f59e0b", size: 0.36 },
  { name: "AWS RDS / Mongo", sub: "Storage", pos: [3.2, -1.4, 0.6], color: "#4f46e5", size: 0.28 },
  { name: "AWS CloudFront", sub: "Edge CDN", pos: [1.6, -1.8, -0.8], color: "#a855f7", size: 0.26 },

  // Stage 5: Telemetry & Production
  { name: "CloudWatch Alarms", sub: "Observability", pos: [-0.6, -2.0, 0.4], color: "#ec4899", size: 0.30 },
  { name: "Zero-Downtime Prod", sub: "Live Systems", pos: [-2.6, -1.2, -0.6], color: "#10b981", size: 0.38 },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [2, 4], [3, 4],
  [4, 5], [4, 6], [5, 6], [6, 7], [7, 8],
  [7, 9], [8, 10], [9, 10], [10, 11], [11, 0],
  [2, 7], [6, 11],
];

// Single 3D Node Mesh with Glow & Orbiting Ring
const NodeMesh: React.FC<{ node: Node3D }> = ({ node }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = clock.getElapsedTime();
      ringRef.current.rotation.x = t * 0.3;
      ringRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group position={node.pos}>
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[node.size, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[node.size * 1.6, 0.015, 8, 32]} />
        <meshBasicMaterial color={node.color} transparent opacity={0.4} wireframe />
      </mesh>

      {/* Inner Glow Core */}
      <pointLight color={node.color} intensity={0.4} distance={2.5} />
    </group>
  );
};

// Flowing Data Signal Packet
const DataSignal: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
  offset: number;
  color: string;
}> = ({ start, end, speed, offset, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const startV = useMemo(() => new THREE.Vector3(...start), [start]);
  const endV = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const progress = (clock.getElapsedTime() * speed + offset) % 1;
    meshRef.current.position.lerpVectors(startV, endV, progress);
    const scale = 0.08 + Math.sin(progress * Math.PI) * 0.04;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export const ScrollTopologyGraph: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const scrollProgress = useRef<number>(0);
  const targetScroll = useRef<number>(0);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) {
        targetScroll.current = Math.min(1, Math.max(0, window.scrollY / max));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Line geometries connecting nodes
  const lines = useMemo(() => {
    return CONNECTIONS.map(([i1, i2]) => {
      const p1 = new THREE.Vector3(...TOPOLOGY_NODES[i1].pos);
      const p2 = new THREE.Vector3(...TOPOLOGY_NODES[i2].pos);
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      return { geom, color: TOPOLOGY_NODES[i1].color, i1, i2 };
    });
  }, []);

  // Ambient Star Dust Particles
  const dustParticles = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Smooth scroll interpolation
    scrollProgress.current = THREE.MathUtils.lerp(
      scrollProgress.current,
      targetScroll.current,
      0.08
    );

    const sp = scrollProgress.current;
    const t = clock.getElapsedTime();

    if (!reducedMotion) {
      // Rotate and position based on scroll progression & mouse
      const mouseX = mousePos.current.x;
      const mouseY = mousePos.current.y;

      // Group rotation linked to scroll + gentle mouse tilt
      groupRef.current.rotation.y = sp * Math.PI * 1.5 + mouseX * 0.25 + Math.sin(t * 0.15) * 0.05;
      groupRef.current.rotation.x = Math.sin(sp * Math.PI) * 0.35 + mouseY * 0.15;
      groupRef.current.rotation.z = sp * 0.3;

      // Camera position interpolation across sections
      camera.position.z = THREE.MathUtils.lerp(7.2, 5.2, Math.sin(sp * Math.PI));
      camera.position.y = THREE.MathUtils.lerp(0, -1.2, sp);
      camera.position.x = THREE.MathUtils.lerp(0, 1.2, Math.sin(sp * Math.PI * 2));
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 8, 6]} intensity={1.5} color="#38bdf8" />
      <directionalLight position={[-6, -6, -4]} intensity={1.0} color="#10b981" />

      {/* Network Lines */}
      {lines.map((l, idx) => (
        <primitive
          key={idx}
          object={
            new THREE.Line(
              l.geom,
              new THREE.LineBasicMaterial({
                color: l.color,
                transparent: true,
                opacity: 0.35,
              })
            )
          }
        />
      ))}

      {/* Data Packets */}
      {!reducedMotion &&
        CONNECTIONS.map(([i1, i2], idx) => (
          <DataSignal
            key={`sig-${idx}`}
            start={TOPOLOGY_NODES[i1].pos}
            end={TOPOLOGY_NODES[i2].pos}
            speed={0.4 + (idx % 4) * 0.1}
            offset={(idx * 0.17) % 1}
            color={TOPOLOGY_NODES[i1].color}
          />
        ))}

      {/* 3D Nodes */}
      {TOPOLOGY_NODES.map((node) => (
        <NodeMesh key={node.name} node={node} />
      ))}

      {/* Ambient Cyber Grid Dust */}
      <points geometry={dustParticles}>
        <pointsMaterial size={0.035} color="#38bdf8" transparent opacity={0.4} />
      </points>
    </group>
  );
};
