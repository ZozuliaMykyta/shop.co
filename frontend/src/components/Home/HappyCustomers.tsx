import { useEffect, useState } from "react";

import star from "../../assets/img/icons/yellow-star.svg";
import check from "../../assets/img/icons/check.svg";
import arrowLeft from "../../assets/img/home/icons/customers-arrow-left.svg";
import arrowRight from "../../assets/img/home/icons/customers-arrow-right.svg";
import axios from "axios";

interface IReview {
  _id: string;
  first_name: string;
  last_name: string;
  text: string;
  rating: number;
}

const HappyCustomers: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError("");
        const response = await axios.get<IReview[]>(
          "http://localhost:3000/happyreviews"
        );
        setReviews(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError("Something went wrong while fetching data");
        } else {
          setError("Unexpected error occurred");
        }
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const slider = document.querySelector(
      "#customers__slider"
    ) as HTMLElement | null;

    if (slider && (slider as any).swiper) {
      const swiper = (slider as any).swiper;
      swiper.params.navigation.prevEl = ".customers__button-prev";
      swiper.params.navigation.nextEl = ".customers__button-next";
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className="customers">
      <div className="customers__container container">
        <h2 className="customers__title title">our happy customers</h2>
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <div>
            <swiper-container
              id="customers__slider"
              space-between="20"
              slides-per-view="3"
              slides-per-group="3"
              breakpoints={JSON.stringify({
                320: {
                  slidesPerView: 1.3,
                  slidesPerGroup: 1,
                },

                768: {
                  slidesPerView: 2.5,
                  slidesPerGroup: 2,
                },

                1024: {
                  slidesPerView: 3,
                },
              })}
            >
              {reviews.map((review) => (
                <swiper-slide id="customers__slide" key={review._id}>
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt="Star"
                      className="customers__star"
                    />
                  ))}
                  <h4 className="customers__name">
                    {review.first_name} {review.last_name}
                    <img src={check} alt="check" />
                  </h4>
                  <p className="customers__review">"{review.text}"</p>
                </swiper-slide>
              ))}
            </swiper-container>
            <div className="customers__navigation">
              <button className="customers__button customers__button-prev">
                <img src={arrowLeft} alt="left" />
              </button>
              <button className="customers__button customers__button-next">
                <img src={arrowRight} alt="right" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HappyCustomers;
