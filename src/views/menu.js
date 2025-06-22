import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { Navigation } from "swiper/modules";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";

//Link
import { Link } from "react-router-dom";

const Menu = () => {

  const [menu, setMenu] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newDrink, setNewDrink] = useState({ name: "", cost: "", price: "" });
  const [showEdit, setShowEdit] = useState(false);
  const [editDrink, setEditDrink] = useState({ category: "", index: null, name: "", price: "" });

  const handleThemMon = () => setShowAdd(true);
  const handleCloseAdd = () => {
    setNewDrink({ name: "", cost: "", price: "" });
    setShowAdd(false);
  };
  const handleSuggestPrice = () => {
    const cost = parseFloat(newDrink.cost);
    if (isNaN(cost)) return alert("Giá cost phải là số hợp lệ!");
    const markupRate = 2.5;
    const suggested = Math.ceil(cost * (1 + markupRate));
    setNewDrink(prev => ({ ...prev, price: suggested.toString() }));
  };
  const handleSubmit = () => {
    if (!newDrink.name || !newDrink.price) {
      return alert("Vui lòng nhập đầy đủ tên món và giá bán!");
    }
    const updatedMenu = {
      ...menu,
      Custom: [...(menu.Custom || []), { name: newDrink.name, price: newDrink.price }]
    };
    setMenu(updatedMenu);
    localStorage.setItem("menuFinal", JSON.stringify(updatedMenu));
    handleCloseAdd();
  };

  const handleOpenEditMenu = () => {
    if (Object.keys(menu).length === 0) {
      setShowAdd(true);
    } else {
      setShowEdit(true);
    }
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
    setEditDrink({ category: "", index: null, name: "", price: "" });
  };
  const handleSubmitEdit = () => {
    const updatedList = [...menu[editDrink.category]];
    updatedList[editDrink.index] = {
      name: editDrink.name,
      price: editDrink.price
    };
    const updatedMenu = {
      ...menu,
      [editDrink.category]: updatedList
    };
    setMenu(updatedMenu);
    localStorage.setItem("menuFinal", JSON.stringify(updatedMenu));
    handleCloseEdit();
  };


  useEffect(() => {
    const savedMenu = localStorage.getItem("menuFinal");
    if (savedMenu) {
      setMenu(JSON.parse(savedMenu));
    }
  }, []);

  return (
    <Fragment>
      <Row>
        <Col>
          <div className="p-4">
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <h3>Menu của bạn</h3>
              <Button variant="outline-secondary" size="sm" onClick={handleOpenEditMenu}>
                <i class="ri-edit-2-line"></i>
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <div style={{ maxWidth: "400px", width: "100%" }}>
                {Object.keys(menu).length === 0 ? (
                  <div className="alert alert-warning">
                    <p>Chưa có món nào trong menu.</p>
                  </div>
                ) : (
                  Object.entries(menu).map(([loai, list]) => (
                    <div key={loai} className="mb-3">
                      <h6>{loai}</h6>
                      <ul className="list-unstyled">
                        {list.map((item, i) => (
                          <li key={i} className="d-flex justify-content-between border-bottom py-1">
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleThemMon}>
                Thêm món
              </button>
            </div>

            <Modal show={showAdd} onHide={handleCloseAdd} centered>
              <Modal.Header closeButton>
                <Modal.Title>Thêm món mới</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Tên món</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên món"
                      value={newDrink.name}
                      onChange={e => setNewDrink(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>Giá cost (nguyên liệu)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Nhập giá cost"
                      value={newDrink.cost}
                      onChange={e => setNewDrink(prev => ({ ...prev, cost: e.target.value }))}
                    />
                  </Form.Group>

                  <div className="mt-3 text-secondary" style={{ fontSize: "0.9rem" }}>
                    Giá bán = Tổng chi phí × [1 + markup (%)]. Tổng chi phí ở đây chỉ bao gồm giá cost của sản phẩm.<br />
                    • Nếu nông thôn: markup 200% (tương đương hệ số 2.0)<br />
                    • Nếu thành thị: markup 300% (hệ số 3.0)<br />
                    <strong>**Popup này dùng markup 250% (hệ số 2.5) để gợi ý.</strong>
                  </div>

                  <Form.Group className="mt-3">
                    <Form.Label>Giá bán (gợi ý, có thể chỉnh)</Form.Label>
                    <Form.Control
                      type="number"
                      value={newDrink.price}
                      onChange={e => setNewDrink(prev => ({ ...prev, price: e.target.value }))}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleSuggestPrice}>
                  Giá bán
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={showEdit} onHide={handleCloseEdit} centered>
              <Modal.Header closeButton>
                <Modal.Title>Sửa món</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {Object.entries(menu).map(([category, list]) => (
                  <div key={category} className="mb-3">
                    <h6>{category}</h6>
                    {list.map((item, index) => (
                      <Form key={index} className="d-flex gap-2 mb-2 align-items-center">
                        <Form.Control
                          type="text"
                          value={item.name}
                          onChange={(e) => {
                            const updatedMenu = { ...menu };
                            updatedMenu[category][index].name = e.target.value;
                            setMenu(updatedMenu);
                            localStorage.setItem("menuFinal", JSON.stringify(updatedMenu));
                          }}
                        />
                        <Form.Control
                          type="number"
                          value={item.price}
                          onChange={(e) => {
                            const updatedMenu = { ...menu };
                            updatedMenu[category][index].price = e.target.value;
                            setMenu(updatedMenu);
                            localStorage.setItem("menuFinal", JSON.stringify(updatedMenu));
                          }}
                        />
                      </Form>
                    ))}
                  </div>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
      </Row>
    </Fragment >
  );
};

export default Menu;
