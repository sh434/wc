import QuestionAnswer from "../../../globalComponents/molecules/QuestionAnswer";
import React, { useState, useEffect } from "react";


const Faqs = ({ projectId }) => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`https://bold-approval-c005df0fb8.strapiapp.com/api/projects/${projectId}`);
        const result = await response.json();
        const faqData = result?.data?.attributes?.Specifications || [];
        setFaqs(faqData);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqs();
  }, [projectId]);

  return (
    <div>
      <h2>FAQs</h2>
      <QuestionAnswer faqs={faqs} />
    </div>
  );
};

export default Faqs ;
