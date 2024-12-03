import React, { useState } from "react";
import Space from "./Space";

const Property = ({ property }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
      >
        {property.propertyName || "Unnamed Property"}

        <span> {isExpanded ? "-" : "+"}</span>
      </h2>
      {isExpanded && (
        <div>
          <p>
            <strong>Features:</strong> {property.features?.join(", ") || "N/A"}
          </p>
          <p>
            <strong>Highlights:</strong>{" "}
            {property.highlights?.join(", ") || "N/A"}
          </p>
          <p>
            <strong>Transportation:</strong>{" "}
            {property.transportation?.length > 0 ? (
              <ul>
                {property.transportation.map((trans, index) => (
                  <li key={index}>
                    {trans.type}: {trans.line} ({trans.distance})
                  </li>
                ))}
              </ul>
            ) : (
              <p>N/A</p>
            )}
          </p>
          <div>
            <h3>Spaces:</h3>
            {property.spaces?.length > 0 ? (
              property.spaces.map((space, index) => (
                <Space key={index} space={space} />
              ))
            ) : (
              <p>No spaces available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Property;
