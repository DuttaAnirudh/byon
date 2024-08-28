"use client";

function ButtonFilter({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-3  py-1 ${
        filter === activeFilter
          ? "bg-color-3 text-color-1"
          : "hover:shadow-md hover:text-color-1"
      } hover:bg-primary-500 text-sm border border-color-3 rounded-full `}
    >
      {children}
    </button>
  );
}

export default ButtonFilter;
