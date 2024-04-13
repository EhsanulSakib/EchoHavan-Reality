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
                <SwiperSlide>
                    <div className='opacity-50 z-1'>
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                    </div>
                    <div className='absolute w-full text-center top-16 md:top-32 lg:top-[180px] font-extrabold text-xl md:text-2xl lg:text-4xl z-10 px-10 lg:px-24'>
                        <h3 className=' drop-shadow-lg'>Welcome to your happy place. Our team is dedicated to helping you find the home that brings you joy and fulfillment.</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='opacity-60 z-1'>
                        <img src="https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?t=st=1712945533~exp=1712949133~hmac=c68b2dd3d6dff5e02cb92041852cc192bef1e656a257e00e88e84c70e36800d8&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                    </div>
                    <div className='absolute w-full text-center top-16 md:top-32 lg:top-[180px] font-extrabold text-xl md:text-2xl lg:text-4xl z-10 px-10 lg:px-24'>
                        <h3 className=' drop-shadow-lg'>Your ultimate destination for buying, selling, and renting properties. Trust us to find your perfect place to call home.</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-black opacity-60 z-1'>
                        <img src="https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?t=st=1712945680~exp=1712949280~hmac=ea334eaf98a51084e7c0aa1fdc012682eca8d9b84798073c924118537d8f336b&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                    </div>
                    <div className='absolute w-full text-center top-16 md:top-32 lg:top-[180px] font-extrabold text-xl md:text-2xl lg:text-4xl z-10 px-10 lg:px-24'>
                        <h3 className=' drop-shadow-lg'>Transforming houses into homes filled with love, laughter, and cherished memories. Let us help you find your forever home..</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='opacity-50 z-1'>
                        <img src="https://img.freepik.com/free-photo/close-up-woman-s-hand-giving-house-key-man-wooden-table_23-2148204009.jpg?t=st=1712945749~exp=1712949349~hmac=8ada704623e03864fe213edbac0b9f665a701ff04a7878d945da2f865ab8cb8b&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                    </div>
                    <div className='absolute w-full text-center top-16 md:top-32 lg:top-[180px] font-extrabold text-xl md:text-2xl lg:text-4xl z-10 px-10 lg:px-24'>
                        <h3 className=' drop-shadow-lg'>Discover the perfect space to call your own. From cozy cottages to luxurious estates, we have something for everyone.</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='opacity-50 z-1'>
                        <img src="https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003986.jpg?t=st=1712946017~exp=1712949617~hmac=a72abb12e4778d9958e88d3de19a4112000ed9cfeb7b6984a3f47f8dda639aad&w=996" alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                    </div>

                    <div className='absolute w-full text-center top-16 md:top-32 lg:top-[180px] font-extrabold text-xl md:text-2xl lg:text-4xl z-10 px-10 lg:px-24'>
                        <h3 className=' drop-shadow-lg'>Begin your journey to homeownership with confidence. Let us navigate the process and turn your dreams into reality.</h3>
                    </div>

                </SwiperSlide>
            </Swiper>

        </div>

    );
};

export default Header;