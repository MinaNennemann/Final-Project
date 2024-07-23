import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <nav className="Navbar">
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>

            <li>
              <Link to="/authors">Authors</Link>
            
            </li>
            <li>
              <Link to="/quoteoftheday">Quote of The Day</Link>
            
            </li>

            <li>
              <Link to="/about">About</Link>
            
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Button className="menu-icon" type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
        </div>
      </nav>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={visible}
      >
        <ul className="drawer-links" onClick={onClose}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
              <Link to="/authors">Authors</Link>
            
            </li>
            <li>
              <Link to="/about">About</Link>
            
            </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Drawer>
    <hr className="NavbarDivider" />
    </div>
  );
}

export default Navbar;
