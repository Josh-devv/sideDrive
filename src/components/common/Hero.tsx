import React from "react";
import { Button } from "../ui/button";
import f2 from "@/assets/f2.png";
import Image from "next/image";
import { Search } from "lucide-react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-screen relative pt-25 flex justify-center items-center">
      <div className="w-[95%]  relative p-5 h-creen flex text-black font-sans bg-white justify-start">
        <div className="flex w-[50%] flex-col py-8 justify-start items-start">
          <h4 className="text-black w-[95%] text-start text-[4vw] font-extrabold">
            The Largest Luxury Car Rental Marketplace
          </h4>
          <p className="text-start text-[15px] font-mono w-full">
Our team offering you a wide selection of high-end cars for rent
          </p>

          <div className="flex py-5 justify-start w-full">
            {" "}
            <Button variant="outline" className="bg-black text-white">
              Explore all cars
            </Button>
            <Button className="bg-black mx-3 text-white ">
              <Search />
            </Button>
          </div>
        </div>

        <div className="reltive flex justify-end">
        <div
          style={{
            
            
          }}
          className="rounded-full  w-[350px] h-[350px] top-[-10%]   bg-linear-to-t bg-linear-t from-black-50 to-gray-400 absolute flex justify-center   border-[50%] "
        >
          <div className="flex flex-col">
          <p className="text-[1.5vw] pt-12 font-bold font-mono text-white">Ferarri 488 GTB</p>
          <p className="text-[15px] text-white justify-end">Rent from $599.99</p>            
          </div>

        </div>

        <div className="abolute z-50">
          <Image alt="" src={f2} className="z-50" />
        </div>          
        </div>

      </div>
    </div>
  );
};

export default Hero;
