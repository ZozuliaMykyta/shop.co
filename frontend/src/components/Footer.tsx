import { Link } from "react-router";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import visa from "../assets/img/icons/Visa.svg";
import mastercard from "../assets/img/icons/Mastercard.svg";
import paypal from "../assets/img/icons/Paypal.svg";
import applePay from "../assets/img/icons/ApplePay.svg";
import gPay from "../assets/img/icons/GPay.svg";

const Footer: React.FC = () => {
  const socialIcons = [
    { id: 1, name: "Twitter", icon: <FaTwitter /> },
    { id: 2, name: "Facebook", icon: <FaFacebookF /> },
    { id: 3, name: "Instagram", icon: <FaInstagram /> },
    { id: 4, name: "GitHub", icon: <FaGithub /> },
  ];

  const paymentIcons = [
    {
      name: "visa",
      icon: visa,
    },
    {
      name: "mastercard",
      icon: mastercard,
    },
    {
      name: "paypal",
      icon: paypal,
    },
    {
      name: "applePay",
      icon: applePay,
    },
    {
      name: "gPay",
      icon: gPay,
    },
  ];

  const footerCategories = [
    {
      category: "Company",
      categoryList: ["About", "Features", "Works", "Career"],
    },
    {
      category: "Help",
      categoryList: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      category: "FAQ",
      categoryList: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
      category: "Resources",
      categoryList: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__block">
          <div className="footer__item">
            <img src="/img/logo.svg" alt="shop.co" />
            <h6 className="footer__sub-title">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </h6>
            <div className="footer__social">
              <ul className="footer__social-list">
                {socialIcons.map((icon) => (
                  <Link to="#!" className="footer__social-item" key={icon.id}>
                    {icon.icon}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {footerCategories.map((categoryItem, index) => (
            <div className="footer__item" key={index}>
              <h5 className="footer__category">{categoryItem.category}</h5>
              <ul className="footer__category-list">
                {categoryItem.categoryList.map((item, index) => (
                  <li className="footer__category-item" key={index}>
                    <Link to="#!">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__rights">
          <div className="footer__copyrights">
            <span>Shop.co © 2000-2023, All Rights Reserved</span>
          </div>
          <div className="footer__payment">
            {paymentIcons.map((el, index) => (
              <div className="footer__payment-el" key={index}>
                <img src={el.icon} alt={el.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
