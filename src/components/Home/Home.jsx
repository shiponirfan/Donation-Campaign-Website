import { useState } from "react";
import Banner from "../Banner/Banner";
import DonationDisplayCard from "../DonationDisplayCard/DonationDisplayCard";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const handleSearchBtn = (inputValue) => {
    setSearchData(inputValue);
  };
  return (
    <div>
      <Banner handleSearchBtn={handleSearchBtn}></Banner>
      <DonationDisplayCard> searchData={searchData}</DonationDisplayCard>
    </div>
  );
};

export default Home;
