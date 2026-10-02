import Image from "next/image";
import data from "@/data/index";

export function Footer() {
  return (
    <div className="bg-bold-green py-3 md:px-6 px-4 max-w-full absoulte left-0 right-0 bottom-0 container mx-auto font-light">
      <div className="flex space-x-1 justify-between max-[600px]:flex-wrap">
        <div className="flex flex-row items-center space-x-2.5">
          <Image
            src={data.logomodern}
            alt="logopasains"
            className=" object-contain items-center"
            width={64}
          />
          <div className="text-background text-sm">
            <p>
              Jalan Sains, Sekip Utara PO BOX 21
              <br />
              Bulaksumur, Mlati, Sleman, Daerah Istimewa Yogyakarta, 55281
              <br />
              <a
                href="mailto:pasains.mipa@mail.ugm.ac.id"
                className="font-normal"
                target="__blank"
              >
                pasains.mipa@mail.ugm.ac.id
              </a>
            </p>
          </div>
        </div>
        <div className="text-background">
          <p className="text-sm">Follow Us</p>
          <div className="flex flex-row space-x-2 my-3">
            {data.mediaSocials.map((media) => {
              return (
                <div
                  key={media.link}
                  className="rounded-full border p-1 hover:border-black hover:scale-150"
                >
                  <a href={media.link} target="__blank">
                    {media.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-[10px] tracking-[0.4em] text-center uppercase text-background/60">
        PASAINS &copy; {new Date().getFullYear()} &mdash; Pecinta Alam
        FMIPA UGM
      </p>
    </div>
  );
}
