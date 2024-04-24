import Image from "next/image";

import News from "@/components/shared/News";


export default function Home() {
  return (
    <main className=" min-h-screen ">

      <div className="w-full min-h-[300px] flex 
      items-center bg-hero-pattern  object-cover">
        <h1 className="text-8xl p-12 font-bold bg-background opacity-90">
          LA USQUITO AYUDA
        </h1>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center my-5 xl:my-12 px-8">
        <h1 className="xl:text-6xl text-4xl mb-14 text-primary-foreground">
          Noticias de Software
        </h1>
          <News />
      </div>  


    </main>
  );
}
