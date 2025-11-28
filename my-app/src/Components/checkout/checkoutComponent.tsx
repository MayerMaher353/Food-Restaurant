import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import "./css/checkout.css";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext); // ← added clearCart

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (coupon === "SALE10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const handleChange = (e: any) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty! Please add some products before placing an order."
      );
      return;
    }

    let newErrors = { firstName: "", lastName: "", phone: "" };
    let hasError = false;

    if (!contactInfo.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      hasError = true;
    }
    if (!contactInfo.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      hasError = true;
    }
    if (!contactInfo.phone.trim()) {
      newErrors.phone = "Phone Number is required";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    const order = {
      items: cartItems,
      contact: contactInfo,
      paymentMethod,
      total,
      discount,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://your-api.com/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      // Clear cart after successful order
      clearCart();

      // Reset contact form
      setContactInfo({
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
      });

      alert("Your order has been placed successfully!");
    } catch (error) {
      console.error(error);
      alert("Error placing your order. Please try again.");
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container container">
        <h1>Checkout</h1>

        <div className="row">
          {/* LEFT SIDE – CONTACT + PAYMENT */}
          <div className="col-lg-7">
            {/* Contact Info */}
            <div className="box contact-box">
              <h4>Contact Information</h4>

              <div className="form-row">
                <div className="form-group half-width">
                  <input
                    type="text"
                    name="firstName"
                    value={contactInfo.firstName}
                    onChange={handleChange}
                    placeholder="First Name*"
                  />
                  {errors.firstName && (
                    <p className="error-text">{errors.firstName}</p>
                  )}
                </div>

                <div className="form-group half-width">
                  <input
                    type="text"
                    name="lastName"
                    value={contactInfo.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*"
                  />
                  {errors.lastName && (
                    <p className="error-text">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="form-group full-width">
                <input
                  type="text"
                  name="address"
                  value={contactInfo.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
              </div>
              <div className="form-row">
                <div className="form-group half-width">
                  <input
                    type="text"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>

                <div className="form-group half-width">
                  <input
                    type="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="box payment-box">
              <h4>Payment Method</h4>

              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Direct Bank Transfer
                </label>
                {paymentMethod === "bank" && (
                  <p className="payment-desc">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                )}

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="check"
                    checked={paymentMethod === "check"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Check Payments
                </label>
                {paymentMethod === "check" && (
                  <p className="payment-desc">
                    Please send a check to our store address. Your order will be
                    processed once the check has been received and cleared.
                  </p>
                )}

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
                {paymentMethod === "cod" && (
                  <p className="payment-desc">
                    Pay with cash upon delivery. Make sure someone is available
                    to receive the package and pay in full.
                  </p>
                )}
              </div>
            </div>

            {/* Terms & Return / Place Order */}
            <div className="checkout-footer">
              <p className="terms-text">
                By proceeding with your purchase you agree to our Terms and
                Conditions and Privacy Policy
              </p>

              <div className="checkout-actions">
                <Link to="/cart" className="return-cart-btn return-cart-btn">
                  ← Return to Cart
                </Link>
                <button className="place-order-btn" onClick={placeOrder}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – ORDER SUMMARY */}
          <div className="col-lg-5">
            <div className="box summary-box">
              <h4>Order Summary</h4>

              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="summary-img"
                    />
                    <div className="qty-badge">{item.quantity}</div>
                  </div>

                  <div className="summary-details">
                    <h6>{item.name}</h6>

                    <div className="prices">
                      {item.originalPrice &&
                        item.originalPrice > item.price && (
                          <p className="prev-price">
                            € {item.originalPrice.toFixed(2)}
                          </p>
                        )}
                      <p className="new-price">€ {item.price.toFixed(2)}</p>
                    </div>

                    <p className="desc">
                      Consectetur adipisicing elit. Soluta, impedit, saepe.
                    </p>
                  </div>
                </div>
              ))}

              <div className="coupon-section">
                <h6>Add coupons</h6>
                <div className="row">
                  <input
                    className="col-lg-10 col-sm-12 col-md-10"
                    type="text"
                    placeholder="Enter coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    className="col-lg-2 col-sm-12 col-md-2"
                    onClick={handleApplyCoupon}
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="totals">
                <div className="row-item">
                  <span>Subtotal : </span>
                  <strong>€{subtotal.toFixed(2)}</strong>
                </div>

                {discount > 0 && (
                  <div className="row-item">
                    <span>Discount</span>
                    <strong>- €{discount.toFixed(2)}</strong>
                  </div>
                )}

                <div className="row-item total">
                  <span>Total : </span>
                  <strong>€{total.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
