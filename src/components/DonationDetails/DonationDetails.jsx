import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert2";
import { saveToLocalStorage } from "../../utilities/localStorage";

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  const { id } = useParams();
  const getId = parseInt(id);
  const donation = donationDetails.find((donation) => donation.id === getId);
  const { picture, donate, title, description, text_button_bg } = donation;
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
  const handleSuccessMessage = () => {
    saveToLocalStorage(getId);
    swal.fire({
      title: "Donation Successfully Received!",
      text: "Thank You for Making a Positive Impact!",
      icon: "success",
      confirmButtonText: "Go Back",
      buttonsStyling: false,
    });
  };
  return (
    <div className="container mx-auto px-8 pt-12 pb-24">
      <div className="h-[700px] w-full relative mb-14">
        <img
          className=" h-full w-full object-cover rounded-xl"
          src={picture}
          alt={`Image Of: ${title}`}
        />
        <div className="absolute bottom-0 left-0 p-9 bg-black bg-opacity-50 w-full rounded-b-xl">
          <button
            onClick={handleSuccessMessage}
            className={`${btnColor()} text-xl font-semibold py-5 px-7 rounded-lg hover:bg-opacity-90 text-white`}
          >
            Donate ${donate}
          </button>
        </div>
      </div>
      <h2 className="text-[40px] text-[#0B0B0B] mb-6 font-bold">{title}</h2>
      <p className="text-base text-[#0b0b0bb3]">{description}</p>
    </div>
  );
};

export default DonationDetails;
