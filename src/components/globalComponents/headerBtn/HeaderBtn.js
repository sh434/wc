import { Link } from "react-router-dom";
import URL from "../../../assets/constants/url";
const HeaderBtn = (props) => {
  const { className, text } = props;
  return (
    <div style={{ width: "100px !important" }}>
      <Link to={`/${text}`} className={className}>
        {text}
      </Link>
    </div>
  );
};

export default HeaderBtn;

export const FindPropertyBtn = (props) => {
  const { className, text } = props;
  return (
    <div style={{ width: "100px !important" }}>
      <Link to={`${URL.SEARCH}/${text}`} className={className}>
        {text}
      </Link>
    </div>
  );
};
