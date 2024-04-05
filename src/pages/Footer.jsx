import { Text, IconButton } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <div className="mt-10 bg-blue-800 w-full h-full">
      <div className="clamp-container">
        <div className="p-28 flex gap-20">
          <div className="w-full flex flex-col gap-5">
            <Text fontSize="4xl" className=" text-white">
              Newsletter Will Be For You <br /> To Get Updated With Us
            </Text>
            <span className="text-sm text-gray-200 text-opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
              quos, explicabo <br /> voluptate eveniet illo id fugit odit sint
              aliquam facilis suscipit accusantium fuga,
            </span>
            <hr className="opacity-70 w-[30rem] mt-10" />
            <div className="flex gap-5">
              <div className="flex gap-3 items-center">
                <IconButton
                  isRound={true}
                  variant="outline"
                  colorScheme="linkedin"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<SunIcon />}
                />
                <span className="text-sm text-white">Lorem</span>
              </div>
              <div className="flex gap-3 items-center">
                <IconButton
                  isRound={true}
                  variant="outline"
                  colorScheme="linkedin"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<SunIcon />}
                />
                <span className="text-sm text-white">Lorem</span>
              </div>
              <div className="flex gap-3 items-center">
                <IconButton
                  isRound={true}
                  variant="outline"
                  colorScheme="linkedin"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<SunIcon />}
                />
                <span className="text-sm text-white">Lorem</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <Text fontSize="5xl" className=" text-white">
              Lorem ipsum dolor sit amet
            </Text>
            <span className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
              quos, explicabo voluptate eveniet illo id fugit odit sint aliquam
              facilis suscipit accusantium fuga
            </span>
            <span className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
              quos, explicabo voluptate eveniet illo id fugit odit sint aliquam
              facilis suscipit accusantium fuga
            </span>
            <span className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut
              quos, explicabo voluptate eveniet illo id fugit odit sint aliquam
              facilis suscipit accusantium fuga
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
