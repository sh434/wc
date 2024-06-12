import { useState } from "react";
import InfiniteSlides from "../../globalComponents/slickCrousel/InfiniteSlides";
import Heading from "../../globalComponents/molecules/Heading";

import { SLIDES } from "../../../assets/IMG";
import "./aboutUs.css";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1, // Number of slides to scroll per transition
  autoplay: true, // Set to true for automatic slide change
  autoplaySpeed: 1000,
  speed: 500,
};

const AboutUs = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container border rounded-5 d-flex align-items-center">
      <div className="col-md-9 my-2 newClass" style={{ float: "left" }}>
        <div className="text-Item">
          <div className="fw-bold">Real Estate </div>
          <Heading
            text={"Request a Call Back"}
            fontWeight={700}
            color="var(--global-heading-color)"
          />

          <p>
            Tired of Renting? Discover Your Dream Home Today. Start Your Search
            Now. Action-oriented and time-sensitive
          </p>
        </div>

        <InfiniteSlides
          settings={settings}
          data={SLIDES}
          className="about-Us-Page-Slider"
        />
      </div>

      <div className="col-md-3" style={{ float: "right" }}>
        <div className=" signUpForm p-2 ">
          <form className=" w-100" onClick={(e) => e.preventDefault()}>
            <div className="signUpHeader">
              <div className="fw-bold my-h">Enquiry Now </div>
              {/* <div className="fw-bold my-h">For Rent</div> */}
            </div>

            <input placeholder="Full Name" name="For" className="" />
            <input placeholder="Mobile Number" name="For" />
            <input placeholder="Budget" name="property" />
            <select
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Property Type</option>
              <option value="option1">Residential</option>
              <option value="option2">Commercial</option>
              <option value="option3">Other</option>
            </select>

            {/* <select
              id="options"
              value={selectedCityOption}
              onChange={handleCityOptionChange}
            >
              <option value="">City Type</option>
              <option value="option1">Delhi</option>
              <option value="option2">Noida</option>
              <option value="option3">Moradabad</option>
              <option value="option4">Ghaziabad</option>
              <option value="option5">Greater Noida</option>
              <option value="option6">Rishikesh</option>
            </select> */}
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
