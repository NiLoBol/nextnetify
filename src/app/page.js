import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 max-w-5xl mx-auto">
      <div className="p-10 bg-yellow-400 w-full flex justify-center items-center">
        <h1 className="text-2xl">Home</h1>
      </div>
      <div className="mt-10 flex flex-row justify-around columns-lg gap-5 w-full">
        <div className="p-10 bg-yellow-400 w-1/4 text-center">
          <h1 className="text-2xl">Home</h1>
        </div>
        <Link href={'/testapp'} className="p-10 bg-yellow-400 w-1/4 text-center">
          <h1 className="text-2xl">Home</h1>
        </Link>
      </div>
    </main>
  );
}
