import { Helmet } from "react-helmet-async";
import FAQ from "../shared/FAQ/FAQ";
import Header from "../shared/header/Header";
import Properties from "../shared/properties/Properties";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EchoHaven Realty | Home</title>
            </Helmet>
            <Header></Header>
            <p className="w-11/12 md:w-2/3 m-auto my-4 md:my-8 lg:my-12 text-base md:text-lg lg:text-xl font-medium text-center">Embark on your next chapter with us. Explore our diverse portfolio of properties and find the perfect place to call home.</p>
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4">View All Estates</h2>

            <Properties></Properties>
            <h2 className="mt-8 md:mt-12 lg:mt-16 text-center text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4">FAQ</h2>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;