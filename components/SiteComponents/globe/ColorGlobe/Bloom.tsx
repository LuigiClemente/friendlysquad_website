import { Effects } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import React from 'react'
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })
const Bloom = () => {
  return (
    <Effects disableGamma>
      <unrealBloomPass threshold={1} strength={1} radius={1} />
    </Effects>
  )
}

export default Bloom
