import axios from "axios";
import { useEffect, useState } from "react";

const useIphones = (product_id=undefined) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = "http://localhost:1234/iphone";
  if (product_id) url += `/${product_id}`;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        console.log(err.message);
        setError(
          <>
            <span>Failed to fetch iphone products.</span>
            <p>Please check your if backend is on.</p>
          </>
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  return { products, error, isLoading };
};

export default useIphones;
