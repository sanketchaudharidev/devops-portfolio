import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// 3D AWS Cloud Architecture Nodes
interface CloudNode {
  id: string;
  label: string;
  type: 'core' | 'compute' | 'storage' | 'database' | 'network' | 'telemetry' | 'cicd';
  position: [number, number, number];
  color: string;
  size: number;
}

const AWS_CLOUD_NODES: CloudNode[] = [
  // 1. Central AWS Cloud Backbone Core
  { id: 'aws-core', label: 'AWS Cloud Core', type: 'core', position: [0, 0, 0], color: '#FF9900', size: 0.65 },

  // 2. Compute Tier (EC2 & Auto Scaling)
  { id: 'ec2-cluster', label: 'EC2 Compute Cluster', type: 'compute', position: [-2.5, 1.6, 1.2], color: '#FF9900', size: 0.35 },
  { id: 'k8s-nodes', label: 'EKS / Kubernetes Pods', type: 'compute', position: [-1.8, 2.6, -0.8], color: '#326CE5', size: 0.38 },

  // 3. Storage & Database Tier (S3 & RDS MySQL/Mongo)
  { id: 's3-bucket', label: 'S3 Object Storage', type: 'storage', position: [2.6, 1.8, 0.8], color: '#569A31', size: 0.34 },
  { id: 'rds-db', label: 'RDS MySQL / Mongo DB', type: 'database', position: [2.2, -1.2, 1.5], color: '#3B48CC', size: 0.36 },

  // 4. Networking & Edge Tier (VPC, Route 53, CloudFront)
  { id: 'vpc-gateway', label: 'VPC Peering Gateway', type: 'network', position: [-3.2, -0.8, 0.4], color: '#A855F7', size: 0.32 },
  { id: 'cloudfront-edge', label: 'CloudFront Edge CDN', type: 'network', position: [3.4, 0.2, -1.2], color: '#C084FC', size: 0.30 },
  { id: 'route53-dns', label: 'Route 53 DNS', type: 'network', position: [0.8, 2.8, -1.0], color: '#8C4FFF', size: 0.28 },

  // 5. CI/CD Ingestion Tier (Git, Jenkins, Terraform)
  { id: 'git-source', label: 'Git / GitLab Source', type: 'cicd', position: [-4.2, 2.2, -1.8], color: '#38BDF8', size: 0.30 },
  { id: 'jenkins-ci', label: 'Jenkins CI/CD Pipeline', type: 'cicd', position: [-3.4, 0.8, -1.2], color: '#D24939', size: 0.34 },
  { id: 'terraform-iac', label: 'Terraform IaC State', type: 'cicd', position: [-1.5, -2.2, -1.0], color: '#7B42BC', size: 0.28 },

  // 6. Observability & Telemetry (CloudWatch)
  { id: 'cloudwatch-telemetry', label: 'CloudWatch Telemetry', type: 'telemetry', position: [-0.2, -2.4, 1.2], color: '#E7157B', size: 0.35 },
  { id: 'prod-gateway', label: 'Zero-Downtime Prod', type: 'core', position: [0.2, -3.2, -0.4], color: '#10B981', size: 0.42 },
];

const CLOUD_CONNECTIONS: [number, number][] = [
  // Core connections
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 10], [0, 11],
  // CI/CD to AWS flow
  [7, 8], [8, 1], [8, 2], [9, 0], [9, 4],
  // Network mesh
  [4, 1], [3, 4], [5, 3], [6, 5], [6, 1],
  // Observability & Prod
  [1, 10], [4, 10], [10, 11], [11, 4], [3, 11]
];

// 3D AWS Server Blade Cube Mesh (EC2)
const ServerBladeCube: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Status LED blinker */}
      <pointLight color={color} intensity={0.8} distance={2} />
    </group>
  );
};

// 3D AWS S3 Storage Cylinder Discs
const StorageDiscTower: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.1, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.1, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.1, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
};

// Fiber-Optic Telemetry Signal Packet
const FiberSignalPacket: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
  offset: number;
  color: string;
}> = ({ start, end, speed, offset, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = (clock.getElapsedTime() * speed + offset) % 1;
    meshRef.current.position.lerpVectors(startVec, endVec, t);
    const pulse = 0.08 + Math.sin(t * Math.PI) * 0.05;
    meshRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export const AwsCloudHero3D: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreGlobeRef = useRef<THREE.Mesh>(null);
  const orbitalRing1 = useRef<THREE.Mesh>(null);
  const orbitalRing2 = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const scrollProgress = useRef<number>(0);
  const targetScroll = useRef<number>(0);
  const mouseCoords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll.current = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseCoords.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Compute Network Line geometries
  const connectionLines = useMemo(() => {
    return CLOUD_CONNECTIONS.map(([i1, i2]) => {
      const p1 = new THREE.Vector3(...AWS_CLOUD_NODES[i1].position);
      const p2 = new THREE.Vector3(...AWS_CLOUD_NODES[i2].position);
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      return { geom, color: AWS_CLOUD_NODES[i1].color, i1, i2 };
    });
  }, []);

  // Ambient Cyber Star Dust
  const starField = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Smooth Lerping of Scroll Position
    scrollProgress.current = THREE.MathUtils.lerp(
      scrollProgress.current,
      targetScroll.current,
      0.06
    );

    const sp = scrollProgress.current;
    const t = clock.getElapsedTime();

    // Central Core Globe rotation
    if (coreGlobeRef.current) {
      coreGlobeRef.current.rotation.y = t * 0.2;
      coreGlobeRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    }

    // Orbital CDN Rings rotation
    if (orbitalRing1.current) {
      orbitalRing1.current.rotation.z = t * 0.35;
      orbitalRing1.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.2) * 0.15;
    }
    if (orbitalRing2.current) {
      orbitalRing2.current.rotation.z = -t * 0.25;
      orbitalRing2.current.rotation.y = Math.PI / 3;
    }

    if (!reducedMotion) {
      const mx = mouseCoords.current.x;
      const my = mouseCoords.current.y;

      // Group rotation guided by scroll progress & interactive mouse parallax
      groupRef.current.rotation.y = sp * Math.PI * 1.8 + mx * 0.35 + Math.sin(t * 0.1) * 0.08;
      groupRef.current.rotation.x = Math.sin(sp * Math.PI) * 0.45 + my * 0.25;
      groupRef.current.rotation.z = Math.sin(sp * Math.PI * 2) * 0.2;

      // Scroll-driven camera choreography flying across AWS cloud tiers
      camera.position.z = THREE.MathUtils.lerp(8.0, 5.5, Math.sin(sp * Math.PI));
      camera.position.y = THREE.MathUtils.lerp(0, -1.8, sp);
      camera.position.x = THREE.MathUtils.lerp(0, 1.8, Math.sin(sp * Math.PI * 2));
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.9} />
      <pointLight position={[8, 8, 8]} intensity={2.0} color="#FF9900" />
      <pointLight position={[-8, -8, -6]} intensity={1.5} color="#38BDF8" />
      <pointLight position={[0, 0, 5]} intensity={1.2} color="#10B981" />

      {/* CENTRAL AWS MULTI-REGION VPC GLOBE */}
      <group position={[0, 0, 0]}>
        {/* Core Icosahedron Wireframe Mesh */}
        <mesh ref={coreGlobeRef}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshBasicMaterial color="#FF9900" wireframe transparent opacity={0.3} />
        </mesh>

        {/* Inner Glowing Core Sphere */}
        <mesh>
          <sphereGeometry args={[0.65, 24, 24]} />
          <meshStandardMaterial
            color="#FF9900"
            emissive="#FF9900"
            emissiveIntensity={1.0}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* CloudFront & Route 53 Edge Orbital Rings */}
        <mesh ref={orbitalRing1}>
          <torusGeometry args={[2.0, 0.02, 12, 64]} />
          <meshBasicMaterial color="#C084FC" transparent opacity={0.6} />
        </mesh>
        <mesh ref={orbitalRing2}>
          <torusGeometry args={[2.4, 0.018, 12, 64]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.5} />
        </mesh>
      </group>

      {/* 3D AWS NODE ENTITIES */}
      {AWS_CLOUD_NODES.map((node) => {
        if (node.type === 'compute') {
          return <ServerBladeCube key={node.id} position={node.position} color={node.color} />;
        }
        if (node.type === 'storage' || node.type === 'database') {
          return <StorageDiscTower key={node.id} position={node.position} color={node.color} />;
        }
        return (
          <group key={node.id} position={node.position}>
            <mesh>
              <sphereGeometry args={[node.size, 20, 20]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
            <pointLight color={node.color} intensity={0.6} distance={2.5} />
          </group>
        );
      })}

      {/* FIBER-OPTIC INFRASTRUCTURE PIPES */}
      {connectionLines.map((l, idx) => (
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

      {/* FLOWING TELEMETRY SIGNAL DATA PACKETS */}
      {!reducedMotion &&
        CLOUD_CONNECTIONS.map(([i1, i2], idx) => (
          <FiberSignalPacket
            key={`sig-${idx}`}
            start={AWS_CLOUD_NODES[i1].position}
            end={AWS_CLOUD_NODES[i2].position}
            speed={0.45 + (idx % 4) * 0.12}
            offset={(idx * 0.19) % 1}
            color={AWS_CLOUD_NODES[i1].color}
          />
        ))}

      {/* AMBIENT CYBER PARTICLES */}
      <points geometry={starField}>
        <pointsMaterial size={0.04} color="#FF9900" transparent opacity={0.35} />
      </points>
    </group>
  );
};
