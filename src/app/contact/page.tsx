//Generated by GeneratePageFile
import Image from "next/image";
import React from "react";
import ContacImage from "public/contact.png";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center flex-1 w-full max-w-screen-lg gap-32 p-4 mx-auto">
      <h1 className="self-center text-5xl font-extrabold">
        Let's keep in touch
      </h1>
      <div className="flex gap-5">
        <div className="flex-1 relative h-[500px]">
          <Image
            src={ContacImage}
            alt="contact.png"
            fill={true}
            priority={true}
            className="object-contain animate-bounce-low -z-10"
          />
        </div>
        <form className="flex flex-col flex-1 gap-5 px-5">
          <input
            placeholder="name"
            className="p-3 bg-transparent border-4 border-solid placeholder:font-bold focus:outline-none dark:border-gray-500 border-slate-600"
          />
          <input
            placeholder="email"
            className="p-3 bg-transparent border-4 border-solid placeholder:font-bold dark:border-gray-500 border-slate-600 focus:outline-none"
          />
          <textarea
            placeholder="message"
            rows={8}
            className="p-3 bg-transparent border-4 border-solid resize-none placeholder:font-bold dark:border-gray-500 border-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-700 rounded-sm max-w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
