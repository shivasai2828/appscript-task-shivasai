import React, { useContext, useState } from "react";
import "./css/Card.css";
import { DataContext } from "../context/Dataprovider";

const ProductsCard = ({ items }) => {
  const { cart, addToCart } = useContext(DataContext);
  const { id, title } = items;

  // New state for managing whether the heart is liked or not
  const [isLiked, setIsLiked] = useState(false); // Initially set to false

  const isItemInCart = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isItemInCart) {
      addToCart([...cart, { ...items, quantity: 1 }]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      addToCart(updatedCart);
    }
  };

  // Toggle the 'isLiked' state when heart icon is clicked
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <img src={items.image} className="products_image" style={{ width: "100%" }} />
      <div className="products_details">
        <span className="title">{items.title.split(' ', 2).join(' ')}</span>
        <span className="prod-desc">
          <div className="products_cart">
            <p className="products_price">
              <span className="" style={{ textDecoration: "underline" }}>
                Sign in
              </span>{" "}
              or Create an account to see pricing
            </p>
            {/* Heart icon toggles between pink and default color based on isLiked */}
            <i
              className={`fa-regular fa-heart ${isLiked ? "liked" : ""}`}
              style={{
                width: "24px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={handleLikeToggle} // Toggle the like state
            ></i>
          </div>
        </span>
      </div>
    </>
  );
};

export default ProductsCard;


