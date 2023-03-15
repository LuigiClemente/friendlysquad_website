import React, { useRef, useState, Suspense, useEffect } from 'react'

import PageModals from '../modals/PageModals'
import { useWindowSize } from '../utils/utility'
import Spinner from '../spinner/Spinner'
import { ABOUT_US } from '../constant'
import InlineModals from '../modals/InlineModals'
const IframeLaser = () => {
  const pageRef = useRef(null)
  const size = useWindowSize()
  const [src, setSrc] = useState(`../parlour/the_Parlour.htm`)
  const [load, setLoad] = useState(false)

  const [, setHeight] = React.useState('0px')
  const onLoad = () => {
    setHeight(size.height + 'px')
  }
  useEffect(() => {
    document.getElementById('laser-iframe').onload = () => {
      {
        setLoad(true)
      }
    }
  }, [])
  return (
    <div className='w-full h-full'>
      {!load ? <Spinner /> : null}
      <iframe
        id='laser-iframe'
        src={src}
        scrolling='yes'
        frameBorder={0}
        allowFullScreen={true}
        allow='autoplay; fullscreen'
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        width='100%'
        ref={pageRef}
        height={size.height}
        onLoad={onLoad}
        loading='lazy'
      />
      <InlineModals />
      {load && <PageModals title={`CONTACT US`} content={ABOUT_US} />}
    </div>
  )
}

export default IframeLaser
