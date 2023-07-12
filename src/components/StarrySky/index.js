import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stars,
} from "@react-three/drei";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="bg-container" />
      <Canvas dpr={[1.5, 2]} linear shadows style={{ position: "absolute" }}>
        <fog attach="fog" args={["#272730", 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.05}
          enablePan={true}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={600} depth={50} count={1000} factor={10} />
      </Canvas>
      <div className="layer" />
      <Loader />
    </>
  );
}
