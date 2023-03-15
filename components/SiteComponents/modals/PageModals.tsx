import ButtonsOptionsUi from '@/CustomPopover/ButtonsOptionsUi'
import { useAppProvider } from '@appProvider/AppProvider'
import { useAppStateProvider } from '@appProvider/AppStateProvider'
import { useModalsAppProvider } from '@appProvider/ModalsAppProvider'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import ModalData from './ModalData'

const PageModals = ({ title, content }) => {
  const [open, setOpen] = useState(true)
  const [buttonStyle, setButtonStyle]=useState({display: "none"})

  const cancelButtonRef = useRef(null)
  const {
    fontSizeButtons,
    backgroundColorButtons,
    colorButtons,
    fontButtons,
    //  border background color
    borderBottomColorButtons,
    borderRightColorButtons,
    borderLeftColorButtons,
    borderTopColorButtons,
    // border width
    borderRightWidthButtons,
    borderLeftWidthButtons,
    borderTopWidthButtons,
    borderBottomWidthButtons,
    // border style
    borderRightStyleButtons,
    borderLeftStyleButtons,
    borderTopStyleButtons,
    borderBottomStyleButtons,
    // border radius border-top-right-radius
    borderTopRightRadiusButtons,
    borderTopLeftRadiusButtons,
    borderBottomRightRadiusButtons,
    borderBottomLeftRadiusButtons,
    // padding
    paddingRightButtons,
    paddingLeftButtons,
    paddingTopButtons,
    paddingBottomButtons,
    // margin
    marginRightButtons,
    marginLeftButtons,
    marginTopButtons,
    marginBottomButtons }: any = useModalsAppProvider()
    const{isReadOnly }: any = useAppProvider()

  return (
    <div >
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-30'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            {/*  */}
            <div className='fixed inset-0   bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "end", minHeight: "100%", position: "relative" }}
              className='flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                <Dialog.Panel className='relative px-4 pt-5 pb-4 overflow-hidden text-left bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <div>
                    <div className='mt-3 text-center sm:mt-5'>
                      {/* <Dialog.Title as='h3' className='text-base font-semibold text-gray-900 leading-6'>
                      {title}
                    </Dialog.Title> */}
                      {/* <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{content}</p>
                    </div> */}
                      <ModalData data={content} title={title} />
                    </div>
                  </div>
                  <div className='flex flex-row relative mt-2 w-fit'
                   onMouseEnter={() => setButtonStyle({ display: "block" })}
                   onMouseLeave={() => setButtonStyle({ display: "none" })}
                  >
                    {isReadOnly ? null : <ButtonsOptionsUi style={buttonStyle} />}
                    <button
                      type='button'
                      // className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm'
                      onClick={() => setOpen(false)}
                      style={{
                        color: colorButtons,
                        position: "relative",
                        
                        fontSize: fontSizeButtons,
                        fontFamily: fontButtons,
                        backgroundColor: backgroundColorButtons,
                        borderBottomColor: borderBottomColorButtons,
                        borderBottomWidth: `${borderBottomWidthButtons}px`,
                        borderTopColor: borderTopColorButtons,
                        borderTopWidth: `${borderTopWidthButtons}px`,
                        borderLeftColor: borderLeftColorButtons,
                        borderLeftWidth: `${borderLeftWidthButtons}px`,
                        borderRightColor: borderRightColorButtons,
                        borderRightWidth: `${borderRightWidthButtons}px`,
                        // border style
                        borderRightStyle: borderRightStyleButtons,
                        borderLeftStyle: borderLeftStyleButtons,
                        borderTopStyle: borderTopStyleButtons,
                        borderBottomStyle: borderBottomStyleButtons,
                        // border radius
                        borderTopRightRadius: `${borderTopRightRadiusButtons}px`,
                        borderTopLeftRadius: `${borderTopLeftRadiusButtons}px`,
                        borderBottomRightRadius: `${borderBottomRightRadiusButtons}px`,
                        borderBottomLeftRadius: `${borderBottomLeftRadiusButtons}px`,
                        // padding
                        paddingTop: `${paddingTopButtons}px`,
                        paddingBottom: `${paddingBottomButtons}px`,
                        paddingLeft: `${paddingLeftButtons}px`,
                        paddingRight: `${paddingRightButtons}px`,
                        // margin
                        marginTop: `${marginTopButtons}px`,
                        marginBottom: `${marginBottomButtons}px`,
                        marginLeft: `${marginLeftButtons}px`,
                        marginRight: `${marginRightButtons}px`,
                        width: "120px"
                      }}
                      >
                      Dine
                    </button>
                    <button
                      type='button'
                      // className='inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm'
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                      style={{
                        color: colorButtons,
                        position: "relative",
                        fontSize: fontSizeButtons,
                        fontFamily: fontButtons,
                        margin:"2px",
                        backgroundColor: backgroundColorButtons,
                        borderBottomColor: borderBottomColorButtons,
                        borderBottomWidth: `${borderBottomWidthButtons}px`,
                        borderTopColor: borderTopColorButtons,
                        borderTopWidth: `${borderTopWidthButtons}px`,
                        borderLeftColor: borderLeftColorButtons,
                        borderLeftWidth: `${borderLeftWidthButtons}px`,
                        borderRightColor: borderRightColorButtons,
                        borderRightWidth: `${borderRightWidthButtons}px`,
                        // border style
                        borderRightStyle: borderRightStyleButtons,
                        borderLeftStyle: borderLeftStyleButtons,
                        borderTopStyle: borderTopStyleButtons,
                        borderBottomStyle: borderBottomStyleButtons,
                        // border radius
                        borderTopRightRadius: `${borderTopRightRadiusButtons}px`,
                        borderTopLeftRadius: `${borderTopLeftRadiusButtons}px`,
                        borderBottomRightRadius: `${borderBottomRightRadiusButtons}px`,
                        borderBottomLeftRadius: `${borderBottomLeftRadiusButtons}px`,
                        // padding
                        paddingTop: `${paddingTopButtons}px`,
                        paddingBottom: `${paddingBottomButtons}px`,
                        paddingLeft: `${paddingLeftButtons}px`,
                        paddingRight: `${paddingRightButtons}px`,
                        // margin
                        marginTop: `${marginTopButtons}px`,
                        marginBottom: `${marginBottomButtons}px`,
                        marginLeft: `${marginLeftButtons}px`,
                        marginRight: `${marginRightButtons}px`,
                        width: "120px"
                      }} >
                      Skip
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root></div>
  )
}

export default PageModals
