import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ButtonDarkBlue } from "./../molecules/ButtonDarkBlue";
import { useState } from "react";

import { formatIndianCurrency } from "../../../helpers/helper";
import fireFlame from "../../../assets/fireFlame.jpg";
import { wishListBtnColorStyle } from "./../../styles/globalStyle";
import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../../Redux/slice/wishListSlice";

const Card = ({ cardData }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  // const { img, city, type, price, details, name } = cardData;

  const {
    Project_Name,
    Min_Price,
    Max_Price,
    Address,
    img,
    cityName,
    propertyId,
  } = cardData;
  const minPrice = formatIndianCurrency(Min_Price);
  const maxPrice = formatIndianCurrency(Max_Price);

  const [name, city, type, price, details] = [
    Project_Name,
    cityName,
    "Residential",
    minPrice + " - ₹ " + maxPrice,
    Address,
  ];
  const dispatch = useDispatch();

  const handleWishList = (e) => {
    e.preventDefault();
    if (!isFavourite) {
      dispatch(
        addItemToWishlist({
          id: propertyId,
          img: img,
          price: `${minPrice} - ${maxPrice} `,
          address: Address,
          projectName: Project_Name,
          city: cityName,
        })
      );
    } else {
      dispatch(removeItemFromWishlist(propertyId));
      // toast.error("Property Removed From WishList");
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card1}>
      <div className={styles.imgDiv}>
        <div className={styles.favouriteBtn} onClick={handleWishList}>
          {isFavourite ? (
            <FaHeart style={wishListBtnColorStyle} />
          ) : (
            <FaRegHeart style={wishListBtnColorStyle} />
          )}
        </div>
        {/* <div>For sale</div> */}
        <img alt="img" src={img} />
        <div className={styles.signatureContainer}>
          {/* WEALTH-CLINIC.Signature */}
          <img className={styles.fireFlame} alt="flame" src={fireFlame} />
        </div>
      </div>
      <div
        className="fw-bold d-flex justify-content-between"
        style={{ color: "#212529" }}
      >
        <div>
          {name} | <span>{city}</span>
        </div>

        <div>
          <i class="bi bi-star c-gray"></i>4.94
        </div>
      </div>
      <div className="c-gray" style={{ color: "#333" }}>
        {details}
      </div>
      <div className="">
        <div className="col-md-5">
          <div className="c-gray" style={{ color: "#333" }}>
            {type}
          </div>
          <div className="fw-bold" style={{ color: "#212529" }}>
            ₹ {price}
          </div>
        </div>
        <div className="col-md-12">
          <ButtonDarkBlue
            name="View More"
            className={styles.propertiesViewMoreBtn}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
