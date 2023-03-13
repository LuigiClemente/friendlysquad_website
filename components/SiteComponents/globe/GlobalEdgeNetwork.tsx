/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import GlobeComponent from './GlobeComponent'

const GlobalEdgeNetwork = ({ title, noteList, description: description }) => {
  return (
    // style={{ backgroundColor: '#18181B' }}
    <div className='my-12' >
      <div className={`flex flex-col relative lg:flex-row items-center lg:justify-between`}>
        <ul className='flex flex-col w-[50%]'>
          <h1 className='self-start justify-start mb-5 font-sans text-2xl font-semibold text-title leading-10 lg:max-w-[580px]'>
            {title}
          </h1>
          <h3 className='mb-4 text-xl '>{description?.subTitle}</h3>
          <p className='mb-3 text-md text-friendly-light-dark'>{description?.description}</p>
          {noteList.map((item, index) => (
            <li
              key={index}
              className='flex flex-col justify-start mb-5 text-sm text-friendly-light-dark leading-10 lg:max-w-[430px]'>
              <div className='flex flex-col items-start content-start justify-start'>
                <div className='pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit'>
                  <Image
                    className={` text-friendly-light-dark `}
                    src={item.image}
                    alt={'tick'}
                    width={24}
                    height={24}
                  />
                </div>
                <h2 className='mt-1 ml-2 font-sans text-3xl font-bold text-title align-center text-darkgray'>
                  {item.title}
                </h2>
              </div>
              <p className='mt-1 mb-2 ml-2 font-sans text-base leading-10 align-center text-darkgray'>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <div className='h-auto' style={{ width: '50%' }}>
          <GlobeComponent />
        </div>
      </div>
    </div>
  )
}
export default GlobalEdgeNetwork
