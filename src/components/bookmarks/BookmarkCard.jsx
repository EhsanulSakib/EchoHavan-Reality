import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
AOS.init();
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const BookmarkCard = ({ card }) => {
    const { user } = useContext(AuthContext)

    const { estate_title, category, location, price, status, segment_name, image } = card

    const WishList = localStorage.getItem(`${user.email}-wishlist`);

    const getWishList = () => {
        if (WishList) {
            return JSON.parse(WishList);
        }
        return [];
    }

    const RemoveWishList = id => {
        const WishListInt = getWishList();
        const exists = WishListInt.find(cardId => cardId === id);

        if (exists) {
            WishListInt.pop(id);
            localStorage.setItem(`${user.email}-wishlist`, JSON.stringify(WishListInt));
            setTimeout(() => {
                window.location.reload()
            }, 100);
        }
    }

    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className="w-11/12 flex flex-col md:flex-row bg-slate-200 mb-4 md:mb-8 lg:mb-12 shadow-lg rounded-lg m-auto gap-4 md:items-center">
            <div>
                <img src={image.main} alt="" className="w-full md:w-[400px] lg:w-[420px] h-fit object-cover rounded-t-lg md:rounded-t-none lg:rounded-l-lg" />
            </div>
            <div className="mt-4 px-2 md:px-0 w-full md:w-2/3 lg:w-1/2">
                <h1 className=" inline-block p-2 mb-1 bg-blue-500 rounded-md text-white font-bold">For {status}</h1>
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl">{estate_title}</h2>
                <h2>{location}</h2>

                <div className="my-1 flex gap-2 text-sm lg:text-base">
                    <h2 className="font-bold">#{category}</h2>
                    <h2 className="font-bold">#{segment_name}</h2>
                </div>
                <h2 className="font-bold text-2xl text-blue-600">{price}</h2>
                <div className='pr-4 mb-4 flex justify-between items-center'>
                    <button className="mt-2 btn bg-blue-400 hover:bg-blue-300 text-white"><Link to={`/property/${card.id}`}>View Details</Link></button>
                    <button onClick={() => RemoveWishList(card.id)} className="btn btn-circle text-2xl bg-inherit border-red-700 text-red-700"><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    );
};

export default BookmarkCard;