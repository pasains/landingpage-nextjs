import logo from "../../public/image/logo-pasains.png";
import logomodern from "../../public/image/logomoodern.png";
import cv from "../../public/image/jomblangg.webp";
import gh from "../../public/image/sumbing_puncak.webp";
import rc from "../../public/image/siung.webp";
import cn from "../../public/image/ngo.webp";
import kj from "../../public/image/raung2.webp";
import rg from "../../public/image/raung.webp";
import post1 from "../../public/image/jepitu4.jpeg";
import post2 from "../../public/image/sumbing.jpg";
import post3 from "../../public/image/lawu2.jpg";
import post4 from "../../public/image/lawu8.jpg";
import jadul2 from "../../public/image/jadul2.jpg";
import jadul3 from "../../public/image/jadul3.jpeg";
import jadul4 from "../../public/image/jadul4.jpeg";
import jadul6 from "../../public/image/jadul6.jpeg";
import { GiMountainClimbing } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { GiPineTree } from "react-icons/gi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const data = {
  logo: logo,
  logomodern: logomodern,
  carousel: [
    {
      id: 1,
      image: cv,
    },
    {
      id: 2,
      image: rg,
    },
    {
      id: 3,
      image: rc,
    },
    {
      id: 4,
      image: cn,
    },
    {
      id: 5,
      image: gh,
    },
    {
      id: 6,
      image: kj,
    },
  ],
  historyPhoto: [
    { id: 1, image: jadul2 },
    { id: 2, image: jadul3 },
    { id: 3, image: jadul4 },
    { id: 4, image: jadul6 },
  ],
  division: [
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
      background: "background-caving2",
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
  ],
  mediaSocials: [
    {
      icon: <FaInstagram size={15} />,
      link: "https://www.instagram.com/pasains96/",
    },
    {
      icon: <FaFacebook size={15} />,
      link: "https://www.facebook.com/pasains.fmipa/",
    },
    {
      icon: <FaXTwitter size={15} />,
      link: "https://twitter.com/pasains96",
    },
    {
      icon: <FiYoutube size={15} />,
      link: "https://www.youtube.com/@PasainsUGM",
    },
    {
      icon: <PiTiktokLogo size={15} />,
      link: "https://www.tiktok.com/@pasains",
    },
  ],
  post1: post1,
  post2: post2,
  post3: post3,
  post4: post4,
};
export default data;
