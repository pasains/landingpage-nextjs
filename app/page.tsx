import { HomeContent } from "@/src/content/home";

export const revalidate = 1800;

export default function Page() {
  return (
    <div className="scroll-smooth focus:scroll-auto">
      <HomeContent />
    </div>
  );
}
