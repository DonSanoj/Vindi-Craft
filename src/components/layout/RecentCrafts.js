import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/app/globals.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { SectionHeaders } from './SectionHeaders';

const recentimgElements = [
    { 
        imageUrl: '/recentCraft01.jpg',
        categoryId: 'category01',
    },
    { 
        imageUrl: '/recentCraft02.jpg',
        categoryId: 'category02',
    },
    { 
        imageUrl: '/recentCraft03.jpg',
        categoryId: 'category03',
    },
    { 
        imageUrl: '/recentCraft05.jpg',
        categoryId: 'category04',
    },
    { 
        imageUrl: '/recentCraft06.jpg',
        categoryId: 'category05',
    },
];

export default function RecentCrafts() {
    return (
        <section id="about" className="mt-4 max-w-6xl mx-auto p-4 text-center mb-16 scroll-smooth">
            <SectionHeaders subHeader={'Explore our latest collection of crafts.'} mainHeader={'Recent Crafts'} />
            <div className="mt-12">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    className="mySwiper overflow-hidden"
                    style={{ maxWidth: '100%', height: '400px' }}
                >
                    {recentimgElements.map(({ imageUrl }, index) => (
                        <SwiperSlide key={index}>
                            <Image src={imageUrl} alt={'Recent Crafts'} width={400} height={400} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
