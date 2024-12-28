import React from "react";
import "./CartModal.css";

function CartModal({ cart, onClose, onRemove }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
