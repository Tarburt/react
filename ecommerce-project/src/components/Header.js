import React, { useState } from "react";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const updateCart = (newCart) => {
    setCartElements(newCart);
  };

  // Inside your Header component
  const addToCart = (item) => {
    // Create a copy of the cartElements array
    const updatedCart = [...cartElements];

    // Check if the item is already in the cart
    const itemIndex = updatedCart.findIndex((el) => el.title === item.title);

    if (itemIndex !== -1) {
      // If the item exists, update its quantity
      updatedCart[itemIndex].quantity++;
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartElements(updatedCart);
  };

  const removeFromCart = (index) => {
    // Create a new array without the item to remove
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartElements];
    const item = updatedCart[index];

    if (item.quantity > 1) {
      item.quantity--; // Decrease the quantity by one
    } else {
      // If the quantity is 1, remove the entire element
      updatedCart.splice(index, 1);
    }

    updateCart(updatedCart);
  };


  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">The Generics</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Store</a>
          <a className="mr-5 hover:text-gray-900">About</a>
        </nav>
        <button
          onClick={toggleCart}
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {/* Display the number of items in the cart */}
          Cart
          <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {cartElements.length}
          </span>
        </button>
      </div>
      {isCartOpen && (
        <div className="fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-50 z-50 ">
          <button
            onClick={toggleCart}
            className="absolute top-0 right-0 p-4 text-red-500 bg-transparent hover:bg-red-500 hover:text-white"
          >
            ❌
          </button>
          {/* <div className="pointer-events-none"> */}
          <Cart
            cartElements={cartElements}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            decreaseQuantity={decreaseQuantity}
            className="pointer-events-auto"
          />
        </div>
        // </div>
      )}
    </header>
  );
};

export default Header;
