import brands1 from "../../assets/img/home/brands-1.svg";
import brands2 from "../../assets/img/home/brands-2.svg";
import brands3 from "../../assets/img/home/brands-3.svg";
import brands4 from "../../assets/img/home/brands-4.svg";
import brands5 from "../../assets/img/home/brands-5.svg";
const Brands: React.FC = () => {
  const brandsImages = [
    {
      id: 1,
      img: brands1,
      desc: "versace",
    },
    {
      id: 2,
      img: brands2,
      desc: "zara",
    },
    {
      id: 3,
      img: brands3,
      desc: "gucci",
    },
    {
      id: 4,
      img: brands4,
      desc: "prada",
    },
    {
      id: 5,
      img: brands5,
      desc: "calvin klein",
    },
  ];
  return (
    <section className="brands">
      <div className="brands__container container">
        <div className="brands__block">
          {brandsImages.map((img) => (
            <div className="brands__item" key={img.id}>
              <img src={img.img} alt={img.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
