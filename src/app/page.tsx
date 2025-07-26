'use client'
import AnimeContainer from "@/components/ui/AnimeContainer";
import Navbar from "@/components/layout/Navbar";
import Landing from "@/components/layout/landing/Landing";
import Filters from "@/components/search/filters/Filters";

const Home = () => {
  return (
      <>
        <Navbar />
        <Landing/>
        <Filters/>
        <AnimeContainer/>
      </>
  );
};

export default Home;

