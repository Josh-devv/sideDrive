import { Header } from "@/components/layout/Header";
import Hero from "@/components/common/Hero";
import Step from "@/components/layout/Step";
import CarLisitng from "@/components/layout/CarListing";


export default function Home() {

  return (
    <div className="flex w-full justify-center">
      <main className=" ">
        <Header />

        <Hero />

        <Step />
       
      </main>
    </div>
  );
}
