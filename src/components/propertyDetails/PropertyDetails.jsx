import { useLoaderData, useParams } from "react-router-dom";

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
    const properties = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const property = properties.find(property => property.id === idInt);
    const [days, setDays] = useState(1)


    const { estate_title, image, location, category, segment_name, description, price, status, area, coordinates, facilities, rating, reviews } = property

    const position = [coordinates.latitude, coordinates.longitude]
    return (
        <div className=" mt-2 ">
            <Helmet>
                <title>EchoHaven Realty | Property-{id}</title>
            </Helmet>
            <div className="px-3 m-auto">
                <div className="flex flex-col gap-1 md:flex-row md:h-96 lg:h-[500px]">
                    <div className="md:w-1/2">
                        <img src={image.main} alt="" className="w-full h-60 md:h-96 lg:h-[500px] object-cover object-center" />
                    </div>
                    <div className="md:w-1/2">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                        >
                            <SwiperSlide>
                                <img src={image.slider_image_1} alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={image.slider_image_2} alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={image.slider_image_3} alt="" className='w-full h-60 md:h-96 lg:h-[500px] object-cover object-center' />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:pl-4 mb-8">
                    <div className="mt-2 md:my-3 lg:my-6">
                        <h2 className="text-xl font-medium bg-blue-400 inline-block p-2 rounded-md text-white my-2">For {status}</h2>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">{estate_title}</h2>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-medium">{location}</h4>
                        <h4 className="font-semibold my-1 text-xl">Size: {area}</h4>
                        <h4 className="my-1">
                            {
                                facilities?.map((facility, idx) => <span key={idx} className="font-semibold mr-2">{facility} </span>)
                            }
                        </h4>
                        <div className="flex my-2 gap-2 items-center font-semibold text-white text-xs md:text-base">
                            <span className="bg-blue-400 p-2 rounded-md ">#{category}</span>
                            <span className="bg-blue-400 p-2 rounded-md">#{segment_name}</span>
                        </div>
                        <div className="my-1 md:my-2 lg:my-4 flex gap-3 items-center">
                            <h2 className="flex gap-1 items-center font-bold">Rating:
                                {
                                    rating == 5 ?
                                        <span className="flex text-lg text-yellow-400">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </span>
                                        :
                                        <span className="flex text-lg text-yellow-400">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </span>
                                }
                            </h2>
                            <h2 className="text-base font-bold">Reviews: {reviews}</h2>
                        </div>
                        <p className="mt-4 text-justify">{description}</p>
                    </div>

                    <div className="flex flex-col justify-between mt-8 border py-8 px-6 rounded-md shadow-lg">
                        <div>
                            <h1 className="text-2xl">Price :</h1>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-500">{price}</h1>

                            {
                                status === 'Rent' ?
                                    <div className="my-4">
                                        <h2 className="font-bold">Number of Days You Want to Stay: </h2>
                                        <div className="flex items-center gap-4">

                                            <GrSubtractCircle onClick={() => setDays(days - 1)} className="text-3xl" />

                                            <span className="text-4xl">{days}</span>
                                            <IoIosAddCircleOutline onClick={() => setDays(days + 1)} className="text-4xl" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl">Total Price: ${parseFloat(price.replace(/[^0-9.]/g, '')) * days}</h2>


                                    </div>
                                    :
                                    <div className="h-4"></div>
                            }

                        </div>


                        <div className="w-full flex items-center gap-4">
                            {
                                status == "Rent" ?
                                    <button className="p-2 bg-blue-500 hover:bg-blue-400 text-white font-extrabold w-1/2 m-auto rounded-md">Reserve</button>
                                    :
                                    <button className="p-2 bg-blue-500 hover:bg-blue-400 text-white font-extrabold w-1/2 m-auto rounded-md">Buy</button>
                            }

                            <button className="p-2 border-2 border-blue-400 text-black hover:bg-blue-400 hover:text-white font-extrabold w-1/2 m-auto rounded-md">Wishlist</button>
                        </div>
                    </div>
                </div>

                <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {estate_title}
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    );
};

export default PropertyDetails;