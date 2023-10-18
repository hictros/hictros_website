import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full py-5 font-mono text-sm ">
      <div className="flex flex-col-reverse md:flex-row text-center gap-5 lg:gap-8 xl:gap-32 justify-center w-full h-[50vh] py-10">
        <div className="grid items-center lg:pl-10 ">
          <div>
            <div className="text-4xl font-bold text-blue-500 lg:text-6xl">
              Precision
            </div>
            <div className="my-5 text-2xl font-bold lg:text-4xl ">
              in every circuit
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/img1.jpg"
            alt="Hictros Logo"
            className="w-full"
            width={600}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-center gap-5 lg:gap-8 xl:gap-32 justify-center w-full h-[40vh] py-10">
        <div className="">
          <Image
            src="/images/img2.jpg"
            alt="Hictros Logo"
            className="w-full"
            width={500}
            height={100}
          />
        </div>
        <div className="grid items-center xl:pl-10">
          <div>
            <div className="text-4xl font-bold text-blue-500 lg:text-6xl">
              Excellence in
            </div>
            <div className="my-5 text-2xl font-bold lg:text-4xl ">
              Every Microcontroller Solution.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
