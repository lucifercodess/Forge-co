"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WHITE = "#e4e4e7";

// Distant starfield – many small points far back
function Starfield() {
  const count = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 25;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color={WHITE}
        size={0.18}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Brighter “near” stars – slower parallax
function NearStars() {
  const ref = useRef<THREE.Points>(null);
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color={WHITE}
        size={0.25}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Single asteroid – irregular shape, drifts through space
function Asteroid({
  position,
  scale: s,
  speed,
  drift,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  drift: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);
  const pos = useRef({ x: position[0], y: position[1], z: position[2] });

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = t * 0.2;
    ref.current.rotation.y = t * 0.25;
    pos.current.x += drift[0] * delta;
    pos.current.y += drift[1] * delta;
    pos.current.z += drift[2] * delta;
    // Wrap around when far out
    if (pos.current.z < -25) pos.current.z += 35;
    if (pos.current.z > 15) pos.current.z -= 35;
    if (pos.current.x < -30) pos.current.x += 50;
    if (pos.current.x > 30) pos.current.x -= 50;
    ref.current.position.set(pos.current.x, pos.current.y, pos.current.z);
  });

  return (
    <mesh ref={ref} position={position}>
      <dodecahedronGeometry args={[s, 0]} />
      <meshStandardMaterial
        color="#6b7280"
        emissive="#374151"
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  );
}

// Asteroids moving through the scene
function Asteroids() {
  const asteroids = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        position: [
          (Math.random() - 0.5) * 24,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 25 - 8,
        ] as [number, number, number],
        scale: Math.random() * 0.22 + 0.08,
        speed: Math.random() * 0.2 + 0.1,
        drift: [
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.3,
          -(Math.random() * 1.5 + 0.8),
        ] as [number, number, number],
      })),
    []
  );

  return (
    <>
      {asteroids.map((a, i) => (
        <Asteroid key={i} position={a.position} scale={a.scale} speed={a.speed} drift={a.drift} />
      ))}
    </>
  );
}

// Subtle twinkle on starfield
function TwinkleStars() {
  const ref = useRef<THREE.Points>(null);
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 55;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 55;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35 - 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current?.material) return;
    const m = ref.current.material as THREE.PointsMaterial;
    m.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color={WHITE}
        size={0.2}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function SceneInner() {
  return (
    <>
      <color attach="background" args={["#0f0f14"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 10]} intensity={0.6} color="#ffffff" />
      <Starfield />
      <NearStars />
      <TwinkleStars />
      <Asteroids />
    </>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0f0f14]">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
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
