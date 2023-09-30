import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartCntxt from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartCntxt);
  console.log("Cart Items:", cartcntx.items);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity}{" "}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

// import Modal from "../UI/Modal";
// import classes from "./Cart.module.css";

// const Cart = (props) => {
//   const cartItems = (
//     <ul className={classes["cart-items"]}>
//       {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>35.62</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes["button--alt"]} onClick={props.onClose}>
//           Close
//         </button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </Modal>
//   );
// };

// export default Cart;
