import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="border border-gray-300 rounded-full p-4 px-10 shadow-lg">
      <div className="responsive-display">
        <div className="flex">
          <div className="flex gap-5 justify-center items-center">
            <div className="rounded-full bg-blue-400 p-1 px-2">
              <span className="font-semibold text-white">LOGO</span>
            </div>
            <Button colorScheme="black" variant="link">
              Explore
            </Button>
            <Button colorScheme="black" variant="link">
              Stats
            </Button>
            <Button colorScheme="black" variant="link">
              Resources
            </Button>
          </div>
          <div className="ml-auto flex gap-8 justify-center items-center">
            <button className="rounded-full px-4 p-2 bg-blue-400 text-white font-semibold">
              Visit Social Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
