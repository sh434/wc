import Heading from "../../../globalComponents/molecules/Heading";
import React, { useState, useEffect } from "react";
import { Amenities_Data_1 } from "../../../../assets/constants/properties";
import "./amenities.css";
// import useApiFetcher from "./../../../../hooks/useApiFetcher";

const Amenities = ({ propertyId }) => {
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await fetch(
          `https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}?populate[amenities][populate][0]=Icon&populate[amenities][populate][1]=amenity_category.Image`
        );
        const result = await response.json();
        const fetchedAmenities = result?.data?.attributes?.amenities?.data || [];
        setAmenitiesData(fetchedAmenities);
      } catch (error) {
        setError("Error fetching amenities data");
        console.error("Error fetching amenities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAmenities();
  }, [propertyId]);

  if (loading) {
    return <div>Loading amenities...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (amenitiesData.length === 0) {
    return <div>No amenities available</div>;
  }

  const groupedAmenities = amenitiesData.reduce((acc, amenity) => {
    const category = amenity.attributes.amenity_category.data.attributes.Category_Name;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(amenity);
    return acc;
  }, {});

  console.log(groupedAmenities)


  return (
    <div className="container">
      {Object.entries(groupedAmenities).map(([category, amenities], idx) => (
        <div className="row" key={idx}>
          <div className="col-md-3 center-item border">
            <AmenitiesBox 
              title={category} 
              img={amenities[0].attributes.amenity_category.data.attributes.Image.data.attributes.url} 
            />
          </div>
          <div className="col-md-9 border ">
            <AmenitiesDetails data={amenities} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;

function AmenitiesBox({ title, img }) {
  return (
    <div className="amenitiesBox">
      {/* Safety */}
      <div className="amenitiesImgBox">
        <img src={img} alt="" />
      </div>
      <Heading fontSize="0.75rem" fontWeight="700" text={title} />
    </div>
  );
}

function AmenitiesDetails({ data = [] }) {
  return (
    <div className="row amenitiesDetailsBox">
      {data.map((item, idx) => {
        const img = item.attributes.Icon?.data?.attributes?.url || "path/to/default-image.png";
        const title = item.attributes.Title;
        return (
          <div className="col-md-4 p-2 amenitiesDetailsImgBox" key={idx}>
            <img src={img} alt="" className="col-md-2" />
            <div className="col-md-10">{title}</div>
          </div>
        );
      })}
    </div>
  );
}
