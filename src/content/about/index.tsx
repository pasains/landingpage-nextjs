import Image from "next/image";
import data from "@/data";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight text-light-orange">
            A BROTHERHOOD THAT NEVER ENDS
          </h2>
          <div className="border-t border-gray-300" />
          <p className="text-justify text-sm md:text-base tracking-wider leading-relaxed">
            <span className="float-left text-6xl leading-none font-bold mr-2 text-bold-green">
              P
            </span>
            ASAINS adalah sebuah Unit Kegiatan Mahasiswa (UKM) yang bergerak di
            bidang ilmu kepecintaalaman yang ada di lingkungan Fakultas
            Matematika dan Ilmu Pengetahuan Alam (FMIPA) Universitas Gadjah Mada
            (UGM) yang berpedoman pada kode etik Pecinta Alam dan Tri Dharma
            Perguruan Tinggi serta berasaskan Pancasila dan berdasarkan UUD
            1945.
          </p>
          <p className="text-justify text-sm md:text-base leading-relaxed tracking-wider mb-4">
            Pembentukan UKM PASAINS diinisiasi oleh mahasiswa FMIPA UGM angkatan
            1994 – 1995. Awalnya, PASAINS bernama MAMI PAPA yang didirikan pada
            tahun 1995. Tujuan dibentuknya yakni untuk mewadahi kegiatan bersama
            mahasiswa lintas jurusan atau program studi FMIPA melalui kegiatan
            kepecintaalaman. Kegiatan UKM MAMI PAPA tersebut awalnya berpusat di
            basecamp yang bernama &ldquo;Rumah Hantu&rdquo; yaitu sekretariat
            bersama dengan Himpunan Mahasiswa Geofisika UGM (HMGF) dan Science
            Music Community (SMC) UGM.
          </p>
        </div>
        <div className="md:col-span-1 mt-0 md:mt-10 ">
          <div className="border border-gray-200 p-2 bg-background">
            <Image
              src={data.logo}
              alt="PASAINS Logo"
              className="w-full h-auto"
            />
          </div>
          <p className="text-[10px] uppercase tracking-wider text-center mt-1 text-gray-600 italic">
            Lambang resmi PASAINS
          </p>

          <div className="border border-gray-200 p-1 mt-4 bg-background">
            <h3 className="text-md font-bold text-center border-b border-gray-300 pb-1 mb-2 font-stardos tracking-wider">
              Fakta Singkat
            </h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="font-semibold">Berdiri:</span>
                <span>11 Oktober 1996</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Fakultas:</span>
                <span>FMIPA UGM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300" />
      <h2 className="text-2xl md:text-3xl font-bold py-4 text-black">
        Sejarah dan Perjalanan
      </h2>
      <div className="border-t border-gray-300 mb-4" />

      <div className="space-y-4 text-justify tracking-wider text-sm md:text-base leading-relaxed">
        <p>
          Pada tahun 1996, tepatnya tanggal 11 Oktober 1996 dilakukan pendakian
          massal di Gunung Lawu yang kemudian menjadi pembentukan dan pengesahan
          PASAINS FMIPA UGM. Hal tersebut mengawali perjalanan panjang PASAINS
          yang menjunjung tinggi persaudaraan menuju &ldquo;Never Ending
          Brotherhood&rdquo;.
        </p>
        <p>
          Kegiatan-kegiatan yang dilakukan pada saat itu yakni mountaineering,
          ilmu survival, panjat tebing, susur gua, pengadaan alat, peningkatan
          skill, dan pengumpulan materi kepecintaalaman dalam bentuk
          &ldquo;Kitab Suci PASAINS&rdquo;. Hingga kini, PASAINS terus
          mengembangkan kemampuan dan merekrut anggota baru tiap tahunnya namun
          tetap mempertahankan slogan &ldquo;Never Ending Brotherhood&rdquo; dan
          &ldquo;Paseduluran Saklawase&rdquo;.
        </p>
        <p>
          Saat ini, PASAINS tetap fokus dalam pengembangan empat divisi
          utamanya: Gunung Hutan, Susur Gua, Panjat Tebing, dan Lingkungan
          Hidup, dengan tujuan untuk melatih dan mempersiapkan calon anggota
          muda agar dapat menjadi anggota penuh dan mendapatkan Nomor Pokok
          Anggota (NPA) sesuai dengan ketentuan yang tercantum dalam Anggaran
          Dasar dan Rumah Tangga (AD ART).
        </p>
      </div>

      <div className="border-t border-gray-300 my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {data.historyPhoto.map((data, index) => (
          <div key={index}>
            <Image
              src={data.image}
              alt={`Slide ${data.id}`}
              className="w-full h-88 object-cover border border-gray-200"
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] uppercase tracking-wider text-center text-gray-600 italic mb-8">
        Kumpulan foto sejarah organisasi — perjalanan awal berdirinya PASAINS
      </p>
      <div className="border-t border-gray-300 mb-4" />
    </div>
  );
};
export default AboutUs;
