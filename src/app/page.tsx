// import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/Lamp";

import Navbar from "@/components/global/navbar";
import { CardContainer } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { SpotlightPreview } from "@/components/global/spotlight-header";
import { clients, products } from "@/lib/constant";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section>
        <SpotlightPreview />
      </section>
      <section className="h-screen w-full bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button size="lg" className="p-8 mb-8 md:mb-0 w-full sm:w-fit">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Explore
                  </span>
                </Button>

                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Schedule Stuff With Nizzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <section className="mt-[40rem]">
        <LampComponent />
      </section>
    </main>
  );
}
