import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PropertyCard = ({ property }) => {
    const { id, estate_title, category, status, segment_name, rating, reviews, image, price, location } = property


    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className="flex flex-col md:flex-row lg:flex-col gap-2 md:gap-4 lg:gap-2 w-full lg:w-11/12 m-auto h-[580px] md:h-[330px] lg:h-[580px] rounded-lg shadow-lg">
            <div>
                <img src={image.main} alt="" className=" h-64 md:h-full lg:h-64 w-full md:w-72 lg:w-full object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-t-none lg:rounded-t-lg" />
            </div>

            <div className="flex flex-col justify-between h-full pl-2 py-0 md:py-4 lg:py-0">
                <div>
                    <p className="text-xl font-bold my-1 py-1"><span className="bg-blue-300 p-2 rounded-sm" >For {status}</span></p>

                    <h2 className="text-2xl font-bold">{estate_title}</h2>
                    <h2 className="text-base">{location}</h2>

                    <p className="text-sm font-bold my-1 py-1"> <span className=" bg-blue-300 p-1 rounded-sm">{category}</span>
                        <span className="ml-4 bg-blue-300 p-1 rounded-sm">{segment_name}</span>
                    </p>
                </div>

                <div className="pb-4">
                    <h2 className="mb-4 text-3xl font-bold text-blue-600">{price}</h2>
                    <div className="my-1 md:my-2 lg:my-4 flex gap-3 items-center">
                        <h2 className="flex gap-1 items-center text-base font-bold">Rating:
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
                    <button className="btn bg-blue-500 hover:bg-blue-400 text-base md:text-lg text-white font-bold"><Link to={`/property/${id}`}>View Property</Link></button>
                </div>

            </div>
        </div>
    );
};

export default PropertyCard;