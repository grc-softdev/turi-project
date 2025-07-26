'use client'
import Card from "./Card";
import Link from "next/link";
import Skeleton from '@mui/material/Skeleton';
import { Anime, useAnimes } from "../../context/AnimeContext";

const AnimeContainer = () => {
  const { isLoading, rowsData } = useAnimes()
  return (
    <>
      {(isLoading ? Array(3).fill(null) : rowsData)?.map((row, index) => (
        <div
          key={index}
          className="group items-center justify-center flex flex-wrap 2xl:px-24 mt-16 grid-cols-1 gap-2 ml-90"
        >
          <div className="flex flex-col xl:mx-48">
            <h2 className="text-txtcatg text-wrap text-xl ml-3 sm:-mb-5 font-medium">
              {row?.title}
            </h2>

            <Link href={`/search/anime?`}>
              <span className="flex cursor-pointer align-bottom justify-end mr-6 -mb-2 xs:text-xs sm:text-sm relative text-viewall hover:text-txtcard">
                view all
              </span>
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
              {(isLoading ? Array(12).fill(null) : row?.data?.slice(0, 12) as Anime[]).map(
                (anime, idx) =>
                  isLoading ? (
                    <Skeleton
                      key={idx}
                      variant="rectangular"
                      width={150}
                      height={220}
                      className="m-2 rounded-md"
                    />
                  ) : (
                    <Card key={anime.id} anime={anime} />
                  )
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnimeContainer;
