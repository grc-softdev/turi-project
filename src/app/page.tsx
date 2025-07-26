'use client'
import AnimeContainer from "@/components/ui/AnimeContainer";


import Navbar from "@/components/layout/Navbar";
import Landing from "@/components/layout/landing/Landing";

const Home = () => {
  return (
      <>
        <Navbar />
        <Landing/>

        <AnimeContainer/>
      </>
  );
};

export default Home;

