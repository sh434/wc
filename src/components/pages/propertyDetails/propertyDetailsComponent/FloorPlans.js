import InfiniteSlides from "./../../../globalComponents/slickCrousel/InfiniteSlides";
import React, { useState, useEffect } from "react";
// import { FLOOR_SLIDES_IMG } from "../../../../assets/IMG";
import "./floorPlans.css";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1000,
  lazyLoad: true,
  initialSlide: 0,
};

const getFloorImages = (data) => {
  if (!data || !Array.isArray(data)) return [];
  return data.map((item) => ({
    img: item?.attributes?.url || "", 
  }));
};

const FloorPlans = ({ data,propertyId }) => {
  const floorInfo = data?.Floor_Plan?.Images?.data;
  const [floorData, setFloorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}?populate=Floor_Plan.Images`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setFloorData(result?.data?.attributes?.Floor_Plan?.Images?.data || []);
      } catch (error) {
        console.error("Error fetching floor plan data:", error);
      }
    };

    fetchData();
  }, [propertyId]);

  const FLOOR_SLIDES_IMG = getFloorImages(floorData);
 


  return (
    <div>
      FloorPlans
       {FLOOR_SLIDES_IMG.length > 0 ? (
        <InfiniteSlides settings={settings} data={FLOOR_SLIDES_IMG} />
      ) : (
        <p>No floor plan images available</p>
      )}
      
    </div>
  );
};

export default FloorPlans;
