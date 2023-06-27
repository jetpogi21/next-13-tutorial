//Generated by GeneratePageFile
import Image from "next/image";
import React from "react";
import LinkButton from "@/components/LinkButton";

const About: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 w-full max-w-screen-lg gap-20 px-4 mx-auto">
      {/* Page Header with image */}
      <div className="h-[250px] relative">
        <Image
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="background"
          className="object-cover grayscale -z-10"
          fill={true}
        />
        <div className="absolute bottom-0 p-2 m-5 font-bold text-white bg-green-500 opacity-90 -z-10">
          <h2 className="text-2xl">Digital Storytellers</h2>
          <p className="text-lg">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>
      {/* About details */}
      <div className="flex gap-20">
        <div className="flex flex-col flex-1 gap-5">
          <h1 className="text-4xl">Who are We?</h1>
          <p>
            Lorem ipsum dolor sit amet, pri fugit novum eleifend eu, purto tota
            ne per. Eam eu esse causae tacimates. Duis simul constituam cu vim,
            petentium necessitatibus ne mei. No audiam numquam iudicabit pro,
            ius cu quaeque graecis maluisset.
          </p>
          <p>
            Ei vix esse facete mnesarchum, cu sed movet melius voluptatum, sed
            et quaeque labores explicari. Quo nisl maiestatis eu. Esse augue
            definitiones an quo, ei quis latine instructior est. Ne esse prompta
            sed, insolens praesent ne duo. No has utinam adolescens
            delicatissimi, ea cum laboramus deterruisset, sed copiosae similique
            no. Usu vidit nonumy forensibus an.
          </p>
          <p>
            Ne sumo consul mei. Meliore postulant ne est, mucius delicata vel
            ea, ei vix quodsi tamquam. Ne sea sensibus molestiae tincidunt,
            simul legimus ea usu. No vix iudico urbanitas, dictas scriptorem ad
            sit, ius no munere similique.
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h1 className="text-4xl">What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet, pri fugit novum eleifend eu, purto tota
            ne per. Eam eu esse causae tacimates. Duis simul constituam cu vim,
            petentium necessitatibus ne mei. No audiam numquam iudicabit pro,
            ius cu quaeque graecis maluisset. Ei vix esse facete mnesarchum, cu
            sed movet melius voluptatum, sed et quaeque labores explicari. Quo
            nisl maiestatis eu.
          </p>
          <ul className="ml-5 list-disc">
            <li>Creative Illustrations</li>
            <li>Dynamic Websites</li>
            <li>Fast and Handy Mobile Apps</li>
          </ul>
          <LinkButton href="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
