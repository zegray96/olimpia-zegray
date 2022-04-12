import React, { useState } from "react";
import logo from "../img/logo.svg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isVisibleItems, setIsVisibleItems] = useState(false);

  const itemsMenu = [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Relojes",
      url: "/category/relojes",
    },
    {
      title: "Acero Blanco",
      url: "/category/acero-blanco",
    },
    {
      title: "Acero Dorado",
      url: "/category/acero-dorado",
    },
    {
      title: "Acero Quirúrgico",
      url: "/category/acero-quirurgico",
    },
  ];

  // Cuando se cambie el tamaño de pantalla se reestableceran los valores
  window.addEventListener("resize", function () {
    setIsVisibleItems(false);
  });

  // Funcion para mostrar el menu cuando tenemos vista de celular - tablet
  const displayItems = () => {
    setIsVisibleItems(isVisibleItems ? false : true);
  };

  return (
    <>
      <header className="header">
        <div className="firstDiv">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="hamburguerDiv">
            <button
              id="hamburgerButton"
              onClick={() => displayItems()}
              className={`hamburger hamburger--collapse ${
                isVisibleItems ? "is-active" : ""
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <div className="secondDiv">
          <CartWidget />
        </div>

        <nav className={`divItemsMenu ${isVisibleItems ? "showNav" : ""}`}>
          <ul>
            {itemsMenu.map((item) => (
              <li key={item.title}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
