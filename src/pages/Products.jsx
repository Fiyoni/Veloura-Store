import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch once
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        setAllProducts(data);
        setVisible(data);
        setLoading(false);
      });
  }, []);

  // search listener
  useEffect(() => {
    const handleSearch = (e) => {
      const keyword = e.detail.toLowerCase();
      setVisible(
        allProducts.filter((p) =>
          p.title.toLowerCase().includes(keyword)
        )
      );
    };

    window.addEventListener("product-search", handleSearch);
    return () =>
      window.removeEventListener("product-search", handleSearch);
  }, [allProducts]);

  // category listener
  useEffect(() => {
    const handleCategory = (e) => {
      const category = e.detail;
      setVisible(
        allProducts.filter((p) => p.category === category)
      );
    };

    window.addEventListener("product-category", handleCategory);
    return () =>
      window.removeEventListener("product-category", handleCategory);
  }, [allProducts]);

  if (loading) return <div className="status">Loading...</div>;

  return (
    <section className="product-container">
      <div className="product-grid">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
