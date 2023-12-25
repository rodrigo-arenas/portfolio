import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./NavBar.css";
import menuConfig from "../../assets/configs/menuConfig";
import GlobalDarkMode from "../DarkMode/GlobalDarkMode";

const NavBarItems = (props) => {
  const { onSelection } = props || {};

  return (
    <Nav>
      {menuConfig.sidebarData.map((item) => (
        <Nav.Item key={item.id}>
          <Nav.Link as={Link} to={item.path} onClick={onSelection}>
            {item.icon}
            <span>{item.title}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
      <Nav.Item>
        <GlobalDarkMode />
      </Nav.Item>
    </Nav>
  );
};

export default NavBarItems;
