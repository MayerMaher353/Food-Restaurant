import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import React from "react"; 

import "./css/cart.css";

export default function CartPage() {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="tst-content-frame--container">
      <div className="container">
        <div className="row justify-content-center cart-wrapper">
          <div className="col-lg-12">
            <h1 className="">Cart</h1>
          </div>

          <div className=" col-xl-7 col-lg-12 col-md-12col-sm-12 product-wrapper">
            <div className="cart-head">
              <h5>PRODUCT</h5>
              <h5>TOTAL</h5>
            </div>
            <div className="cart-separator"></div>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="cart-table">
                {cartItems.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <div className="cart-item d-flex ">
                      <div className="cart-item-wrapper">
                        <div className="cart-item-img">
                          <img src={item.img} alt={item.name} width={80} />
                        </div>
                        <div className="cart-item-details ms-3">
                          <div className="cart-item-title">
                            <h6>{item.name}</h6>
                          </div>
                          <div className="offer">
                            <p>
                              <span className="original-price">
                                <del>€{item.originalPrice}</del>
                              </span>{" "}
                              <span className="offer-price">€{item.price}</span>
                            </p>

                            {item.originalPrice &&
                              item.originalPrice > item.price && (
                                <span className="save-tag">
                                  Save €
                                  {(item.originalPrice - item.price).toFixed(2)}
                                </span>
                              )}
                          </div>

                          <p className="product-description">
                            Consectetur adipisicing elit. Soluta, impedit,
                            saepe.
                          </p>
                          <div className="quantity-controls  align-items-center ">
                            <button
                              onClick={() => addToCart(item, -1)}
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => addToCart(item, 1)}>
                              +
                            </button>
                          </div>
                          <button
                            className="remove-item mt-2"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="fas fa-times"></i>
                            Remove item
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-save-total">
                        <span>€{(item.price * item.quantity).toFixed(2)}</span>
                        {item.originalPrice &&
                          item.originalPrice > item.price && (
                            <span className="save-tag offer-save-tag">
                              Save €
                              {(
                                item.originalPrice * item.quantity -
                                item.price * item.quantity
                              ).toFixed(2)}
                            </span>
                          )}
                      </div>
                    </div>

                    {index < cartItems.length - 1 && (
                      <div className="cart-item-separator"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 total-wrapper">
            <div className="wrap-total-column">
              <h5>Cart totals</h5>
              <div className="cart-separator"></div>
              {cartItems.length > 0 && (
                <div className="cart-totals">
                  <p>
                    <strong>Estimated total:</strong>{" "}
                    <strong> €{subtotal.toFixed(2)}</strong>
                  </p>
                </div>
              )}
            </div>
            <Link to="/checkout">
              <button className="btn checkout">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
