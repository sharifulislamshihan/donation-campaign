import { useEffect } from "react";
import { useState } from "react";
import BannerCard from "./BannerCard";

const BannerSearch = () => {

    const[donateCard, setDonateCard] = useState([]);

    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setDonateCard(data));
        console.log(setDonateCard);
    },[])

    return (
        <div className="my-20">
            <div className="h-40 my-24">
                <h1 className="text-5xl font-bold text-center flex justify-center mt-14 ">I Grow By Helping People In Need</h1>

                <div className=" flex justify-center my-10">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search here…" className="input input-bordered" />
                            <button className="btn btn-square px-14 font-normal text-white bg-red-600 hover:bg-red-800">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        donateCard.map(donate => <BannerCard key={donate.id} donate={donate}></BannerCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerSearch;