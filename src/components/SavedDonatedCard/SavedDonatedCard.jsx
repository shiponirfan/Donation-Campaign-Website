import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SavedDonatedCard = ({ savedData }) => {
  const {
    id,
    picture,
    title,
    donate,
    category,
    category_bg,
    card_bg,
    text_button_bg,
  } = savedData;

  const bgColor = () => {
    switch (card_bg) {
      case "#d9e5ff":
        return "bg-[#d9e5ff]";
      case "#ffe3e4":
        return "bg-[#ffe3e4]";
      case "#ebf6e2":
        return "bg-[#ebf6e2]";
      case "#feeae4":
        return "bg-[#feeae4]";
      default:
        break;
    }
  };
  const titleColor = () => {
    switch (text_button_bg) {
      case "#0052FF":
        return "text-[#0052FF]";
      case "#FF444A":
        return "text-[#FF444A]";
      case "#79C23F":
        return "text-[#79C23F]";
      case "#F87147":
        return "text-[#F87147]";
      default:
        break;
    }
  };
  const categoryColor = () => {
    switch (category_bg) {
      case "#aec7ff":
        return "bg-[#aec7ff]";
      case "#ffc4c5":
        return "bg-[#ffc4c5]";
      case "#d4ecc2":
        return "bg-[#d4ecc2]";
      case "#fdd2c4":
        return "bg-[#fdd2c4]";
      default:
        break;
    }
  };
  const btnColor = () => {
    switch (text_button_bg) {
      case "#0052FF":
        return "bg-[#0052FF]";
      case "#FF444A":
        return "bg-[#FF444A]";
      case "#79C23F":
        return "bg-[#79C23F]";
      case "#F87147":
        return "bg-[#F87147]";
      default:
        break;
    }
  };
  return (
    <div>
      <div className={`${bgColor()} flex rounded-xl`}>
        <div className="w-80">
          <img
            className="w-full rounded-l-xl h-full object-cover"
            src={picture}
            alt={`Image Of ${title}`}
          />
        </div>
        <div className="p-7">
          <h4
            className={`text-sm font-medium py-1 mb-3 px-3 inline-block rounded ${titleColor()} ${categoryColor()}`}
          >
            {category}
          </h4>
          <h2 className="text-2xl font-semibold text-[#0B0B0B] mb-2">
            {title}
          </h2>
          <h5 className={`text-base font-semibold mb-5 ${titleColor()}`}>
            ${donate}.00
          </h5>
          <Link to={`/donation/${id}`}>
            <button
              className={`text-lg rounded-lg text-white font-semibold py-3 px-5 ${btnColor()}`}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SavedDonatedCard.propTypes = {
  savedData: PropTypes.object,
};

export default SavedDonatedCard;
