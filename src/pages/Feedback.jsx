import { Text, Image, Avatar } from "@chakra-ui/react";

const Feedback = () => {
  return (
    <div className="p-10 px-20">
      <div className="w-96">
        <Text fontSize="4xl" className="font-semibold">
          Satisfied Audience Are Our Best Ads
        </Text>
      </div>

      <div className="flex gap-10 w-full mt-10">
        <div className="w-full">
          <Image
            boxSize="60px"
            src="https://img.icons8.com/color/96/quote-left.png"
            alt="scale"
            className="mt-2"
          />
          <Text fontSize="xl">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            omnis soluta enim laborum harum quisquam cum hic consequuntur "
          </Text>
          <hr className="mt-5 mb-5" />
          <div className="flex gap-3">
            <Avatar name="Mentor" src="https://bit.ly/sage-adebayo" />
            <div className="flex flex-col">
              <span className="text-black text-sm">Mentors</span>
              <span className="text-gray-400 text-sm">@JohnDoe</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            boxSize="60px"
            src="https://img.icons8.com/color/96/quote-left.png"
            alt="scale"
            className="mt-2"
          />
          <Text fontSize="xl">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            omnis soluta enim laborum harum quisquam cum hic consequuntur "
          </Text>
          <hr className="mt-5 mb-5" />
          <div className="flex gap-3">
            <Avatar name="Mentor" src="https://bit.ly/sage-adebayo" />
            <div className="flex flex-col">
              <span className="text-black text-sm">Mentors</span>
              <span className="text-gray-400 text-sm">@JohnDoe</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            boxSize="60px"
            src="https://img.icons8.com/color/96/quote-left.png"
            alt="scale"
            className="mt-2"
          />
          <Text fontSize="xl">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            omnis soluta enim laborum harum quisquam cum hic consequuntur "
          </Text>
          <hr className="mt-5 mb-5" />
          <div className="flex gap-3">
            <Avatar name="Mentor" src="https://bit.ly/sage-adebayo" />
            <div className="flex flex-col">
              <span className="text-black text-sm">Mentors</span>
              <span className="text-gray-400 text-sm">@JohnDoe</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-32" />
    </div>
  );
};

export default Feedback;
