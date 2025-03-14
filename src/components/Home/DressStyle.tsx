import { Link } from "react-router";
import style1 from "../../assets/img/home/style-1.jpeg";
import style2 from "../../assets/img/home/style-2.jpeg";
import style3 from "../../assets/img/home/style-3.jpeg";
import style4 from "../../assets/img/home/style-4.jpeg";
const DressStyle = () => {
  const dressStyles = [
    {
      id: 1,
      image: style1,
      desc: "Casual",
    },
    {
      id: 2,
      image: style2,
      desc: "Formal",
    },
    {
      id: 3,
      image: style3,
      desc: "Party",
    },
    {
      id: 4,
      image: style4,
      desc: "Gym",
    },
  ];
  return (
    <section className="style">
      <div className="style__container container">
        <h2 className="style__title title">browse by dress style</h2>
        <div className="style__block">
          {dressStyles.map((style) => (
            <Link to="#!" className="style__item" key={style.id}>
              <img src={style.image} alt={style.desc} className="style__img" />
              <span className="style__desc">{style.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
