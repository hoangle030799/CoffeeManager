import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FloatingSellButton = () => {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState({});
    const [selectedItem, setSelectedItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const menuData = localStorage.getItem("menuFinal");
        if (menuData) setMenu(JSON.parse(menuData));
    }, []);

    const handleOpen = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setSelectedItem("");
        setQuantity(1);
        setPrice(0);
    };

    const handleItemChange = (e) => {
        const value = e.target.value;
        setSelectedItem(value);

        let found = null;
        for (const list of Object.values(menu)) {
            const item = list.find(i => i.name === value);
            if (item) {
                found = item;
                break;
            }
        }
        if (found) setPrice(found.price);
    };

    const handleSubmit = () => {
        if (!selectedItem || !quantity || quantity <= 0) {
            alert("Vui lòng chọn món và nhập số lượng hợp lệ.");
            return;
        }

        const total = price * quantity;
        const newSale = {
            name: selectedItem,
            quantity: Number(quantity),
            price: Number(price),
            total,
            timestamp: new Date().toISOString()
        };

        const logs = JSON.parse(localStorage.getItem("salesLogs")) || [];
        logs.push(newSale);
        localStorage.setItem("salesLogs", JSON.stringify(logs));

        alert(`Đã lưu đơn bán: ${selectedItem} × ${quantity} = ${total.toLocaleString()}đ`);
        handleClose();
    };

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 9999
                }}
            >
                <Button variant="success" onClick={handleOpen}>
                    Bán hàng
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bán hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Chọn món</Form.Label>
                        <Form.Select value={selectedItem} onChange={handleItemChange}>
                            <option value="">-- Chọn món --</option>
                            {Object.entries(menu).map(([loai, items]) =>
                                items.map((item, idx) => (
                                    <option key={idx} value={item.name}>
                                        {item.name} ({loai})
                                    </option>
                                ))
                            )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min={1}
                        />
                    </Form.Group>

                    {selectedItem && (
                        <p>
                            Giá mỗi món: <strong>{price.toLocaleString()}đ</strong><br />
                            Tổng tiền: <strong>{(price * quantity).toLocaleString()}đ</strong>
                        </p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                    <Button variant="primary" onClick={handleSubmit}>Xác nhận bán</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FloatingSellButton;