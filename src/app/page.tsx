import Navbar from "@/components/Navbar";
import Pitch from "@/components/Pitch";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#fffaf4] via-[#d3c5bb] to-[#fffaf4] pt-20">
        <Pitch />
      </div>
    </>
  );
}
