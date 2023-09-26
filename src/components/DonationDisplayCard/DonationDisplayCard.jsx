import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import PropTypes from "prop-types";

const DonationDisplayCard = (props) => {
  const [donations, setDonations] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const searchText = props.children[1];

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  useEffect(() => {
    if (searchText) {
      const lowerCaseSearchText = searchText.toLowerCase();
      const filterCategory = donations.filter((category) =>
        category.category.toLowerCase().includes(lowerCaseSearchText)
      );
      setSearchValue(filterCategory);
    } else {
      setSearchValue(donations);
    }
  }, [searchText, donations]);

  return (
    <div className="container mx-auto px-8 py-24 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
      {searchValue.map((donate) => (
        <DonationCard key={donate.id} donate={donate}></DonationCard>
      ))}
    </div>
  );
};

DonationDisplayCard.propTypes = {
  children: PropTypes.array,
};

export default DonationDisplayCard;
