import React from "react";
import { Search, Calendar, Car } from "lucide-react";

type Props = {};

const Step = (props: Props) => {
  return (
    <div className="container w-screen pb-10 pt-0 font-poppins flex-col flex justify-center items-center">
      <div className="container w-[95%] flex-col text-center relative  flex text-black font-sans bg-white jfy-start">
        <div>
          <p className="text-[15px] text-gray-400">How It Works</p>
          <p className="text-[35px] font-extrabold py-2">Follow Three Easy Steps</p>
        </div>

        <div className="flex pt-10">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-gray-400 rounded-md p-5 mb-5">
              <Search className="text-white" />
            </div>
            <p className="text-black text-[20px] font-bold">Search For a Car</p>
            <p className="text-gray-400 w-[80%] font-poppins text-[13px]">
              Know your purchase: Tools to calculate budget, financing and more
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="bg-gray-400 rounded-md p-5 mb-5">
              <Calendar className="text-white"/>
            </div>
            <p className="text-black text-[20px] font-bold">Select Pick-up Date</p>
            <p className="text-gray-400 w-[80%] font-poppins text-[13px]">
              Know before you buy: Honest reviews, rankings and video test-drives
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="bg-gray-400 rounded-md p-5 mb-5">
              <Car  className="text-white"/>
            </div>
            <p className="text-black text-[20px] font-bold">Book Your Car</p>
            <p className="text-gray-400 w-[80%] font-poppins text-[13px]">
              Know your offer: Deal ratings on new and used listings near you
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Step;
