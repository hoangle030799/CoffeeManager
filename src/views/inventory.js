import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Modal, Button, Form, Table } from "react-bootstrap";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";

const Inventory = () => {

  const [ingredients, setIngredients] = useState(() => {
    const saved = localStorage.getItem("inventory_ingredients");
    return saved ? JSON.parse(saved) : [];
  });

  const [tools, setTools] = useState(() => {
    const saved = localStorage.getItem("inventory_tools");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ type: "ingredient", name: "", quantity: "", unit: "", expiry: "", cost: "" });
  const [selectedName, setSelectedName] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);


  useEffect(() => {
    localStorage.setItem("inventory_ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

  useEffect(() => {
    localStorage.setItem("inventory_tools", JSON.stringify(tools));
  }, [tools]);

  const handleShowModal = () => {
    setModalData({ type: "ingredient", name: "", quantity: "", unit: "", expiry: "", cost: "" });
    setSelectedName("");
    setShowModal(true);
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const getItemList = () => modalData.type === "ingredient" ? ingredients : tools;
  const setItemList = (newList) => modalData.type === "ingredient" ? setIngredients(newList) : setTools(newList);

  const handleAddItem = () => {
    if (
      !modalData.name ||
      !modalData.quantity ||
      (modalData.type === "ingredient" && (!modalData.unit || !modalData.expiry || !modalData.cost))
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const existingItem = getItemList().find(item => item.name === modalData.name);
    let updatedList;

    if (existingItem) {
      const newCost = existingItem.cost + Number(modalData.cost);

      updatedList = getItemList().map(item => {
        if (item.name === modalData.name) {
          return {
            ...item,
            quantity: item.quantity + Number(modalData.quantity),
            cost: modalData.type === "ingredient" ? newCost : item.cost,
            unit: modalData.unit || item.unit,
            expiry: modalData.expiry || item.expiry
          };
        }
        return item;
      });
    } else {
      const newItem = modalData.type === "ingredient"
        ? {
          name: modalData.name,
          quantity: Number(modalData.quantity),
          unit: modalData.unit,
          expiry: modalData.expiry,
          cost: Number(modalData.cost)
        }
        : {
          name: modalData.name,
          quantity: Number(modalData.quantity)
        };
      updatedList = [...getItemList(), newItem];
    }

    setItemList(updatedList);
    setShowModal(false);
  };

  const handleEditItem = () => {
    const updatedList = getItemList().map(item =>
      item.name === selectedName ? {
        ...item,
        name: modalData.name,
        quantity: Number(modalData.quantity),
        cost: modalData.cost ? Number(modalData.cost) : item.cost,
        unit: modalData.unit || item.unit,
        expiry: modalData.expiry || item.expiry
      } : item
    );
    setItemList(updatedList);
    setShowModal(false);
  };

  const handleExportItem = () => {
    const list = getItemList();
    const updatedList = list.map(item => {
      if (item.name === selectedName) {
        const exportQty = Number(modalData.quantity);
        const newQty = item.quantity - exportQty;
        const safeQty = newQty >= 0 ? newQty : 0;

        const newCost = modalData.type === "ingredient"
          ? Math.round(item.cost * (safeQty / item.quantity))
          : item.cost;

        return {
          ...item,
          quantity: safeQty,
          cost: modalData.type === "ingredient" ? newCost : item.cost
        };
      }
      return item;
    });

    setItemList(updatedList);
    setShowModal(false);
  };


  const handleSelectItem = (e) => {
    const value = e.target.value;
    setSelectedName(value);
    const item = getItemList().find(i => i.name === value);

    if (item) {
      setModalData(prev => ({
        ...prev,
        name: item.name,
        quantity: item.quantity,
        unit: item.unit,
        expiry: item.expiry,
        cost: "",
      }));
    }
  };

  const handleDeleteItem = () => {
    if (!deleteTarget) return;

    const currentList = deleteTarget.type === "ingredient" ? ingredients : tools;
    const updatedList = currentList.filter(item => item.name !== deleteTarget.name);

    if (deleteTarget.type === "ingredient") {
      setIngredients(updatedList);
    } else {
      setTools(updatedList);
    }

    setShowDeleteConfirm(false);
    setDeleteTarget(null);
  };

  const confirmDelete = (type, name) => {
    setDeleteTarget({ type, name });
    setShowDeleteConfirm(true);
  };



  return (
    <Fragment>
      <Row>
        <Col>
          <div className="p-4">
            <Row className="mb-3 justify-content-between align-items-center">
              <Col><h3>Quản lý kho</h3></Col>
              <Col xs="auto"><Button onClick={handleShowModal}>Quản lý kho</Button></Col>
            </Row>

            <h5>Nguyên liệu</h5>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Đơn vị</th>
                  <th>Hạn sử dụng</th>
                  <th>Giá cost</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unit}</td>
                    <td>{item.expiry}</td>
                    <td>{item.cost.toLocaleString()}đ</td>
                    <td>
                      <Button variant="outline-danger" size="sm" onClick={() => confirmDelete("ingredient", item.name)}>🗑️</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h5>Dụng cụ</h5>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button variant="outline-danger" size="sm" onClick={() => confirmDelete("tool", item.name)}>🗑️</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Quản lý kho</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Select name="type" value={modalData.type} onChange={(e) => { setModalData({ ...modalData, type: e.target.value }); setSelectedName(""); }} className="mb-3">
                  <option value="ingredient">Nguyên liệu</option>
                  <option value="tool">Dụng cụ</option>
                </Form.Select>

                <Form.Select className="mb-2" value={selectedName} onChange={handleSelectItem}>
                  <option value="">-- Chọn để sửa hoặc xuất --</option>
                  {getItemList().map((item, idx) => (
                    <option key={idx} value={item.name}>{item.name}</option>
                  ))}
                </Form.Select>

                <Form.Control className="mb-2" name="name" placeholder="Tên" value={modalData.name} onChange={handleModalChange} />
                <Form.Control className="mb-2" type="number" name="quantity" placeholder="Số lượng" value={modalData.quantity} onChange={handleModalChange} />

                {modalData.type === "ingredient" && (
                  <>
                    <Form.Control className="mb-2" name="unit" placeholder="Đơn vị (kg, hộp...)" value={modalData.unit} onChange={handleModalChange} />
                    <Form.Control className="mb-2" type="date" name="expiry" value={modalData.expiry} onChange={handleModalChange} />
                    <Form.Control className="mb-2" type="number" name="cost" placeholder="Giá cost" value={modalData.cost} onChange={handleModalChange} />
                  </>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleAddItem}>Nhập</Button>
                <Button variant="warning" onClick={handleEditItem}>Sửa</Button>
                <Button variant="danger" onClick={handleExportItem}>Xuất</Button>
              </Modal.Footer>
            </Modal>
            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Xác nhận xoá</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Bạn có chắc chắn muốn xoá mục <strong>{deleteTarget?.name}</strong> khỏi kho không?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>Không</Button>
                <Button variant="danger" onClick={handleDeleteItem}>Có</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Col>
      </Row>
    </Fragment >
  );
};

export default Inventory;
