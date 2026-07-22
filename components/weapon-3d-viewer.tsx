"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

type Weapon3DViewerProps = {
  weaponName: string;
};

function Carbon57Model() {
  const model = useGLTF("/models/carbon-57/scene.gltf");

  return (
    <Bounds fit clip observe margin={1.25}>
      <Center>
        <group
          rotation={[
            0,
            Math.PI / 2,
            0,
          ]}
        >
          <primitive object={model.scene} />
        </group>
      </Center>
    </Bounds>
  );
}

function LoadingModel() {
  return (
    <Html center>
      <div className="weapon-3d-loading">
        Chargement du modèle 3D…
      </div>
    </Html>
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
          Fais glisser pour faire tourner l’arme et utilise la molette pour
          zoomer.
        </p>
      </div>

      <div className="weapon-3d-canvas">
        <Canvas
          camera={{
            position: [0, 0.5, 7],
            fov: 38,
          }}
          dpr={[1, 1.5]}
          shadows
        >
          <color
            attach="background"
            args={["#080808"]}
          />

          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 6, 5]}
            intensity={4}
            castShadow
          />

          <directionalLight
            position={[-4, 2, -4]}
            intensity={2}
            color="#ffffff"
          />

          <pointLight
            position={[-4, 3, 4]}
            intensity={30}
            color="#ff2020"
          />

          <Suspense fallback={<LoadingModel />}>
            <Carbon57Model />

            <Environment preset="city" />

            <ContactShadows
              position={[0, -1.8, 0]}
              opacity={0.4}
              scale={14}
              blur={3}
              far={6}
            />
          </Suspense>

          <OrbitControls
            makeDefault
            enablePan={false}
            minDistance={2}
            maxDistance={12}
            autoRotate
            autoRotateSpeed={0.55}
          />
        </Canvas>
      </div>
    </section>
  );
}

useGLTF.preload("/models/carbon-57/scene.gltf");