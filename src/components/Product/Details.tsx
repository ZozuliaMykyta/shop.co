import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useParams } from "react-router";
import { Rating } from "../Rating";
import { useState } from "react";
import { addToCart } from "../../features/cartSlice";

const Details: React.FC = () => {
  const [activeSizeId, setActiveSizeId] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);
  const { id } = useParams<{ id: string }>();

  const { items } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  const product = items.find((item) => item._id === id);

  if (!product) {
    return (
      <div className="error__container">
        <div className="error">Product not found!</div>
      </div>
    );
  }

  const detailsSizeBtns = [
    {
      id: "Small",
      desc: "Small",
    },
    {
      id: "Medium",
      desc: "Medium",
    },
    {
      id: "Large",
      desc: "Large",
    },
    {
      id: "X-Large",
      desc: "X-Large",
    },
  ];
  const handleSizeClick = (id: string) => {
    setActiveSizeId(id);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleAddToCart = (_id: string, count: number) => {
    if (!activeSizeId) {
      alert("Please select a size before adding to cart!");
      return;
    }
    dispatch(addToCart({ ...product, quantity: count, size: activeSizeId }));
  };
  return (
    <section className="details">
      <div className="details__container container">
        <div className="details__block">
          <div className="details__img">
            <img src={product.imageUrl} alt={product.description} />
          </div>
          <div className="details__content">
            <h2 className="details__title title">{product.title}</h2>
            <Rating rating={product.rating ?? 1} />
            <h4 className="details__price">{`$${product.price}`}</h4>
            <p className="details__desc">{product.description}</p>
            <div className="details__size">
              <ul className="details__size-list">
                {detailsSizeBtns.map((el, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSizeClick(el.id)}
                      className={`details__size-btn ${
                        activeSizeId === el.id ? "details__size-btn-act" : ""
                      }`}
                    >
                      {el.desc}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="details__card">
              <div className="details__count">
                <button
                  onClick={handleDecrement}
                  className="details__btn details__minus"
                >
                  <img src="/img/icons/minus.svg" alt="minus" />
                </button>
                <span>{count}</span>
                <button
                  onClick={handleIncrement}
                  className="details__btn details__plus"
                >
                  <img src="/img/icons/plus.svg" alt="plus" />
                </button>
              </div>
              <button
                className="details__card-btn btn"
                onClick={() => handleAddToCart(product._id, count)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
