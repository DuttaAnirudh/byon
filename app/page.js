import partBear from "@/public/party-bear.jpg";
import partWoman from "@/public/party-woman.jpg";
import Image from "next/image";
import Link from "next/link";
import Header from "./_components/Header";
import { dancingScript } from "./layout";

export default function Home() {
  return (
    <main className="flex flex-col items-start min-h-screen  relative">
      <Header />
      <div className="grid grid-cols-3 grid-rows-1 gap-5 w-full items-center justify-center mt-16 h-full relative z-2">
        <div className="flex flex-col self-start gap-8">
          <p className="mt-10 max-w-[22rem] font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            maximus nec arcu ac venenatis. Integer varius eros ac urna vehicula
            euismod. Vivamus nisi nisi, accumsan eget eleifend a, venenatis non
            elit.
          </p>
          <Link
            href="/events"
            className="text-2xl uppercase font-bold text-color-1 border border-color-1 rounded-3xl self-start px-8 pt-2 pb-3 hover:-translate-y-0.5 active:translate-y-1 transition-all"
          >
            Explore
          </Link>
        </div>

        <div className="relative h-[40rem] max-w-[30rem] rounded-full overflow-hidden shadow-lg shadow-color-1/50">
          <Image
            src={partWoman}
            alt="Party Woman"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-[23rem] max-w-[14rem] self-center rounded-full overflow-hidden ml-[50%] shadow-lg shadow-color-1/50">
          <Image
            src={partBear}
            alt="Party Bear"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <h1
        className={`${dancingScript.className} self-center uppercase text-8xl font-bold text-color-3 relative z-3 mt-20`}
      >
        Bring<span className="text-color-2">.</span> Your
        <span className="text-color-2">.</span> Own
        <span className="text-color-2">.</span> Nylas
      </h1>
    </main>
  );
}
