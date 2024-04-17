import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

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
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Welcome to your happy place. Our team is dedicated to helping you find the home that brings you joy and fulfillment.</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?t=st=1712945533~exp=1712949133~hmac=c68b2dd3d6dff5e02cb92041852cc192bef1e656a257e00e88e84c70e36800d8&w=996")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Your ultimate destination for buying, selling, and renting properties. Trust us to find your perfect place to call home.</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Transforming houses into homes filled with love, laughter, and cherished memories. Let us help you find your forever home.</h2>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://www.goldmansachs.com/intelligence/pages/articles/real-estate-may-still-offer-a-hedge-for-investors/800x450.jpg")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Discover the perfect space to call your own. From cozy cottages to luxurious estates, we have something for everyone.</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: `url("https://www.cio.com/wp-content/uploads/2023/07/shutterstock_676661263.jpg?quality=50&strip=all&w=1024")` }} className='flex items-center justify-center z-1 w-full h-60 md:h-96 lg:h-[500px] bg-cover bg-center relative'>
                        <div className='absolute w-full h-full bg-black opacity-50'>
                        </div>
                        <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-4xl inline-block w-4/5 md:2/3 text-center'>Begin your journey to homeownership with confidence. Let us navigate the process and turn your dreams into reality</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    );
};

export default Header;