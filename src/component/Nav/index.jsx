import React from "react";
import { href, Link } from "react-router-dom";

const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Holydays",
    href: "/holydays",
  },
];
const Nav = () => {
  return (
    <div className="sticky top-0 z-50" style={{ margin: 0, padding: 0 }}>
      <nav style={{ backgroundColor: "white", padding: "10px 20px" }}>
        <ul
          style={{
            padding: 0,
            margin: 0,
            listStyle: "none",
            display: "flex",
            justifyContent: "right",
          }}
        >
          {menus.map(function (menu) {
            return (
              <li>
                <Link
                  to={menu.href}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "500",
                    margin: "0 15px",
                    padding: "10px 20px",
                    fontSize: 19,
                  }}
                >
                  {menu.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
