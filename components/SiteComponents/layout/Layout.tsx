import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import Header from '../Header/Header'
// const DynamicHeader = dynamic(() => import('../Header/Header'))

const Layout = ({ children }) => {
  return (
    <div style={{width:"100%", height:"100%"}} className='flex flex-col w-full min-h-full overflow-hidden bg-transparent'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
