import PropTypes from "prop-types";

const DonationCard = ({ donate }) => {
  const { picture, title, category, category_bg, card_bg, text_button_bg } =
    donate;

    const bgColor = () => {
        switch (card_bg) {
            case '#d9e5ff':
               return 'bg-[#d9e5ff]'
            case '#ffe3e4':
               return 'bg-[#ffe3e4]'
            case '#ebf6e2':
               return 'bg-[#ebf6e2]'
            case '#feeae4':
               return 'bg-[#feeae4]'
            default:
                break;
        }
    }
    const titleColor = () => {
        switch (text_button_bg) {
            case '#0052FF':
               return 'text-[#0052FF]'
            case '#FF444A':
               return 'text-[#FF444A]'
            case '#79C23F':
               return 'text-[#79C23F]'
            case '#F87147':
               return 'text-[#F87147]'
            default:
                break;
        }
    }
    const categoryColor = () => {
        switch (category_bg) {
            case '#aec7ff':
               return 'bg-[#aec7ff]'
            case '#ffc4c5':
               return 'bg-[#ffc4c5]'
            case '#d4ecc2':
               return 'bg-[#d4ecc2]'
            case '#fdd2c4':
               return 'bg-[#fdd2c4]'
            default:
                break;
        }
    }
  return (
    <div className={`${bgColor()} card`}>
      <figure>
        <img
          src={picture}
          alt={`Image Of ${title}`}
        />
      </figure>
      <div className="p-6">
        <h4 className={`text-sm font-medium py-1 px-3 mb-3 inline-block rounded ${titleColor()} ${categoryColor()}`}>{category}</h4>
        <h2 className={`text-xl font-semibold ${titleColor()}`}>{title}</h2>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donate: PropTypes.object,
};

export default DonationCard;
