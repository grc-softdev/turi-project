"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import FiltersResult from "@/components/search/filters/FiltersResult";
import Filters from "@/components/search/filters/Filters";
import Tag from "@/components/search/tag/Tag";
import Pagination from "@/components/layout/Pagination";
import Navbar from "@/components/layout/Navbar";

type ClientProps = {
  results: any;
  currentPage: number;
  totalCount: number;
};

const SearchPageClient = ({
  results,
  currentPage,
  totalCount,
}: ClientProps) => {
  const paginationsRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (paginationsRef.current) {
      paginationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [searchParams.get("Page")]);

  return (
    <>
      <Navbar />
      <div className="mx-0">
        <Filters />
        <Tag />
      </div>

      <FiltersResult results={results} />

      <div ref={paginationsRef} id="paginations">
        <Pagination currentPage={currentPage} total={totalCount} perPage={10} />
      </div>
    </>
  );
};

export default SearchPageClient;
