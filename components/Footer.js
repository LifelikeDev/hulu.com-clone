import requests from "../utils/requests";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="mt-1 bg-[#04151b] py-2">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="object-contain mb-0"
          src="/images/hulu-icon.webp"
          height={50}
          width={120}
        />

        <nav className="grid grid-cols-4 sm:flex flex-row">
          {Object.entries(requests).map(([key, { title, url }]) => {
            return (
              <h2
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                className="cursor-pointer mx-2 mb-1 sm:mb-5 text-center text-sm transform hover:scale-105 hover:text-white"
              >
                {title}
              </h2>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
