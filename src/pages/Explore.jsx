import { Text, Image } from "@chakra-ui/react";

const Explore = () => {
  return (
    <div className="mt-14 p-10 px-20">
      <div className="flex space-x-52 justify-center">
        <div className="flex flex-col justify-center items-center">
          <Text fontSize="5xl" className="font-semibold">
            10k
          </Text>
          <span className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur,
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Text fontSize="5xl" className="font-semibold">
            10k
          </Text>
          <span className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur,
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Text fontSize="5xl" className="font-semibold">
            10k
          </Text>
          <span className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur,
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Text fontSize="5xl" className="font-semibold">
            10k
          </Text>
          <span className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur,
          </span>
        </div>
      </div>
      <hr className="mt-14" />
      <div className="mt-14 flex gap-20">
        <div className="">
          <div className="flex gap-5">
            <Text fontSize="5xl" className="font-semibold">
              Upskill your <br /> capabilities
            </Text>
            <Image
              boxSize="60px"
              src="https://img.icons8.com/cotton/64/graph--v1.png"
              alt="scale"
              className="mt-2"
            />
          </div>
          <span className="text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="flex space-x-20">
          <div className="flex flex-col gap-5 w-52">
            <Image
              boxSize="60px"
              src="https://img.icons8.com/office/80/learning.png"
              alt="scale"
              className="mt-2"
            />
            <Text fontSize="2xl" className="font-semibold">
              Lots of Learning
            </Text>
            <span className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className="flex flex-col gap-5 w-64">
            <Image
              boxSize="60px"
              src="https://img.icons8.com/color/96/chat--v1.png"
              alt="scale"
              className="mt-2"
            />
            <Text fontSize="2xl" className="font-semibold">
              Converse fluently
            </Text>
            <span className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className="flex flex-col gap-5 w-52">
            <Image
              boxSize="60px"
              src="https://img.icons8.com/ultraviolet/80/handshake.png"
              alt="scale"
              className="mt-2"
            />
            <Text fontSize="2xl" className="font-semibold">
              Connect people
            </Text>
            <span className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
