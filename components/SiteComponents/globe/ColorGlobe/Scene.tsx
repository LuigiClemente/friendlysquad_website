import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bloom from "./Bloom";
import Points from "./Points";
import { World } from "./World";

export default function Scene() {
  // Everything defined in here will persist between route changes, only children are swapped
  // { children, ...props }

  function Shape({ children, color, ...props }) {
    return (
      <mesh {...props}>
        {children}
        {/* Now, in order to get selective bloom we simply crank colors out of
        their natural spectrum. Where colors are normally defined between 0 - 1 we push them
        way out of range, into a higher defintion (HDR). What previously was [1, 1, 1] now could
        for instance be [10, 10, 10]. This requires that toneMapping is off, or it clamps to 1 */}
        <meshBasicMaterial color={[1, 4, 0.5]} toneMapped={false} />
      </mesh>
    );
  }
  return (
    // {...props}
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
      }}
    >
      <div style={{ height: "fit-content", width: "fit-content" }}>
        <Canvas
          camera={{ position: [-10, 0, 0] }}
          style={{ height: "600px", width: "600px" }}
        >
          <directionalLight intensity={0.75} />
          <ambientLight intensity={1} />
          <Bloom />
          {/* <Universe/> */}
          <Points
            height={1}
            color={[1, 4, 0.5]}
            position={[-1.2, 2.1, 2.9]}
            rotation={[1, 0, 0.3]}
          />
          <Points
            height={1}
            color={[0.5, 1, 4]}
            position={[-1.3, 2.05, 2.9]}
            rotation={[1, 0, 0.3]}
          />
          <Points
            height={1}
            color={[4, 0.1, 1]}
            position={[-0.1, 2.05, 3.2]}
            rotation={[1, 0, 0.3]}
          />
          <Points
            height={1}
            color={[1, 4, 0.5]}
            position={[-0.2, 2.05, 3.2]}
            rotation={[1, 0, 0.3]}
          />
          <Points
            height={1}
            color={[1, 4, 0.5]}
            position={[-0.4, 2.15, 3]}
            rotation={[1, 0, 0.3]}
          />
          <Points
            height={1}
            color={[0.5, 1, 4]}
            position={[-0.1, 2.5, 2.8]}
            rotation={[1, 0, 0.3]}
          />
          <Points
            height={1}
            color={[0.5, 1, 4]}
            position={[2, -1, 3]}
            rotation={[1.3, 2.5, 0.5]}
          />
          <Points
            height={1.5}
            color={[4, 0.1, 1]}
            position={[2.8, 2.55, -0.1]}
            rotation={[-0.1, 3, 1]}
          />
          <Points
            height={1.5}
            color={[1, 4, 0.5]}
            position={[2.6, 2.8, 0.15]}
            rotation={[-0.1, 3, 1]}
          />
          <Points
            height={1.5}
            color={[0.5, 1, 4]}
            position={[2.6, 2.8, 0.4]}
            rotation={[-0.1, 3, 1]}
          />
          <Points
            height={1.5}
            color={[0.5, 1, 4]}
            position={[2, 3.2, -0.4]}
            rotation={[-0.2, 3, 0.8]}
          />
          <Points
            height={1.5}
            color={[4, 0.1, 1]}
            position={[3.3, -1.5, -1.2]}
            rotation={[-0.2, 3.6, -1.3]}
          />
          <Points
            height={1.5}
            color={[0.5, 1, 4]}
            position={[2, 1.75, -1]}
            rotation={[0.2, 1, 2]}
          />
          <Points
            height={1.5}
            color={[1, 4, 0.5]}
            position={[0.9, 1.1, -3.5]}
            rotation={[-0.2, 1.3, 2]}
          />
          <Points
            height={1.5}
            color={[4, 0.1, 1]}
            position={[-1.3, 1.5, -3.2]}
            rotation={[0.35, 1.85, 1.6]}
          />
          <Points
            height={1.5}
            color={[0.5, 1, 4]}
            position={[-1, 0.3, -3.6]}
            rotation={[0.15, 1.9, 1.6]}
          />
          <Points
            height={1.5}
            color={[1, 4, 0.5]}
            position={[-1, 0.1, -3.6]}
            rotation={[0.15, 1.9, 1.6]}
          />
          <Points
            height={1.5}
            color={[4, 0.1, 1]}
            position={[-2.8, -1.6, -2.1]}
            rotation={[0.15, 2.4, 1.2]}
          />
          <Points
            height={1.5}
            color={[1, 4, 0.5]}
            position={[-1.1, 2.1, -2.9]}
            rotation={[0.35, 1.85, 1.6]}
          />
          <Points
            height={1.5}
            color={[0.5, 1, 4]}
            position={[-1.55, 2.1, -2.8]}
            rotation={[0.35, 1.85, 1.6]}
          />
          <Points
            height={1.5}
            color={[4, 0.1, 1]}
            position={[-2.2, 2, -2.3]}
            rotation={[0.35, 2.1, 1.6]}
          />
          <Points
            height={1.5}
            color={[1, 4, 0.5]}
            position={[-2.2, 2.2, -2.1]}
            rotation={[0.35, 2.1, 1.6]}
          />
          <World />
          <Preload all />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
