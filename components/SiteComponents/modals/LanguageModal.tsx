import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { LANGUAGES } from '../constant'
import XMark from '../icons/XMark'

const LanguageModal = ({ open, close }) => {
  return (
    <Transition.Root show={open} as={Fragment} className='w-[500px] min-w-[500px]'>
      <Dialog as='div' className='relative z-10 w-[500px] min-w-[500px]' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel className='relative overflow-hidden text-left bg-white rounded-lg shadow-xl min-w-[40rem] transform transition-all sm:w-full sm:max-w-sm'>
                <div className='flex flex-row justify-between w-full'>
                  <Dialog.Title as='h3' className=''>{``}</Dialog.Title>
                  <span className='flex w-8 h-8 p-1 border-0 cursor-pointer' onClick={close}>
                    <XMark classCss='w-6 h-6 text-gray-400' aria-hidden='true' />
                  </span>
                </div>
                <div className='px-4 pb-4 sm:w-full sm:max-w-sm sm:p-3'>
                  <div className='mt-3 text-center sm:mt-5'>
                    <div className='flex flex-row flex-wrap min-w-[38rem]'>
                      {LANGUAGES.map((item, index) => (
                        <p key={index + item} className='px-2 py-1 text-sm text-gray-600'>
                          {item.lan}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default LanguageModal
