import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Red Dress", price: "₹2,999",  image: "red dress.jpg" },
  { id: 2, name: "Blue Jeans", price: "₹1,799",  image: "blue jeans.jpg" },
  { id: 3, name: "Formal Shirt", price: "₹1,299",  image: "formal shirt.jpg" },
  { id: 4, name: "Leather Jacket", price: "₹4,999", image: "jack.jpg" },
  { id: 5, name: "Sneakers", price: "₹3,499", image: "sneakers.jpg" },
  { id: 6, name: "Handbag", price: "₹2,599", image: "handbag.jpg" },
  { id: 7, name: "Watch", price: "₹5,999", image: "smartwatch.jpg" },
  { id: 8, name: "Sunglasses", price: "₹999", image: "sungls.jpg" },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="products-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
