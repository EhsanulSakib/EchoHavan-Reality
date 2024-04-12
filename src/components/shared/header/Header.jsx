import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Header = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide><img src="https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-410.jpg?t=st=1712945580~exp=1712949180~hmac=a3b2d387081f86b1b65b3e2845da61fbf7484b1b1eba12868324769cf7fa33ca&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' /></SwiperSlide>

                <SwiperSlide><img src="https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?t=st=1712945533~exp=1712949133~hmac=c68b2dd3d6dff5e02cb92041852cc192bef1e656a257e00e88e84c70e36800d8&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' /></SwiperSlide>

                <SwiperSlide><img src="https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?t=st=1712945680~exp=1712949280~hmac=ea334eaf98a51084e7c0aa1fdc012682eca8d9b84798073c924118537d8f336b&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' /></SwiperSlide>

                <SwiperSlide><img src="https://img.freepik.com/free-photo/close-up-woman-s-hand-giving-house-key-man-wooden-table_23-2148204009.jpg?t=st=1712945749~exp=1712949349~hmac=8ada704623e03864fe213edbac0b9f665a701ff04a7878d945da2f865ab8cb8b&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' /></SwiperSlide>

                <SwiperSlide>
                    <div className='bg-black opacity-70 z-1'>
                        <img src="https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003986.jpg?t=st=1712946017~exp=1712949617~hmac=a72abb12e4778d9958e88d3de19a4112000ed9cfeb7b6984a3f47f8dda639aad&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                    </div>

                </SwiperSlide>
            </Swiper>
            <div>
                <h3 className='relative text-center bottom-36 md:h-96 lg:h-[500px] font-bold text-4xl z-10'>Text Here</h3>
            </div>
        </div>

    );
};

export default Header;