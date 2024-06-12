import { Radio } from "@mui/material";
import { useState } from "react";

import { SORTED_BY_PROPERTY_TYPE } from "../../../assets/constants/filters";
import styles from "./dropDown.module.css";

const BUTTON_DATA = [
  SORTED_BY_PROPERTY_TYPE.RESIDENTIAL,
  SORTED_BY_PROPERTY_TYPE.COMMERCIAL,
];

const DropDown = ({
  children,
  listStyle,
  styleBtn,
  getValue: setValue,
  btnText,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isNestedDropDownTypeOpen, setIsNestedDropDownTypeOpen] =
    useState(true);

  return (
    <div
      className={`${styles.dropDown}`}
      onMouseEnter={() => setIsDropDownOpen(true)}
      // onMouseLeave={handleCloseDropDown}
    >
      <div className={styles.dropDownPad}>
        <div
          className={`${styles.dropDownBtn}`}
          style={styleBtn}
          onClick={() => {
            setIsNestedDropDownTypeOpen(true);
            setIsDropDownOpen(!isDropDownOpen);
          }}
        >
          <div>{btnText || "Type"}</div>
          <div className="dropDownArrow">
            <i
              className={`fa fa-chevron-right icon  ${
                isDropDownOpen && "open"
              }`}
            ></i>
          </div>
        </div>

        {isDropDownOpen && (
          <div className={styles.dropDownList} style={listStyle}>
            <DropDownRadioBtn data={BUTTON_DATA} setValue={setValue} />
            {isNestedDropDownTypeOpen && children}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

export function DropDownRadioBtn({ data, setValue }) {
  const [checkedValue, setCheckedValue] = useState("");
  const handleRadioChange = (e) => {
    setCheckedValue(e.target.value);
    if (setValue) {
      setValue(e.target.value);
    }
  };
  return (
    <>
      {data?.map((value, idx) => (
        <div key={idx} className={`d-flex ${styles.dropDownListBtn}`}>
          <div>
            <Radio
              size="small"
              sx={{ color: "#ef750f" }}
              className={styles.radioBoxBtn}
              value={value}
              checked={checkedValue === value}
              onChange={handleRadioChange}
            />
          </div>
          <div>{value}</div>
        </div>
      ))}
    </>
  );
}

export const DropDown2 = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { label: "Commercial", key: "commercialData" },
    { label: "Residential", key: "residential" },
  ];

  const handleItemClick = (key) => {
    setActiveItem(activeItem === key ? null : key);
  };

  return (
    <div className={styles.dropDown}>
      <div
        onClick={() => {
          setIsDropDownOpen(!isDropDownOpen);
        }}
      >
        {activeItem || "Select Typeee"}
      </div>
      {isDropDownOpen && (
        <ul className={styles.dropDownList}>
          {items.map((item) => (
            <li key={item.key} onClick={() => handleItemClick(item.key)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
      {activeItem === "commercialData" && <div>Commercial Dataaa</div>}
      {activeItem === "residential" && <div>Residentialll</div>}
    </div>
  );
};

//  <DropDown
// children={
//   <CustomDropDown
//     data={BUILDING_TYPE}
//     styleMenu={{ width: "164px" }}
//     text={"Type"}
//     isDropDownOpen={dropDownConfig.selectType}
//     setIsDropDownOpen={() =>
//       setDropDownConfig({
//         cityName: false,
//         selectType: !dropDownConfig.selectType,
//         budget: false,
//       })
//     }
//     children={<SearchDropDownButtons />}
//     dropDownValueKeyName={keys[1]}
//     setDropDownValue={setDropDownValue}
//   />
// }
// />

// -------------------

// const categories = [
//   { label: "Commercial", value: "commercial" },
//   { label: "Residential", value: "residential" },
//   { label: "Industrial", value: "industrial" },
// ];

// if come
