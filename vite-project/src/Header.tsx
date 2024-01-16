import React, { Suspense, useEffect, useState } from "react";
import "./style/Header.css";
import burger from "../assets/icon_burger.png";
import vector from "../assets/Vector.png";

const BootMenu = React.lazy(() => import("./BootMenu.tsx"));

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          {showMenu && <BootMenu />}
        </Suspense>
      </div>
      <div className={isActive ? "dark-color" : ""}></div>
      <div className="boot-menu" onClick={toggleClass}>
        <div className="burger" onClick={toggleMenu}>
          {isOpen ? (
            <>
              <div className="boot-menu-vector">
                <img src={vector} alt="vector" />
              </div>
            </>
          ) : (
            <img src={burger} alt="burger" />
          )}
        </div>
        {isOpen && (
          <div className="boot-menu-list">
            <div>
              <a href="#questions">О приложении</a>
            </div>
            <div>
              <a href="#questions">Скачать приложение</a>
            </div>
            <div>
              <a href="#questions">Вопросы</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
