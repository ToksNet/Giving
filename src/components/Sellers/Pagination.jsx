// src/components/Pagination.js
import React from "react";

const Pagination = ({
  totalEntries,
  entriesToShow,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalEntries / entriesToShow);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 border rounded ${
            currentPage === i ? "bg-red-500 text-white" : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 border rounded"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 border rounded"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
