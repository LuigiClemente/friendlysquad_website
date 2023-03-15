import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Bars from '../icons/Bars'
import XMark from '../icons/XMark'
import GlobeIcon from '../icons/GlobeIcon'
import LanguageModal from '../modals/LanguageModal'
import HeaderOptionsUi from '@/CustomPopover/HeaderOptionsUi'
import { useAppProvider } from '@appProvider/AppProvider'
import { NAVIGATION } from '../constant'
import { useAppStateProvider } from '@appProvider/AppStateProvider'
import Logo from '@/Logo'


const navigation = NAVIGATION

const Header = () => {

  const {
    dialogOpenHeader,
    setDialogOpenHeader,
    setHeaderDBFormat,
    isReadOnly,
    // -------------------------- Header --------------------------
    fontSizeHeader,
    setFontSizeHeader,
    fontHeader,
    setFontHeader,
    colorHeader,
    setColorHeader,
    backgroundColorHeader,
    setBackgroundColorHeader,
    //  border
    borderBottomColorHeader,
    setBorderBottomColorHeader,
    borderBottomWidthHeader,
    setBorderBottomWidthHeader,
    borderTopColorHeader,
    setBorderTopColorHeader,
    borderTopWidthHeader,
    setBorderTopWidthHeader,
    borderLeftColorHeader,
    setBorderLeftColorHeader,
    borderLeftWidthHeader,
    setBorderLeftWidthHeader,
    borderRightColorHeader,
    setBorderRightColorHeader,
    borderRightWidthHeader,
    setBorderRightWidthHeader,
    // border style
    borderRightStyleHeader,
    setBorderRightStyleHeader,
    borderLeftStyleHeader,
    setBorderLeftStyleHeader,
    borderTopStyleHeader,
    setBorderTopStyleHeader,
    borderBottomStyleHeader,
    setBorderBottomStyleHeader,
    // border radius
    borderTopRightRadiusHeader,
    setBorderTopRightRadiusHeader,
    borderTopLeftRadiusHeader,
    setBorderTopLeftRadiusHeader,
    borderBottomRightRadiusHeader,
    setBorderBottomRightRadiusHeader,
    borderBottomLeftRadiusHeader,
    setBorderBottomLeftRadiusHeader,
    // padding
    paddingTopHeader,
    setPaddingTopHeader,
    paddingBottomHeader,
    setPaddingBottomHeader,
    paddingLeftHeader,
    setPaddingLeftHeader,
    paddingRightHeader,
    setPaddingRightHeader,
    // margin
    marginTopHeader,
    setMarginTopHeader,
    marginBottomHeader,
    setMarginBottomHeader,
    marginLeftHeader,
    setMarginLeftHeader,
    marginRightHeader,
    setMarginRightHeader,
    // header hight and width
    headerMenus,
    setHeaderMenus,

    
  }:any = useAppProvider()

  const{currentMenu, setCurrentMenu}:any=useAppStateProvider();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openLan, setOpenLan] = useState(false)
  const closeLanModals = () => {
    setOpenLan(false)
  }
  const [style, setStyle] = useState({ display: "none" })
  return (
    <header className='absolute top-0 left-0 right-0 z-10 w-full overflow-hidden bg-white'
      onMouseEnter={() => { setStyle({ display: "block" }) }}
      onMouseLeave={() => { setStyle({ display: "none" }) }}>
      <HeaderOptionsUi style={style} ></HeaderOptionsUi>
      <nav
        style={{
          fontSize: fontSizeHeader,
          fontFamily: fontHeader,
          color: colorHeader,
          backgroundColor: backgroundColorHeader,
          // border
          borderBottomColor: `${borderBottomColorHeader}px`,
          borderBottomWidth: `${borderBottomWidthHeader}px`,
          borderTopColor: borderTopColorHeader,
          borderTopWidth: `${borderTopWidthHeader}px`,
          borderLeftColor: borderLeftColorHeader,
          borderLeftWidth: `${borderLeftWidthHeader}px`,
          borderRightColor: borderRightColorHeader,
          borderRightWidth: `${borderRightWidthHeader}px`,
          // border style
          borderRightStyle: borderRightStyleHeader,
          borderLeftStyle: borderLeftStyleHeader,
          borderTopStyle: borderTopStyleHeader,
          borderBottomStyle: borderBottomStyleHeader,
          // border radius
          borderTopRightRadius: `${borderTopRightRadiusHeader}px`,
          borderTopLeftRadius: `${borderTopLeftRadiusHeader}px`,
          borderBottomRightRadius: `${borderBottomRightRadiusHeader}px`,
          borderBottomLeftRadius: `${borderBottomLeftRadiusHeader}px`,
          // padding
          paddingTop: `${paddingTopHeader}px`,
          paddingBottom: `${paddingBottomHeader}px`,
          paddingLeft: `${paddingLeftHeader}px`,
          paddingRight: `${paddingRightHeader}px`,
          // margin
          marginTop: `${marginTopHeader}px`,
          marginBottom: `${marginBottomHeader}px`,
          marginLeft: `${marginLeftHeader}px`,
          marginRight: `${marginRightHeader}px`,

          display: "flex",
          position: "relative",
          flexDirection: "row",
          justifyContent: "space-between"
        }}


        className='flex items-center justify-between p-6 mx-auto bg-transparent bg-opacity-25 lg:px-8'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
        <Logo />
        </div>
        <div className='flex lg:hidden md:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center text-gray-700 -m-2.5 rounded-md p-2.5'
            onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open main menu</span>
            <Bars />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a key={item.name} 
            // href={item.href}
            className='text-sm font-semibold text-gray-900 leading-6' style={{
              fontSize: fontSizeHeader,
              fontFamily: fontHeader,
              color: colorHeader,
              textDecoration: "none"
            }}
            onClick={()=>  { setCurrentMenu(item.name)}}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <button
            className='block px-3 -mx-3 text-base font-semibold text-gray-900 rounded-lg py-2.5 leading-7 '></button>
          <button
            onClick={() => {
              console.log('click on lan button')
              setOpenLan(true)
            }}
            className='text-sm font-semibold text-gray-900 leading-6'>
            <GlobeIcon />
          </button>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
            style={{
              fontSize: fontSizeHeader,
              fontFamily: fontHeader,
              color: colorHeader,
              backgroundColor: backgroundColorHeader,
              // border
              borderBottomColor: `${borderBottomColorHeader}px`,
              borderBottomWidth: `${borderBottomWidthHeader}px`,
              borderTopColor: borderTopColorHeader,
              borderTopWidth: `${borderTopWidthHeader}px`,
              borderLeftColor: borderLeftColorHeader,
              borderLeftWidth: `${borderLeftWidthHeader}px`,
              borderRightColor: borderRightColorHeader,
              borderRightWidth: `${borderRightWidthHeader}px`,
              // border style
              borderRightStyle: borderRightStyleHeader,
              borderLeftStyle: borderLeftStyleHeader,
              borderTopStyle: borderTopStyleHeader,
              borderBottomStyle: borderBottomStyleHeader,
              // border radius
              borderTopRightRadius: `${borderTopRightRadiusHeader}px`,
              borderTopLeftRadius: `${borderTopLeftRadiusHeader}px`,
              borderBottomRightRadius: `${borderBottomRightRadiusHeader}px`,
              borderBottomLeftRadius: `${borderBottomLeftRadiusHeader}px`,
              // padding
              paddingTop: `${paddingTopHeader}px`,
              paddingBottom: `${paddingBottomHeader}px`,
              paddingLeft: `${paddingLeftHeader}px`,
              paddingRight: `${paddingRightHeader}px`,
              // margin
              marginTop: `${marginTopHeader}px`,
              marginBottom: `${marginBottomHeader}px`,
              marginLeft: `${marginLeftHeader}px`,
              marginRight: `${marginRightHeader}px`,
            }}
    
        >
          <div className='flex items-center justify-between'>
          <Logo />
            <button
              type='button'
              className='text-gray-700 -m-2.5 rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMark classCss={`h-6 w-6 text-black`} />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='py-6 space-y-2'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    // href={item.href}
                    className='block px-3 py-2 -mx-3 text-base font-semibold text-gray-900 rounded-lg leading-7'
                    style={{
                      fontSize: fontSizeHeader,
                      fontFamily: fontHeader,
                      color: colorHeader,
                      textDecoration: "none"
                    }}
                    onClick={()=>  { setCurrentMenu(item.name)}}
                  >
                 
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <span
                  onClick={() => {
                    console.log('click on lan button')
                    setOpenLan(true)
                  }}
                  className='block px-3 -mx-3 text-base font-semibold text-gray-900 rounded-lg py-2.5 leading-7'>
                  <GlobeIcon />
                </span>
              </div>
            </div>
          </div>
          {/* {openLan &&  */}
          {/* } */}
        </Dialog.Panel>
      </Dialog>
      <LanguageModal open={openLan} close={closeLanModals} />
    </header>
  )
}

export default Header
