import Image from "next/image";
import { Instagram } from 'lucide-react';

export default function page() {
  return (
    <main className="text-center">
      <div className="profile">
        <Image
          className=" radial-progress"
          src="/profile.jpg"
          width={100}
          height={100}
          alt="Profile"
        ></Image>
      </div>
      <h1 className="text-3xl">cout {'<<'} {"DARKX"};</h1>
      <h2 className="text-xl flex justify-center">
        <Instagram className="w-5 h-5" />
      </h2>
      
    </main>
  );
}
