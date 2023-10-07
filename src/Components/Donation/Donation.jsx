import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationDetails } from "../LocalStorage/LocalStorage";
import DonatedCard from "./DonatedCard";

const Donation = () => {
    const donations = useLoaderData();
    const [donation, setDonation] = useState([]);
    const [donationDataLimit, setDonationDataLimit] = useState(4);

    const handleShowAllButton = () => {
        setDonationDataLimit(donation.length);
    }

    useEffect(() => {
        const storedDonationIds = getStoredDonationDetails();
        if (donations.length > 0) {
            const donationId = [];
            for (const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id === id)
                if (donation) {
                    donationId.push(donation);
                }
            }
            setDonation(donationId);
        }
    }, [])

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-14">
                {
                    donation.slice(0, donationDataLimit).map(donated => <DonatedCard key={donated.id} donated={donated}></DonatedCard>)
                }
            </div>

            <div>
                {
                    donationDataLimit < donation.length && (
                        <div className="flex justify-center">
                            <button onClick={handleShowAllButton} className="btn bg-green-600 text-white hover:bg-green-900">Show all</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Donation;