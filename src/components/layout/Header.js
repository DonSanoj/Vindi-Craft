'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-black text-white shadow-md fixed z-50 w-full top-0">
            <div className="container mx-auto p-4 px-8 flex items-center justify-between border-b border-gray-600">
                <Link href={'/'} className="cursor-pointer flex items-center">
                    <div className="h-10 w-auto mr-4">
                        <Image src={'/vindi_craft.png'} alt={'Vindi Craft'} width={50} height={50} />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-10 cursor-pointer">
                    <Link href={'/'} className="hover:text-blue-500">Home</Link>
                    <Link href={'/crafts'} className="hover:text-blue-500">Crafts</Link>
                    <Link href={'/about'} className="hover:text-blue-500">About</Link>
                    <Link href={'/contact'} className="hover:text-blue-500">Contact</Link>
                </nav>

                <nav className="flex gap-4 text-gray-500 font-semibold items-center">

                    <div className="relative" ref={dropdownRef}>
                        <div
                            className="lg:hidden bg-white text-black rounded-full cursor-pointer p-2 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white"
                            onClick={toggleDropdown}
                        >
                            <Image src={dropdownOpen ? '/up-arrow-svgrepo-com.png' : '/down-arrow-svgrepo-com.png'} alt="navBar" width={50} height={50} className="size-6" />
                        </div>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <nav className="flex flex-col gap-2 p-8 bg-[#2d2d2c] text-white rounded-lg shadow-lg border-none text-[18px]">
                                    <Link href={'/'} className="hover:text-blue-500 transition duration-200">Home</Link>
                                    <Link href={'/crafts'} className="hover:text-blue-500 transition duration-200">Crafts</Link>
                                    <Link href={'/about'} className="hover:text-blue-500 transition duration-200">About</Link>
                                    <Link href={'/contact'} className="hover:text-blue-500 transition duration-200">Contact</Link>
                                </nav>
                            </div>
                        )}
                    </div>

                    <Link href={'https://www.facebook.com/profile.php?id=61555844843889'}>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-black rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white">
                            Follow Me
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
