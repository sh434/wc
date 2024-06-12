import React, { useState, useEffect } from "react";


const PrizeList = ({ propertyId }) => {
  const [pdfUrls, setPdfUrls] = useState([]);

  useEffect(() => {
    const fetchBrochures = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${propertyId}?populate[Add_Price_List][populate]=Price_List`);
        const result = await response.json();
        const brochureUrls = result?.data?.attributes?.Add_Price_List?.Price_List?.data || [];
        setPdfUrls(brochureUrls.map(item => item.attributes));
      } catch (error) {
        console.error("Error fetching brochures:", error);
      }
    };

    fetchBrochures();
  }, [propertyId]);

  if (pdfUrls.length === 0) {
    return <p>Loading Prize...</p>;
  }

  return (
    <div className="prize-list-container">
      <h2>Project Brochures</h2>
      <div className="prize-list-grid">
        {pdfUrls.map((pdf, index) => (
          <div key={index} className="prize-list-item">
            <a href={pdf.url} download className="prize-list-link">
              Download PrizeList {index + 1}
            </a>
            <div className="prize-list-viewer">
              <object data={pdf.url} type="application/pdf" width="100%" height="500px">
                <p>
                  Your browser does not support PDFs. <a href={pdf.url}>Download the PDF</a>.
                </p>
              </object>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeList;
