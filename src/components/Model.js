/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/057-room-hacker.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane_1.geometry} material={materials.wall} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials.floor} />
      <mesh geometry={nodes.Table.geometry} material={materials.wood} position={[-3.08, 1.45, -1.47]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials.wood} />
      </mesh>
      <mesh geometry={nodes.Table002.geometry} material={materials.wood} position={[0.58, 1.45, -3.09]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials.wood} />
      </mesh>
      <mesh geometry={nodes.Sofa.geometry} material={materials['red.001']} position={[1.9, 0, 2.73]} rotation={[0, -0.02, 0]} scale={1.2}>
        <mesh geometry={nodes.Cube.geometry} material={materials['black.001']} position={[-1.36, 1.16, -0.13]} rotation={[-0.14, 0.7, -0.7]} />
        <mesh geometry={nodes.Cube001.geometry} material={materials['black.001']} position={[1.21, 1.02, -0.13]} rotation={[0.08, -1.26, 0.37]} />
      </mesh>
      <mesh geometry={nodes.Table001.geometry} material={materials.wood} position={[3.19, 0.93, 0.45]} rotation={[0, 0.42, 0]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials.wood} />
      </mesh>
      <mesh geometry={nodes.Pipe003.geometry} material={materials.metal} position={[-3.66, 5.2, -0.02]} />
      <mesh geometry={nodes.Pipe001.geometry} material={materials.metal} position={[-3.09, 5.2, 3.99]} />
      <mesh geometry={nodes.Pipe002.geometry} material={materials.metal} position={[-3.91, 0, 1.72]} />
      <mesh geometry={nodes.Pipe.geometry} material={materials.metal} position={[-3.91, 0, 1.86]} />
      <mesh geometry={nodes.PC001.geometry} material={materials['computer-beige']} position={[-1.09, 1.82, -3.32]} rotation={[0, 0.01, 0]} scale={1.25}>
        <mesh geometry={nodes.Plane009.geometry} material={materials['computer-beige']} />
        <mesh geometry={nodes.Plane010.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane011.geometry} material={materials.red} position={[0.42, 0.2, 0.44]} rotation={[-0.16, 0, 0]} />
        <group position={[-0.47, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Plane010_1.geometry} material={materials['computer-beige']} />
          <mesh geometry={nodes.Plane010_2.geometry} material={materials.led} />
        </group>
        <group position={[-0.42, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Plane010_1.geometry} material={materials['computer-beige']} />
          <mesh geometry={nodes.Plane010_2.geometry} material={materials.led} />
        </group>
        <group position={[0.05, 0.32, 0.06]}>
          <mesh geometry={nodes.Plane011_1.geometry} material={materials['computer-beige']} />
          <mesh geometry={nodes.Plane011_2.geometry} material={materials['screen-qb']} />
        </group>
      </mesh>
      <mesh geometry={nodes.PC002.geometry} material={materials['computer-beige']} position={[-2.92, 1.82, -2.81]} rotation={[0, 0.92, 0]} scale={1.25}>
        <mesh geometry={nodes.Plane035.geometry} material={materials['computer-beige']} />
        <mesh geometry={nodes.Plane036.geometry} material={materials.black} position={[0, 0, -0.09]} />
        <mesh geometry={nodes.Plane037.geometry} material={materials.red} position={[0.42, 0.2, 0.44]} rotation={[-0.16, 0, 0]} />
        <group position={[-0.47, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Plane010_1.geometry} material={materials['computer-beige']} />
          <mesh geometry={nodes.Plane010_2.geometry} material={materials.led} />
        </group>
        <group position={[-0.42, 0.12, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Plane010_1.geometry} material={materials['computer-beige']} />
          <mesh geometry={nodes.Plane010_2.geometry} material={materials.led} />
        </group>
        <group position={[0.02, 0.32, 0.06]} scale={1.24}>
          <mesh geometry={nodes.Plane016.geometry} material={materials['computer-beige']} />
          <mesh geometry={nodes.Plane016_1.geometry} material={materials['screen-nc']} />
        </group>
      </mesh>
      <mesh geometry={nodes.Keyboard001.geometry} material={materials['computer-beige']} position={[-1.96, 1.83, -1.91]} rotation={[0, 0.63, 0]} scale={1.25}>
        <mesh geometry={nodes.Plane018.geometry} material={materials.grey} position={[-0.04, 0.05, 0.03]} rotation={[0.08, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Keyboard.geometry} material={materials['computer-beige']} position={[1.94, 2.59, -3.88]} rotation={[1.42, -1.57, 0]} scale={1.25}>
        <mesh geometry={nodes.Plane043.geometry} material={materials.grey} position={[-0.04, 0.05, 0.03]} rotation={[0.08, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.TV.geometry} material={materials.black} position={[0.88, 1.82, -3.28]} rotation={[0, -0.24, 0]} scale={1.22}>
        <mesh geometry={nodes.Plane040_1.geometry} material={materials['black-gloss']} />
        <mesh geometry={nodes.Plane040_2.geometry} material={materials['screen-dos-game']} />
        <mesh geometry={nodes.Plane019.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane020.geometry} material={materials.grey} />
        <mesh geometry={nodes.Plane021.geometry} material={materials.led} position={[0.52, 0.09, 0.31]} />
        <mesh geometry={nodes.Plane022.geometry} material={materials.grey} position={[0.09, 0.66, 0.04]} rotation={[0, 0.09, 0]}>
          <mesh geometry={nodes.Plane025.geometry} material={materials.black} position={[0, 0, -0.07]} />
          <mesh geometry={nodes.Plane027.geometry} material={materials.led} position={[0.42, 0.03, 0.31]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Plane045_1.geometry} material={materials.grey} />
          <mesh geometry={nodes.Plane045_2.geometry} material={materials.led} />
          <mesh geometry={nodes.Plane024.geometry} material={materials.black} position={[-0.2, 0.16, 0.29]} rotation={[1.4, 0, 0]} />
          <mesh geometry={nodes.Plane026.geometry} material={materials.black} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.VHS.geometry} material={materials.black} position={[1.21, 2.9, -2.99]} rotation={[0, -0.81, 0]} scale={1.22} />
      <mesh geometry={nodes.VHS001.geometry} material={materials.black} position={[1.21, 2.97, -2.99]} rotation={[0, -0.62, 0]} scale={1.22} />
      <group position={[-2.82, 0, 2.81]} scale={1.13}>
        <mesh geometry={nodes.Plane050.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane050_1.geometry} material={materials['screen-arcade']} />
        <mesh geometry={nodes.Plane050_2.geometry} material={materials['arcade-header']} />
        <mesh geometry={nodes.Plane050_3.geometry} material={materials['led.001']} />
        <mesh geometry={nodes.Plane050_4.geometry} material={materials['led.002']} />
        <mesh geometry={nodes.Plane031.geometry} material={materials.grey} position={[0.64, 1.92, 0.46]} rotation={[0, 0, -0.27]} scale={0.69}>
          <group position={[0, 0.08, 0]} scale={1.45}>
            <mesh geometry={nodes.Cylinder_1.geometry} material={materials['black-gloss']} />
            <mesh geometry={nodes.Cylinder_2.geometry} material={materials.red} />
          </group>
        </mesh>
        <mesh geometry={nodes.Plane032.geometry} material={materials.grey} position={[0.64, 1.92, -0.3]} rotation={[0, 0, -0.27]} scale={0.69}>
          <group position={[0, 0.08, 0]} scale={1.45}>
            <mesh geometry={nodes.Cylinder_1.geometry} material={materials['black-gloss']} />
            <mesh geometry={nodes.Cylinder_2.geometry} material={materials.red} />
          </group>
        </mesh>
        <mesh geometry={nodes.Plane033.geometry} material={materials.led} />
      </group>
      <mesh geometry={nodes.Mouse.geometry} material={materials['computer-beige']} position={[-0.97, 1.82, -2.44]} scale={1.15} />
      <mesh geometry={nodes.Cable001.geometry} material={materials['computer-beige']} position={[-0.97, 1.83, -2.54]} />
      <mesh geometry={nodes.Cable002.geometry} material={materials['computer-beige']} position={[-2.08, 1.87, -2.13]} />
      <mesh geometry={nodes.Cable003.geometry} material={nodes.Cable003.material} position={[1.52, 2.76, -3.51]} />
      <mesh geometry={nodes.Cable004.geometry} material={materials['black-gloss']} position={[2.19, 2.66, -3.86]} />
      <group position={[-3.08, 1.82, -0.24]} rotation={[0, 0.11, 0]}>
        <mesh geometry={nodes.Plane054.geometry} material={materials['computer-beige']} />
        <mesh geometry={nodes.Plane054_1.geometry} material={materials['screen-dos']} />
        <mesh geometry={nodes.Plane045.geometry} material={materials.grey} position={[0.46, 0.22, 0.05]} rotation={[Math.PI / 2, 1.35, -Math.PI / 2]} scale={1.25} />
        <mesh geometry={nodes.Plane056_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane056_2.geometry} material={materials['computer-beige']} />
        <mesh geometry={nodes.Plane056_3.geometry} material={materials.grey} />
      </group>
      <mesh geometry={nodes.Chair.geometry} material={materials.metal} position={[0.46, 0.34, -0.51]} rotation={[0, 1.47, 0]} scale={0.11}>
        <mesh geometry={nodes.Circle001.geometry} material={materials.black} scale={9.45} />
        <mesh geometry={nodes.Plane047_1.geometry} material={materials['red.001']} position={[0, 10.02, 0]} rotation={[0, -0.34, 0]} scale={10.29}>
          <mesh geometry={nodes.Vert008.geometry} material={materials.black} scale={0.92} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.Trash.geometry} material={materials.grey} position={[-2.81, 0, 0.11]} />
      <group position={[-0.74, 3.84, -4]}>
        <mesh geometry={nodes.Plane058.geometry} material={materials['black-gloss']} />
        <mesh geometry={nodes.Plane058_1.geometry} material={materials.poster1} />
      </group>
      <group position={[2.34, 3.71, -4.01]} rotation={[0, 0, 0.07]} scale={0.84}>
        <mesh geometry={nodes.Plane059.geometry} material={materials['black-gloss']} />
        <mesh geometry={nodes.Plane059_1.geometry} material={materials.poster2} />
      </group>
      <mesh geometry={nodes.Shelf.geometry} material={materials.wood} position={[-4, 3.91, -1.65]} />
      <group position={[2.66, 1.82, -2.66]} rotation={[0, 0.41, 0]}>
        <mesh geometry={nodes.Plane061_1.geometry} material={materials.red} />
        <mesh geometry={nodes.Plane061_2.geometry} material={materials['black-gloss']} />
        <mesh geometry={nodes.Plane052.geometry} material={materials['black-gloss']} position={[-0.05, 0.05, 0.08]} rotation={[-0.16, 0, 0]} />
        <group position={[-1, 0.06, -0.1]} rotation={[0, 1.02, 1.71]}>
          <mesh geometry={nodes.Plane063_1.geometry} material={materials.red} />
          <mesh geometry={nodes.Plane063_2.geometry} material={materials.metal} />
        </group>
        <mesh geometry={nodes.Vert009.geometry} material={materials['black-gloss']} position={[0.16, 0.03, 0.09]} />
      </group>
      <mesh geometry={nodes.Plate.geometry} material={materials['black-gloss']} position={[0.16, 1.82, -2.62]} rotation={[0, 1.44, 0]} scale={0.81} />
      <mesh geometry={nodes.Sandwich.geometry} material={materials.bread} position={[0.15, 1.91, -2.7]} rotation={[0.14, 1.27, -0.04]} scale={0.81}>
        <mesh geometry={nodes.Plane054_2.geometry} material={materials.bread} position={[0, -0.08, 0]} />
        <mesh geometry={nodes.Plane055.geometry} material={materials.yellow} position={[-0.04, -0.02, 0.1]} />
        <mesh geometry={nodes.Plane056.geometry} material={materials.yellow} position={[-0.04, -0.01, 0.1]} rotation={[0.04, 0.34, -0.01]} />
      </mesh>
      <mesh geometry={nodes.Cable005.geometry} material={materials['black-gloss']} position={[-3.59, 0, 1.93]} />
      <mesh geometry={nodes.Paper001.geometry} material={materials.white} position={[3.6, 1, 0.65]} />
      <mesh geometry={nodes.Paper002.geometry} material={materials.white} position={[3.5, 1.01, 0.65]} rotation={[0, 0.26, 0]} />
      <mesh geometry={nodes.Paper003.geometry} material={materials.white} position={[3.21, 1.01, 0.5]} rotation={[0, -0.88, 0]} />
      <mesh geometry={nodes.Paper004.geometry} material={materials.white} position={[-3.99, 3.93, 0.88]} rotation={[0.07, 0, -Math.PI / 2]} scale={1.91} />
      <mesh geometry={nodes.Paper.geometry} material={materials.white} position={[-3.98, 3.41, 0.37]} rotation={[-0.1, 0, -Math.PI / 2]} scale={1.24} />
      <mesh geometry={nodes.Plane077.geometry} material={materials.bg} position={[0, -0.24, 0]} scale={21.07} />
      <mesh geometry={nodes.Plane078.geometry} material={materials.black} position={[-3.55, 3.99, -0.37]} rotation={[0, 0.15, 0]}>
        <mesh geometry={nodes.Plane079.geometry} material={materials['black-gloss']} />
      </mesh>
      <mesh geometry={nodes.Plane080.geometry} material={materials.black} position={[-3.57, 3.99, -3.54]} rotation={[0, -0.39, 0]}>
        <mesh geometry={nodes.Plane081.geometry} material={materials['black-gloss']} />
      </mesh>
      <mesh geometry={nodes.Cable.geometry} material={materials['black-gloss']} position={[-3.91, 4.4, -0.35]} />
      <group position={[2.82, 1.07, 0.34]} rotation={[0, 1.31, -Math.PI]} scale={[1.14, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[2.8, 1.19, 0.39]} rotation={[-3.14, 1.48, 0]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.3, -0.89]} rotation={[1.42, -1.57, 0]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.28, -1]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.9, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.29, -1.12]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.35, -1.2]} rotation={[Math.PI / 2, -1.57, 0]} scale={[1.14, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.29, -1.33]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.32, -1.47]} rotation={[1.69, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.28, -1.57]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.9, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.29, -1.7]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.35, -1.78]} rotation={[Math.PI / 2, -1.57, 0]} scale={[1.14, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.29, -1.9]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.72, 4.35, -2.07]} rotation={[1.93, -1.57, 0]} scale={[1.14, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.54, 4.09, -2.62]} rotation={[0, 1.18, -Math.PI]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.52, 4.17, -2.68]} rotation={[0, 1.31, -Math.PI]} scale={[1.14, 0.67, 0.9]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <group position={[-3.54, 4.3, -2.62]} rotation={[-3.14, 1.48, 0]} scale={[0.96, 1.06, 0.96]}>
        <mesh geometry={nodes.Plane067_1.geometry} material={materials.book} />
        <mesh geometry={nodes.Plane067_2.geometry} material={materials.white} />
      </group>
      <mesh geometry={nodes.Lamp.geometry} material={materials.red} position={[-3.68, 1.82, -1.54]} rotation={[0, 1.3, 0]} scale={1.08}>
        <mesh geometry={nodes.Circle005_1.geometry} material={materials.red} position={[0, 1.3, 0.48]} rotation={[-0.44, 0, 0]} scale={1.12}>
          <mesh geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} position={[0, -0.11, 0]} rotation={[0.44, -1.05, 0]} scale={0.89} />
        </mesh>
        <mesh geometry={nodes.Vert012.geometry} material={materials['black-gloss']} position={[0, 0.06, 0]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/057-room-hacker.glb')
