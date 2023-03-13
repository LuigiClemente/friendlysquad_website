import Header from '@/Header'
import React, { useRef, useState } from 'react'
import PageModals from '../modals/PageModals'
import { useWindowSize } from '../utils/utility'


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
  return (
      <iframe
      ref={pageRef}
        id='animation-iframe'
        src={src}
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
      
  )
}

export default GrassIframe
