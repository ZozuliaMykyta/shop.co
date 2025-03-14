import { Link } from "react-router";
import DropdownMenu from "./DropdownMenu";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Header: React.FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [search, setSearch] = useState<boolean>(false);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { items } = useSelector((state: RootState) => state.cart);

  const handleBurger = () => {
    setOpenBurger(!openBurger);
  };
  if (openBurger && window.innerWidth < 1024) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  useEffect(() => {
    const NavHandleClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setOpenBurger(false);
      }
    };

    document.addEventListener("mousedown", NavHandleClick);

    return () => {
      document.removeEventListener("mousedown", NavHandleClick);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    setSearch(!search);
  };
  return (
    <section className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img src="/img/logo.svg" alt="shop.co" />
        </Link>
        <nav
          className={`header__nav ${openBurger ? "burger-is-open" : ""}`}
          ref={navRef}
        >
          <ul className="header__list">
            <DropdownMenu />
            <li className="header__item">
              <Link to="#!">On Sale</Link>
            </li>
            <li className="header__item">
              <Link to="#!">New Arrivals</Link>
            </li>
            <li className="header__item">
              <Link to="#!">Brands</Link>
            </li>
          </ul>
        </nav>
        {isVisible && (
          <div className="header__search">
            <input
              type="text"
              className="header__search-inp"
              placeholder="Search for products..."
            />
            <img
              src="/img/icons/input-search.svg"
              alt="search"
              className="header__search-img"
            />
          </div>
        )}
        <div className="header__info">
          {!isVisible && (
            <div className="header__info-item">
              <div
                className={` ${
                  search ? "header__info-item-mob" : "header__search-mob-dis"
                }`}
              >
                <div
                  className={`header__search ${
                    search ? "header__search-mob" : "header__search-mob-dis"
                  }`}
                >
                  <input
                    type="text"
                    className="header__search-inp"
                    placeholder="Search for products..."
                  />
                  <img
                    src="/img/icons/input-search.svg"
                    alt="search"
                    className="header__search-img"
                  />
                </div>
              </div>
              <img
                src="/img/icons/search.svg"
                alt="search"
                onClick={handleSearch}
              />
            </div>
          )}
          <Link
            className={`header__info-item ${
              items.length > 0 ? "cart__not-empty" : ""
            }`}
            to="/cart"
          >
            <img src="/img/icons/shop.svg" alt="basket" />
          </Link>
          <img
            src="/img/icons/account.svg"
            alt="account"
            className="header__info-item"
          />
        </div>
        <button
          onClick={handleBurger}
          ref={burgerRef}
          className={`header__burger burger ${openBurger ? "opened-menu" : ""}`}
        >
          <span></span>
        </button>
      </div>
    </section>
  );
};

export default Header;
