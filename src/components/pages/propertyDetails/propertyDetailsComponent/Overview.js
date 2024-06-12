import React, { useState, useEffect } from "react";
import ReadMore from "../../../globalComponents/molecules/ReadMore";

const style = { textAlign: "justify" };

const Overview = ({ propertyId }) => {
  const [descriptionText, setDescriptionText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDescriptionData = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const description = data.data.attributes.Description[0].children[0].text;
        setDescriptionText(description,);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchDescriptionData();
  }, [propertyId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Overview</h2>
      <ReadMore
        text={descriptionText}
        fontSize="1rem"
        color="#777"
        lineHeight="20px"
        showLine="5"
        style={style}
      />
    </div>
  );
};

export default Overview;
