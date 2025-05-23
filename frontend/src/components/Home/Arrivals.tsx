import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../features/productsSlice";
import { Rating } from "../Rating";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";

interface ArrivalsProps {
  title: string;
  count: number;
  border: boolean;
}
const Arrivals: React.FC<ArrivalsProps> = ({ title, count, border }) => {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const { items, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <section className="arrivals">
        <div className="arrivals__container container">
          <h2 className="arrivals__title title">{title}</h2>
          <p className="loading">Loading products...</p>
        </div>
      </section>
    );
  }

  if (status === "failed") {
    return (
      <section className="arrivals">
        <div className="arrivals__container container">
          <h2 className="arrivals__title title">{title}</h2>
          <p className="error">Error: {error}</p>
        </div>
      </section>
    );
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(visibleCount + count);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <section className="arrivals">
      <div
        className={`arrivals__container container ${
          border ? "arrivals__border" : ""
        }`}
      >
        <h2 className="arrivals__title title">{title}</h2>
        <ul className="arrivals__list">
          {items.slice(1, visibleCount).map((product) => {
            return (
              <Link
                to={`/details/${product._id}`}
                className="arrivals__item"
                key={product._id}
              >
                <div className="arrivals__img">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <h3 className="arrivals__item-title">{product.title}</h3>
                <Rating rating={product.rating ?? 1} />
                <p className="arrivals__price">${product.price}</p>
              </Link>
            );
          })}
        </ul>
        {(visibleCount === 5 || visibleCount === 4) && (
          <button
            className="arrivals__button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
          >
            View All
          </button>
        )}
      </div>
    </section>
  );
};

export default Arrivals;
