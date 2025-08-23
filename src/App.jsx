import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import MacContainer from "./MacContainer";
import { Environment, ScrollControls } from "@react-three/drei";

function App() {
  return (
    <div className="w-full h-screen ">
      <div className="Navbar flex gap-10 pt-8 pb-3 line absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iphone",
          "ipad",
          "services",
          "products",
          "store",
          "mac",
          "watch",
          "airpods",
          "vision",
          "entertainment",
          "accessories",
        ].map((e) => (
          <a href="" className="text-white font-[400] text-md capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-30 left-1/2 -translate-x-1/2">
        <h1 className="masked text-5xl font-[700] tracking-tighter">
          Macbook Pro.
        </h1>
        <p className="text-center w-2/4 pt-4">
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so gaming feels more immersive and realistic than ever.
        </p>
      </div>
      <Canvas camera={{ fov: 30, position: [0, -4, 100] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
