import React from "react";
import Image from "next/image";
import Testimonial from "@/assets/images/testimonial-09.webp";
import Shopify from "@/assets/images/shopify.webp";

const Review = () => {
  return (
    <div className="h-150 bg-amber-50 px-40 pt-20">
      <div className="text-center">
        <h1 className=" text-4xl font-bold ">
          Trusted by leading brands <br /> and startups
        </h1>
        <p className=" text-xl pt-3"> Here’s what they say about us </p>
      </div>
      <div className="flex h-80 pt-10 gap-10">
        <div className="flex-1 bg-white rounded-2xl pt-8 pl-4">
          <h1 className=" text-lg font-bold pb-3">The support is Awesome</h1>
          <p>
            I really can recommend this theme, because its coded very well{" "}
            <br /> and with the Elementor page builder its really easy to build
            your <br />
            own website
          </p>

          <div className="flex  justify-between pt-10 h-25">
            <div className="flex gap-4">
              <Image src={Testimonial} alt="" className=" h-15 w-15" />

              <section className="">
                <h1>Salena Gomez</h1>
                <p>Developer at Shopify</p>
              </section>
            </div>

            <div>
              <Image src={Shopify} alt="" className=" pr-10 h-15 w-30" />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-2xl pt-8 pl-4">
          <h1 className=" text-lg font-bold pb-3">The support is Awesome</h1>
          <p>
            I really can recommend this theme, because its coded very well{" "}
            <br /> and with the Elementor page builder its really easy to build
            your <br />
            own website
          </p>
          <div className="flex  justify-between pt-10 h-25">
            <div className="flex gap-4">
              <Image src={Testimonial} alt="" className=" h-15 w-15" />

              <section className="">
                <h1>Salena Gomez</h1>
                <p>Developer at Shopify</p>
              </section>
            </div>

            <div>
              <Image src={Shopify} alt="" className=" pr-10 h-15 w-30" />
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Review;
