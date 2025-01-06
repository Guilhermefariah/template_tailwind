import { Button } from "../Button";
import { Heading } from "../Heading";

import IbmLogo from "../../assets/images/brands/image.png";
import TestimonialsPerson from "../../assets/images/testimonials/image.png";

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-[360px] md:max-w-[900px] mx-auto flex flex-col justify-center items-center gap-[80px] md:px-5 xl:px-0">
        
        <Heading type="h2" className="w-fit">
          Testimonials
        </Heading>

        <div className="flex flex-col py-4 justify-center items-center gap-11 md:gap-12">
          <img src={IbmLogo} alt="IBM" />

          <p className="text-center text-sm text-secondary-text font-bold w-full max-w-[280px] md:max-w-none md:text-2xl md:font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam,
            cupiditate autem!
          </p>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <img src={TestimonialsPerson} alt="Person" />

          <div>
            <p className="text-xs font-bold text-secondary-text">
              Organize across
            </p>
            <p className="text-sm text-black">Software development</p>
          </div>
        </div>

        <Button className="w-full max-w-[236px">More testimonials</Button>
      </div>
    </section>
  );
};
