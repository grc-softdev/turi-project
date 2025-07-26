"use client";

import { useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import { useQuery } from "@tanstack/react-query";

type AnimeContextType = {
  isLoading: boolean;
  queryParams: Record<string, string>;
  rowsData: RowsData;
};

export type Anime = {
  id: string;
  attributes: {
    titles: {
      en: string;
    };
    canonicalTitle: string;
    posterImage: {
      large: string;
    };
    averageRating: number;
    episodeLength: string;
    status: string;
    ageRatingGuide: string;
    subtype: string;
  };
};

export type RowsData = {
  title: string;
  data: Anime[];
}[];

export const AnimeContext = createContext<AnimeContextType | undefined>(
  undefined
);

export const useAnimes = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnimes must be used within an AnimeProvider");
  }
  return context;
};

async function fetchRows(): Promise<RowsData> {
  const [trendingRes, popularRes, upcomingRes, allTimeRes] = await Promise.all([
    fetch("https://kitsu.io/api/edge/trending/anime?limit=40"),
    fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count"),
    fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count"),
    fetch("https://kitsu.io/api/edge/trending/manga?page[limit]=0&sort=-canonicalTitle"),
  ]);

  const [trending, popular, upcoming, allTime] = await Promise.all([
    trendingRes.json(),
    popularRes.json(),
    upcomingRes.json(),
    allTimeRes.json(),
  ]);

  return [
    {
      title: "Trending Anime",
      data: trending.data,
    },
    {
      title: "Popular This Season",
      data: popular.data,
    },
    {
      title: "Upcoming Next Season",
      data: upcoming.data,
    },
    {
      title: "All Time Popular",
      data: allTime.data,
    },
  ];
}

export const AnimesProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();

  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const queryParams = {
    Search: params.get("Search") || "",
    Genres: params.get("Genres") || "",
    Year: params.get("Year") || "",
    ["Airing Status"]: params.get("Airing Status") || "",
    Format: params.get("Format") || "",
    Season: params.get("Year") || "", 
  };

  const { data, isLoading } = useQuery({
    queryKey: ["animeRows", queryParams], 
    queryFn: fetchRows,
    staleTime: 1000 * 60 * 5, 
  });

  return (
    <AnimeContext.Provider
      value={{
        isLoading,
        queryParams,
        rowsData: data || [],
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};