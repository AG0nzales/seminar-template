import { AspectRatio, Image, Text, Avatar, Input } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className=" w-full mt-10 rounded-3xl shadow-lg">
      <div className="flex border border-gray-300 rounded-3xl  overflow-hidden">
        <div className="w-full h-full">
          {/* <Image
            src="https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
          /> */}
          <AspectRatio maxH="600px" ratio={1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/7x3Dz7idqCo"
              allowFullScreen
            />
          </AspectRatio>
        </div>

        <div className="w-full p-10">
          <div className="flex flex-col h-full gap-10">
            <div className="self-start w-full">
              <button className="rounded-full px-4 p-1 border border-gray-100 shadow-lg hover:bg-gray-100">
                <span className="font-semibold text-black">Featured</span>
              </button>
            </div>
            <div className="self-center h-full w-full flex items-center">
              <div className="">
                <div className="flex items-center gap-2">
                  <Text fontSize="5xl" className="font-semibold">
                    Real Estate Seminar
                  </Text>
                  <span className="mt-4">
                    <img
                      width="42"
                      height="42"
                      src="https://img.icons8.com/color/48/verified-badge.png"
                      alt="verified-badge"
                    />
                  </span>
                </div>
                <span className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium dolore eum ducimus <br />
                  consectetur, mollitia, impedit obcaecati delectus sit repellat
                  suscipit, corrupti laboriosam
                  <br /> ratione. Aut commodi earum ea accusamus eos impedit!
                </span>
                <div className="mt-5 flex gap-3 w-[30rem] items-center">
                  <Input placeholder="sample@email.com" />
                  <button className="rounded-lg border border-gray-200 p-1 px-4 shadow-lg hover:bg-gray-300 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="flex space-x-32">
                <div className="flex gap-3">
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="https://img.icons8.com/stamp/96/user.png"
                    alt="Dan Abramov"
                    className="p-2 border border-gray-300 border-solid shadow-lg rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">Subscribers</span>
                    <span className="font-semibold text-lg">100</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="https://img.icons8.com/ios-glyphs/30/homeadvisor.png"
                    alt="Dan Abramov"
                    className="p-2 border border-gray-300 border-solid shadow-lg rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">RealEstates</span>
                    <span className="text-gray-400 text-sm">@RealEstates</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar name="Mentor" src="https://bit.ly/sage-adebayo" />
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">Mentors</span>
                    <span className="text-gray-400 text-sm">@JohnDoe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
