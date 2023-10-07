import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { saveDonationDetails } from "../LocalStorage/LocalStorage";

const DonationDetails = () => {
    const donationDetails = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);

    const handleDonationDetails = () => {
        saveDonationDetails(idInt);
        toast('Thank you For your Donation..', {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const details = donationDetails.find(details => details.id === idInt)
    console.log(details);
    return (
        <div className="">


            <div className="relative">
                <img
                    src={details.image}
                    className="w-full h-[450px] object-cover"
                    alt=""
                />
                <div className="button absolute bottom-0 p-10 bg-opacity-60  bg-stone-700 w-full">
                    <button
                        onClick={handleDonationDetails}

                        className="btn text-white bg-pink-600 hovor:bg-pink-800"
                    >
                        Donate  ${details.price}
                    </button>
                    <ToastContainer />
                </div>
            </div>
            <div>
            </div>

            <div>
                <h2 className="my-9 text-4xl font-bold text-black">{details.title}</h2>
                <p className="my-9 text-base text-slate-500 font-normal">{details.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;