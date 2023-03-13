import ChatBubble from '../icons/ChatBubble'

const items = [
  { id: 1, name: 'show modal 1' },
  { id: 2, name: 'show modal 2' },
  { id: 3, name: 'show modal 3' },
]

const InlineModals = () => {
  return (
    <div className={`absolute bg-pattern shadow z-60 rounded-md right-4 top-32 bg-no-repeat `}>
      {/* <ChatBubble classCss='w-[300px] h-[300px] text-gray-300 relative' /> */}
      {/* <img src={'./icons/bubble.png'} alt='chat-bubble' className='relative w-[300px] h-[300px]' /> */}
      <ul role='list' className='relative divide-y divide-gray-200 w-[200px] h-[-300px]'>
        {items.map((item) => (
          <li key={item.id} className='px-6 py-4 text-gray-500'>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InlineModals
