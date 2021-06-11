import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/solid";
// import { forwardRef } from "react";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <article className="group cursor-pointer p-2 sm:mb-2 transition duration-150 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}  `
        }
        height={520}
        width={760}
      />

      <div className="p-2">
        <h2 className="text-white my-1 text-xl transition-all duration-100 ease-in-out sm:group-hover:font-semibold">
          {result.title || result.original_name}
        </h2>

        <p className="max-w-md mb-1 text-base">{`${result.overview
          .substring(0, 92)
          .trim()}...`}</p>

        <p className="flex items-center opacity-70 sm:opacity-0 sm:group-hover:opacity-70 text-sm">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </article>
  );
};

export default Thumbnail;
