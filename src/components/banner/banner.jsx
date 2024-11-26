import { GoArrowUpRight } from "react-icons/go"
// import hero from '../../images/hero.png'

const Banner = () => {

  return (
    <div
      className="relative  h-[500px] bg bg-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div>
          <h3 className="text-3xl md:text-5xl text-[#F4F8FF] font-medium">
            Elevate Your Everyday Style
          </h3>
          <p className="text-lg text-[#F4F8FF] font-normal text-center mt-3">
            Discover the Latest Trends in Sustainable Fashion
          </p>
          <div className="mt-6 flex items-center justify-center">
            <button className="bg-[#8F71E1] text-lg text-white px-6 py-2 rounded-full">
              Shop Now
            </button>
            <button className="bg-[#8F71E1] text-white px-[9px] py-[9px] rounded-full ml-2">
              <GoArrowUpRight className="text-xl text-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;