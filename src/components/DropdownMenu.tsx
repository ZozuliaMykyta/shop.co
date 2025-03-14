import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import menuArrow from "../assets/img/icons/menu-arrow.svg";

const DropdownMenu: React.FC = () => {
  const categories = [
    {
      id: "women",
      title: "Women",
      items: ["T-shirts", "Jackets", "shirts"],
    },
    {
      id: "men",
      title: "Men",
      items: ["T-shirts", "Jackets", "shirts"],
    },
  ];

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategory = (id: string) => {
    const category = categoryRefs.current[id];
    if (category) {
      category.style.display =
        category.style.display === "block" ? "none" : "block";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);

        for (const key in categoryRefs.current) {
          if (categoryRefs.current[key]) {
            categoryRefs.current[key]!.style.display = "none";
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="header__item header__item-menu">
      <div
        className="header__item-menu-ar"
        onClick={toggleMenu}
        ref={buttonRef}
      >
        Shop
        <img
          className={`header__item-menu-img ${isMenuOpen ? "rotate" : ""}`}
          src={menuArrow}
          alt="arrow"
        />
      </div>
      <div
        ref={(el) => (menuRef.current = el)}
        style={{ display: isMenuOpen ? "block" : "none" }}
        className="header__sub-items"
      >
        {categories.map((category) => (
          <div key={category.id} className="header__sub-items-el">
            <div
              onClick={() => toggleCategory(category.id)}
              className="header__sub-category"
            >
              {category.title}
            </div>
            <div
              ref={(el) => (categoryRefs.current[category.id] = el)}
              style={{ display: "none" }}
              className="header__sub-item"
            >
              {category.items.map((item) => (
                <div key={item}>
                  <Link to="#!">{item}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </li>
  );
};

export default DropdownMenu;
