import React, { Fragment, useState } from "react";
import { Col, Dropdown, Row, Table, Tab, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Menu from "./menu";
import { use } from "echarts";

const Home = () => {

  const navigate = useNavigate();
  const [tab, setTab] = useState("1");
  const [menuDraft, setMenuDraft] = useState("");
  const [khuVuc, setKhuVuc] = useState("");
  const menuData = {
    "nông thôn": {
      Hot: [
        { name: "Đen đá", price: "13000" },
        { name: "Nâu", price: "15000" },
        { name: "Bạc xỉu", price: "18000" },
      ],
      Cold: [
        { name: "Đen đá", price: "13000" },
        { name: "Nâu", price: "15000" },
        { name: "Bạc xỉu", price: "18000" },
        { name: "Cà phê ủ lạnh", price: "25000" },
      ],
    },
    "thành thị": {
      Hot: [
        { name: "Đen đá", price: "18000" },
        { name: "Nâu", price: "20000" },
        { name: "Bạc xỉu", price: "25000" },
      ],
      Cold: [
        { name: "Đen đá", price: "18000" },
        { name: "Nâu", price: "20000" },
        { name: "Bạc xỉu", price: "25000" },
        { name: "Cà phê ủ lạnh", price: "30000" },
      ],
    },
  };
  const handleChonKhuVuc = (loai) => {
    setKhuVuc(loai);
    setMenuDraft(menuData[loai]);
  };
  const handleSubmit = () => {
    if (menuDraft) {
      localStorage.setItem("menuFinal", JSON.stringify(menuDraft));
      alert("Menu đã được lưu! Bạn có thể chuyển sang trang Menu để xem.");
    }
  };
  const handleClear = () => {
    localStorage.removeItem("menuFinal");
    alert("Menu đã được để trống. Mời bạn chuyển sang trang Menu để tự tạo.");
  };

  const renderMenu = (menu) => (
    <>
      {Object.entries(menu).map(([loai, items]) => (
        <div key={loai} className="mb-4">
          <h6 className="fw-bold">{loai}</h6>
          <ul className="list-unstyled">
            {items.map((item, index) => (
              <li
                key={index}
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
  );

  return (
    <Fragment>
      <Row>
        <Col>
          <Col >
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-center align-items-center">
                <div className="iq-header-title">
                  <h2 className="card-title">
                    Easy Coffee Manager
                  </h2>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <p className="mb-0">
                      <span className="bold">Easy Coffee Manager</span>
                      <span className="text-dark-emphasis">
                        - một nền tảng website được thiết kế dành riêng cho những người đang bắt đầu những bước đầu tiên trong hành trình khởi nghiệp với mô hình quán cà phê mang đi (takeaway). Chúng tôi hiểu rằng bắt đầu một hành trình kinh doanh không hề đơn giản – đặc biệt khi bạn chưa có kinh nghiệm quản lý, nguồn vốn hạn chế hoặc chưa biết nên bắt đầu từ đâu.</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">
                      <i class="ri-bard-fill"></i>Mục tiêu
                    </h5>
                    <p className="mb-0 text-dark-emphasis">
                      Với mục tiêu giúp người mới tiết kiệm thời gian,
                      chi phí và công sức, Easy Coffee Manager mang đến một giao diện
                      đơn giản – dễ dùng – dễ áp dụng, giúp bạn từng bước xây dựng và vận hành quán một cách hiệu quả.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">
                      <i class="ri-bard-fill"></i>Những gì mà Easy Coffee Manager mang đến cho bạn:
                    </h5>
                    <ul className="mb-0 text-body">
                      <li>
                        <strong>Những điều cần lưu ý trước khi bắt đầu:</strong>
                        &nbsp;Lưu ý quan trọng giúp bạn chuẩn bị kỹ lưỡng và tránh sai lầm phổ biến.
                      </li>
                    </ul>
                    <ul className="mb-0 text-body">
                      <li>
                        <strong>Thiết lập menu & Gợi ý cách định giá sản phẩm:</strong>
                        &nbsp;Tạo menu mẫu dành cho người mới, dễ dàng chỉnh sửa. Gợi ý cách định giá sản phẩm hợp lý.
                      </li>
                    </ul>
                    <ul className="mb-0 text-body">
                      <li>
                        <strong>Quản lý kho nguyên liệu:</strong>
                        &nbsp;Tạo hóa đơn nhanh chóng qua pop-up. Hệ thống tự động tính tổng và ghi nhận vào báo cáo doanh thu.
                      </li>
                    </ul>
                    <ul className="mb-0 text-body">
                      <li>
                        <strong>Thêm đơn bán hàng:</strong>
                        &nbsp;Nhanh chóng tạo hoá đơn bán hàng, hệ thống sẽ ghi nhận và cập nhật vào báo cáo doanh thu chi tiết.
                      </li>
                    </ul>
                    <ul className="mb-0 text-body">
                      <li>
                        <strong>Kiểm soát tài chính:</strong>
                        &nbsp;Ghi chép thu – chi, hỗ trợ người dùng có thể nắm được báo cáo doanh thu theo ngày hoặc tháng.
                      </li>
                    </ul>
                    <ul className="mb-0 text-body">
                      <li>
                        <strong>Gợi ý chiến lược marketing cơ bản:</strong>
                        &nbsp;Ý tưởng truyền thông đơn giản, hiệu quả, phù hợp với mô hình quán nhỏ.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex mb-4 gap-3">
                  <div className="media-body">
                    <h5 className="mt-0">
                      <i class="ri-bard-fill"></i>Sứ mệnh
                    </h5>
                    <p className="mb-0">
                      <span className="text-dark-emphasis">Sứ mệnh của chúng tôi là </span>
                      <span className="bold">đơn giản hóa việc khởi nghiệp với mô hình quán cà phê mang đi</span>
                      <span className="text-dark-emphasis"> cho tất cả mọi người – dù bạn là sinh viên,
                        nhân viên văn phòng hay người đang ấp ủ giấc mơ kinh doanh.
                        Easy Coffee Manager không chỉ cung cấp công cụ, mà còn là người bạn đồng hành,
                        cùng bạn hiện thực hóa giấc mơ kinh doanh một cách tự tin và vững chắc.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="iq-card-footer d-flex justify-content-center align-items-center">
                <p className="dancing-script text-body">
                  Easy Coffee Manager – Khởi đầu dễ dàng trong hành trình vận hành quán cà phê của riêng bạn.
                </p>
              </div>
            </div>
          </Col>
          <Tab.Container defaultActiveKey="first">
            <div className="iq-card ">
              <div className="iq-card-header d-flex justify-content-center align-items-center">
                <div className="iq-header-title">
                  <h2 className="card-title">Checklist cần chuẩn bị</h2>
                </div>
              </div>
              <div className="iq-card-body">
                <Tab.Content className="tab-content" id="myTabContent">
                  <Tab.Pane
                    eventKey="first"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck10"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck10"
                        >
                          <p className="bold">Xác định rõ đối tượng khách hàng mục tiêu</p>
                          Đối tượng khách hàng bạn muốn tập trung là ai? Học sinh – sinh viên, dân văn phòng, người đi đường...? Việc xác định đúng khách hàng sẽ quyết định menu, phong cách phục vụ và vị trí đặt quán.
                        </label>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck12"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck12"
                        >
                          <p className="bold">Chọn mô hình kinh doanh phù hợp</p>
                          Chọn mô hình kinh doanh phù hợp <span className="text-body"> xe đẩy đơn giản, quầy bán nhỏ</span>
                          ,hay một <span className="text-body">gian hàng cố định</span>. Mỗi mô hình đều có ưu – nhược điểm riêng cần cân nhắc.
                        </label>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck13"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck13"
                        >
                          <p className="bold">Khảo sát & chọn địa điểm chiến lược</p>
                          Nên chọn khu vực có<span className="text-body"> lưu lượng người qua lại ổn định</span>,
                          như gần trường học, văn phòng, khu dân cư...
                          Việc xác định<span className="text-body"> thành phố hay nông thôn </span>
                          cũng ảnh hưởng đến cách định giá và thiết kế menu.
                        </label>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck14"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck14"
                        >
                          <p className="bold">Lập kế hoạch tài chính ban đầu</p>
                          Ước tính chi phí đầu tư ban đầu: xe/quầy, nguyên liệu, máy móc, ly – nắp – ống hút, marketing,…
                          và chuẩn bị một khoản dự phòng tối thiểu.
                        </label>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck15"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck15"
                        >
                          <p className="bold">Lên menu phù hợp với đối tượng và địa điểm</p>
                          Chọn số lượng sản phẩm vừa phải, dễ thực hiện, nguyên liệu linh hoạt.
                          Đồ uống nên đáp ứng khẩu vị phổ biến tại khu vực bạn bán.
                        </label>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck16"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck16"
                        >
                          <p className="bold">Định giá sản phẩm hợp lý</p>
                          Cân đối giữa chi phí nguyên liệu, chi phí vận hành và mức giá mà khách hàng mục tiêu sẵn sàng chi trả.
                        </label>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between tasks-card"
                      role="alert"
                    >
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck17"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck17"
                        >
                          <p className="bold">Chuẩn bị quy trình vận hành cơ bản</p>
                          Bao gồm quy trình pha chế, vệ sinh dụng cụ, tiếp nhận đơn hàng, đóng gói và giao hàng (nếu có).
                          Điều này giúp đảm bảo chất lượng và tiết kiệm thời gian.
                        </label>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </Col>
        <Col>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-center align-items-center">
              <div className="iq-header-title">
                <h2
                  className="card-title"
                  style={{ paddingLeft: "60px" }}
                >Menu</h2>
                <h5 style={{ paddingLeft: "12px" }}>Bạn đang bán ở đâu?</h5>
                <button className="btn btn-secondary me-3" onClick={() => handleChonKhuVuc("nông thôn")}>
                  Nông thôn
                </button>
                <button className="btn btn-secondary" onClick={() => handleChonKhuVuc("thành thị")}>
                  Thành thị
                </button>
              </div>
            </div>
            <div className="iq-card-body">
              <div>
                {menuDraft && (
                  <>
                    <div
                      className="mt-4 mb-4"
                      style={{ paddingLeft: "111px" }}
                    >
                      {renderMenu(menuDraft)}
                    </div>
                    <div div className="mt-3 d-flex gap-2 justify-content-center">
                      <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit menu
                      </button>
                      <button onClick={handleClear} className="btn btn-outline-secondary">
                        Để trống và tự tạo menu
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment >
  );
};

export default Home;
