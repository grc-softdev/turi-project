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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ChevronLeft sx={{ color: "#8ba0b2", fontSize: 40 }} />,
    nextArrow: <ChevronRight sx={{ color: "#8ba0b2", fontSize: 40 }} />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm
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
        <Container key={index} maxWidth="xl" sx={{ mt: 40 }} >
          <div className="flex flex-col">
            <Typography variant="h6" className="ml-3 font-medium">
              {row?.title || "Loading..."}
            </Typography>

            <Link href={`/search/anime?`}>
              <span className="flex cursor-pointer justify-end mr-6 text-sm text-viewall hover:text-txtcard">
                View all
              </span>
            </Link>

            <div className="mt-4">
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
          </div>
        </Container>
      ))}
    </>
  );
};

export default CarouselSection;