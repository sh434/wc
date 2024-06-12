import { Link } from "react-router-dom";

import Heading from "../molecules/Heading";

import useApiFetcher from "../../../hooks/useApiFetcher.js";
import { generatePropertyDetailsURL } from "../../../helpers/getRedirectUrl.js";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls.js";
import { EMPTY_OBJECT } from "../../../assets/constants/index.js";
import Card from "../card/Card.js";

const urlForProperties = getFullUrl(API_URL.PROPERTIES + API_URL.POPULATE);

const CardsContainer = () => {
  const [properties, isLoading, error] = useApiFetcher(urlForProperties);
  if (error) return <div>{error.message}</div>;
  if (!properties && isLoading) return null;

  const CARDS_DATA = properties;

  return (
    <section className="container my-5">
      <div>
        <Heading
          text={"Featured Properties"}
          color={"#EF750F"}
          fontWeight={700}
        />
        <p className="text-wrap">
          Check out some of our most exclusive houses, apartments, townhomes,
          penthouses, and more.
        </p>

        <div className="row g-1">
          {CARDS_DATA?.map((card) => {
            const { cityName, Project_Name, propertyId } = propertyParams(card);
            return (
              <div
                key={propertyId}
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
              >
                <Link
                  to={generatePropertyDetailsURL(cityName, Project_Name)}
                  className="del-underLine"
                  state={{ propertyId }}
                >
                  <Card cardData={propertyParams(card)} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;

const propertyParams = (property) => {
  const {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
    create_city,
  } = property?.attributes || EMPTY_OBJECT;

  const propertyId = property?.id;
  const cityName = create_city?.data?.attributes?.City_Name;
  const img = Image?.data[0]?.attributes?.url;

  return {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    img,
    propertyId,
    cityName,
  };
};
