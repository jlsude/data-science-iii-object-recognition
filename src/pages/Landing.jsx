import { useNavigate } from "react-router-dom";
import predator from "../assets/predator-image.svg";
import TextCaraousel from "../components/TextCaraousel";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-dvh bg-background overflow-hidden relative px-7 py-4 sm:px-16
                grid grid-cols-5 grid-rows-6 gap-x-12 gap-y-5 
                md:grid-cols-2 md:grid-rows-5 
                lg:gap-x-32
            "
    >
      <div
        className="rounded-full absolute -top-10 -left-24 
                bg-primary blur-3xl w-[25rem] md:w-[40rem] h-auto aspect-square opacity-10"
      />

      <div
        className="rounded-full absolute -bottom-32 -right-10 
                bg-primary blur-3xl w-[30rem] h-auto aspect-square opacity-10"
      />

      <TextCaraousel className={"w-full h-[40px] z-10 mt-12 absolute"} />

      <div
        className="z-10 row-start-3 col-span-5 flex flex-col justify-between sm:justify-around
                md:row-start-2 md:col-span-1 md:col-end-2 md:justify-self-end
                lg:w-auto xl:w-[500px]
            "
      >
        <h1 className="font-semibold text-wrap">
          Mammal Species Classification
        </h1>
        <h3 className="text-left">
          A machine learning project that uses a Convolutional Neural Network
          (CNN) to identify 42 species of mammals.
        </h3>
      </div>

      <div
        className="z-10 flex justify-center items-end md:justify-start  md:items-start
                row-start-1 row-span-2 col-span-5 
                md:row-start-2 md:row-span-2 md:col-start-2 md:col-span-1
            "
      >
        <img
          src={predator}
          alt="Predator Image"
          className="w-[360px] md:w-[500px]"
        />
      </div>
      <div
        className="z-10 flex justify-center items-center sm:justify-end  md:justify-center md:items-end
                row-start-5 col-span-full sm:row-start-4 sm:col-span-2 
            "
      >
        <button
          onClick={() => {
            navigate("/analyze");
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Landing;
