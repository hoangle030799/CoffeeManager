import React, { Fragment, memo, useEffect, useState } from "react";

// react-router
import { Link } from "react-router-dom";

// react-bootstrap
import { Navbar, Dropdown } from "react-bootstrap";

// components
import CustomToggle from "../../dropdowns";

// img
import Logo2 from "../../../assets/images/logo2.png";

import user1 from "../../../assets/images/user/1.jpg";

const Header = memo(() => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 75) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`iq-top-navbar ${isFixed ? "fixed-header" : ""}`}>
        <div className="iq-navbar-custom">
          <Navbar expand="lg" variant="light" className="p-0">
            <div className="iq-top-navbar cafe-header">
              <div className="iq-navbar-custom d-flex justify-content-between align-items-center p-2">
                <div className="d-flex align-items-center gap-3">
                  <Link to="/" className="logo d-flex align-items-center gap-2">
                    <img src={Logo2} alt="logo" style={{ height: 30 }} />
                    <span className="fw-bold text-cafe">CafeManager</span>
                  </Link>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <form className="searchbox d-none d-md-block">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Tìm kiếm..."
                      style={{ backgroundColor: "#f3f1ee" }}
                    />
                  </form>

                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} className="d-flex align-items-center">
                      <img src={user1} alt="user" className="rounded-circle" style={{ width: 30, height: 30 }} />
                      <span className="ms-2 text-dark fw-semibold">Admin</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Thông tin</Dropdown.Item>
                      <Dropdown.Item>Đăng xuất</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Navbar>
        </div>
      </div>
    </Fragment>
  );
});

Header.displayName = "Header";
export default Header;
