import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const tags = [];

  if (product.price > 50) tags.push("premium");
  if (product.rating?.rate >= 4.5) tags.push("best");
  if (product.id % 2 === 0) tags.push("trending");
  if (product.id % 3 === 0) tags.push("new");

  return (
    <div className="product-card">
      <button
        className={`wishlist ${liked ? "active" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        ♥
      </button>

      <div
        className="product-image"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h3 title={product.title}>{product.title}</h3>
        <p className="category">{product.category}</p>

        {/* TAGS */}
        <div className="product-tags">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className={`tag ${tag}`}>
              {tag === "best" ? "Best Seller" : tag}
            </span>
          ))}
        </div>

        <div className="price-row">
          <span className="price">{product.price.toFixed(2)}</span>
          <div className="rating">⭐ {product.rating?.rate}</div>
        </div>
      </div>
    </div>
  );
}
