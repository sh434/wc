import React, { useState, useEffect } from 'react';

const LocationMap = ({ data, propertyId }) => {
  const [mapHtml, setMapHtml] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}?populate[Location_Map]=*`);
        const result = await response.json();
        console.log(result, 'llllllllllll')
        const locationMapHtml = result?.data?.attributes?.Location_Map?.Location_Map || '<p>Location map not available.</p>';
        setMapHtml(locationMapHtml);
        const locationDescription = result?.data?.attributes?.Location_Map?.Location_Description || <p>Location Description is not available</p>
        setDescription(locationDescription)
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, [propertyId]);



  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className="location-map" style={{ width: '500px!important' }}>
            <div
              dangerouslySetInnerHTML={{ __html: mapHtml }}
            />
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <h3 style={{ fontSize: '26px' }}>Location Description:</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default LocationMap;
