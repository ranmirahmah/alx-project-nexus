import Image from "next/image";
import heroImg from '@/assets/images/heroImg.svg'
import { CiSearch } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";




const Herosection = () => {
  return (
    <div className="h-170  bg-green-900 flex justify-center items-center p-20 pb-40 gap-[-10rem] ">
      <div className=" w-1/2 pb-1">
        <h1 className=" text-5xl text-amber-50  font-bold pb-10 pt-10 ">
            Find your dream job now
        </h1>
        <div className="p-4 bg-amber-50 rounded-full w-[36rem] flex items-center gap-4">
  
  {/* Search input */}
  <section className="flex items-center gap-2 flex-1 border-r pr-4">
    <CiSearch className="text-gray-400 text-2xl" />
    <input 
      type="text" 
      placeholder="Job title or Keyword" 
      className="outline-none w-full bg-transparent text-lg"
    />
  </section>

  {/* Location input */}
  <section className="flex items-center gap-2 flex-1 border-r pr-4">
    <MdMyLocation className="text-gray-400 text-2xl" />
    <input 
      type="text" 
      placeholder="All Cities" 
      className="outline-none w-full bg-transparent text-lg"
    />
  </section>

  {/* Button */}
  <section>
    <button 
      type="submit" 
      className="bg-green-900 px-4 py-2 pl-7 pr-7 rounded-full text-amber-50 text-lg"
    >
      Search
    </button>
  </section>

</div>

        <h1 className="text-lg pt-3 text-amber-50 font-bold">Popular Searches: Microservices Software Engineer</h1>

        <div>
          <h1 className="pt-20 text-amber-50 text-lg font-bold"> 
            5k+ candidates get job
          </h1>
        </div>
      </div>

      <div className="h-full mt-10 ">
        <Image src={heroImg} alt=""  className="float" />
      </div>
    </div>
  );
};

export default Herosection;
