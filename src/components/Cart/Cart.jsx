import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
import { MdShoppingCart } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4  overflow-hidden">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <MdShoppingCart className="text-blue-500 dark:text-blue-400" /> Your
          Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg font-semibold">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                {/* Item details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm mt-1">Quantity: {item.quantity}</p>
                  <p className="text-sm font-semibold mt-1">
                    Price: ₹ {item.price}
                  </p>
                </div>
                {/* Total Price and Remove Button */}
                <div className="text-center">
                  <p className="text-lg font-bold">₹ {item.totalPrice}</p>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="mt-2 px-3 py-1 text-sm font-medium rounded-md text-red-600 bg-red-100 dark:bg-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {/* Total Amount and Checkout */}
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Total Amount:</span>
                <span className="text-2xl font-bold">₹ {totalAmount}</span>
              </div>
              <button
                className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                aria-label="Proceed to checkout"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
