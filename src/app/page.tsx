import Image from "next/image";
import ThumbNail from "./ui/components/thumbNail";

export default function Home() {
  return (
    <main>
      <ThumbNail image="main.jpg" />
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-blue-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div className="flex flex-col justify-center">
      <h1 className="text-4xl pb-10">Make Your Own Style!!</h1>
      <a href="/glass/eyeglass" className="outline outline-1 outline-offset-2 border-blue-500 text-blue-500 hover:text-white py-2 px-4 rounded hover:bg-blue-500 md:w-auto">
        Shop Here
      </a>
    </div> */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/sunglass.avif"
              width={1000}
              height={350}
              className="hidden rounded-lg md:block z-0"
              alt="Cover Image"
            />
            <a
              href="/glasses/sunglasses"
              className="absolute z-10 bg-purple-600 border text-white bottom-16 hover:text-white py-2 px-4 rounded hover:bg-purple-600 md:w-auto"
            >
              Shop Here
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src="/sportsglass.jpg"
              width={1000}
              height={350}
              className="hidden rounded-lg md:block z-10"
              alt="Cover Image"
            />
            <a
              href="/glasses/sportsglasses"
              className="absolute z-10 bg-purple-600 border text-white bottom-16 hover:text-white py-2 px-4 rounded hover:bg-purple-600 md:w-auto"
            >
              Shop Here
            </a>
          </div>
        </div>
      </div>
      {/* <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 bg-blue-500`}></div> */}
    </main>
  );
}
