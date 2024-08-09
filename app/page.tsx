import Landing from "@/components/landing";
import Rewriter from "@/components/rewriter";
import { Curriculum } from "@/components/curriculum";
import Informative from "@/components/informative";
import { Professional } from "@/components/professional";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-[50px] bg-white items-center font-semibold">Home</div>
      <p className="text-white">click the menu bar</p>
      {/* <Landing />
      <Rewriter />
      <Curriculum />
      <Informative />
      <Professional /> */}
    </main>
  );
}
