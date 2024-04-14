import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import PropertyCard from "../propertyCard/PropertyCard";

const Properties = () => {
    const { properties } = useContext(AuthContext)

    return (
        < div className="w-11/12 m-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-y-4 lg:gap-x-0">
            {
                properties?.map((property, idx) => <PropertyCard key={idx} property={property}></PropertyCard>)
            }
        </div >
    );
};

export default Properties;