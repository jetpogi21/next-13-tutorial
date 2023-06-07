import Image from "next/image";
import Hero from "public/hero.png";
import LinkButton from "../components/link-button/LinkButton";

export default function Home() {
  return (
    <div className="flex items-center gap-20">
      <div className="flex flex-col flex-1 gap-16">
        <h1 className="font-bold leading-tight text-transparent text-hero text-7xl bg-gradient-to-b bg-clip-text">
          Better design for your digital products.
        </h1>
        <p className="text-xl font-semibold">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <LinkButton href="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1">
        <Image
          src={Hero}
          alt="hero.png"
          className="object-cover animate-bounce-low"
        />
      </div>
    </div>
  );
}
