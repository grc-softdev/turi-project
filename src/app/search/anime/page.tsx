import dynamic from "next/dynamic";

const SearchPageClient = dynamic(() => import("./SearchPageClient"), { ssr: false });

type SearchParams = {
  Search?: string;
  Categories?: string;
  Year?: string;
  Season?: string;
  Format?: string;
  "Airing Status"?: string;
  Page?: string;
};

type SearchPageProps = {
  searchParams: SearchParams;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const search = searchParams.Search || "";
  const categories = searchParams.Categories || "";
  const year = searchParams.Year || "";
  const airing = searchParams["Airing Status"] || "";
  const season = searchParams.Season || "";
  const format = searchParams.Format || "";
  const page = parseInt(searchParams.Page || "1", 10);

  const limit = 10;
  const offset = (page - 1) * limit;
  let filters = `page[limit]=${limit}&page[offset]=${offset}`;

  if (search) filters += `&filter[text]=${search}`;
  if (categories) filters += `&filter[categories]=${categories}`;
  if (year) filters += `&filter[year]=${year}`;
  if (airing) filters += `&filter[status]=${airing}`;
  if (format) filters += `&filter[subtype]=${format}`;
  if (season) filters += `&filter%5Bseason%5D=${season}`;

  const res = await fetch(`https://kitsu.io/api/edge/anime?${filters}`);
  const results = await res.json();

  return (
    <SearchPageClient
      results={results}
      currentPage={page}
      totalCount={results.meta.count}
    />
  );
};

export default SearchPage;