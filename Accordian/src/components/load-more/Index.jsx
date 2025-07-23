import { useEffect, useState } from "react";
import "./style.css";
export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length == 100) setDisable(true);
  }, [products]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="loadmore-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disable}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Load More Products
        </button>
        {
            disable==true? <p>
                You have reached to 100 products
            </p>:null
        }
      </div>
    </div>
  );
}
