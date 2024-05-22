import Image from "next/image";

import News from "@/components/shared/News";


export default function Home() {
  return (
    <main className=" min-h-screen ">

      <div className="w-full min-h-[250px] md:min-h-[300px] flex 
      items-center bg-hero-pattern  object-cover">
        <div className=" p-6 md:p-12 bg-background opacity-90">
          <h1 className=" font-bold lg:text-8xl text-4xl">
            Conectando Mentores
          </h1>
          
          <p className=" mt-2">
            Tu plataforma de ayuda para trabajos de la usco en un solo lugar 
          </p>
        </div>
        
      </div>

      <div className="lg:mt-14 md:mt-10 mt-7 flex flex-col items-center justify-center xl:my-12 md:px-8">
        <h1 className="xl:text-6xl text-4xl mb-7 md:mt-10 lg:mb-14 text-primary-foreground">
          Noticias de Software
        </h1>
          <News />
      </div>  


    </main>
  );
}
