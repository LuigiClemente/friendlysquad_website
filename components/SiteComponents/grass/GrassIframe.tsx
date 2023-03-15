<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react'
import { ABOUT_US } from '../constant'
import PageModals from '../modals/PageModals'
import Spinner from '../spinner/Spinner'
import { useWindowSize } from '../utils/utility'

=======
import Header from '@/Header'
import React, { useRef, useState } from 'react'
import PageModals from '../modals/PageModals'
import { useWindowSize } from '../utils/utility'


>>>>>>> 1c6806168f51fa92cd3293a86a7d411567c6662a
const GrassIframe = () => {
  const pageRef = useRef()
  const size = useWindowSize()
  const [src, setSrc] = useState(`../glade/Glade.htm`)

  const [, setHeight] = React.useState('0px')
  const onLoad = () => {
    setHeight(size.height + 'px')
  }
  if(typeof window == 'undefined'){
    return null
  }
<<<<<<< HEAD
  const [load, setLoad] = useState(false)
  useEffect(() => {
    document.getElementById('grass-iframe').onload = () => {
      {
        setLoad(true)
      }
    }
  }, [])
  return (
    <div className='w-full h-full'>
      {!load ? <Spinner /> : null}
      <iframe
      ref={pageRef}
        id='grass-iframe'
        src={src} 
=======
  return (
      <iframe
      ref={pageRef}
        id='animation-iframe'
        src={src}
>>>>>>> 1c6806168f51fa92cd3293a86a7d411567c6662a
        scrolling='yes'
        frameBorder={0}
        allowFullScreen={true}
        allow='autoplay; fullscreen'
        width='100%'
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        // ref={pageRef}
        height={size.height}
        onLoad={onLoad}
        loading='lazy'
      />
<<<<<<< HEAD
       {load && <PageModals title={`SERVICE`} content={ABOUT_US} />}
    </div>
=======
>>>>>>> 1c6806168f51fa92cd3293a86a7d411567c6662a
      
  )
}

export default GrassIframe
