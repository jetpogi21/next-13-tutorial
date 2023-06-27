//Generated by GeneratePageFile
import Image from "next/image";
import React from "react";
import Illustrations from "public/illustration.png";
import Websites from "public/websites.jpg";
import Apps from "public/apps.jpg";
import Link from "next/link";

const Portfolio: React.FC = () => {
  const portfolios = [
    {
      id: 1,
      src: Illustrations,
      alt: "Illustrations",
      href: "illustrations",
    },
    {
      id: 2,
      src: Websites,
      alt: "Websites",
      href: "websites",
    },
    {
      id: 3,
      src: Apps,
      href: "applications",
      alt: "Applications",
    },
  ];

  return (
    <div className="flex flex-col flex-1 w-full max-w-screen-lg gap-5 px-4 mx-auto">
      <h1 className="text-4xl font-extrabold">Our Works</h1>
      <h2 className="text-lg font-bold">Choose a gallery</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        {portfolios.map((item) => (
          <Link
            href={`/portfolio/${item.href}`}
            key={item.id}
            className="relative z-0 h-[200px] md:h-[600px] w-full md:w-[300px] border-2 border-white hover:cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill={true}
              className="object-cover brightness-50 hover:brightness-90"
              priority
              sizes="(max-width: 768px) 100vw"
            />
            <h2 className="absolute text-2xl font-extrabold right-5 bottom-5 text-slate-50">
              {item.alt}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
