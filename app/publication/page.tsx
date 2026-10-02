import { Publication } from "@/content/publication";
import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Publikasi - PASAINS",
  description:
    "Laporan kegiatan dan liputan expedisi PASAINS, Pecinta Alam Sains FMIPA Universitas Gadjah Mada.",
};

export default function PublikasiPage() {
  return (
    <div className="scroll-smooth focus:scroll-auto">
      <Publication />
    </div>
  );
}
