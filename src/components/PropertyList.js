import React from "react";
import Property from "./Property";

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map((property, index) => (
        <Property key={index} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
