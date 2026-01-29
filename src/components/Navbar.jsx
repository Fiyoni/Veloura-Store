import { useState } from "react";

const categories = [
  { label: "Men", value: "men's clothing" },
  { label: "Women", value: "women's clothing" },
  { label: "Accessories", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

export default function Navbar() {
  const [value, setValue] = useState("");

  const triggerSearch = (text) => {
    window.dispatchEvent(
      new CustomEvent("product-search", { detail: text })
    );
  };

  const filterCategory = (category) => {
    window.dispatchEvent(
      new CustomEvent("product-category", { detail: category })
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div
          className="brand"
          onClick={() => triggerSearch("")}   
          style={{ cursor: "pointer" }}
        >
          <img
            src="/Veloura_Logo.png"
            alt="Veloura Logo"
          />
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input
            placeholder="Search products"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              triggerSearch(e.target.value);
            }}
          />
          <button onClick={() => triggerSearch(value)}>Search</button>
        </div>

        {/* NAV LINKS */}
        <ul className="nav-links">
          {categories.map((cat) => (
            <li
              key={cat.value}
              onClick={() => filterCategory(cat.value)}
            >
              {cat.label}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
