import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pitch from "@/components/Pitch";
import Team from "@/components/Team";
import APK from "@/components/APK";
import Diagrams from "@/components/Diagrams";
import Video from "@/components/Video";
import ProjectZip from "@/components/ProjectZip";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#fffaf4] via-[#d3c5bb] to-[#fffaf4]">
        <Hero />
        <Pitch />
        <Team />
        <APK />
        <Diagrams />
        <Video />
        <ProjectZip />
      </div>
    </>
  );
}
