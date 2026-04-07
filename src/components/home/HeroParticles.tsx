import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 140;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const isRed = Math.random() > 0.62;
      if (isRed) {
        // Brand red #e63946
        col[i * 3]     = 0.9;
        col[i * 3 + 1] = 0.22;
        col[i * 3 + 2] = 0.27;
      } else {
        const v = 0.3 + Math.random() * 0.45;
        col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = v;
      }
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.elapsedTime;
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = Math.sin(t * 0.012) * 0.06;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingOrb({
  position,
  color,
  emissiveColor,
  speed,
  radius,
}: {
  position: [number, number, number];
  color: string;
  emissiveColor: string;
  speed: number;
  radius: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.8}>
      <mesh position={position}>
        <sphereGeometry args={[radius, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.3}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

export function HeroParticles() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 65 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 4, 4]} intensity={1.2} color="#e63946" />
        <pointLight position={[-6, -4, 2]} intensity={0.6} color="#ffffff" />

        <Particles />

        {/* Floating 3D orbs — brand red */}
        <FloatingOrb
          position={[7, 2.5, -3]}
          color="#e63946"
          emissiveColor="#e63946"
          speed={1.3}
          radius={0.22}
        />
        <FloatingOrb
          position={[-7.5, -1.5, -4]}
          color="#c8202e"
          emissiveColor="#e63946"
          speed={0.85}
          radius={0.3}
        />
        <FloatingOrb
          position={[4, -3.5, -2]}
          color="#ffffff"
          emissiveColor="#ffffff"
          speed={1.6}
          radius={0.12}
        />
        <FloatingOrb
          position={[-4, 3, -5]}
          color="#e63946"
          emissiveColor="#e63946"
          speed={1.1}
          radius={0.17}
        />
      </Canvas>
    </div>
  );
}
