export const metadata = {
  title: "About Hictros",
  description:
    "Hictros is an emerging electronics company committed to redefining the electronics industry.",
};

const page = () => {
  return (
    <div className="grid w-full min-h-[60vh]  place-items-center ">
      <div className="grid w-full p-3 bg-gray-700 rounded-lg md:p-10 md:10/12 lg:w-8/12 bg-opacity-60 place-items-center ">
        <div className="pb-10 text-3xl font-bold md:text-4xl ">About Us</div>
        <p className="text-lg md:text-2xl ">
          Hictros is an emerging electronics company committed to redefining the
          electronics industry. We &apos;re dedicated to innovation, quality,
          and sustainability. Our team is driven by a passion for pushing
          boundaries and creating cutting-edge solutions that enhance your daily
          life. Join us in shaping the future of electronics.
        </p>
      </div>
    </div>
  );
};

export default page;
