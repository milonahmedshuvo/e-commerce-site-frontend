import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
// import man from '../../images/handsame.png'
import man from '../../images/man.png'
import Image from 'next/image'

const Collection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 items-center mt-24 mb-16  '>

      <div className='w-full md:w-1/2 flex justify-center px-5'>
        <Image className='w-full' width={500} height={100} src={man} alt="man collections" />
      </div>

      <div className=' w-full md:w-1/2 px-5'>
        <h2 className='text-[#1D1D1D] text-4xl md:text-5xl '>MEN COLLECTION</h2>

        <div className="mt-5 md:mt-6 flex items-center ">
          <button className="bg-[#8F71E1] text-lg text-white px-6 py-2 rounded-full ">Shop Now</button>
          <button className="bg-[#8F71E1] text-white px-[9px] py-[9px] rounded-full"> <GoArrowUpRight className="text-xl text-center" /> </button>
        </div>
      </div>
    </div>
  )
}

export default Collection;