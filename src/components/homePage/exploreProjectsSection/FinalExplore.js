import { Link } from "react-router-dom";
import { ButtonDarkBlue } from "./../../globalComponents/molecules/ButtonDarkBlue";
import URL from "../../../assets/constants/url";
import "./finalexplore.css";

const cardData = [
  {
    title: "Luxury",
    imageUrl: "https://www.wealth-clinic.com/property_media/43821691649499.jpg",
  },
  {
    title: "MID-RANGE",
    imageUrl: "https://www.wealth-clinic.com/property_media/67581703666273.jpg",
  },
  {
    title: "AFFORDABLE",
    imageUrl: "https://www.wealth-clinic.com/property_media/23321696312251.jpg",
  },
  {
    title: "READY TO MOVE IN",
    imageUrl:
      "https://www.wealth-clinic.com/project_category_media/20921695721064.webp",
  },
];

const FinalExplore = () => {
  return (
    <div className="container-fluid bgFinalExplore">
      <div className="container">
        <div className="row">
          {cardData.map((card, idx) => (
            <div className="col-md-3" key={idx}>
              <ExploreCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalExplore;

function ExploreCard({ data }) {
  const { title, imageUrl } = data;
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <p className="headingExplore">{title}</p>
      <Link to={`${URL.SEARCH}?category=${title}`} className="del-underLine">
        <ButtonDarkBlue
          className="exploreViewsDetailsBtn"
          name="View Details"
        />
      </Link>
    </div>
  );
}
