import React, { useState } from "react";
import "./index.css";
import PropertyFeatures from "./property-features";
import PButton from "../buttons/roundedge/primary";
import Favorite from "../../assets/images/mobile/love.svg";
// import FavoriteGreen from "../../assets/images/mobile/love_green.svg";
import FavoriteGreen from "../../assets/images/mobile/love_pink.svg";

const PropertyListing = ({ properties, length, chunk, showButton }) => {
    console.log(showButton);
  let result = "";
  if (length === 1 && chunk === 2) {
    result = <div className="no-item" />;
  } else if (length === 1 && chunk === 3) {
    result = <div className="no-item-1" />;
  } else if (length === 2 && chunk === 3) {
    result = <div className="no-item" />;
  }
  const [fav, setFav] = useState(Favorite);
  let favorite = [];
  for(let i=0; i<length; i++){
    favorite[i] = fav;
  }

  const favoriteToggle = (index, value) => {
    if(value === Favorite) {
      setFav(FavoriteGreen)
      favorite[index] = fav;
    }else {
      setFav(Favorite);
      favorite[index] = fav;
    }
  }

  // useEffect(() => {
  //   favorite = fav;
  // }, [favorite, setFav]);

  return (
    <div className="rowed">
      <div className="flex-row">
        {properties.map((property, index) => {
          if (index < 3) {
            return (
              <div className="group" key={index}>
                <div className="properti-preview">
                  <div className="first-box">
                    <img
                      className="image"
                      alt="Property list"
                      src={property.src}
                    />
                    <div className="property-top-panel">
                      <div className="property-caption">
                        <div className="property-caption-text">
                          Semi-Detached House
                        </div>
                      </div>

                      <img
                        src={favorite[index]}
                        className="property-favorite-icon"
                        alt="favorite"
                        onClick={() => favoriteToggle(index, favorite[index])}
                      />
                    </div>
                  </div>
                  <PropertyFeatures property={property} />
                </div>
              </div>
            );
          } else return "";
        })}

        {result}
      </div>
      {showButton && (
        <PButton
            className="x31650"
            title="See all 6 verified properties"
            url="https://landearn.com"
        />
      )}
    </div>
  );
};

export default PropertyListing;
