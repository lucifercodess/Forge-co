"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Grid() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 20;
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = -count / 2; i < count / 2; i++) {
      for (let j = -count / 2; j < count / 2; j++) {
        pos.push([i * 1.5, j * 1.5, -12 - Math.random() * 8]);
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.015;
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshBasicMaterial color="#00ffc8" transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

function Orb() {
  return (
    <Float speed={2} floatIntensity={0.35} rotationIntensity={0.15}>
      <mesh>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#00ffc8"
          emissive="#00ffc8"
          emissiveIntensity={0.4}
          wireframe={false}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function TorusRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.5} floatIntensity={0.5} rotationIntensity={0.2}>
      <mesh ref={ref} position={[2.5, 1, -3]}>
        <torusGeometry args={[1.2, 0.08, 16, 48]} />
        <meshBasicMaterial color="#00ffc8" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#00ffc8" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function SceneInner() {
  return (
    <>
      <color attach="background" args={["#050508"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffc8" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#00ffc8" />
      <Grid />
      <Orb />
      <TorusRing />
      <Particles />
    </>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050508]">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 55 }}
          dpr={[1, 1.5]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <SceneInner />
        </Canvas>
      </Suspense>
    </div>
  );
}
