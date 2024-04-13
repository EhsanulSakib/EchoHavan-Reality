import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import PropertyCard from "../propertyCard/PropertyCard";

const Properties = () => {
    const { properties } = useContext(AuthContext)

    return (
        < div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                properties?.map((property, idx) => <PropertyCard key={idx} property={property}></PropertyCard>)
            }
        </div >
    );
};

export default Properties;