import React from "react";
import Slider from "react-slick";
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
import Card from "./Card";
import { useAnimes } from "@/context/AnimeContext";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const CarouselSection = () => {
  const { isLoading, rowsData } = useAnimes();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ChevronLeft sx={{
      color: "#8ba0b2",
      fontSize: 40,
      "&:hover": {
        color: "#7A858F", 
      },
    }} />,
    nextArrow: <ChevronRight 
    sx={{
      color: "#8ba0b2",
      fontSize: 40,
      "&:hover": {
        color: "#7A858F", 
      },
    }} />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {(isLoading ? Array(3).fill(null) : rowsData)?.slice(0,1)?.map((row, index) => (
        <div
        key={index}
        className="group items-center justify-center flex flex-wrap 2xl:px-24 mt-16 grid-cols-1 gap-2 ml-90 bg-[#FAfafa]"
      >
        <Container key={index}>
          <div className="flex flex-col xl:mx-12">
          <h2 className="text-txtcatg text-wrap text-xl ml-3 sm:-mb-5 font-medium mt-8">
              {row?.title}
            </h2>

            <Link href={`/search/anime?`}>
              <span className="flex cursor-pointer justify-end mr-6 text-sm text-viewall hover:text-txtcard">
                View all
              </span>
            </Link>

            
              <Slider {...settings}>
                {(isLoading ? Array(12).fill(null) : row?.data?.slice(0, 12))?.map(
                  (anime, idx) =>
                    isLoading ? (
                      <div key={idx} className="px-2">
                        <Skeleton
                          variant="rectangular"
                          width={150}
                          height={220}
                          className="rounded-md"
                        />
                      </div>
                    ) : (
                      <div key={anime.id} className="px-2">
                        <Card anime={anime} />
                      </div>
                    )
                )}
              </Slider>
           
          </div>
        </Container>
        </div>
      ))}
    </>
  );
};

export default CarouselSection;