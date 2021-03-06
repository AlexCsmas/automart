import { BsBookmarkPlus, BsCheckCircle } from 'react-icons/bs'
import Image from 'next/image'

const CardWrapper = () => {
  return (
    <>
      <div className='mt-5 cardWrapper '>
        <div className='bg-white shadow-lg '>
          <div className='overflow-hidden imageWrapper rounded-tr-md rounded-tl-md unset-img'>
            <Image
              src='/cars/2018_mitsubishi_pajero_sport_Used_1.jpg'
              alt='Loo'
              layout='fill'
              className='custom-img'
            />
          </div>
          {/* Car Summary  */}
          <div className='p-4 '>
            <div className='pb-3 text-sm'>
              <h1 className='text-lg font-semibold'>
                Mitsubishi Pajero Sport GLS
              </h1>
              <p>
                <span>2018</span>
              </p>
            </div>

            {/* Car Details  */}
            <hr />
            <div className='grid grid-cols-2 py-4 text-sm text-gray-500 gap-x-4 gap-y-3'>
              <p className='flex flex-col font-light'>
                Milage:
                <span className='font-normal'>45,000 KM</span>
              </p>
              <p className='flex flex-col font-light'>
                Engine Type:
                <span className='font-normal'>Petrol</span>
              </p>
              {/* <p className='flex flex-col font-light'>
                Capacity:
                <span className='font-normal'>3.4 Litre</span>
              </p>
              <p className='flex flex-col font-light'>
                Condition: <span className='font-normal'>Used</span>
              </p> */}
            </div>
            <div className='flex items-center justify-between mt-1 mb-3 text-sm font-semibold'>
              <div className='inline-flex items-center gap-1 font-semibold'>
                KES.
                <h3 className=' text-gray-100 bg-gray-900 px-4 py-0.5 rounded font-semibold'>
                  3,500,000
                </h3>
              </div>
            </div>
            <hr className='mb-3 text-lg' />
            <div className='flex justify-between'>
              <div className='flex items-center gap-1'>
                <BsBookmarkPlus />
                Save
              </div>
              <div className='flex items-center gap-1'>
                <BsCheckCircle />
                Check Availability
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardWrapper
