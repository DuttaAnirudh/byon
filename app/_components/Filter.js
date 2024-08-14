"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import ButtonFilter from "./ButtonFilter";

const filterOptions = [
  { name: "Delhi NCR", filter: "Delhi-NCR" },
  { name: "Mumbai", filter: "Mumbai" },
  { name: "Bangalore", filter: "Bangalore" },
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("location") ?? "Delhi-NCR";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("location", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-4">
      {filterOptions.map((item) => (
        <ButtonFilter
          handleFilter={handleFilter}
          filter={item.filter}
          activeFilter={activeFilter}
          key={item.name}
        >
          {item.name}
        </ButtonFilter>
      ))}
    </div>
  );
}

export default Filter;
