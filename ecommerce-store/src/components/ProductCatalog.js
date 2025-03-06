import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductCatalog = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const products = [
    { id: 1, name: "Smartphone", price: "₹25,000", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", price: "₹60,000", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: "₹3,000", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="container">
      <h2>Product Catalog</h2>
      <button onClick={handleLogout} className="logout">Logout</button>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
