import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import {
  decreaseQuantity,
  delFromCart,
  increaseQuantity,
} from "../features/cartSlice";
import { Link } from "react-router";

const Cart: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="cart">
      <div className="cart__container container">
        {items.length === 0 && (
          <div className="cart__empty">
            <h2 className="cart__title">Your cart is empty</h2>
            <p className="cart__text">
              Looks like you haven't added any items to the cart yet.
            </p>
            <Link to="/" className="cart__empty-btn btn">
              Go Shopping
            </Link>
          </div>
        )}
        {items.length > 0 && (
          <div className="cart__content">
            <h2 className="cart__title">Your cart</h2>
            <div className="cart__content-info">
              <div className="cart__content-data">
                {items.map((item) => (
                  <div className="cart__item" key={item._id}>
                    <div className="cart__item-content">
                      <div className="cart__img">
                        <img src={item.imageUrl} alt={item.title} />
                      </div>
                      <div className="cart__info">
                        <div>
                          <h4 className="cart__info-title">{item.title}</h4>
                          <h6 className="cart__info-size">
                            <span>Size: </span>
                            {item.size}
                          </h6>
                        </div>
                        <h3 className="cart__info-price">{`$${item.price}`}</h3>
                      </div>
                    </div>
                    <div className="cart__content-control">
                      <button onClick={() => dispatch(delFromCart(item._id))}>
                        <img src="/img/icons/trash_byn.svg" alt="trash byn" />
                      </button>
                      <div className="details__count">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item._id))}
                          className="details__btn details__minus"
                        >
                          <img src="/img/icons/minus.svg" alt="minus" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item._id))}
                          className="details__btn details__plus"
                        >
                          <img src="/img/icons/plus.svg" alt="plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart__summary">
                <h3 className="cart__summary-title">Order Summary</h3>
                <div className="cart__summary-block">
                  <h4 className="cart__summary-total">Total</h4>
                  <h3 className="cart__summary-price">{`$${totalPrice}`}</h3>
                </div>
                <button className="cart__summary-btn btn">
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
