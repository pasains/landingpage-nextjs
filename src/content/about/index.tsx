import data from "@/src/data/image";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className="font-playfair bg-[#f4efE6]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="border-t-4 border-b border-black my-16 mb-2" />
        <div className="border-b-4 border-black mb-6" />

        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-black">
            PASAINS
          </h1>
          <div className="flex justify-center items-center gap-4 my-2">
            <div className="h-px flex-1 max-w-32 bg-black" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">
              Since 1996
            </span>
            <div className="h-px flex-1 max-w-32 bg-black" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Pecinta Alam FMIPA Universitas Gadjah Mada
          </p>
        </div>

        <div className="border-t-2 border-b border-black mb-6" />
        <div className="flex justify-between text-[11px] uppercase tracking-wide font-semibold mb-6">
          <span>Volume I, No. 1</span>
          <span>Yogyakarta, Indonesia</span>
          <span>Est. 1996</span>
        </div>
        <div className="border-t border-black mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-black">
              A Brotherhood That Never Ends
            </h2>
            <p className="text-xs uppercase tracking-widest mb-3 text-gray-600">
              By PASAINS Media Team
            </p>
            <div className="border-t border-black mb-4" />
            <p className="text-justify text-sm md:text-base tracking-wider leading-relaxed mb-4">
              <span className="float-left text-6xl leading-none font-bold mr-2 mt-1 text-black">
                P
              </span>
              ASAINS adalah sebuah Unit Kegiatan Mahasiswa (UKM) yang bergerak
              di bidang ilmu kepecintaalaman yang ada di lingkungan Fakultas
              Matematika dan Ilmu Pengetahuan Alam (FMIPA) Universitas Gadjah
              Mada (UGM) yang berpedoman pada kode etik Pecinta Alam dan Tri
              Dharma Perguruan Tinggi serta berasaskan Pancasila dan berdasarkan
              UUD 1945.
            </p>
            <p className="text-justify text-sm md:text-base leading-relaxed tracking-wider mb-4">
              Pembentukan UKM PASAINS diinisiasi oleh mahasiswa FMIPA UGM
              angkatan 1994 – 1995. Awalnya, PASAINS bernama MAMI PAPA yang
              didirikan pada tahun 1995. Tujuan dibentuknya yakni untuk mewadahi
              kegiatan bersama mahasiswa lintas jurusan atau program studi FMIPA
              melalui kegiatan kepecintaalaman. Kegiatan UKM MAMI PAPA tersebut
              awalnya berpusat di basecamp yang bernama &ldquo;Rumah
              Hantu&rdquo; yaitu sekretariat bersama dengan Himpunan Mahasiswa
              Geofisika UGM (HMGF) dan Science Music Community (SMC) UGM.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="border border-black p-2">
              <Image
                src={data.logo}
                alt="PASAINS Logo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-[10px] uppercase tracking-wider text-center mt-1 text-gray-600 italic">
              Lambang resmi PASAINS
            </p>

            <div className="border border-black p-1 mt-4">
              <h3 className="text-md font-bold text-center border-b border-black pb-1 mb-2">
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
                <div className="flex justify-between">
                  <span className="font-semibold">Motto:</span>
                  <span>Never Ending Brotherhood</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Divisi:</span>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          Sejarah dan Perjalanan
        </h2>
        <div className="border-t border-black mb-4" />

        <div className="tracking-wider">
          <p className="text-justify text-sm md:text-base leading-relaxed mb-4">
            Pada tahun 1996, tepatnya tanggal 11 Oktober 1996 dilakukan
            pendakian massal di Gunung Lawu yang kemudian menjadi pembentukan
            dan pengesahan PASAINS FMIPA UGM. Hal tersebut mengawali perjalanan
            panjang PASAINS yang menjunjung tinggi persaudaraan menuju
            &ldquo;Never Ending Brotherhood&rdquo;.
          </p>
          <p className="text-justify text-sm md:text-base leading-relaxed mb-4">
            Kegiatan-kegiatan yang dilakukan pada saat itu yakni mountaineering,
            ilmu survival, panjat tebing, susur gua, pengadaan alat, peningkatan
            skill, dan pengumpulan materi kepecintaalaman dalam bentuk
            &ldquo;Kitab Suci PASAINS&rdquo;. Hingga kini, PASAINS terus
            mengembangkan kemampuan dan merekrut anggota baru tiap tahunnya
            namun tetap mempertahankan slogan &ldquo;Never Ending
            Brotherhood&rdquo; dan &ldquo;Paseduluran Saklawase&rdquo;.
          </p>
          <p className="text-justify text-sm md:text-base leading-relaxed">
            Saat ini, PASAINS tetap fokus dalam pengembangan empat divisi
            utamanya: Gunung Hutan, Susur Gua, Panjat Tebing, dan Lingkungan
            Hidup, dengan tujuan untuk melatih dan mempersiapkan calon anggota
            muda agar dapat menjadi anggota penuh dan mendapatkan Nomor Pokok
            Anggota (NPA) sesuai dengan ketentuan yang tercantum dalam Anggaran
            Dasar dan Rumah Tangga (AD ART).
          </p>
        </div>

        <div className="border-t-2 border-black my-6" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Image
            src={data.jadul3}
            alt=""
            className="w-full h-48 object-cover border border-black"
          />
          <Image
            src={data.jadul1}
            alt=""
            className="w-full h-48 object-cover border border-black"
          />
          <Image
            src={data.jadul6}
            alt=""
            className="w-full h-48 object-cover border border-black"
          />
          <Image
            src={data.jadul4}
            alt=""
            className="w-full h-48 object-cover border border-black"
          />
        </div>
        <p className="text-[10px] uppercase tracking-wider text-center text-gray-600 italic mb-8">
          Kumpulan foto sejarah organisasi — perjalanan awal berdirinya PASAINS
        </p>

        <div className="border-t-2 border-black mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center">
          Visi &amp; Misi
        </h2>
        <div className="border-t border-black mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold border-b border-black pb-1 mb-3">
              Visi
            </h3>
            <p className="text-justify text-sm md:text-base leading-relaxed italic">
              &ldquo;Mewujudkan organisasi kepecintaalaman yang menjunjung
              tinggi tanggung jawab, solidaritas, dan rasa kekeluargaan dengan
              tetap mengutamakan etika serta menjadi wadah pengembangan
              keterampilan.&rdquo;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold border-b border-black pb-1 mb-3">
              Misi
            </h3>
            <ol className="list-decimal ml-4 text-justify text-sm md:text-base leading-relaxed space-y-2">
              <li>
                Menjadikan PASAINS sebagai tempat untuk menyalurkan minat,
                bakat, dan potensi anggota melalui kegiatan-kegiatannya.
              </li>
              <li>
                Membangun internal pengurus harian yang bertanggung jawab,
                solid, dan profesional.
              </li>
              <li>
                Menjalin dan mempererat rasa kekeluargaan yang harmonis tanpa
                mengesampingkan etika komunikasi antar anggota.
              </li>
              <li>
                Mengembangkan program pelatihan dan pembelajaran yang berfokus
                pada peningkatan keterampilan.
              </li>
              <li>
                Membangun hubungan baik yang saling menguntungkan dengan pihak
                lain sebagai sarana branding dan peningkatan kualitas
                organisasi.
              </li>
              <li>
                Meningkatkan kualitas administrasi dan manajerial internal yang
                terstruktur.
              </li>
            </ol>
          </div>
        </div>

        <div className="border-t-2 border-black mb-6" />
        <h2 className="text-2xl text-center md:text-3xl font-bold mb-4 text-black">
          Struktur Kepengurusan
        </h2>
        <div className="border-t border-black mb-4" />
        <div className="border border-black p-6 mb-8">
          <Image
            src={data.chart}
            alt="Struktur organisasi PASAINS"
            className="w-full h-auto mx-auto"
          />
        </div>

        <div className="border-t-4 border-black mt-8 pt-4">
          <div className="flex justify-between text-[10px] uppercase tracking-wide text-gray-500">
            <span>PASAINS FMIPA UGM</span>
            <span>Never Ending Brotherhood</span>
            <span>Paseduluran Saklawase</span>
          </div>
        </div>
      </div>
    </div>
  );
}
