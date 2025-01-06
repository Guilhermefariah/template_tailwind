import { Heading } from "../Heading";
import { Button } from "../Button";
import CalendarImage from "../../assets/images/features/image.png";

export const CalendarFeature = () => {
  return (
    <section className="bg-white py-[90px] px-5">
      <div className="w-full max-w-[400px] flex flex-col justify-center items-center mx-auto lg:flex-row lg:max-w-[1240px] lg:gap-[50px]">
        <div className="flex flex-col mb-[60px]">
          <Heading type="h2" className="text-center">
            Fatest way to manage your calendar
          </Heading>

          <Heading type="h4" className="mb-[60px] mt-4 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Heading>

          <Button>Try for free</Button>
        </div>

        <img src={CalendarImage} alt="Calendar" />
      </div>
    </section>
  );
};
