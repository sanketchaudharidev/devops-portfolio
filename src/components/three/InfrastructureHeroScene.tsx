import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NodeData {
  name: string;
  sub: string;
  position: [number, number, number];
  color: string;
}

const NODES: NodeData[] = [
  { name: "Git", sub: "Source", position: [-3.2, 1.8, 0], color: "#38bdf8" },
  { name: "CI Build", sub: "Jenkins", position: [-1.6, 0.6, 0.4], color: "#60a5fa" },
  { name: "Quality", sub: "SonarQube", position: [-0.4, 1.6, -0.2], color: "#34d399" },
  { name: "Containers", sub: "Docker/K8s", position: [0.8, -0.2, 0.5], color: "#818cf8" },
  { name: "Cloud", sub: "AWS Infra", position: [2.2, 1.2, 0], color: "#f59e0b" },
  { name: "Telemetry", sub: "CloudWatch", position: [3.4, -0.6, 0.3], color: "#f43f5e" },
  { name: "Production", sub: "Zero-Downtime", position: [2.0, -1.8, -0.4], color: "#10b981" },
];

// Define connection pairs between nodes
const CONNECTIONS = [
  [0, 1], // Git -> Jenkins
  [1, 2], // Jenkins -> SonarQube
  [2, 3], // SonarQube -> Containers
  [1, 3], // Jenkins -> Containers
  [3, 4], // Containers -> AWS Cloud
  [4, 5], // AWS Cloud -> CloudWatch
  [3, 6], // Containers -> Production
  [4, 6], // AWS Cloud -> Production
  [5, 6], // CloudWatch -> Production
];

// Single Node Component in 3D
const TopologyNode: React.FC<{ node: NodeData }> = ({ node }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
      ringRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group position={node.position}>
      {/* Central Core Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Tech Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.38, 0.015, 12, 32]} />
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>
    </group>
  );
};

// Signal Packets moving along connections
const SignalPacket: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
  offset: number;
  color: string;
}> = ({ start, end, speed, offset, color }) => {
  const packetRef = useRef<THREE.Mesh>(null);
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame(({ clock }) => {
    if (!packetRef.current) return;
    const t = (clock.getElapsedTime() * speed + offset) % 1;
    packetRef.current.position.lerpVectors(startVec, endVec, t);
    // Pulsing size
    const scale = 0.06 + Math.sin(t * Math.PI) * 0.04;
    packetRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={packetRef}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export const InfrastructureHeroScene: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Smooth mouse reaction
  useFrame(({ mouse, clock }) => {
    if (groupRef.current && !reducedMotion) {
      const t = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.3 + Math.sin(t) * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.2 + Math.cos(t) * 0.05,
        0.05
      );
    }
  });

  // Build line geometries for connections
  const lineGeometries = useMemo(() => {
    return CONNECTIONS.map(([i1, i2]) => {
      const p1 = new THREE.Vector3(...NODES[i1].position);
      const p2 = new THREE.Vector3(...NODES[i2].position);
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      return { geom, color: NODES[i1].color, i1, i2 };
    });
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.95}>
      {/* Ambient & Directional Lights */}
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#38bdf8" />
      <pointLight position={[-5, -5, -3]} intensity={1.0} color="#10b981" />

      {/* Network Lines */}
      {lineGeometries.map((line, idx) => (
        <primitive
          key={idx}
          object={
            new THREE.Line(
              line.geom,
              new THREE.LineBasicMaterial({
                color: line.color,
                transparent: true,
                opacity: 0.25,
                linewidth: 1,
              })
            )
          }
        />
      ))}

      {/* Dynamic Signal Data Packets */}
      {!reducedMotion &&
        CONNECTIONS.map(([i1, i2], idx) => (
          <React.Fragment key={`packet-${idx}`}>
            <SignalPacket
              start={NODES[i1].position}
              end={NODES[i2].position}
              speed={0.35 + (idx % 3) * 0.1}
              offset={(idx * 0.23) % 1}
              color={NODES[i1].color}
            />
          </React.Fragment>
        ))}

      {/* 3D Nodes */}
      {NODES.map((node) => (
        <TopologyNode key={node.name} node={node} />
      ))}
    </group>
  );
};
