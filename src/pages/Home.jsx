import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Loader } from "../components/Loader";
import { Island } from "../modals/Island";
import Sky from "../modals/Sky";
import Bird from "../modals/Bird";
import Plane from "../modals/Plane";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let screenRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return { screenScale, screenPosition, screenRotation };
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3, -3];
    }

    return { screenScale, screenPosition };
  };

  const { screenScale, screenPosition, screenRotation } =
    adjustIslandForScreenSize();

  const { planeScale, planePosition } = adjustPlaneForScreenSize();

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <section className="w-full h-screen relative">
      <div className=" absolute top-28 left-0 right-0 z-10 justify-center flex items-center">
        {currentStage ? (
          <HomeInfo
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        ) : null}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 1]} intensity={0.7} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <hemisphereLight
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={0.8}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={screenRotation}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            planePosition={planePosition}
            planeScale={planeScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlaying ? soundon : soundoff}
          className="w-12 h-12 cursor-pointer object-contain"
          onClick={(event) => {
            event.preventDefault(); // Prevent default behavior (e.g., download)
            setIsPlaying(!isPlaying);
          }}
        />
      </div>
    </section>
  );
};

export default Home;
