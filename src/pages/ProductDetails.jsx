import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((r) => r.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="status">Loading...</div>;

  return (
    <section className="details-page">

      <div className="details-card">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Products
        </button>

        <div className="details-layout">

          <div className="details-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="details-info">
            <h1>{product.title}</h1>

            <div className="details-price">
              ₹ {product.price.toFixed(2)}
            </div>

            <p className="details-desc">
              {product.description}
            </p>

            <div className="details-meta">
              Category: {product.category}
            </div>

            <div className="details-actions">
              <button className="add-cart-btn">
                Add to Cart
              </button>

              <button
                className={`wishlist-btn ${wishlisted ? "active" : ""}`}
                onClick={() => setWishlisted(!wishlisted)}
              >
                {wishlisted ? "❤️ Wishlisted" : "♡ Wishlist"}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
