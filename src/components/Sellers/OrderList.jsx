// src/components/OrderList.js
import React, { useState } from "react";
import { useProductContext } from "../Sellers/ProductContext";
import ProductCard from "../Sellers/ProductCard";
import Pagination from "../Sellers/Pagination";

const OrderList = () => {
  const { products } = useProductContext();
  const [entriesToShow, setEntriesToShow] = useState(10); // Default entries to show
  const [currentPage, setCurrentPage] = useState(1);

  const handleEntriesChange = (event) => {
    setEntriesToShow(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page when entries to show change
  };
  const indexOfLastEntry = currentPage * entriesToShow;
  const indexOfFirstEntry = indexOfLastEntry - entriesToShow;
  const currentEntries = products.slice(indexOfFirstEntry, indexOfLastEntry);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">
        List of Orders: {products.length}
      </h2>
      <div className="mb-4">
        <label htmlFor="entries" className="mr-2">
          Show
        </label>
        <select
          id="entries"
          value={entriesToShow}
          onChange={handleEntriesChange}
          className="border rounded p-1"
        >
          {[10, 20, 30, 40, 50].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <span className="ml-2">entries</span>
      </div>
      <div className="flex flex-wrap -mx-2">
        {currentEntries.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalEntries={products.length}
        entriesToShow={entriesToShow}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default OrderList;
