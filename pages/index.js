import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  useFrame(() => {
  mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  );
  }

export default function Home() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-2.2, 0, 0]} />
      <Box position={[2.5, 0, 0]} />
    </Canvas>
  )
}
