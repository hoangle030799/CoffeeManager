import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Dropdown, Row, Table, Tab, Nav } from "react-bootstrap";
// Chart
import Chart from "react-apexcharts";

// Img
import user from "../assets/images/user/04.jpg"
import user1 from "../assets/images/user/05.jpg";
import user2 from "../assets/images/user/06.jpg";
import user3 from "../assets/images/user/07.jpg";
import user4 from "../assets/images/user/08.jpg";
import user5 from "../assets/images/user/09.jpg";
import user6 from "../assets/images/user/10.jpg";
import user7 from "../assets/images/user/01.jpg";
import user8 from "../assets/images/user/02.jpg";
import user9 from "../assets/images/user/03.jpg";
import user10 from "../assets/images/page-img/30.png";
import user11 from "../assets/images/page-img/31.png";
import user12 from "../assets/images/page-img/32.png";
import user13 from "../assets/images/page-img/33.png";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Navigation } from "swiper/modules";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";

//Link
import { Link } from "react-router-dom";

const Menu = () => {

  const location = useLocation();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (location.state?.menu) {
      setMenu(location.state.menu);
    } else {
      // nếu không có menu thì để menu là object rỗng (menu chưa tạo)
      setMenu({});
    }
  }, [location]);

  const handleThemMon = () => {
    alert("Tính năng thêm món sẽ được triển khai sau.");
    // hoặc: chuyển hướng về trang thêm món /easy-coffee
  };

  return (
    <Fragment>
      <Row>
        <Col>
          <div className="p-4">
            <h3>Menu của bạn</h3>

            {/* Nếu chưa có dữ liệu */}
            {(!menu || Object.keys(menu).length === 0) ? (
              <div className="alert alert-warning mt-3">
                <p className="mb-2">Chưa có món nào trong menu.</p>
              </div>
            ) : (
              // Nếu đã có menu rồi
              <>
                {Object.entries(menu).map(([loai, list]) => (
                  <div key={loai} className="mb-4">
                    <h6 className="fw-bold">{loai}</h6>
                    <ul className="list-unstyled">
                      {list.map((item, i) => (
                        <li
                          key={i}
                          className="d-flex justify-content-between border-bottom py-1"
                          style={{ maxWidth: "350px" }}
                        >
                          <span>{item.name}</span>
                          <span>{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
            {/* Nút thêm món */}
            <div className="container">
              <div className="row justify-content-center mt-4">
                <div className="col-auto">
                  <button className="btn btn-primary">➕ Thêm món</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-center align-items-center">
              <div className="iq-header-title">
                <h2 className="card-title">Menu</h2>
              </div>
            </div>
            <div className="iq-card-body">
              <div>
                <h5>Bạn đang bán ở đâu?</h5>
                <button className="btn btn-secondary me-3" onClick={() => handleChonKhuVuc("nông thôn")}>
                  Nông thôn
                </button>
                <button className="btn btn-secondary" onClick={() => handleChonKhuVuc("thành thị")}>
                  Thành thị
                </button>

                {menuDraft && (
                  <>
                    <div className="mt-4">{renderMenu(menuDraft)}</div>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Submit menu
                    </button>
                  </>
                )}
              </div>
            </div>
          </div> */}
        </Col>
      </Row>
    </Fragment >
  );
};

export default Menu;
