import Carousel from "../../components/carousel";
import data from "@/data";
import Image from "next/image";
import AboutUs from "../about";
import Division from "../division";
import { Post } from "../post";
import ContactUs from "../contactus";

export function HomeContent() {
  return (
    <div className="bg-background space-y-10 md:space-y-16">
      {/* CAROUSEL */}
      <Carousel>
        {data.carousel.map((data, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={data.image}
              alt={`Slide ${data.id}`}
              priority={index === 0}
              className="object-cover items-center h-screen"
            />
            <div className="absolute pointer-events-none bg-black/40 space-y-2 text-center text-background/60 text-3xl md:text-4xl lg:text-6xl inset-0 flex flex-col justify-center mx-auto font-stardos">
              NEVER ENDING BROTHERHOOD
            </div>
          </div>
        ))}
      </Carousel>

      {/* ABOUT US */}
      <AboutUs />

      {/* BACKGROUND SEPARATOR */}
      <section className="mx-auto max-w-full relative">
        <div className="background-caving1 bg-cover bg-center bg-no-repeat h-screen relative bg-fixed ios-bg-fix">
          <div className="mx-auto text-center h-screen bg-black/50">
            <div className="pt-96 md:pt-120 font-normal mx-auto tracking-wider mb-4 p-4 text-lg text-background">
              `The cave you fear to enter holds the treasure you seek.`
            </div>
            <p className="text-lg tracking-wider font-bold text-light-orange text-center mb-6">
              - Joseph Campbell -
            </p>
          </div>
        </div>
        <svg
          className="absolute -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F7F5"
            fillOpacity="1"
            d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F7F5"
            fillOpacity="0.7"
            d="M0,290L40,268C100,236,220,172,340,171.3C490,171,600,213,920,188.7C440,254,860,192,960,165.3C1000,158,1120,129,1300,86.7L1640,25L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute  -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F7F5"
            fillOpacity="0.5"
            d="M0,260L20,248C80,216,200,152,330,151.3C540,141,650,213,1020,208.7C840,244,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* DIVISION */}
      <Division />

      {/* BACKGROUND SEPARATOR */}
      <section className="mx-auto max-w-full relative">
        <div className="background-mount1 bg-cover bg-center bg-no-repeat h-screen relative bg-fixed ios-bg-fix">
          <div className="mx-auto text-center h-screen bg-black/40">
            <div className="pt-96 md:pt-120 font-normal mx-auto tracking-wider mb-4 p-4 text-lg text-background">
              `A journey of a thousand miles begins with a single step.`
            </div>
            <p className="text-lg tracking-wider font-bold text-light-orange text-center mb-6">
              - Lao Tzu -
            </p>
          </div>
        </div>
        <svg
          className="absolute -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F7F5"
            fillOpacity="1"
            d="M0,320L60,288C120,256,240,192,360,181.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F7F5"
            fillOpacity="0.7"
            d="M0,290L40,268C100,236,220,172,340,171.3C490,171,600,213,920,188.7C440,254,860,192,960,165.3C1000,158,1120,129,1300,86.7L1640,25L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute  -top-1 w-full h-auto rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F7F7F5"
            fillOpacity="0.5"
            d="M0,260L20,248C80,216,200,152,330,151.3C540,141,650,213,1020,208.7C840,244,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* DIVISION */}
      <Post />

      {/* DIVISION */}
      <ContactUs />
    </div>
  );
}
