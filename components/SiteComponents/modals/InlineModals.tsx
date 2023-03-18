import { useState } from "react"
import { ABOUT_US } from "../constant"
import PageModals from "./PageModals"

const items = [
  { id: 1, name: 'The Glob', link:"Home" },
  { id: 2, name: 'The Grass', link:"SERVICE" },
  { id: 3, name: 'The Food', link:"ABOUT US" },
  { id: 4, name: 'The Laser', link:"CONTACT US" },
]

const InlineModals = () => {
  const [isModal, setIsModal]=useState(false)
  return (
    <div className={`absolute bg-pattern shadow z-60 rounded-md right-4 top-20 bg-no-repeat bg-white `}>
      {/* <ChatBubble classCss='w-[300px] h-[300px] text-gray-300 relative' /> */}
      {/* <img src={'./icons/bubble.png'} alt='chat-bubble' className='relative w-[300px] h-[300px]' /> */}
      <ul role='list' className='relative divide-y divide-gray-200 w-[200px] h-[-300px]'>
        {items.map((item) => (
          <li key={item.id} className='px-6 py-4 text-gray-500' onClick={()=>{setIsModal(!isModal)}}>
            {item.name}
          </li>
        ))}
      </ul>
      {isModal && <PageModals title={`ABOUT US`} content={ABOUT_US} />}
    </div>
  )
}

export default InlineModals
