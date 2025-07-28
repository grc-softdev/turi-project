'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Pagination as MuiPagination, Stack } from '@mui/material';

type PaginationProps = {
  currentPage: number;
  total: number;
  perPage: number;
};

const Pagination = ({ currentPage, total, perPage }: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("Page", value.toString());
    router.push(`${pathname}?${params.toString()}`);
    
  };

  

  if (totalPages <= 1) return null;

  return (
    <Stack spacing={2} className="mt-6 items-center">
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        variant="outlined"
        size="large"
      />
    </Stack>
  );
};

export default Pagination;