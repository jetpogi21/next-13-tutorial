//Generated by GeneratePageFile
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="h-[50px] flex items-center justify-between max-w-screen-lg w-full mx-auto px-4 text-xs">
      <div>©2023 Pradascus. All rights reserved.</div>
      <div className="flex gap-4 [&>*]:opacity-60 [&>*]:cursor-pointer -z-10">
        <Image src="/1.png" alt="facebook" height={15} width={15} />
        <Image src="/2.png" alt="instagram" height={15} width={15} />
        <Image src="/3.png" alt="twitter" height={15} width={15} />
        <Image src="/4.png" alt="youtube" height={15} width={15} />
      </div>
    </div>
  );
};

export default Footer;