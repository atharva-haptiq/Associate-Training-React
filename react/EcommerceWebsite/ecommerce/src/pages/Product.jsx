import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [debouncedSearchItem, setDebouncedSearchItem] = useState("");

  const pageSize = 12;

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchItem(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const searchFilteredData = Array.isArray(data)
    ? data.filter((p) => {
        const matchesCategory =
          selectedCategory === "all" || p.category === selectedCategory;

        const productName = p.title || "";
        const matchesSearch = productName
          .toLowerCase()
          .includes(debouncedSearchItem.toLowerCase());

        return matchesCategory && matchesSearch;
      })
    : [];

  const startIndex = (page - 1) * pageSize;
  const paginatedData = searchFilteredData.slice(
    startIndex,
    startIndex + pageSize
  );

  const totalPages = Math.ceil(searchFilteredData.length / pageSize);

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      {data?.length > 0 ? (
        <>
          <div className="mt-6 mb-4 flex justify-center items-center">
            <label className="mr-2 font-medium">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              placeholder="Search products..."
              className="border px-3 py-1 rounded"
            />

            <label className="mr-2 font-medium p-5">Filter by Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setPage(1);
              }}
              className="border px-3 py-1 rounded"
            >
              <option value="all">All</option>
              {[...new Set(data.map((p) => p.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {paginatedData.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 mt-6">
              {paginatedData.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[300px]">
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    page === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <p>Loading products...</p>
        </div>
      )}
    </div>
  );
};

export default Products;
