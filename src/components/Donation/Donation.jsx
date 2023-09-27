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
    <div>
      {
        localData.length ? <>
              <div className="lg:pt-16 md:pt-6 pb-24">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-6">
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
        </> : <>
          <div className="container mx-auto flex flex-col px-4 text-center justify-center items-center">
            <img className="w-96" src="./charity.png" alt="" />
            <h2 className="md:text-2xl text-lg font-bold">Explore Your Donation History Here</h2>
          </div>
        </>
      }
    </div>
  );
};

export default Donation;
