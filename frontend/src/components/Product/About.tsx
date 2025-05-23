import { useState } from "react";
import Reviews from "./Reviews";

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "product-details"
  );

  const productCategories = [
    {
      id: "product-details",
      categ: "Product Details",
    },
    {
      id: "rating-reviews",
      categ: "Rating & Reviews",
    },
  ];

  const handleCategory = (id: string) => {
    setActiveCategory(id);
  };
  return (
    <section className="about">
      <div className="about__container container">
        <ul className="about__categories-list">
          {productCategories.map((category) => (
            <li
              className={`about__categories-item ${
                activeCategory === category.id ? "about__categories-active" : ""
              }`}
              key={category.id}
              onClick={() => handleCategory(category.id)}
            >
              {category.categ}
            </li>
          ))}
        </ul>
        <div className="about__content">
          {activeCategory === "product-details" && (
            <div className="about__details">
              <p className="about__details-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                necessitatibus similique repellat vel sint nemo, dolore itaque
                ducimus accusamus vitae quasi beatae libero harum pariatur a
                unde eos voluptatibus voluptate, veniam maxime nihil? Atque
                nobis, nisi porro officiis, distinctio rem repellendus dicta
                nemo doloribus praesentium velit ducimus est blanditiis culpa
                eligendi facilis quia? Quas, natus dolore ut excepturi, ratione
                odit aperiam, voluptatibus quam deleniti nostrum perferendis
                autem pariatur sit laborum nisi facilis adipisci amet!
                Aspernatur beatae necessitatibus in earum officiis ducimus iste
                obcaecati aperiam. Commodi facilis doloribus praesentium,
                consequatur repellendus at vel accusamus ipsam recusandae velit
                sequi autem quaerat, cum minima quod et. Non nesciunt et
                suscipit amet possimus quidem velit nisi a ea reiciendis maiores
                dignissimos fuga dolor deleniti repellendus rem at nam error hic
                nihil, id facilis neque. Adipisci veniam ex modi eos quia itaque
                a consequatur asperiores sequi nulla architecto, soluta
                dignissimos quae et aut quas impedit vel ad! Obcaecati, dolorem
                ipsam modi veritatis labore voluptatibus atque odit dolores
                maxime, quo praesentium aspernatur, eligendi aliquam accusantium
                inventore repudiandae exercitationem facilis. Accusamus unde rem
                tenetur enim laudantium quia aut voluptas delectus nostrum
                fugiat hic quos et earum, molestiae perferendis doloremque
                consequatur sit quo, ad facere! Excepturi, fugiat molestiae.
              </p>
            </div>
          )}
          {activeCategory === "rating-reviews" && <Reviews />}
        </div>
      </div>
    </section>
  );
};

export default About;
