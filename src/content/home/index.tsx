import { GiMountainClimbing } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";
import Carousel from "../../components/carousel";
import data from "@/src/data/image";
import Image from "next/image";
import { cn } from "@/lib/utils";

const divisi = [
  {
    id: 1,
    division: "Gunung & Hutan",
    icon: <GiMountaintop className="size-8 mx-10" />,
    background: "background-mount2",
    description:
      "Fokus pada kegiatan pendakian gunung dan eksplorasi hutan.Mengadakan ekspedisi, pelatihan navigasi, dan survival di alam bebas.",
  },
  {
    id: 2,
    division: "Susur Gua",
    icon: <GiCaveEntrance className="size-8 mx-10" />,
    background: "background-caving4",
    description:
      "Mengadakan eksplorasi dan penelitian di gua-gua. Melatih teknik-teknik susur gua dan penanganan keadaan darurat di dalam gua.",
  },
  {
    id: 3,
    division: "Panjat Tebing",
    icon: <GiMountainClimbing className="size-8 mx-10" />,
    background: "background-climbing",
    description:
      "Mengembangkan keterampilan dalam olahraga panjat tebing. Melakukan pelatihan dan latihan rutin di dinding panjat tebing, baik alamiah maupun buatan.",
  },
  {
    id: 3,
    division: "Lingkungan Hidup",
    icon: <GiPineTree className="size-8 mx-10" />,
    background: "background-nature",
    description:
      "Mengadakan kegiatan yang berkaitan dengan pelestarian lingkungan. Melakukan kampanye lingkungan, penanaman pohon, dan kegiatan konservasi lainnya.",
  },
];

export function HomeContent() {
  return (
    <div>
      <Carousel>
        {data.carousel.map((data, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={data.image}
              alt={`Slide ${data.id}`}
              fill
              priority={index === 0}
              className="object-cover items-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </Carousel>
      <h1 className="absolute space-y-2 items-center tracking-widest text-white text-3xl md:text-4xl lg:text-6xl left-12 inset-0 flex flex-col justify-center font-bebas">
        NEVER ENDING BROTHERHOOD
      </h1>

      <section className="w-full flex flex-col bg-white p-12.5 mx-auto justify-center items-center">
        <div className="text-lg text-center md:text-2xl mt-10 tracking-wider font-extrabold text-orange-400">
          DIVISI
        </div>
        <p className="text-black text-md md:text-lg font-normal opacity-65 my-3 w-full md:w-1/2 md:my-5 mx-auto text-center">
          PASAINS memiliki empat divisi utama yang berfokus pada kegiatan
          pecinta alam, mulai dari pendakian gunung, susur gua
          <a className="italic"> (caving)</a>, panjat tebing
          <a className="italic"> (climbing)</a> serta lingkungan hidup untuk
          mengembangkan keterampilan dan kepedulian anggota terhadap alam.`
        </p>
        <div className="border border-light-orange w-32 mx-auto place-content-center"></div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 md:gap-6 mx-auto my-10 md:my-20">
          {divisi.map((data, index) => (
            <div
              key={index}
              className={cn(
                "background-mount2 h-115 md:h-130 md:w-90 bg-center bg-cover opacity-75 text-left mb-10 md:hover:scale-110",
                data.background,
              )}
            >
              <div className="py-32 md:py-40 text-white h-115 md:h-130 space-y-5 shadow-x bg-black/50">
                {data.icon}
                <h1 className="font-extrabold text-lg mx-10">
                  {data.division}
                </h1>
                <p className="tracking-wider w-60 text-sm md:text-md font-normal mx-10">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-full relative">
        <div className="background-caving2 bg-cover bg-center bg-no-repeat h-screen relative bg-fixed ios-bg-fix">
          <div className="mx-auto text-center h-screen bg-black/40">
            <div className="pt-96 md:pt-120 font-normal mx-auto tracking-wider mb-4 p-4 text-lg text-white">
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
            fill="#ffffff"
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
            fill="#ffffff"
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
            fill="#ffffff"
            fillOpacity="0.5"
            d="M0,260L20,248C80,216,200,152,330,151.3C540,141,650,213,1020,208.7C840,244,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}
