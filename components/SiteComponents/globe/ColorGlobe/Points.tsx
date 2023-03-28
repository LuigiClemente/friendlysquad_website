import React from 'react'

const Points = (props) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.015, 0.015, props.height, 6]}></cylinderGeometry>
      {/* Now, in order to get selective bloom we simply crank colors out of
        their natural spectrum. Where colors are normally defined between 0 - 1 we push them
        way out of range, into a higher defintion (HDR). What previously was [1, 1, 1] now could
        for instance be [10, 10, 10]. This requires that toneMapping is off, or it clamps to 1 */}
      <meshBasicMaterial color={props.color} toneMapped={false} />
    </mesh>
  )
}

export default Points
