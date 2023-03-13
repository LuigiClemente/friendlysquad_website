import dynamic from 'next/dynamic'
import { VOLCANOES } from '../constant'

const GlobeDynamic = dynamic(import('react-globe.gl'), { ssr: false })
const GlobeComponent = () => {
  return (
    <GlobeDynamic
      width={600}
      height={600}
      backgroundColor='#FFFFFF'
      globeImageUrl='/img/globe/earth-night.jpg'
      // backgroundImageUrl='/img/globe/night-sky.png'
      pointsData={VOLCANOES}
      pointLat='lat'
      pointLng='lon'
    />
  )
}
export default GlobeComponent
