import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import birdScene from '../assets/3d/bird.glb';


const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  
  //making bird to swinging
  useEffect(() => {
      actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //update the y position simulate the bird move in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    //making to fly across the island
    if (birdRef.current.position.x > camera.position.x + 10) {
      //go backwards and rotate the bird 180 degree
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) { //still in the screen and want to move forward
      birdRef.current.rotation.y = 0; //resetting
    }

    if (birdRef.current.rotation.y === 0) {
      //moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else { //moving backwards
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }


  })


  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird