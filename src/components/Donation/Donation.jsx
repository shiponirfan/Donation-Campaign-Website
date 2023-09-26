import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../../utilities/localStorage";
import SavedDonatedCard from "../SavedDonatedCard/SavedDonatedCard";

const Donation = () => {
  const donations = useLoaderData();
  const [localData, setLocalData] = useState([]);
  const [sliceData, setSliceData] = useState(4);
  useEffect(() => {
    const getLocalData = getLocalStorageData();
    if (getLocalData.length > 0) {
      const donatedData = donations.filter((data) =>
        getLocalData.includes(data.id)
      );
      setLocalData(donatedData);
    }
  }, [donations]);
  const handleShowAll = () =>{
    setSliceData(localData.length);
  }
  return (
    <div className="pt-16 pb-24">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-6">
        {localData.slice(0, sliceData).map((savedData) => (
          <SavedDonatedCard
            key={savedData.id}
            savedData={savedData}
          ></SavedDonatedCard>
        ))}
      </div>
      <div className={`text-center ${localData.length > 4 ? localData.length === sliceData ? 'hidden' : '' : 'hidden'}`}>
        <button
        onClick={handleShowAll}
          className={`text-lg rounded-lg mt-10 text-white font-semibold py-4 px-7 hover:bg-green-700 bg-[#009444]`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
