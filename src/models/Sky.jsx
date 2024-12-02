import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef(); //for sky rotation

  useFrame((_, delta) => {
    if (isRotating){
      skyRef.current.rotation.y += 0.15 * delta; //adjusting the plane speed
    }
  });

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} /> 
    </mesh>
  )
}

export default Sky