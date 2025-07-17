import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Card, Alert, Form, Modal, Button } from "react-bootstrap";
import Chart from "react-apexcharts";

import "swiper/css";
import "swiper/css/pagination";


const Revenue = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("day");
  const [reportData, setReportData] = useState({ labels: [], series: [] });
  const [marketingMessage, setMarketingMessage] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("salesLogs");
    if (raw) {
      const parsed = JSON.parse(raw).map((log) => ({
        ...log,
        timestamp: new Date(log.timestamp),
      }));
      setLogs(parsed);
    } else {
      setLogs([]);
    }
  }, []);

  const getWeekNumber = (date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  };
  const salesLogs = JSON.parse(localStorage.getItem("salesLogs")) || [];
  const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
  const todayLogs = salesLogs.filter(log => log.timestamp.startsWith(today));

  const groupBy = (array, keyFn) => {
    return array.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  };

  useEffect(() => {
    if (logs.length === 0) return;

    let labels = [];
    let data = [];

    if (filter === "day") {
      const grouped = groupBy(logs, (log) => log.timestamp.toDateString());
      labels = Object.keys(grouped);
      data = labels.map((label) =>
        grouped[label].reduce((sum, log) => sum + log.total, 0)
      );
    }

    if (filter === "week") {
      const grouped = groupBy(logs, (log) => {
        const week = getWeekNumber(log.timestamp);
        return `${log.timestamp.getFullYear()}-Tuần ${week}`;
      });
      labels = Object.keys(grouped);
      data = labels.map((label) =>
        grouped[label].reduce((sum, log) => sum + log.total, 0)
      );
    }

    if (filter === "month") {
      const grouped = groupBy(logs, (log) => {
        const m = log.timestamp.getMonth() + 1;
        return `${log.timestamp.getFullYear()}-${m < 10 ? "0" + m : m}`;
      });
      labels = Object.keys(grouped);
      data = labels.map((label) =>
        grouped[label].reduce((sum, log) => sum + log.total, 0)
      );
    }

    setReportData({ labels, series: [{ name: "Doanh thu", data }] });
  }, [logs, filter]);

  useEffect(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const filtered = logs.filter((log) => {
      const date = new Date(log.timestamp);
      return (
        date.getMonth() === previousMonth &&
        date.getFullYear() === previousYear
      );
    });

    const days = new Set(filtered.map((log) => new Date(log.timestamp).toDateString()));
    const weeks = new Set(filtered.map((log) => getWeekNumber(new Date(log.timestamp))));

    if (days.size < 10 || weeks.size < 4) {
      setMarketingMessage([
        "Chưa đủ dữ liệu để đưa ra gợi ý marketing mới. Hãy bán hàng chăm chỉ hơn tháng này nhé!",
      ]);
    } else {
      const timeAnalysis = {
        morningCount: 0,
        weekendCount: 0,
        itemCounts: {},
      };

      filtered.forEach((log) => {
        const date = new Date(log.timestamp);
        const hour = date.getHours();
        const day = date.getDay();

        if (hour < 11) timeAnalysis.morningCount++;
        if (day === 0 || day === 6) timeAnalysis.weekendCount++;

        log.items.forEach((item) => {
          if (!timeAnalysis.itemCounts[item.name]) {
            timeAnalysis.itemCounts[item.name] = 0;
          }
          timeAnalysis.itemCounts[item.name] += item.quantity;
        });
      });

      const topItem = Object.entries(timeAnalysis.itemCounts)
        .sort((a, b) => b[1] - a[1])[0]?.[0] || "";

      const suggestions = [];

      if (timeAnalysis.weekendCount > filtered.length * 0.4) {
        suggestions.push(
          "Tập trung khuyến mãi vào cuối tuần, vì doanh thu cao nhất thường rơi vào thứ 7 và CN."
        );
      }

      if (timeAnalysis.morningCount > filtered.length * 0.3) {
        suggestions.push(
          "Tăng khuyến mãi buổi sáng (trước 11h), vì thời điểm này có nhiều đơn nhất."
        );
      }

      if (topItem) {
        suggestions.push(
          `Tạo combo ưu đãi cho món "${topItem}", vì đây là món được gọi nhiều nhất tháng trước.`
        );
      }

      const selected = suggestions.sort(() => 0.5 - Math.random()).slice(0, 2);
      setMarketingMessage(selected);
    }
  }, [logs]);

  const handleDeleteLog = (id) => {
    const updated = logs.filter(log => log.id !== id);
    setLogs(updated);
    localStorage.setItem("salesLogs", JSON.stringify(updated));
    setShowEditModal(false);
  };

  const handleEditLog = (id) => {
    alert("Hiện tại chức năng sửa đang trong quá trình phát triển.");
  };

  return (
    <Fragment>
      <Col>
        <div className="p-3 border rounded mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">Doanh thu hôm nay</h5>
            <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowEditModal(true)}>
              <i className="ri-edit-line"></i>
            </button>
          </div>

          {todayLogs.length === 0 ? (
            <p className="text-muted mt-2">Chưa có đơn nào hôm nay.</p>
          ) : (
            <div>
              {todayLogs.map((log, index) => (
                <div
                  key={index}
                  className="d-flex flex-column border-bottom pb-2 mb-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>🧾 Đơn #{log.id}</strong>
                    </div>
                    <div className="text-muted">{new Date(log.timestamp).toLocaleTimeString()}</div>
                  </div>

                  <div className="text-secondary mt-1 mb-1">
                    {log.items.map((item, i) => (
                      <span key={i}>
                        {item.name} × {item.quantity} = {item.total.toLocaleString()}đ
                        {i < log.items.length - 1 && " – "}
                      </span>
                    ))}
                  </div>

                  <div className="fw-bold text-end">
                    Tổng: {log.total.toLocaleString()}đ
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Col>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {todayLogs.length === 0 ? (
            <p className="text-muted">Không có đơn nào hôm nay.</p>
          ) : (
            todayLogs.map((log, idx) => (
              <div key={log.id} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <strong>Đơn #{log.id}</strong>
                  <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <ul className="list-unstyled mt-2">
                  {log.items.map((item, i) => (
                    <li key={i}>{item.name} × {item.quantity} = {item.total.toLocaleString()}đ</li>
                  ))}
                </ul>
                <div className="fw-bold mb-2">Tổng: {log.total.toLocaleString()}đ</div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteLog(log.id)}
                >
                  Xóa
                </Button>
              </div>
            ))
          )}
        </Modal.Body>
      </Modal>
      <Row>
        <Col>
          <Card className="p-3 mb-4">
            <h4>Báo cáo doanh thu</h4>
            <Form.Select
              className="mt-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="day">Theo ngày</option>
              <option value="week">Theo tuần</option>
              <option value="month">Theo tháng</option>
            </Form.Select>
            <Chart
              type="bar"
              height={300}
              series={reportData.series}
              options={{
                chart: { stacked: true },
                xaxis: { categories: reportData.labels },
                tooltip: { y: { formatter: (val) => val.toLocaleString() + "đ" } },
                colors: ["#a47551"],
              }}
            />
          </Card>
        </Col>
        <Col>
          <div className="p-3 border rounded bg-white shadow-sm">
            <div className="d-flex align-items-start">
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>📢</span>
              <div>
                <strong>Gợi ý marketing tháng {new Date().getMonth() + 1}</strong>
                <ul className="mb-0" style={{ color: "#333", fontSize: "1rem", lineHeight: "1.5" }}>
                  {marketingMessage.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment >
  );
};

export default Revenue;
