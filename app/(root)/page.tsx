import Image from "next/image";

import News from "@/components/shared/News";


export default function Home() {
  return (
    <main className=" min-h-screen ">

      <div className="w-full max-[300px]">
        <Image
          alt="Banner"
          src="/banner.jpg"
          height={300}
          width={10000}
          className="w-full max-h-[300px] object-cover"       
        />
      </div>

      <div className="mt-14 flex flex-col items-center justify-center px-8">
        <h1 className="xl:text-4xl text-2xl mb-14">
          Noticias de Software
        </h1>
          <News />
      </div>  


    </main>
  );
}
