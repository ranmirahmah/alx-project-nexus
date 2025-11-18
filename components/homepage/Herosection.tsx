import React from "react";

const Herosection = () => {
  return (
    <div className="h-screen bg-green-600 flex justify-around items-center gap-40">
      <div>
        <h1 className=" text-4xl text-amber-50  font-extrabold pb-10">
            Find your dream job now
        </h1>
        <div className=" border-2 px-8 py-8 bg-amber-50 rounded-full">
            <input type="text"/>
            <input type="text"/>
            <button type="submit">Search</button>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Herosection;
