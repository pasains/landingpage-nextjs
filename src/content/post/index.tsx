import data from "@/src/data/image";
import Image from "next/image";
import Link from "next/link";

export function Post() {
  /* const { totalPages, nextPage, prevPage, title, page } = useHome();
   * */
  return (
    <div>
      <div className="text-lg text-center md:text-2xl mt-20 tracking-wider font-extrabold text-light-orange ">
        PUBLIKASI
      </div>
      <p className="text-md md:text-lg font-normal opacity-65 my-3 w-full p-4 md:w-1/2 md:my-5 mx-auto text-center">
        Yuk, lihat update terbaru dari kegiatan PASAINS !
      </p>
      <div className="border border-orange-400 w-32 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-8 md:gap-12 justify-center mx-auto container w-fit my-10 md:my-20">
        <Link href={`/post/post1`}>
          <div className="w-80 bg-emerald-950 bg-opacity-65 text-white transition hover:scale-110 shadow-2xl">
            <Image
              src={data.post1}
              alt="monyet"
              className="h-70 w-full object-cover"
            />
            <div className="text-left p-4 h-77.5">
              <h2 className="text-md font-semibold uppercase">
                Obati Keresahan Warga: Mahasiswa FMIPA UGM Ciptakan Alat
                Pengusir Hama Monyet Ekor Panjang
              </h2>
              <h1 className="text-sm font-extralight">POSTED ON JUNE 2024</h1>
              <p className="text-md font-normal my-4 mb:my-8 text-justify">
                Kehadiran koloni monyet ekor panjang di bagian selatan Daerah
                Istimewa Yogyakarta sudah kerap kali meresahkan warga. Spesies
                yang naik tingkat menjadi satwa yang dilin.....
                <button className="text-orange-400 transition duration-300 hover:text-black">
                  {"baca selengkapnya"}
                </button>
              </p>
            </div>
          </div>
        </Link>
        <Link href={`/post/post2`}>
          <div className="w-80 bg-emerald-950 bg-opacity-65 text-white transition hover:scale-110 shadow-2xl">
            <Image
              src={data.post2}
              alt="monyet"
              className="h-70 w-full object-cover"
            />
            <div className="text-left p-4 h-77.5">
              <h2 className="text-md font-semibold uppercase">
                PASAINS FMIPA UGM Lakukan Penelitian Pembuatan Peta di Jalur
                Pendakian Gunung Sumbing
              </h2>
              <h1 className="text-sm font-extralight">
                POSTED ON NOVEMBER 2023
              </h1>
              <p className="text-md font-normal my-4 mb:my-8 text-justify">
                Jumlah pendaki gunung dari tahun ke tahun terus meningkat. Meski
                demikian kegiatan mendaki gunung tetap merupakan kegiatan yang
                berbahaya. Salah satu gunung yang menjadi tar....
                <button className="text-orange-400 transition duration-300 hover:text-black">
                  {"baca selengkapnya"}
                </button>
              </p>
            </div>
          </div>
        </Link>
        <Link href={`/post/post3`}>
          <div className="w-80 bg-emerald-950 bg-opacity-65 text-white transition hover:scale-110 shadow-2xl">
            <Image
              src={data.post3}
              alt="monyet"
              className="h-70 w-full object-cover"
            />
            <div className="text-left p-4 h-77.5">
              <h2 className="text-md font-semibold uppercase">
                Menguak Budaya dan Mitos Gunung Lawu: Setitik Kisah yang Tak
                Pernah Pudar
              </h2>
              <h1 className="text-sm font-extralight">
                POSTED ON DECEMBER 2017
              </h1>
              <p className="text-md font-normal my-4 mb:my-8 text-justify">
                Indonesia memiliki banyak ragam suku dan kebudayaan dimana
                didalamnya terdapat mitos-mitos yang beredar dimasyarakat luas
                yang meyebar dari mulut-kemulut. Kami tim pengembaran PASAINS
                FMIPA UGM, mela.....
                <button className="text-orange-400 transition duration-300 hover:text-black">
                  {" baca selengkapnya"}
                </button>
              </p>
            </div>
          </div>
        </Link>
        <Link href={`/post/post4`}>
          <div className="w-80 bg-emerald-950 bg-opacity-65 text-white transition hover:scale-110 shadow-2xl">
            <Image
              src={data.post4}
              alt="monyet"
              className="h-70 w-full object-cover"
            />
            <div className="text-left p-4 h-77.5">
              <h2 className="text-md font-semibold uppercase">
                Menilik Basecamp Pendakian Gunung Lawu via Cemoro Sewu
              </h2>
              <h1 className="text-sm font-extralight">
                POSTED ON DECEMBER 2017
              </h1>
              <p className="text-md font-normal my-4 mb:my-8 text-justify">
                Dinginnya udara pagi yang menembus kulit menemani menyambut
                mentari. Panorama indah dari basecamp Cemoro Sewu memanjakan
                mata yang mamandangnya. Keindahan yang tak bisa dilewatkan oleh
                siapapun termasuk para pendaki Gunung Lawu.....
                <button className="text-orange-400 md:duration-300 md:hover:text-black">
                  {"baca selengkapnya"}
                </button>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
