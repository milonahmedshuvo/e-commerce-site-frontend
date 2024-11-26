import Image from 'next/image';
import delivery from '../../images/truck-delivery.png'
import exchange from '../../images/exchange-01.png'
import payment from '../../images/payment-02.png'
import quality from '../../images/quality.png'


const Quality = () => {
  return (
    <div className='qualityImg bg-center bg-cover  px-5  flex flex-col md:flex-row  bg-[#6d4bcc] justify-evenly md:items-center '>
       
         <div className='flex gap-2  '>
              <div >
                <Image width={30} height={50} src={delivery} alt='cars' />
              </div>
              <div>
                <p className='text-[#FFFFFF] text-md font-semibold '>FREE SHIPPING</p>
                <p className='text-[#FFFFFF] text-xs font-normal mt-1 '>BUY BDT 3000+ & GET FREE DELIVERY</p>
              </div>
         </div>


         <div className='flex gap-2'>
              <div >
                <Image width={30} height={50} src={exchange} alt='cars' />
              </div>
              <div>
                <p className='text-[#FFFFFF] text-md font-semibold '>7 DAYS EXCHANGE</p>
                <p className='text-[#FFFFFF] text-xs font-normal mt-1 '>EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
              </div>
         </div>


         <div className='flex gap-2'>
              <div >
                <Image width={30} height={50} src={payment} alt='cars' />
              </div>
              <div>
                <p className='text-[#FFFFFF] text-md font-semibold '>100% PAYMENT SECURE</p>
                <p className='text-[#FFFFFF] text-xs font-normal mt-1 '>CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
              </div>
         </div>

    </div>
  )
}

export default Quality;