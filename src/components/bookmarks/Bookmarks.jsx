import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import BookmarkCard from "./BookmarkCard";

const Bookmarks = () => {
    const { user, properties } = useContext(AuthContext)

    const WishList = JSON.parse(localStorage.getItem(`${user.email}-wishlist`));

    const savedItems = properties?.filter(item => {
        return WishList?.includes(item.id);
    });

    return (
        <div>
            <Helmet>
                <title>EchoHaven Realty | Bookmarks</title>
            </Helmet>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6 lg:my-8">Bookmarks</h1>

            <div className="min-h-screen">
                {
                    savedItems.length == 0 ?
                        <h1 className="text-center text-lg font-semibold">No items</h1>
                        :
                        <div>
                            {
                                savedItems?.map((card, idx) => <BookmarkCard key={idx} card={card}></BookmarkCard>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default Bookmarks;