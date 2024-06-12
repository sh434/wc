import React, { useState, useEffect } from 'react';
import "./common.css";

const AboutBuilder = ({ data, propertyId }) => {
  const {
    Builder_Image,
  } = data?.builder?.data?.attributes;

  const { url, alternativeText } = Builder_Image?.data?.attributes;

  const [builderName, setBuilderName] = useState('');
  const [builderExperience, setBuilderExperience] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [builderDescription, setBuilderDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchBuilderData = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}?populate[builder][populate]=Builder_Image`);
        const result = await response.json();
        const builderData = result?.data?.attributes?.builder?.data?.attributes;
        setBuilderName(builderData.Builder_Name);
        setBuilderExperience(builderData.Builder_Experience);
        setTotalProjects(builderData.Total_Projects_of_Builder);
        setBuilderDescription(builderData.Builder_Disclaimer);
        setImageUrl(builderData.Builder_Image?.data?.attributes?.url || '');
      } catch (error) {
        console.error("Error fetching builder data:", error);
      }
    };

    fetchBuilderData();
  }, [propertyId]);

  return (
    <div className="row">
      <div className="col-md-11">
        <div className="row p-3">
          <div className="col-md-4 p-0 m-0">
            {imageUrl && (
              <img src={imageUrl} alt={alternativeText || "Builder Image"} style={{ width: '46%', height: '58%', borderRadius: '10px' }} />
            )}
            <h3 className='mt-4' style={{ fontSize: "19px" }}>Builder Name: {builderName}</h3>
          </div>
          <div className="col-md-4 fw-bold p-3">
            <p>Total Projects: {totalProjects}</p>
          </div>
          <div className="col-md-4 fw-bold p-3">
            <p>Experience: {builderExperience} Years</p>
          </div>
        </div>
        <div className="description ">
          <p>Description: {builderDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilder;
