"use client";

import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";

type Weapon3DViewerProps = {
  weaponName: string;
};

function DemoWeapon() {
  return (
    <group
      rotation={[0, -0.35, 0]}
      position={[0, -0.15, 0]}
    >
      {/* Corps principal */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 0.55, 0.55]} />
        <meshStandardMaterial
          color="#252525"
          metalness={0.75}
          roughness={0.28}
        />
      </mesh>

      {/* Partie supérieure */}
      <mesh position={[0.15, 0.42, 0]}>
        <boxGeometry args={[1.8, 0.28, 0.42]} />
        <meshStandardMaterial
          color="#3a3a3a"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Canon */}
      <mesh
        position={[2.1, 0.08, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.14, 0.14, 1.7, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Silencieux */}
      <mesh
        position={[3.1, 0.08, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.22, 0.22, 1.1, 32]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.75}
          roughness={0.25}
        />
      </mesh>

      {/* Crosse */}
      <mesh position={[-1.95, 0.05, 0]}>
        <boxGeometry args={[1.2, 0.42, 0.46]} />
        <meshStandardMaterial
          color="#202020"
          metalness={0.45}
          roughness={0.45}
        />
      </mesh>

      {/* Poignée */}
      <mesh
        position={[-0.25, -0.75, 0]}
        rotation={[0, 0, -0.22]}
      >
        <boxGeometry args={[0.38, 1.05, 0.42]} />
        <meshStandardMaterial
          color="#1c1c1c"
          metalness={0.35}
          roughness={0.5}
        />
      </mesh>

      {/* Chargeur */}
      <mesh
        position={[0.55, -0.92, 0]}
        rotation={[0, 0, -0.12]}
      >
        <boxGeometry args={[0.55, 1.35, 0.46]} />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.38}
        />
      </mesh>

      {/* Optique */}
      <group position={[0.25, 0.85, 0]}>
        <mesh>
          <boxGeometry args={[0.75, 0.28, 0.38]} />
          <meshStandardMaterial
            color="#151515"
            metalness={0.65}
            roughness={0.25}
          />
        </mesh>

        <mesh position={[0.18, 0.03, 0.21]}>
          <circleGeometry args={[0.12, 32]} />
          <meshStandardMaterial
            color="#ff2020"
            emissive="#ff2020"
            emissiveIntensity={2}
          />
        </mesh>
      </group>

      {/* Détails rouges */}
      <mesh position={[0.15, 0.05, 0.3]}>
        <boxGeometry args={[1.1, 0.08, 0.04]} />
        <meshStandardMaterial
          color="#ff2020"
          emissive="#ff2020"
          emissiveIntensity={0.7}
        />
      </mesh>
    </group>
  );
}

export function Weapon3DViewer({
  weaponName,
}: Weapon3DViewerProps) {
  return (
    <section className="weapon-3d-section">
      <div className="weapon-3d-heading">
        <p className="eyebrow">
          APERÇU INTERACTIF
        </p>

        <h2>{weaponName} en 3D</h2>

        <p>
          Fais glisser avec la souris ou le doigt pour faire tourner l’arme.
          Utilise la molette ou deux doigts pour zoomer.
        </p>
      </div>

      <div className="weapon-3d-canvas">
        <Canvas
          camera={{
            position: [0, 1.2, 7.5],
            fov: 42,
          }}
          dpr={[1, 1.6]}
          shadows
        >
          <color attach="background" args={["#090909"]} />

          <ambientLight intensity={0.7} />

          <directionalLight
            position={[4, 5, 4]}
            intensity={2.2}
            castShadow
          />

          <pointLight
            position={[-3, 2, 3]}
            intensity={35}
            color="#ff2020"
          />

          <pointLight
            position={[3, -1, -2]}
            intensity={18}
            color="#7a0000"
          />

          <DemoWeapon />

          <ContactShadows
            position={[0, -1.7, 0]}
            opacity={0.48}
            scale={12}
            blur={2.8}
            far={4}
          />

          <Environment preset="city" />

          <OrbitControls
            enablePan={false}
            minDistance={4.5}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={0.8}
          />
        </Canvas>
      </div>
    </section>
  );
}
