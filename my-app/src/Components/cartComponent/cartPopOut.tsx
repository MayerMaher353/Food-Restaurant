import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "../cartComponent/css/cartPopout.css";
import { Link } from "react-router-dom";

export default function CartPopup() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } =
    useContext(CartContext);

  if (!isCartOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-popup slide-in">
      <div className="cart-header">
        <h3>Cart</h3>
        <button className="close-popup" onClick={toggleCart}>
          ×
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty">No products in the cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.img} alt={item.name} />
              <div className="cart-info">
                <p>{item.name}</p>
                <p>
                  {item.quantity} × €{item.price}
                </p>
              </div>
              <button
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}

          <hr />

          <p className="subtotal">Subtotal: €{subtotal.toFixed(2)}</p>

          <Link to="/cart">
            <button className="btn">VIEW CART</button>
          </Link>
          <Link to="/checkout">
            <button className="btn checkout">CHECKOUT</button>
          </Link>
        </>
      )}
    </div>
  );
}
