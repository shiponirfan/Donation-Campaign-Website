import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationDisplayCard = () => {
    const [donations, setDonations] = useState([]);
    useEffect(()=>{
        fetch('/donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])
    return (
        <div  className="container mx-auto px-8 py-24 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {
                donations.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
            }
        </div>
    );
};

export default DonationDisplayCard;