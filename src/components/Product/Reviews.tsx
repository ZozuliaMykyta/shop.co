import { Rating } from "../Rating";
import check from "../../assets/img/icons/check.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../features/reviewsSlice";
import arrow from "../../assets/img/icons/menu-arrow.svg";
import Popup from "./Popup";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface INewReview {
  _id: string;
  full_name: string;
  comment: string;
  date: Date;
  rating: number;
}

const Reviews: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>("Latest");
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewReview>();
  const dispatch = useDispatch<AppDispatch>();

  const { items, status, error } = useSelector(
    (state: RootState) => state.reviews
  );

  useEffect(() => {
    dispatch(fetchReviews(isSelected));
  }, [dispatch, isSelected]);

  if (status === "loading") {
    return (
      <div className="warning__container container">
        <p className="loading">Loading reviews...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="error__container container">
        <p className="error">Error: {error}</p>
      </div>
    );
  }

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeFilter = (option: string) => {
    setIsSelected(option);
    setIsOpen(false);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const onSubmit: SubmitHandler<INewReview> = async (data) => {
    try {
      await axios.post("http://localhost:3000/reviews", data);
      alert("Review was added!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message);
      } else {
        console.error("Unexpected error:", err);
      }
      alert("Failed to add review. Please try again.");
    }
  };

  return (
    <>
      <div className="reviews__nav">
        <div className="reviews__count">
          <p>
            All Reviews <span>{`(${items.length})`}</span>
          </p>
        </div>
        <div className="reviews__filter-block">
          <div className="reviews__filter">
            <div className="reviews__filter-cont">
              <button
                className="reviews__filter-btn reviews__filter-changed"
                onClick={() => handleMenu()}
              >
                {isSelected}
              </button>
              <img
                className={`reviews__arrow ${isOpen ? "reviews__opened" : ""}`}
                src={arrow}
                alt="arrow"
              />
            </div>
            {isOpen && (
              <ul className="reviews__list">
                {isSelected === "Latest" && (
                  <li
                    className="reviews__filter-item reviews__filter-changed"
                    onClick={() => changeFilter("Newest")}
                  >
                    Newest
                  </li>
                )}
                {isSelected === "Newest" && (
                  <li
                    className="reviews__filter-item reviews__filter-changed"
                    onClick={() => changeFilter("Latest")}
                  >
                    Latest
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="reviews__review">
            <button
              className="reviews__review-btn btn"
              onClick={() => setPopupOpen(true)}
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>
      <div className="reviews__block">
        {items.slice(0, visibleCount).map((review) => (
          <div className="reviews__content" key={review._id}>
            <div className="reviews__rating">
              <Rating rating={review.rating} />
            </div>
            <div className="reviews__name">
              <h4>{review.full_name}</h4>
              <img src={check} alt="check" />
            </div>
            <p className="reviews__text">{review.comment}</p>
            <h6 className="reviews__date">{`Posted on ${review.date}`}</h6>
          </div>
        ))}
        {visibleCount < items.length && (
          <button
            className="reviews__btn-more"
            onClick={() => handleLoadMore()}
          >
            Load More Reviews
          </button>
        )}
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <div className="reviews__popup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="reviews__input-cont">
              <p className="reviews__input-desc">Enter your name</p>
              <input
                className="reviews__input"
                {...register("full_name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-я]+$/,
                    message: "Name must contain only letters",
                  },
                })}
                type="text"
                placeholder="Nollie Lawerence"
              />
              {errors.full_name && (
                <p className="reviews__error">{errors.full_name.message}</p>
              )}
            </div>
            <div className="reviews__input-cont">
              <p className="reviews__input-desc">Your rating (1-5)</p>
              <input
                className="reviews__input"
                type="number"
                min="1"
                max="5"
                placeholder="5"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is required",
                  },
                  min: {
                    value: 1,
                    message: "Rating must be at least 1",
                  },
                  max: {
                    value: 5,
                    message: "Rating must not exceed 5",
                  },
                  valueAsNumber: true,
                })}
              />
              {errors.rating && (
                <p className="reviews__error">{errors.rating.message}</p>
              )}
            </div>
            <div className="reviews__input-cont">
              <p className="reviews__input-desc">Enter your review</p>
              <textarea
                className="reviews__input reviews__textarea"
                placeholder="liquam quis turpis eget elit."
                {...register("comment", {
                  required: {
                    value: true,
                    message: "Review is required",
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-я]+$/,
                    message: "Name must contain only letters",
                  },
                })}
              />
              {errors.comment && (
                <p className="reviews__error">{errors.comment.message}</p>
              )}
            </div>
            <button className="reviews__popup-btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </Popup>
    </>
  );
};

export default Reviews;
