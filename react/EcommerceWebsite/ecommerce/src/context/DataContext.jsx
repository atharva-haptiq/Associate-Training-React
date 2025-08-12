import axios from "axios";
import { createContext, useContext, useState, useMemo } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=150"
      );
      const productsData = res.data?.products || [];
      setData(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Get unique values for a given property
  const getUniqueValues = (items, property) => {
    if (!Array.isArray(items)) return [];
    return ["All", ...new Set(items.map((item) => item[property]))];
  };

  // Memoized categories and brands to avoid recalculating on every render
  const categoryOnlyData = useMemo(
    () => getUniqueValues(data, "category"),
    [data]
  );

  const brandOnlyData = useMemo(() => getUniqueValues(data, "brand"), [data]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
