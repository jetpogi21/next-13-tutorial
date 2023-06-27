import Image from "next/image";
import Hero from "public/hero.png";
import LinkButton from "../components/LinkButton";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex items-center flex-1 max-w-screen-lg gap-20 px-16 mx-auto">
      <div className="flex flex-col flex-1 gap-16">
        <h1
          className={cn(
            "font-bold leading-tight bg-clip-text text-transparent text-7xl bg-gradient-to-b",
            "from-slate-900 to-green-950",
            "dark:from-green-500 dark:to-green-100"
          )}
        >
          Better design for your digital products.
        </h1>
        <p className="text-xl font-semibold">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <LinkButton href="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1 hidden lg:block">
        <Image
          src={Hero}
          alt="hero.png"
          className="object-cover custom-bounce"
        />
      </div>
    </div>
  );
}
