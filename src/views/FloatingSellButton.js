import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FloatingSellButton = () => {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState({});
    const [orderItems, setOrderItems] = useState([]);
    const [tempItem, setTempItem] = useState("");
    const [tempQuantity, setTempQuantity] = useState(1);
    const [tempPrice, setTempPrice] = useState(0);
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
        setTempItem(value);
        for (const list of Object.values(menu)) {
            const item = list.find((i) => i.name === value);
            if (item) {
                setTempPrice(Number(item.price));
                break;
            }
        }
    };

    const handleAddItem = () => {
        if (!tempItem || tempQuantity <= 0) return;

        const total = tempPrice * tempQuantity;
        setOrderItems([
            ...orderItems,
            {
                name: tempItem,
                quantity: tempQuantity,
                price: tempPrice,
                total,
            },
        ]);

        // Reset món tạm
        setTempItem("");
        setTempQuantity(1);
        setTempPrice(0);
    };

    const handleSubmit = () => {
        if (orderItems.length === 0) {
            alert("Vui lòng thêm ít nhất một món.");
            return;
        }

        const total = orderItems.reduce((acc, item) => acc + item.total, 0);
        const newSale = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            items: orderItems,
            total,
        };

        const logs = JSON.parse(localStorage.getItem("salesLogs")) || [];
        logs.push(newSale);
        localStorage.setItem("salesLogs", JSON.stringify(logs));

        alert("Đã lưu đơn hàng.");
        handleClose();
        window.location.reload();
    };
    return (
        <>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 9999,
                }}
            >
                <Button
                    variant="outline-secondary"
                    className="rounded-circle d-flex justify-content-center align-items-center text-center shadow"
                    style={{
                        backgroundColor: "rgb(166, 114, 74)", // Màu cafe sữa
                        width: "48px",
                        height: "48px",
                        fontSize: "24px",
                        border: "none",
                        marginBottom: "60px"
                    }}
                    onClick={handleOpen}
                >
                    <i className="ri-add-line m-0"></i>
                </Button>
            </div >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bán hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Chọn món</Form.Label>
                        <Form.Select value={tempItem} onChange={handleItemChange}>
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
                            value={tempQuantity}
                            onChange={(e) => setTempQuantity(Number(e.target.value))}
                            min={1}
                        />
                    </Form.Group>

                    <Button variant="outline-primary" onClick={handleAddItem}>
                        ➕ Thêm vào đơn hàng
                    </Button>

                    {orderItems.length > 0 && (
                        <div className="mt-3">
                            <h6>Danh sách món đã chọn:</h6>
                            <ul>
                                {orderItems.map((item, idx) => (
                                    <li key={idx}>
                                        {item.name} × {item.quantity} = {item.total.toLocaleString()}đ
                                    </li>
                                ))}
                            </ul>
                            <p><strong>Tổng: {orderItems.reduce((a, i) => a + i.total, 0).toLocaleString()}đ</strong></p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <button
                        className="btn"
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: "rgb(166, 114, 74)",
                            color: "#fff",
                        }}
                    >
                        Xác nhận bán
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FloatingSellButton;