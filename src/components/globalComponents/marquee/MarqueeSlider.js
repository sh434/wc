import Marquee from "react-fast-marquee";

import Heading from "./../molecules/Heading";

import { MARQUEE } from "../../../assets/constants/marquee";
import "./marqueeCard.css";

const MarqueeSlider = () => {
  return (
    <div className="bgFinalClient pt-3">
      <Heading
        className="center-item"
        text="Our Prestigious Clients"
        fontSize="1.75rem"
        fontWeight="500"
        color="#EF750f"
        lineHeight="2.5rem"
      />

      <div className="marquee-cards-container">
        <Marquee>
          {MARQUEE?.map((image, idx) => {
            const img = image?.img;
            return (
              <div key={idx} className="marqueeCard">
                <img src={img} alt="" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
