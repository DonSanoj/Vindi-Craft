import Link from 'next/link';
import React from 'react';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="border-t border-gray-600 p-6 sm:p-8 text-center text-gray-400 mt-16 flex flex-col sm:flex-row items-center justify-between bg-black">
            <div className="text-xl flex gap-4 mb-4 sm:mb-0">
                <Link href={'https://www.facebook.com/lasanthi1125/'}>
                    <FaFacebookSquare />
                </Link>
                <Link href={'#'}>
                    <FaSquareInstagram />
                </Link>
                <Link href={'#'}>
                    <AiFillTikTok />
                </Link>
            </div>

            <div className="mb-4 sm:mb-0">
                &copy; 2024 All rights reserved
            </div>

            <div className="flex gap-4">
                <h3 className="text-sm sm:text-base">
                    Developed by{' '}
                    <Link className=' text-blue-500' href={'https://www.facebook.com/don.sanoj.1'}>Sanoj Aminda</Link>
                </h3>
            </div>
        </footer>
    );
}
