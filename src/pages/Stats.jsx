import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

const Stats = () => {
  return (
    <div className="mt-14 p-10 px-20 flex flex-col space-y-28">
      <div className="flex gap-10">
        <div className=" w-full">
          <div className="p-2 shadow-lg rounded-xl">
            <Image
              src="https://www.pikpng.com/pngl/b/424-4241160_our-global-network-world-map-red-png-clipart.png"
              alt="Dan Abramov"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center w-full">
          <Text fontSize="5xl" className="font-semibold">
            Globally recognized audience and speakers, professional networking
            and more
          </Text>
          <span className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor <br /> sit amet consectetur adipisicing elit.
          </span>
          <button className="place-self-start p-2 px-10 bg-blue-400 hover:bg-blue-600 text-white rounded-full font-semibold">
            Join Social Network
          </button>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5 justify-center w-full">
          <Text fontSize="5xl" className="font-semibold">
            Connect with one of our professional speakers and mentors on the
            seminars
          </Text>
          <span className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor <br /> sit amet consectetur adipisicing elit.
          </span>
          <button className="place-self-start p-2 px-10 bg-blue-400 hover:bg-blue-600 text-white rounded-full font-semibold">
            Connect with Mentor
          </button>
        </div>

        <div className="w-full">
          <div className="p-0 shadow-lg rounded-xl flex items-center justify-center">
            <Image
              src="https://www.pikpng.com/pngl/b/346-3467842_my-tampa-it-person-with-laptop-standing-clipart.png"
              alt="Dan Abramov"
              className=""
            />
          </div>
        </div>
      </div>
      <hr className="" />
    </div>
  );
};

export default Stats;
