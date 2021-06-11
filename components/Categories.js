import requests from "../utils/requests";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();

  return (
    <nav className="group relative my-2 sm:m-0">
      <div className="flex flex-grow px-10 sm:px-20 text-base sm:text-xl space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-200 last:pr-20"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
      <h6 className="italic text-center opacity-0 group-hover:opacity-40 group-active:opacity-40 m-2 px-10">
        scrollable navigation: use mouse wheel to scroll or press and hold shift
        together with mouse wheel to scroll
      </h6>
    </nav>
  );
};

export default Categories;
