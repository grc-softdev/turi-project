'use client'
import AnimeContainer from "@/components/ui/AnimeContainer";
import Navbar from "@/components/layout/Navbar";
import Landing from "@/components/layout/landing/Landing";
import Filters from "@/components/search/filters/Filters";
import CarouselSection from "@/components/ui/CarouselSection";

const Home = () => {
  return (
      <>
        <Navbar />
        <Landing/>
        <Filters/>
        <CarouselSection/>
        <AnimeContainer/>
      </>
  );
};

export default Home;

