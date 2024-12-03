import React, { useState } from "react";

const Space = ({ space }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
      <h4
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
      >
        {space.spaceName || "Unnamed Space"}

        <span> {isExpanded ? "-" : "+"}</span>
      </h4>
      {isExpanded && (
        <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
          <strong>Rent Roll:</strong>
          {space.rentRoll?.length > 0 ? (
            <ul>
              {space.rentRoll.map((rent, index) => (
                <li key={index}>
                  {rent.month}: ${rent.rent}
                </li>
              ))}
            </ul>
          ) : (
            <p>No rent roll data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Space;
