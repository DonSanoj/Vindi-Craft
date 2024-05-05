import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
                    <Link href={''} className="hover:text-blue-500">Crafts</Link>
                    <Link href={''} className="hover:text-blue-500">About</Link>
                    <Link href={''} className="hover:text-blue-500">Contact</Link>
                </nav>

                <nav className="flex gap-4 text-gray-500 font-semibold items-center">
                    <Link href={'https://www.facebook.com/profile.php?id=61555844843889'}>
                        <button className="bg-white text-black rounded-full px-4 py-2 hover:bg-blue-700 hover:text-white">
                            Follow Me
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
