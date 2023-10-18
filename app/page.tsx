import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full py-5 font-mono text-sm ">
      <div className="flex gap-32 justify-center w-full h-[50vh] py-10">
        <div className="grid items-center pl-10">
          <div>
            <div className="text-6xl font-bold text-blue-500">Precision</div>
            <div className="my-5 text-4xl font-bold ">in every circuit</div>
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
      <div className="flex w-full gap-32 justify-center h-[50vh] py-10">
        <div className="">
          <Image
            src="/images/img2.jpg"
            alt="Hictros Logo"
            className="w-full "
            width={500}
            height={100}
          />
        </div>
        <div className="grid items-center pl-10">
          <div>
            <div className="text-6xl font-bold text-blue-500">
              Excellence in
            </div>
            <div className="my-5 text-4xl font-bold ">
              {" "}
              Every Microcontroller Solution.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
