import data from "@/data";
import { cn } from "@/lib/utils";

const Division = () => {
  return (
    <section className="w-full flex flex-col  mx-auto justify-center items-center">
      <div className="font-stardos text-5xl md:text-7xl lg:text-8xl leading-none text-center tracking-widest text-light-orange">
        DIVISI
      </div>
      <p className="text-black md:border md:border-gray-300 p-4 text-md md:text-lg font-normal opacity-65 mt-6 mb-4 md:mt-8 md:mb-6 w-full md:w-1/2 mx-auto text-center">
        PASAINS memiliki empat divisi utama yang berfokus pada kegiatan pecinta
        alam, mulai dari pendakian gunung, susur gua
        <a className="italic"> (caving)</a>, panjat tebing
        <a className="italic"> (climbing)</a> serta lingkungan hidup untuk
        mengembangkan keterampilan dan kepedulian anggota terhadap alam.`
      </p>
      <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid place-items-center gap-4 md:gap-8 my-10 px-4 md:px-6">
        {data.division.map((data, index) => (
          <div
            key={index}
            className={cn(
              "background-mount2 h-115 md:h-130 w-full max-w-90 bg-center bg-cover opacity-75 rounded-2xl text-left",
              data.background,
            )}
          >
            <div className="py-32 md:py-40 text-white h-115 md:h-130 space-y-5 shadow-x bg-black/50 rounded-2xl">
              {data.icon}
              <h1 className="font-extrabold text-lg mx-10">{data.division}</h1>
              <p className="tracking-wider px-10 text-sm md:text-md font-normal">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Division;
