import Filters from "@/components/search/filters/Filters";
import FiltersResult from "@/components/search/filters/FiltersResult";
import Navbar from "@/components/layout/Navbar";
import Tag from "@/components/search/tag/Tag";

type SearchParams = {
  Search?: string;
  Genres?: string;
  Year?: string;
  Season?: string;
  Format?: string;
  "Airing Status"?: string;
};

type SearchPageProps = {
  searchParams: SearchParams;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const search = searchParams.Search;
  const genres = searchParams.Genres;
  const year = searchParams.Year;
  const airing = searchParams["Airing Status"];
  const season = searchParams.Season;
  const format = searchParams.Format;

  const queryParams = {
    Search: search || "",
    Genres: genres || "",
    Year: year || "",
    ["Airing Status"]: airing || "",
    Format: format || "",
    Season: season || "",
  };

  const handleFetch = async () => {
    let filters = "";

    if (queryParams.Search) {
      filters += `&filter[text]=${queryParams.Search}`;
    }
    if (queryParams.Genres) {
      filters += `&filter[categories]=${queryParams.Genres}`;
    }
    if (queryParams.Year) {
      filters += `&filter[year]=${queryParams.Year}`;
    }
    if (queryParams["Airing Status"]) {
      filters += `&filter[status]=${queryParams["Airing Status"]}`;
    }
    if (queryParams.Format) {
      filters += `&filter[subtype]=${queryParams.Format}`;
    }
    if (queryParams.Season) {
      filters += `&filter%5Bseason%5D=${queryParams.Season}`;
    }

    const res = await fetch(`https://kitsu.io/api/edge/anime?${filters}`);
    return await res.json();
  };

  const results = await handleFetch();

  return (
    <>
      <Navbar/>
      <div className="mx-0">
      <Filters/>
      <Tag/>
      </div>
      <FiltersResult results={results}/>
    </>
  );
};

export default SearchPage;
