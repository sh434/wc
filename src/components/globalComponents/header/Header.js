import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { CiHeart } from "react-icons/ci";
import HeaderSearchSuggestion from "../../advancedSearchBar/HeaderSearchSuggestion";
import CustomDropDown from "../customDropDown/CustomDropDown";
import HeaderBtn, { FindPropertyBtn } from "../headerBtn/HeaderBtn";
import RightSideMenu from "./RightSideMenu";
import DropDown from "./../DropDown/DropDown";
import LoginPopUp from "../Login/LoginPopUp";
import WishListPopUp from "../../pages/wishList/WishListPopUp";

import {
  // CITY_NAME,
  COMMERCIAL_PROPERTY,
  RESIDENTIAL_PROPERTY,
} from "../../../assets/IMG";
import { COMPANY_LOGO } from "../../../assets/urls";
import { ALL_EVENTS } from "../../../assets/constants/events";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, generateSortedUrl } from "../../../assets/constants/apiUrls";
import URL from "../../../assets/constants/url";
import {
  SORTED_BY,
  SORTED_BY_PROPERTY_TYPE,
} from "../../../assets/constants/filters";
import { EMPTY_ARRAY } from "../../../assets/constants";
import AccountPic from "../../../assets/account.png";
// import Wishlist from "../../../assets/wishlist.png";
import Search from "../../../assets/search.png";
import "./header.css";

// const BLUE_LOGO_URL =
//   "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/ltwrcvytxvphyeegszjp/WEALTH_CLINIC-dark-logo";
const SORTED_CITY_PARAMS = {
  endPoint: API_URL.CITY_NAME,
  sortBy: "id",
  order: SORTED_BY.ASC,
};

const Header = ({ className }) => {
  const url = generateSortedUrl(SORTED_CITY_PARAMS);
  const [dropDownConfig, setDropDownConfig] = useState({
    cityName: false,
    findProperty: true,
  });
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // State for search bar visibility
  const [searchedBarValue, setSearchedBarValue] = useState(""); // State for search bar value
  const [radioBtnValue, setRadioBtnValue] = useState(null);
  const [isScrollY, setIsScrollY] = useState(0);
  const handleScroll = () => {
    setIsScrollY(window.scrollY);
  };

  console.log(searchedBarValue);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpenLoginPopUp, setIsOpenLoginPopUp] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);

  const whishListCount = useSelector((state) => state.wishlist.items.length);

  const handleLoginPopUp = () => setIsOpenLoginPopUp(!isOpenLoginPopUp);
  const handleWishListPopUp = () => setIsWishListOpen(!isWishListOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollY]);

  const [cityName, error, isLoading] = useApiFetcher(url);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const CITY_NAME_1 = getCityName(cityName);
  const getPropertyData = () => {
    if (radioBtnValue === SORTED_BY_PROPERTY_TYPE.COMMERCIAL) {
      return COMMERCIAL_PROPERTY;
    }
    if (radioBtnValue === SORTED_BY_PROPERTY_TYPE.RESIDENTIAL) {
      return RESIDENTIAL_PROPERTY;
    }
    return EMPTY_ARRAY;
  };

  return (
    <>
      {/* <h1 className="animated-line">Home</h1> */}
      <div className="container-fluid">
        <div
          className={`header ${
            isScrollY > 300 && "header_active_Darken"
          } ${className}`}
        >
          <div className="row flex-wrap">
            <div className="col-md-5 col-sm-12 ">
              <div className="logoContainer">
                <Link
                  to={URL.HOME}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img
                    src={COMPANY_LOGO}
                    alt="company_logo"
                    className="img-fluid header-logo"
                  />
                </Link>
                <div
                  className="menuBtn header-btn  d-block d-lg-none"
                  data-bs-toggle="modal"
                  data-bs-target="#sidebarMenu"
                >
                  <i className="bi bi-list"></i>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-12 menu">
              <div>
                <nav>
                  <ul>
                    <li>
                      <a className="findProperty" href="/">
                        Find Property
                      </a>
                      <ul>
                        <li>
                          <a href="/" className="resdes">
                            Residential
                          </a>
                          <ul>
                            <li>
                              <a href="/" className="resdes">
                                Metadata
                              </a>
                            </li>
                            <li>
                              <a href="/" className="resdes">
                                Text Fundamentals
                              </a>
                            </li>
                            <li>
                              <a href="/" className="resdes">
                                Hyperlinks
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/" className="resdes">
                            Commercial
                          </a>
                          <ul>
                            <li>
                              <a href="/" className="resdes">
                                Metadata
                              </a>
                            </li>
                            <li>
                              <a href="/" className="resdes">
                                Text Fundamentals
                              </a>
                            </li>
                            <li>
                              <a href="/" className="resdes">
                                Hyperlinks
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <CustomDropDown
                  onMouseEnter={() => setDropDownConfig({ cityName: true })}
                  styleBtn={{
                    color: "rgba(255,255,255,0.8)",
                    width: "6.5rem",
                  }}
                  styleMenu={{ width: "150px", height: "150px !important" }}
                  text={"Find City"}
                  data={CITY_NAME_1}
                  isDropDownOpen={dropDownConfig.cityName}
                  setIsDropDownOpen={() =>
                    setDropDownConfig({ cityName: !dropDownConfig.cityName })
                  }
                  children={
                    <HeaderBtn
                      className={"navbar-brand"}
                      style={{
                        border: "8px solid red !important",
                        width: "100%",
                      }}
                    />
                  }
                />
              </div>

              <div>
                <DropDown
                  styleBtn={{
                    color: "#fff",
                    width: "120px",
                    lineHeight: "3.2rem",
                  }}
                  btnText={"Find Property"}
                  getValue={setRadioBtnValue}
                  children={
                    <CustomDropDown
                      onMouseEnter={() =>
                        setDropDownConfig({ findProperty: true })
                      }
                      styleBtn={{
                        // color: "rgba(255,255,255,0.8)",
                        width: "8.5rem",
                      }}
                      styleMenu={{ width: "150px", height: "auto !important" }}
                      text={"Find Property"}
                      data={getPropertyData()}
                      isDropDownOpen={
                        dropDownConfig.findProperty && radioBtnValue
                      }
                      setIsDropDownOpen={() =>
                        setDropDownConfig({
                          findProperty: !dropDownConfig.findProperty,
                        })
                      }
                      children={
                        <FindPropertyBtn
                          className={"navbar-brand"}
                          style={{
                            border: "8px solid red !important",
                            width: "100%",
                          }}
                        />
                      }
                    />
                  }
                />
                {/* <CustomDropDown
                  styleBtn={{
                    color: "rgba(255,255,255,0.8)",
                    width: "8.5rem",
                  }}
                  styleMenu={{ width: "150px", height: "150px !important" }}
                  text="Find Property"
                  data={CITY_NAME}
                  isDropDownOpen={dropDownConfig.findProperty}
                  setIsDropDownOpen={() =>
                    setDropDownConfig({
                      findProperty: !dropDownConfig.findProperty,
                    })
                  }
                  children={
                    <HeaderBtn
                      className={"navbar-brand"}
                      style={{
                        border: "8px solid red !important",
                        width: "100%",import { EMPTY_OBJECT } from './../../../assets/constants/index';

                      }}
                    />
                  }
                /> */}
              </div>

              {/* <div className="header-btn">
                <Link className="eventDeco" to={URL.FIND_PROPERTY}>
                  Find Property
                </Link>
              </div> */}
              <div className="header-btn">
                <Link className="eventDeco" to={URL.EVENT} state={ALL_EVENTS}>
                  Events
                </Link>
              </div>
              <div className="text-white">Talk To Our Agents</div>
              <div className="header-btn">
                <Link className="blogsDeco" to={URL.BLOGS}>
                  Blogs
                </Link>
              </div>
              <div className="supergroup">
                <div className="bgGrouping">
                  <div className="text-white">
                    <img
                      className="acn"
                      style={{ width: 27 }}
                      src={AccountPic}
                      alt=""
                      onClick={handleLoginPopUp}
                    />
                  </div>
                  <div className="text-white wishListHeaderBtn">
                    <CiHeart
                      onClick={handleWishListPopUp}
                      className="headerWishListBtn"
                    />

                    {whishListCount > 0 && (
                      <div className="wishListCount">{whishListCount}</div>
                    )}
                  </div>
                  <div className="text-white">
                    <img
                      className="ser"
                      style={{ width: 27 }}
                      src={Search}
                      alt=""
                      onClick={() => setIsSearchBarVisible(!isSearchBarVisible)}
                    />
                  </div>
                </div>
                {/* <div className="header-btn">Profile</div> */}
                {/* <div>
                <button className="headerSearchBtn fw-bold ">
                  Find a Home <i class="bi bi-search"></i>
                </button>
              </div> */}
                {/* <div className="headerProfile">
                <i class="bi bi-person"></i>
              </div> */}
                {/* <div className="header-btn">Sign Up/Login</div>
              <div className="header-btn">WishList</div> */}

                <div
                  className="menuBtn header-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#sidebarMenu"
                >
                  <i className="bi bi-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSearchBarVisible && (
        <HeaderSearchSuggestion getSearchedValue={setSearchedBarValue} />
      )}

      <RightSideMenu />
      {/*  */}
      {/* <PopUpMenu/> */}

      {isOpenLoginPopUp && <LoginPopUp onClose={handleLoginPopUp} />}
      {isWishListOpen && <WishListPopUp onClose={handleWishListPopUp} />}
    </>
  );
};

export default Header;

function getCityName(cityName) {
  return cityName?.map((item) => {
    // const data = { id: item?.id, City_Name: item?.attributes?.City_Name }
    return item?.attributes?.City_Name;
  });
}
