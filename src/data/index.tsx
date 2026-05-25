export type PostProps = {
  id: number;
  slug: string;
  title: string;
  location: string;
  author: string;
  picture1: any;
  picture2: any;
  picture3: any;
  picture4: any;
  picture5: any;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  caption: string;
  quote: string;
  name: string;
};
export const contentData: { [key: string]: PostProps } = {
  post1: {
    id: 1,
    slug: "ppkpulejajar",
    title:
      "Obati Keresahan Warga: Mahasiswa FMIPA UGM Ciptakan Alat Pengusir Hama Monyet Ekor Panjang",
    location: "Gunung Kidul, 16 September 2023",
    author: "Cephie dan Rastaban, PASAINS 23",
    picture1: require("../image/jepitu4.jpeg"),
    picture2: require("../image/jepitu1.jpeg"),
    picture3: require("../image/jepitu2.jpeg"),
    picture4: require("../image/jepitu3.jpeg"),
    picture5: require("../image/jepitu5.jpeg"),
    text1:
      "Kehadiran koloni monyet ekor panjang (long tailed macaque) di bagian selatan Daerah Istimewa Yogyakarta sudah kerap kali meresahkan warga. Spesies yang naik tingkat menjadi satwa yang dilindungi ini menjadikannya sulit untuk diatasi. Selain itu, mereka bergerak secara berkelompok dan tidak takut akan kehadiran manusia. Dengan latar belakang hal tersebut, perlu adanya tindakan preventif untuk mencegah invasi monyet ekor panjang tersebut di ladang hingga pemukiman warga. Invasi monyet di ladang dan pemukiman tentunya sangat merugikan bagi masyarakat seperti terjadinya kegagalan panen. Dalam mengupayakan hal tersebut, Unit Kegiatan Mahasiswa PASAINS FMIPA UGM berinovasi dalam pembuatan alat pengusir hama monyet ekor panjang dalam kegiatan Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa).",
    text2:
      "Dalam kegiatan PPK Ormawa tersebut, tema yang diangkat oleh UKM PASAINS FMIPA UGM yakni Kampung Iklim dengan sasaran Desa Jepitu, Kecamatan Girisubo, Gunungkidul. Salah satu programnya yakni pencegahan invasi monyet ekor panjang dengan pembuatan alat pengusir hama monyet ekor panjang dan pembuatan hutan buatan untuk program jangka panjang. Alat ini dibuat berdasar pada perilaku monyet yang berkoloni dan memiliki pemimpin yang dominan (alpha) dengan sasaran pemimpin koloni monyet yang cenderung melakukan hal baru terlebih dahulu seperti menemukan sumber makanan.",
    text3:"Alat ini menerapkan konsep fluida dinamis yang dapat menyemprotkan pewarna untuk menandai monyet alpha yang berakibat pada hilangnya sosok pemimpin dalam koloni tersebut sehingga mencegah koloni monyet tidak menginvasi ladang dan perumahan warga serta mencari pemimpin baru. Sumber energi alat ini berasal dari aki dan energi matahari dengan menggunakan panel surya. Prinsip utamanya berupa pemasangan jebakan (trap) agar monyet dapat menariknya dan alat tersebut dapat menyemprotkan pewarna. Pergerakan dan perilaku monyet juga diamati menggunakan kamera jebakan (trap). Dengan begitu, dapat mencegah invasi monyet ekor panjang tanpa melukai primata yang dilindungi tersebut dan keresahan masyarakat dapat berkurang.",
    text4:"Alat pengusir monyet ekor panjang ini telah dilakukan demo kepada warga di Dusun Pendowo, Jepitu, Girisubo, Gunungkidul pada 16 September 2023 lalu. Para warga antusias dalam mempelajari konsep dan penggunaan alat pengusir monyet tersebut. Selain itu, para warga juga memberi masukan-masukan berdasarkan pengalamannya berhadapan dengan monyet ekor panjang. Dengan demikian, alat ini disempurnakan berdasar pada kondisi sebenarnya. Kegiatan ini dilakukan secara berkelanjutan baik dalam penyempurnaan alat maupun pengawasan dan evaluasi serta menambah kuantitas alat. Dari upaya-upaya tersebut, harapannya keresahan warga akibat keberadaan monyet ekor panjang dapat teratasi tanpa melukai hewan yang dilindungi tersebut.",
    caption:"Kumpulan foto-foto kegiatan pemasangan alat pengusir hama monyet ekor panjang.",
    quote: "kukuku kuku kukkk",
    name: "Monyet 2024"
  },
  post2: {
    id: 2,
    slug: "sumbing",
    title:
      "PASAINS FMIPA UGM Lakukan Penelitian Pembuatan Peta di Jalur Pendakian Gunung Sumbing",
    location: "Gunung Sumbing, November 2021",
    author: "Kobis, PASAINS 20",
    picture1: require("../image/sumbing.jpg"),
    picture2: require("../image/sumbing1.jpg"),
    picture3: require("../image/sumbing8.jpg"),
    picture4: require("../image/sumbing6.jpg"),
    picture5: require("../image/sumbing7.jpg"),
    text1:"Jumlah pendaki gunung dari tahun ke tahun terus meningkat. Meski demikian kegiatan mendaki gunung tetap merupakan kegiatan yang berbahaya. Salah satu gunung yang menjadi target para pendaki adalah Gunung Sumbing (3371 mdpl).Hanya saja, minimnya informasi mengenai Gunung Sumbing yang merupakan gunung kedua tertinggi di Jawa Tengah, menjadi masalah yang sangat dirasakan ketika pendaki melakukan pendakian. Terlebih jika si pendaki belum pernah melakukan pendakian ke Gunung Sumbing. Melalui proses studi lapangan, memang dapat dibuktikan bahwa situasi dan kondisi Gunung Sumbing memang tidak mudah ditebak, seperti jalur yang tertutup akibat tumbangnya pohon, jalur cabang yang baru, dan perubahan posisi plang informasi di tiap-tiap pos pendakian.Tidak adanya informasi tentang jalur pendakian, tentu menjadi salah satu ancaman bagi para pendaki yang hendak melewati jalur tersebut,dan tentunya memberikan resiko besar bagi pendaki Gunung Sumbing.Berdasarkan analisis permasalahan di atas, PASAINS FMIPA UGM lantas melakukan penelitian berjudul “Pengembangan Sistem Informasi Geografi Jalur Pendakian Gunung Sumbing Berdasarkan Data Spasial dan Non-Spasial”.Tujuannya untuk menyajikan informasi jalur pendakian dan data Gunung Sumbing selengkap dan semudah mungkin.",
    text2:"PASAINS FMIPA UGM melakukan penelitian dengan bantuan Dana Hibah Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Gadjah Mada Tahun 2021. Penelitian dipimpin oleh Alif Kurniawan (Kimia 2018). Anggotanya Annisa Dwi Putri (Geofisika 2019), Natalia Rani Dewanti (Geofisika 2019), dan Alfian Surya Rahmadan (Matematika 2019). Penelitian berlangsung pada rentang Agustus – November 2021. Ada empat jalur pendakian yang disurvey, yaitu  Jalur Cepit (Utara), Jalur Banaran (Timur), Jalur Butuh Kaliangkrik (Selatan), dan Jalur Bowongso (Barat). Jalur Cepit berada di Dusun Cepit, Desa Pagergunung, Kecamatan Bulu, Kabupaten Temanggung. Jalur Banaran berada di Desa Banaran, Kecamatan Tembarak, Kabupaten Temanggung. Jalur Butuh Kaliangkrik berada di Dusun Butuh, Desa Temanggung, Kecamatan Kaliangkrik, Kabupaten Magelang. Sedangkan Jalur Bowongso berada di Desa Bowongso, Kecamatan Kalikajar, Kabupaten Wonosobo.",
    text3:"Data spasial yang diperoleh dalam pengumpulan data di lapangan adalah sebagai berikut data _tracking_ jalur pendakian, koordinat pos-pos pendakian, sumber mata air, daerah bahaya, dan tempat penting lainnya, ketinggian tempat-tempat penting di gunung, panjang jalur pendakian dan jarak antar pos pendakian, beda tinggi dan kelerengan, dokumentasi perjalanan, informasi penting lainnya. Sementara data non spasial yang diperoleh yaitu lokasi basecamp pendakian, tata cara perijinan pendakian, foto keadaan jalur pendakian, waktu tempuh pendakian, deskripsi tentang jalur pendakian.",
    text4:"Hasil dari penelitian ini berupa buklet pariwisata dan peta pendakian dari masing-masing jalur pendakian. Juga berupa poster kegiatan, serta video dokumenter yang berisi informasi penjelasan data spasial dan non spasial dari jalur pendakian Gunung Sumbing secara detail. Buklet pariwisata dan peta pendakian dari masing-masing jalur, selanjutnya diberikan kepada pengelola basecamp pendakian, untuk diletakkan di basecamp, agar dapat membantu para pendaki sebelum melakukan pendakian ke gunung sumbing. Pihak basecamp mengakui penelitian ini sangat bermanfaat. Kata mereka, “Kami menyambut positif langkah yang dilakukan oleh PASAINS FMIPA UGM. Hasil penelitian ini akan meminimalisir risiko terjadinya kecelakaan pendakian di Gunung Sumbing”.",
    caption:"Kumpulan foto-foto kegiatan pendakian dan penyerahan peta jalur-jalur pendakian Gunung Sumbing.",
    quote: "Take only memories, leave only footprints.",
    name: "Chief Seattle"
  },
  post3: {
    id: 3,
    slug: "mitosgununglawu",
    title:"Menguak Budaya dan Mitos Gunung Lawu: Setitik Kisah yang Tak Pernah Pudar",
    location: "Magetan, 27 Agustus 2017",
    author: "Weleh, PASAINS 18",
    picture1: require("../image/lawu2.jpg"),
    picture2: require("../image/lawu11.jpg"),
    picture3: require("../image/lawu4.jpg"),
    picture4: require("../image/lawu14.jpg"),
    picture5: require("../image/lawu6.jpg"),
    text1:"Indonesia memiliki banyak ragam suku dan kebudayaan dimana didalamnya terdapat mitos-mitos yang beredar dimasyarakat luas yang meyebar dari mulut-kemulut. Kami tim pengembaran PASAINS FMIPA UGM, melakukan penelusuran terkait mitos dan kebudayaan masyarakat lereng Gunung Lawu di sekitar basecamp pendakian jalur cemoro sewu, Magetan, Jawa Timur. Gunung Lawu terletak di antara kabupaten Karanganyar, Jawa Tengah dan kabupaten Magetan, Jawa Timur yang dimana dikenal dengan keindahan panorama alamnya. Namun, dibalik semua itu gunung yang termasuk salah satu gunung tertinggi di pulau jawa ini juga terkenal dengan aura mistisnya. Kami menemuni salah satu narasumber yang biasa dipanggil oleh masyarakat sekitar yaitu Mbah Wo, beliau merupakan kepala kebudayaan desa Sarangan yang bertempat tinggal di area wisata Telaga Sarangan.",
    text2:"Dalam wawancara ini kami membahas terkait mitos-mitos yang beredar dimasyarakat serta kebudayaan yang ada di Gunung Lawu dan sekitarnya. Sebuah pepatah jawa mengatakan, wong jawa ojo lali jawane, wong ndeso ojo lali adate yang artinya kebudayaan yang ada di sekitar kita harus selalu dilestarikan dan dijaga, karena itu adalah peninggalan dari nenek moyang kita sendiri masyarakat jawa yang pasti ada makna baiknya. Seperti acara Larung Sesaji Telaga Sarangan yang diadakan setahun sekali setiap tanggal satu ruah (kalender jawa) yang berpusat di Telaga Sarangan. Acara ini diadakan untuk mengungkapkan rasa syukur warga masyarakat Sarangan kepada Tuhan atas melimpahnya rejeki yang di dapatkan dalam satu tahun penuh.",
    text3:"Gunung Lawu merupakan salah satu gunung di Indonesia yang mempunyai banyak mitos. Beberapa mitos Gunung Lawu yang kami dapatkan dari narasumber yang pertama yaitu orang Cepu tidak boleh naik gunung lawu tidak diketahui apa sebabnya, tetapi banyak kejadian aneh yang terjadi ketika orang Cepu mendaki Gunung Lawu, seperti sesaat sampai rumah orang tersebut meninggal dunia. Kedua saat mendaki Gunung Lawu tidak boleh mengeluh apapun seperti merasa lelah maupun dingin karena ini akan membuat kita semakin merasakan lelah dan dingin. Ketiga pendaki tidak boleh memakai baju warna hijau mitos ini berkaitan dengan sejarah Kerajaan Majapahit. Keempat di puncak Gunung Lawu terdapat sumber air yaitu Sendang Drajat, keajaibannya disekitar sendang tidak ada pepohonan, tetapi bisa muncul sumber air tersebut dan dipercaya air tersebut mempunyai kemiripan dengan air zam-zam yang ada di Arab. Kelima di sebelah Hargo Dumilah (salah satu puncak gunung lawu) terdapat pasar setan beberapa orang yang lewat merasakan seperti melihat aktivitas jual-beli pasar. Mitos-mitos tersebut sangat diyakini dan dipercayai oleh masyarakat sekitar, karena pda sejarahnya dahulu ada seorang utusan dari Kerajaan Majapahit yaitu Brawijaya V yang pergi ke puncak Gunung Lawu untuk bertapa, sehingga gunung ini sangat disakralkan dan banyak mistisnya.",
    text4:"Telaga sarangan yang terletak di lereng Gunung Lawu Magetan, Jawa Timur. Telaga sarangan adalah tempat wisata berupa telaga yang sejuk dan indah. Oleh karena itu, banyak wisatawan domestik dan mancanegara yang datang berwisata ke telaga ini. Oleh masyarakat sekitar telaga sarangan dijadikan objek wisata untuk dimanfaatkan sebagai mata pencaharian mereka dengan adanya fasilitas-fasilitas hiburan ,tempat penginapan dan juga tempat makan yang berada di sekitar telaga.Terbentuknya telaga sarangan ini terdapat asal-usul yang unik. Dahulu disebuah desa di lereng lawu hidup sepasang suami dan istri petani bernama Kyai Jalilung dan Nyai Jalilung. Setiap harinya Nyai Jalilung mengantarkan makanan untuk suaminya yang sedang bertani di sawah. Suatu hari selesai bertani Kyai Jalilung menunggu istrinya mengantarkan makanan di sawah. Namun, istrinya tak kunjung datang Ia pun memutuskan untuk mencari makanan sendiri. Ia medapatkan sebutir telur di dekat sebuah pancuran dan memakannya. Akan tetapi, setelah memakan setengah butir telur ia sudah merasa kenyang. Lalu istrinya datang membawa makanan, melihat sisa telur tersebut istrinya ikut memakan telur tersebut. Setelah beberapa saat sepasang suami istri tersebut merasa panas enceburkan diri ke pancuran air tersebut. Seketika mereka menjadi ular naga yang besar sehingga pancuran tersebut menjadi sebuah telaga yang besar yang bernama telaga sarangan. Sampai saat ini di dalam Telaga Sarangan di percaya terdapat dua ekor naga besar yang tinggal di dalamnya.",
    caption:"Kumpulan foto-foto narasumber dan kondisi sekitar basecamp pendakian Gunung Lawu yang masih kental dengan mistisnya dengan ditemukannya banyak sesaji.",
    quote: "Wong jowo ojo lali jawane, wong ndeso ojo lali adate",
    name: "pepatah jawa"
  },
  post4: {
    id: 4,
    slug: "cemorosewu",
    title:
      "Menilik Basecamp Pendakian Gunung Lawu via Cemoro Sewu",
    location: "Gunung Lawu, 27 Agustus 2017",
    author: "Suratmi, PASAINS 18",
    picture1: require("../image/lawu8.jpg"),
    picture2: require("../image/lawu7.jpg"),
    picture3: require("../image/lawu1.jpg"),
    picture4: require("../image/lawu3.jpg"),
    picture5: require("../image/lawu13.jpg"),
    text1:"Dinginnya udara pagi yang menembus kulit menemani menyambut mentari. Panorama indah dari basecamp Cemoro Sewu memanjakan mata yang mamandangnya. Keindahan yang tak bisa dilewatkan oleh siapapun termasuk para pendaki Gunung Lawu. Cemoro Sewu adalah salah satu tempat wisata di lereng Gunung Lawu yang juga digunakan sebagai gerbang pendakian. Lokasinya berada di Desa Ngancar, Kecamatan Plaosan, Kabupaten Magetan, tepatnya di jalur jalan provinsi antara Magetan-Solo melalui Tawangmangu. Basecamp ini berada di ketinggian 1820 mdpl dan tidak jauh dari basecamp Cemoro Kandang yang masih berada di Provinsi Jawa Tengah.",
    text2:"Cemoro Sewu merupakan basecamp pendakian Lawu yang paling diminati. Di sini terdapat fasilitas yangmemadai seperti toilet, tempat parkir, serta mushola di sebrangnya. Jalur pendakiannya pun tergolong mudah karena terdiri dari jalur setapak berbatu yang telah tertata rapi menghubungkan basecamp hingga ke puncak. Setelah masuk ke pintu gerbang, di sekitar jalur pendakian ditumbuhi vegetasi berupa pohon cemara yang tumbuh lebat sehingga daerah ini dinamai Cemoro Sewu yang artinya seribu cemara. Keberadaan basecamp ini tidak luput dari bantuan pemerintah daerah. Awalnya bangunan yang menjadi basecamp pendakian ini adalah basecamp pemantauan hutan yang ada sejak tahun 1980. Berubahnya menjadi basecamp pendakian karena panggilan hati dari seorang warga untuk mengelola basecamp dan mendapatkan penghasilan bagi basecamp sendiri. Hingga kini, telah 35 tahun bangunan tersebut menjadi basecamp Paguyuban Giri Lawu. Pengasilan yang didapat pun hanya mengandalkan parkir dan persewaan barang-barang untuk mendaki. Selain itu basecamp tidak menarik uang bagi para pendaki yang menginap atau istirahat, namun tetap menerima jika ada yang sukarela memberikannya.",
    text3:`Paguyuban Giri Lawu adalah sebuah lembaga swadaya masyarakat Cemoro Sewu yang berdiri pada tahun 1998. Paguyuban ini berperan sebagai team rescue atau tim penolong darurat untuk mengantisipasi kecelakaan yang terjadi ketika
melakukan pendakian Gunung Lawu. Kepedulian warga sekitar terhadap basecamp ini ditunjukkan dengan menjadi sukarelawan sebagai anggota Paguyuban Giri lawu. Saat
ini ada 35 orang yang menjadi anggota paguyuban tersebut. Tiap harinya sekitar 3-4 orang akan bergantian menjaga basecamp dan menemani para pendaki yang singgah.
Paguyuban ini juga memiliki prinsip menolong sesama. Seperti ungkapan yang disampaikan ketua Paguyuban Giri Lawu, 'Manusia tidak luput dari salah, maka dari itu minta maaf. Menolong orang bagaimanapun keadaannya semua dilakukan dengan ikhlas.'`,
    text4:"Tak hanya mengelola basecamp, Paguyuban Giri Lawu juga membantu pemerintah dalam menyelenggarakan kegiatan-kegiatan di sekitar Cemoro Sewu. Contohnya seperti upacara kemerdekaan 17 Agustus, 1 Suro, serta peringatan hari gunung yang diselenggarakan tiap tahun di basecamp. Kegiatan tersebut dihadiri oleh ratusan pendaki dari seluruh penjuru. Keadaan saat ini, basecamp tidak pernah sepi oleh pendaki. Tiap minggunya para pendaki yang singgah di basecamp ini mencapai 400 orang. Sebagian dari angka tersebut didapat pada akhir pekan. Selain menjadi basecamp para pendaki, Cemoro Sewu merupakan tempat wisata. Di balik pintu gerbang pendakian, terdapat taman bermain yang biasa dikunjungi wisatawan saat hari biasa maupun akhir pekan. Selain itu juga terdapat hutan lindung yang ditumbuhi beraneka jenis tumbuhan baik yang masih banyak jenisnya maupun yang sudah langka dan satwa liar di dalamnya.",
    caption:"Kumpulan foto-foto di sekitar basecamp pendakian Gunung Lawu via Cemoro Sewu.",
    quote: "Manusia tidak luput dari salah, maka dari itu minta maaf. Menolong orang bagaimanapun keadaannya semua dilakukan dengan ikhlas.",
    name: "Paguyuban Giri Lawu"
  },
};
