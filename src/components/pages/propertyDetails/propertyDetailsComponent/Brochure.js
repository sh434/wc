import React, { useState, useEffect } from "react";


const Brochure = ({ propertyId }) => {
  const [brochures, setBrochures] = useState([]);

  useEffect(() => {
    const fetchBrochure = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}?populate[Brochures][populate]=Brochure`);
        const result = await response.json();
        const brochureData = result?.data?.attributes?.Brochures || [];
        console.log('kkkkkkkkkkk', brochureData )
        setBrochures(brochureData,brochureData);
      } catch (error) {
        console.error("Error fetching brochure:", error);
      }
    };

    fetchBrochure();
  }, [propertyId]);

  if (brochures.length === 0) {
    return null; 
  }

  return (
    <div className="brochure-container">
      <h2 className="brochure-title">Brochures</h2>
      <div className="brochure-grid">
        {brochures.map((item) => (
          <div key={item.id} className="brochure-item">
            <a href={brochures} download className="brochure-link">
              Download Brochure 
            </a>
            <div className="prize-list-viewer">
              <object data={item.url} type="application/pdf" width="100%" height="500px">
                <p>
                  Your browser does not support PDFs. <a href={item.url}>Download the PDF</a>.
                </p>
              </object>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brochure;
