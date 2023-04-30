import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='cart-container'>
      <h1>Cart Items: {cartItems.length} </h1>
      <button
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      <br />
      {cartItems.map((item) => {
        return (
          <div className='cart-item' key={item.id}>
            <p>{item.name}</p>
            <p>Price: {item.price / 100}</p>
            <button
              onClick={() => {
                handleRemoveItem();
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
