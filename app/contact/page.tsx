import { Mail, MapPinIcon, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Hictros",
  description: "Precision in every circuit",
};

const page = () => {
  return (
    <div className="mb-10 min-h-[55vh] ">
      <div className="my-10 text-4xl font-semibold text-center ">
        {" "}
        Contact US
      </div>
      <div className="flex flex-col items-center justify-around w-full gap-10 md:flex-row ">
        <ContactInfo />
        <Map />
      </div>
    </div>
  );
};

export default page;

const Map = () => (
  <div className="w-full max-w-[600px]  ">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.3889616716806!2d77.6286111!3d12.946944400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzQ5LjAiTiA3N8KwMzcnNDMuMCJF!5e0!3m2!1sen!2sin!4v1697636536942!5m2!1sen!2sin"
      width="100%"
      height="300px"
      style={{ border: 0 }}
      className="h-[300px"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col gap-5 pt-10 pl-10 ">
    <div className="flex flex-col">
      <div className="mb-2 text-2xl">Office Location:</div>
      <div className="flex items-center gap-2">
        <MapPinIcon />
        <div>
          <div>Ejipura, Bengaluru</div>
          <div>India</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="mb-2 text-2xl">Call Us:</div>
      <div className="flex gap-2">
        <PhoneCall />
        <a href="tel:">+91 9778461774</a>
      </div>
    </div>
    <div className="flex flex-col">
      <div className="mb-2 text-2xl">Email Us:</div>
      <div className="flex gap-2">
        <Mail />
        <a href="mailto:info@hictros.com" target="_blank">
          info@hictros.com
        </a>
      </div>
    </div>
  </div>
);
