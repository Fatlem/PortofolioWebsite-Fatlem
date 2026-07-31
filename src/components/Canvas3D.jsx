import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Torus, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOctahedron({ position, scale, speed, color }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.5}>
      <Octahedron ref={meshRef} args={[scale, 0]} position={position}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Octahedron>
    </Float>
  );
}

function CoreSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.85}
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingTorus({ radius, speed, tubeRadius, color, rotAxis }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation[rotAxis] = state.clock.elapsedTime * speed;
  });
  return (
    <Torus ref={ref} args={[radius, tubeRadius, 16, 100]}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.5}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
      />
    </Torus>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#22d3ee" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#06b6d4" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a855f7" />
      <pointLight position={[0, 5, -5]} intensity={1} color="#10b981" />

      <CoreSphere />

      <OrbitingTorus radius={2.2} speed={0.3} tubeRadius={0.02} color="#06b6d4" rotAxis="x" />
      <OrbitingTorus radius={2.8} speed={-0.2} tubeRadius={0.015} color="#a855f7" rotAxis="y" />
      <OrbitingTorus radius={3.4} speed={0.15} tubeRadius={0.01} color="#10b981" rotAxis="z" />

      <FloatingOctahedron position={[3, 1.5, -1]} scale={0.4} speed={1.2} color="#22d3ee" />
      <FloatingOctahedron position={[-3, -1, 1]} scale={0.35} speed={0.9} color="#c084fc" />
      <FloatingOctahedron position={[2, -2, -2]} scale={0.3} speed={1.5} color="#34d399" />
      <FloatingOctahedron position={[-2, 2, 2]} scale={0.25} speed={1.1} color="#06b6d4" />

      <ParticleField />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function Canvas3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
