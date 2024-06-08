'use client'

import Link from "next/link";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";

import RecentCrafts from "@/components/layout/RecentCrafts";
import BackToTop from "@/components/layout/BackToTop";

export default function Home() {
  return (
    <>

      <section id="hero" className="mt-10 sm:mt-16 max-w-6xl mx-auto p-4 border-gray-600 sm:mb-16 scroll-smooth flex h-screen">

        <div className="flex justify-center items-center flex-col w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">

          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <h2 className="uppercase text-gray-600 text-xl sm:text-3xl lg:text-4xl font-semibold leading-4 mb-3 text-center">
            Explore new Resin Crafts With
          </h2>
          <h1 className="mt-3 text-6xl sm:text-5xl lg:text-7xl kaushan-font italic bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-transparent text-center">
            Vindi Craft
          </h1>

          <h3 className="mt-3 sm:mt-5 lg:mt-10 text-lg lg:text-xl text-gray-500 text-center">
            Resin is a versatile material used in crafts, art, and industrial applications.
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 my-10 -mx-4 items-center justify-center">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <a
                href={'https://wa.me/+94773450886'}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-4 py-2 gap-2 rounded-full flex uppercase text-center"
              >
                Chat with <FaSquareWhatsapp className="size-6 sm:size-6 ml-8 sm:ml-1 text-[#25d366]" />
              </a>
            </div>
            <div className="w-full sm:w-auto">
              <a
                href={'/crafts'}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-4 py-2 gap-2 rounded-full flex uppercase text-center"
              >
                Explore more <IoMdArrowRoundForward className="size-6 sm:size-6" />
              </a>
            </div>
          </div>

        </div>

      </section>

      <RecentCrafts />

      <BackToTop />

    </>
  );
}