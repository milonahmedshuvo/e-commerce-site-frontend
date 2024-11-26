"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { PiShoppingCartSimpleLight, PiUserLight } from 'react-icons/pi';
import { TbShoppingBag } from 'react-icons/tb';

import logo from "../../images/navlogo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartCount, setCartCount] = useState(0);



    return (
        <div className=''>
            <nav className="w-full bg-[#F5F3FF] py-5">
                <div className="px-5 md:px-8">
                    <div className="flex justify-between items-center">
                        <div className='flex items-center gap-3'>
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-700 focus:outline-none"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {isOpen ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                            <Link href="/">
                                <Image src={logo} height={100} width={150} alt=''></Image>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center gap-8 font-medium">
                            <Link className="text-gray-700 hover:text-[#581FC1] duration-500" href="/">Home</Link>
                            <Link className="text-gray-700 hover:text-[#581FC1] duration-500" href="/about">Shop</Link>
                            <Link className="text-gray-700 hover:text-[#581FC1] duration-500" href="/shop">Deals</Link>
                            <Link className="text-gray-700 hover:text-[#581FC1] duration-500" href="/contact">What’s New</Link>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className='hidden md:block'>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-10 pr-4 py-2 w-64 rounded-full focus:outline-none border focus:ring-2 focus:ring-blue-500 "
                                    />
                                    <CiSearch className="absolute left-3 " />
                                </div>
                            </div>
                            <CiSearch className="block md:hidden text-2xl" />
                            <div className="relative">
                                <LiaShoppingBagSolid className="text-2xl cursor-pointer" />
                                {cartCount >= 0 && (
                                    <span className="absolute -top-3 -right-3 bg-black text-white text-xs font-bold px-2 py-[3px] rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <PiUserLight className="text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link className="block text-gray-700 hover:text-[#b19776] duration-500 px-3 py-2 rounded-md text-base font-medium" href="/">Home</Link>
                            <Link className="block text-gray-700 hover:text-[#b19776] duration-500 px-3 py-2 rounded-md text-base font-medium" href="/about">About</Link>
                            <Link className="block text-gray-700 hover:text-[#b19776] duration-500 px-3 py-2 rounded-md text-base font-medium" href="/shop">Shop</Link>
                            <Link className="block text-gray-700 hover:text-[#b19776] duration-500 px-3 py-2 rounded-md text-base font-medium" href="/contact">Contact</Link>
                            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#b19776] duration-500">Sign In</button>
                            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-black text-white">Sign Up</button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;