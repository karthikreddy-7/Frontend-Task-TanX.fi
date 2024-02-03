import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = (
  setdisplayproducts,
  setdisplayhome,
  setdisplaysignin,
  setdisplaycart
) => {
  const totalItems = useSelector((state) => state.totalProducts.items);
  const cartItems = useSelector((state) => state.cart.items);
  var TotalPrice = 0;
  const dispatch = useDispatch();

  // Function to get product details for a given productId
  const getProductDetails = (productId) => {
    return totalItems[0].find((item) => item.id === productId);
  };

  const handleclose = () => {
    setdisplayhome(true);
    setdisplayproducts(false);
    setdisplaysignin(false);
    setdisplaycart(false);
  };

  return (
    <div className=" bg-white mt-10 p-4">
      <div className="hero-content flex-row justify-between items-center gap-4">
        <div className="card border border-black shrink-0 max-h-[77vh] max-w-[50vw] overflow-y-auto shadow-2xl bg-base-100 mt-10 ml-12 rounded-xl scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
          <h1 className="text-2xl font-extrabold flex justify-center font-mono items-center p-3 m-2">
            MY CART
          </h1>
          {cartItems.map((cartItem) => {
            const productDetails = getProductDetails(cartItem.productId);
            const amount = parseFloat(productDetails.amount);
            const quantity = parseInt(cartItem.quantity);
            console.log(amount, quantity);

            TotalPrice += amount * quantity;

            return (
              <div key={cartItem.productId} className="flex p-4 m-2 border-b">
                <div className="w-20 h-20 object-contain">
                  <img
                    src={productDetails.image}
                    alt={productDetails.title}
                    className="object-cover"
                  />
                </div>
                <div className="m-4">
                  <h2 className="text-lg font-bold p-3">
                    {productDetails.title}
                  </h2>
                  <div className="flex flex-row  justify-center items-center gap-3 mt-2">
                    <p>Quantity:</p>
                    <button
                      className="bg-blue-500 btn text-2xl  text-white font-extrabold  mr-2"
                      onClick={() => {
                        if (cartItem.quantity > 1) {
                          // Dispatch an action to decrement the quantity in the Redux store
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: {
                              productId: cartItem.productId,
                            },
                          });
                        }
                      }}
                    >
                      -
                    </button>
                    <p className="font-bold"> {cartItem.quantity}</p>
                    <button
                      className="btn bg-green-500 font-extrabold text-2xl  text-white "
                      onClick={() => {
                        dispatch({
                          type: "INCREASE_QUANTITY",
                          payload: {
                            productId: cartItem.productId,
                          },
                        });
                      }}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-ghost bg-red-500 text-white"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: {
                            productId: cartItem.productId,
                          },
                        });
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
                <div className="flex"></div>
                <br></br>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="card  shrink-0 min-h-[40vh] min-w-[30vw] border border-black bg-base-100 m-16  p-3 rounded-xl">
            <h1 className="text-xl font-extrabold flex justify-center font-mono items-center p-2">
              Price Details
            </h1>
            <div className="flex justify-between font-bold items-end m-2 p-1">
              <p>Price</p>
              <p>{TotalPrice}</p>
            </div>
            <div className="flex justify-between font-bold items-end m-2 p-1">
              <p>Discount Price (10% percent)</p>
              <p>{TotalPrice * 0.1}</p>
            </div>
            <div className="flex justify-between font-bold items-end m-2 p-1 ">
              <p>Delivery charge</p>
              <p>100</p>
            </div>
            <hr className="border-t-2 border-black m-2 p-1"></hr>
            <div className="flex justify-between font-bold items-end m-2 p-1">
              <p>Total charge</p>
              <p>{TotalPrice - TotalPrice * 0.1 + 100}</p>
            </div>
          </div>
          <label for="my_modal_6" class="btn bg-blue-400">
            Place Order
          </label>

          <input type="checkbox" id="my_modal_6" class="modal-toggle" />
          <div class="modal" role="dialog">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Dear Customer</h3>
              <p class="py-4">Your Order Has Been Placed Successfully</p>
              <div class="modal-action">
                <label for="my_modal_6" class="btn" onClick={handleclose}>
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
