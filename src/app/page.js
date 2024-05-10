'use client'

import { SectionHeaders } from "@/components/layout/SectionHeaders";
import MySwiper from "@/components/layout/RecentCrafts";
import Image from "next/image";
import Link from "next/link";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
import RecentCrafts from "@/components/layout/RecentCrafts";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero mt-6 sm:mt-16 max-w-6xl mx-auto p-4 border-gray-600 mb-2 sm:mb-16 scroll-smooth flex">

        <div className="left-column flex-auto mr-auto ml-10 mt-28">
          <div className="relative">

            <div>
              <h2 className="text-xl">
                Explore new Resin Crafts <br /> With,
              </h2>

              <h1 className="text-5xl kaushan-font italic text-gradient-to-r from-blue-500 via-purple-500 to-purple-500">Vindi Craft</h1>

              <h3 className="pt-5 text-lg text-gray-500">
                Resin is a versatile material used in crafts, art, and industrial applications.
              </h3>
            </div>

            <div className="flex gap-4 my-10 -mx-4">
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <Link
                  href={'https://wa.me/+94773450886'}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-4 py-2 gap-2 rounded-full flex uppercase text-center"
                >
                  Chat with <FaSquareWhatsapp className="size-10 sm:size-6 text-[#25d366]" />
                </Link>
              </div>
              <div className="w-full sm:w-auto">
                <Link
                  href={'/crafts'}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-4 py-2 gap-2 rounded-full flex uppercase text-center"
                >
                  Explore more <IoMdArrowRoundForward className="size-10 sm:size-6" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="right-column flex-auto flex justify-end sm:p-1 ml-60">
          <div className="relative object-contain mt-14">
            <div className="grid-background">
              <Image
                src={'/vindi_craft.png'}
                alt={'Vindi Craft'}
                width={450}
                height={450}
                className="image-hover-effect hidden md:block image-drop-shadow"
              />
            </div>
          </div>
        </div>

      </section>

      <RecentCrafts />

    </>
  );
}
