'use client'

import BackToTop from "@/components/layout/BackToTop";
import { SectionHeaders } from "@/components/layout/SectionHeaders";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Link from "next/link";

export default function Crafts() {
    return (
        <>

            <section className="mt-8 sm:mt-10 max-w-6xl mx-auto p-4 border-gray-600 sm:mb-2 scroll-smooth flex h-screen">
                <div className="flex justify-center items-center flex-col w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                    <h1 className="mt-0 text-5xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-transparent text-center">
                        All Resin Crafts
                    </h1>

                    <h3 className="mt-3 sm:mt-5 lg:mt-10 text-lg lg:text-xl text-gray-400 sm:text-gray-500 text-center">
                        Explore a world of creativity and beauty with Resin Crafts, a curated collection showcasing a variety of mesmerizing resin art pieces.
                        From stunning jewelry to intricate home decor, immerse yourself in the artistry and craftsmanship of resin creations on this captivating page.
                    </h3>
                </div>
            </section>

            <section className="mt-[30px] sm:mt-[10px] flex justify-center items-center">
                <div className="max-w-4xl px-4 mx-auto sm:text-left text-center">

                    <div className="flex flex-wrap justify-between mt-[-120px]">
                        <ParallaxScroll images={allCrafts} />
                    </div>

                    <div className=" text-xl mt-7 text-center">01 KeyTag Price: <span>Rs.350.00</span></div>
                    <div className=" text-lg flex flex-wrap space-x-2 items-center justify-center mt-2">
                        <h1>Furthermore detail</h1>
                        <Link href={'/contact'} className=" text-blue-500">Contact Us</Link>
                    </div>
                </div>
            </section>

            <BackToTop />

        </>
    );
}

const allCrafts = [
    '/recentCraft01.jpg',
    '/recentCraft02.jpg',
    '/recentCraft03.jpg',
    '/aboutImg01.jpg',
    '/aboutImg02.jpg',
    '/recentCraft04.jpg',
    '/recentCraft05.jpg',
    '/craft1.jpg',
    '/craft2.jpg',
    '/craft3.jpg',
    '/craft4.jpg',
    '/craft5.jpg',
    '/craft6.jpg',
    '/craft7.jpg',
];

