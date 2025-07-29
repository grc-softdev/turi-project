import Navbar from "@/components/layout/Navbar";
import SectionAnimeId from "../../../components/container/SectionAnimeId";
import Image from "next/image";
import React from "react";
import CustomTooltip from "@/components/container/CustomTooltipWrapper";
import AnimeDescription from "@/components/ui/AnimeDescription";

type AnimeProps = {
  params: {
    id: string;
  };
};

const AnimePage = async ({ params }: AnimeProps) => {
  const animeId = params.id;
  const res = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`);
  const anime = await res.json();
  const cover =
    anime.data.attributes.coverImage.original ||
    anime.data.attributes.coverImage;
  const trailer = anime.data.attributes.youtubeVideoId;

  return (
    <>
      <div className="flex flex-col relative mt-0">
        <div className="sm:w-full sm:h-full z-10 relative shadow-sdcover sm:bg-cover bg-repeat bg-center">
          <Navbar />
          <div className="w-full h-[210px] sm:h-[210px] md:h-[400px] lg:h-[400px] xl:h-[344px] sm:w-[100%] -mt-[75px] -z-10 relative">
            <Image src={cover} className="object-cover" fill alt="cover" />
          </div>
        </div>

        <div className="flex justify-between bg-white py-4 ">
          <div className="">
            <div className="lg:w-[215px] lg:h-[304px] sm:ml-6 md:ml-8 lg:ml-[80px] xl:ml-[260px] 2xl:ml-72 ml-4 z-40 w-[100px] h-[141px] sm:w-[100px] sm:h-[141px] -mt-[100px] sm:-mt-[100px]  md:-mt-[84px] xl:-mt-[114px] md:w-[215px] md:h-[304px] relative">
              <Image
                src={
                  anime.data.attributes.posterImage.small ||
                  anime.data.attributes.posterImage.large ||
                  anime.data.attributes.posterImage.tiny
                }
                className="object-contain"
                alt="image-small"
                fill
              />
            </div>
            <div className="flex px-4 py-2 h-20">
              <CustomTooltip arrow title="Coming soon" placement={"top"}>
                <div className="flex justify-between md:ml-4 sm:ml-2 sm:pl-1 md:pl-10 lg:pl-10 xl:pl-10 my-3.5 rounded-[3px] bg-blue lg:ml-[64px] xl:ml-[240px] 2xl:ml-[274px]">
                  <span className="flex text-sm text-['roboto'] font-normal ml-8 sm:ml-2 sm:w-[494px] w-[226px] md:w-20 items-center justify-center lg:justify-between text-white">
                    Add to list
                  </span>
                  <span className="w-8 cursor-pointer h-10 ml-2 collapse md:visible flex items-end bg-bgcbody/[0.2]">
                    <svg className="w-9 h-[33px] ml-1 mt-4 font-[50] text-[4px] text-bgcbody">
                      <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </CustomTooltip>
              <CustomTooltip arrow title="Coming soon" placement={"top"}>
                <div className="mt-3.5 ml-3 rounded-[3px] w-9 h-9 bg-strawberry">
                  <svg
                    className="h-[26px] w-8 items-center text-white mt-2.5 ml-[7px]"
                    viewBox="0 0 800 800"
                  >
                    <path
                      className="h-4 w-4 bg-white"
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </CustomTooltip>
            </div>
          </div>

          <div className="flex flex-col -ml-[360px] sm:-ml-[616px] lg:h-[260px] 2xl:h-[269px] gap-1 md:ml-2 lg:ml-4 font-roboto text-singletxt mr-4 sm:mr-0 sm:mb-2">
            <h3 className="lg:mt-4 md:mt-4 mt-[114px] sm:mt-28 md:ml-4 xl:mt-8 text-xl ml-0 mb-2">
              {anime.data.attributes.titles.en_jp}
            </h3>
            <AnimeDescription
              originalDescription={anime.data.attributes.description}
              animeTitle={anime.data.attributes.titles.en_jp}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:h-[481px] sm:ml-4 md:ml-2 lg:ml-[16px] xl:ml-[190px] 2xl:ml-[226px] lg:mb-16 xl:mb-36 mt-4 py-4 p-[18px]">
          <div className="bg-white lg:ml-12 p-[18px] w-full sm:h-[470px] xl:h-[570px] md:w-[215px]">
            <SectionAnimeId
              title={"English"}
              span={anime.data.attributes.titles.en_jp}
            />
            <SectionAnimeId
              title={"Format"}
              span={anime.data.attributes.titles.en_jp}
            />
            <SectionAnimeId
              title={"Episode Duration"}
              span={anime.data.attributes.episodeLength}
            />
            <SectionAnimeId
              title={"Status"}
              span={anime.data.attributes.status}
            />
            <SectionAnimeId
              title={"Start Date"}
              span={anime.data.attributes.start_date}
            />
            <SectionAnimeId
              title={"Community Approval"}
              span={anime.data.attributes.titles.en_jp}
            />
            <SectionAnimeId
              title={"Popularity Rank"}
              span={anime.data.attributes.averageRating}
            />
            <SectionAnimeId
              title={"Rating Rank"}
              span={anime.data.attributes.ratingRank}
            />
            <SectionAnimeId
              title={"Age Rating"}
              span={anime.data.attributes.ageRating}
            />
          </div>
          {trailer ? (
            <div className="mt-6 sm:ml-4 md:ml-16 lg:ml-36 2xl:ml-72 w-full max-w-[640px] h-[360px]">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Anime Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Trailer unavailable.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimePage;
