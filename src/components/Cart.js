import React from "react";
import formatCurrency from "../util";

function Cart(props) {
  const itemsInCart = props.itemsInCart;
  return (
    <div>
      {itemsInCart.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {itemsInCart.length} items in the cart{" "}
        </div>
      )}
      <div className="cart">
        <ul className="cart-items">
          {itemsInCart.map((item) => (
            <li key={item._id}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <div>{item.title}</div>
                <div className="right">
                  {formatCurrency(item.price)} x {item.count}{" "}
                  <button
                    className="button"
                    onClick={() => props.removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {itemsInCart.length !== 0 && (
        <div className="cart">
          <div className="total">
            <div>
              Total:{" "}
              {formatCurrency(
                itemsInCart.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
            <button className="button primary">Proceed</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
