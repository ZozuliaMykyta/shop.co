import { useEffect, useState } from "react";
import { Link } from "react-router";
import previewMob from "../../assets/img/home/preview-mob.png";

const Preview: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const previewData = [
    {
      id: 1,
      count: "200+",
      desc: "International Brands",
    },
    {
      id: 2,
      count: "2,000+",
      desc: "High-Quality Products",
    },
    {
      id: 3,
      count: "30,000+",
      desc: "Happy Customers",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 390);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="preview">
      <div className="preview__container container">
        <h1 className="preview__title">find clothes that matches your style</h1>
        <p className="preview__text">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link className="preview__link btn" to="#!">
          Shop Now
        </Link>
        <div className="preview__info">
          {previewData.map((item) => (
            <div className="preview__item" key={item.id}>
              <h4 className="preview__count">{item.count}</h4>
              <h6 className="preview__desc">{item.desc}</h6>
            </div>
          ))}
        </div>
      </div>
      {isVisible && (
        <img src={previewMob} alt="background" className="preview__bg-mob" />
      )}
    </section>
  );
};

export default Preview;
