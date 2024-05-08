import { SectionHeaders } from "@/components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero mt-16 max-w-6xl mx-auto p-4 border-gray-600 mb-16 scroll-smooth flex">

        <div className="left-column flex-auto mr-auto ml-10 mt-28">
          <div className="relative">
            <h2 className="text-xl">
              Explore new Resin Crafts <br /> With,
            </h2>
            <h1 className="text-5xl kaushan-font italic text-gradient-to-r from-blue-500 via-purple-500 to-purple-500">Vindi Craft</h1>
            <h3 className="pt-5 text-lg text-[#b9b9b9]">
              Resin is a versatile material used in crafts, art, and industrial applications.
            </h3>
            <div className=" flex gap-4 my-10 -mx-4">
              <Link href={'https://wa.me/+94773450886'} className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full gap-2 flex uppercase">
                Chat with <FaSquareWhatsapp className=" size-6 text-[#25d366]" />
              </Link>
              <Link href={'/crafts'} className=" bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full gap-2 flex uppercase">
                Explore more <IoMdArrowRoundForward className=" size-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="right-column flex-auto flex justify-end">
          <div className="relative object-contain mt-14">
            <div className="grid-background">
              <Image
                src={'/vindi_craft.png'}
                alt={'Vindi Craft'}
                width={450}
                height={450}
                className="image-hover-effect hidden md:block"
              />
            </div>
          </div>
        </div>

      </section>

      <section id="recent" className="hero mt-16 max-w-6xl mx-auto p-4 border-gray-600 mb-16 scroll-smooth flex">

        <SectionHeaders
          mainHeader={'Recent Crafts'} />

      </section>

    </>
  );
}
