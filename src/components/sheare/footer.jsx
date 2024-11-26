import Image from "next/image"
import logo from "../../images/logo.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/Twitter.png"
import Linkedin from "../../images/Linkedin.png"

const Footer = () => {
    return (
        <div> 
        <div className="px-5 md:px-8 py-10 bg-[#1D1D1D] mt-10 md:mt-28 ">
            {/* footer first div  */}
            <div className="flex flex-col md:flex-row justify-between ">

                <div className="w-full md:w-1/2">
                    <Image width={170} height={200} src={logo} alt="logo" />
                    <p className="text-[#F4F8FF] w-full md:w-2/3 text-[16px] mt-5 mb-5 md:mb-0 md:mt-2">Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-[#F4F8FF] font-semibold text-xl">Sign Up For Our Newsletter!</h2>
                    <p className="text-[#F4F8FF] text-[16px] mt-2">Get notified about updates and be the first to get early access to new Podcast episodes.</p>

                    <div className="flex items-center mt-5 ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 pl-4 w-2/3 py-2 rounded-l-md focus:outline-none focus:ring-2"
                        />
                        <button
                            type="button"
                            className="bg-[#7E53D4] w-1/3 text-white px-4 py-[10px] rounded-r-md "
                        >
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-start md:justify-between  md:items-center mt-5 md:mt-14">

                <div>
                    <p className="text-[#F4F8FF] text-[14px] ">support@we5ive.com</p>
                    <p className="text-[#F4F8FF] text-[14px] mt-2 md:mt-1">Contact Us</p>
                </div>

                <div>
                    <p className="text-[#F4F8FF] text-[14px] mt-2 md:mt-0">About Us</p>
                    <p className="text-[#F4F8FF] text-[14px] mt-2 md:mt-1">Contact Us</p>
                </div>

                <div>
                    <p className="text-[#F4F8FF] text-[14px] mt-2 md:mt-0">Privacy policy</p>
                    <p className="text-[#F4F8FF] text-[14px] mt-2 md:mt-1">Terms & Condition</p>
                </div>

                <div>
                    <p className="text-[#F4F8FF] text-[14px] mt-2 md:mt-0 text-center">Social Link</p>
                    <div className="mt-2 md:mt-3 flex ">
                        <Image className="mx-2" width={20} height={20} src={Facebook} alt="facebook" />
                        <Image className="mx-2" width={20} height={20} src={Twitter}  alt="facebook" />
                        <Image className="mx-2" width={20} height={20} src={Linkedin} alt="facebook" />

                    </div>
                </div>

            </div>

            
        </div>
           <div className="bg-[#7E53D4] h-11"></div>
        </div>
    )
}

export default Footer;