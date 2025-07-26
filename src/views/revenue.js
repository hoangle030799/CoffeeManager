import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Card, Form, Modal, Button } from "react-bootstrap";
import Chart from "react-apexcharts";

import "swiper/css";
import "swiper/css/pagination";

const Revenue = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("day");
  const [reportData, setReportData] = useState({ labels: [], series: [] });
  const [marketingMessage, setMarketingMessage] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredLogs = logs.filter(
    (log) =>
      new Date(log.timestamp).toDateString() === selectedDate.toDateString()
  );
  const handleDownloadLogs = () => {
    const selectedDateLogs = logs.filter((log) => {
      const logDate = new Date(log.timestamp);
      return (
        logDate.getFullYear() === selectedDate.getFullYear() &&
        logDate.getMonth() === selectedDate.getMonth() &&
        logDate.getDate() === selectedDate.getDate()
      );
    });

    if (selectedDateLogs.length === 0) {
      alert("Không có dữ liệu để tải xuống.");
      return;
    }

    const dateStr = selectedDate.toLocaleDateString("vi-VN");
    let csv = "\uFEFF";
    csv += `,Doanh thu ngày ${dateStr}\n\n`;
    let totalRevenue = 0;

    selectedDateLogs.forEach((log) => {
      const time = new Date(log.timestamp).toLocaleTimeString("vi-VN");

      csv += "ID,Thời gian,Tên món,Số lượng,Đơn giá\n";

      log.items.forEach((item, idx) => {
        const idCell = idx === 0 ? `"=""${log.id}"""` : "";
        const timeCell = idx === 0 ? time : "";
        const priceFormatted = item.price.toLocaleString("vi-VN") + "₫";
        csv += `${idCell},${timeCell},"${item.name}",${item.quantity},${priceFormatted}\n`;
      });

      const totalFormatted = log.total.toLocaleString("vi-VN") + "₫";
      csv += `,,,Tổng đơn: ${totalFormatted}\n\n`;
      totalRevenue += log.total;
    });

    // Dòng tổng doanh thu trong ngày
    const totalRevenueFormatted = totalRevenue.toLocaleString("vi-VN") + "₫";
    csv += `,Tổng doanh thu trong ngày: ${totalRevenueFormatted}\n`;

    // Tạo file và tải
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `doanhthu_${selectedDate.toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

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

  const selectedDateLogs = salesLogs.filter((log) => {
    const logDate = new Date(log.timestamp);
    return (
      logDate.getFullYear() === selectedDate.getFullYear() &&
      logDate.getMonth() === selectedDate.getMonth() &&
      logDate.getDate() === selectedDate.getDate()
    );
  });
  const groupBy = (array, keyFn) => {
    return array.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  };
  const handleDeleteLog = (id) => {
    const updated = logs.filter(log => log.id !== id);
    setLogs(updated);
    localStorage.setItem("salesLogs", JSON.stringify(updated));
    setShowEditModal(false);
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

  return (
    <Fragment>
      <Col>
        <div className="p-3 border rounded mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="form-group d-flex align-items-center mb-3">
              <label htmlFor="revenueDate" className="me-4 fw-semibold text-nowrap" style={{ minWidth: '100px' }}>
                Doanh thu ngày
              </label>
              <input
                type="date"
                id="revenueDate"
                className="form-control custom-date-input"
                value={selectedDate.toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
              />
            </div>
            <div className="form-group d-flex align-items-center mb-3">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowEditModal(true)}>
                <i className="ri-edit-line"></i>
              </button>
              <Button
                variant="outline-primary"
                size="sm"
                className="ms-2 btn btn-outline-secondary"
                onClick={handleDownloadLogs}
              >
                <i className="ri-download-2-line me-1"></i>
              </Button>
            </div>
          </div>

          {filteredLogs.length === 0 ? (
            <p className="text-muted mt-2">Chưa có đơn nào trong ngày này.</p>
          ) : (
            <div>
              {filteredLogs.map((log, index) => (
                <div
                  key={index}
                  className="border-bottom pb-2 mb-3"
                  style={{ fontSize: "0.9rem" }}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div style={{ flex: 2 }}>
                      <strong>🧾 Đơn #{log.id}</strong>
                      <div className="text-secondary mt-1">
                        {log.items.map((item, i) => (
                          <div key={i}>
                            • {item.name} × {item.quantity} ={" "}
                            {item.total.toLocaleString()}đ
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-end" style={{ flex: 1, minWidth: "120px" }}>
                      <div className="text-muted">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </div>
                      <div className="fw-bold mt-2">
                        Tổng: {log.total.toLocaleString()}đ
                      </div>
                    </div>
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
          {selectedDateLogs.length === 0 ? (
            <p className="text-muted">Không có đơn nào hôm nay.</p>
          ) : (
            selectedDateLogs.map((log) => (
              <div key={log.id} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <strong>Đơn #{log.id}</strong>
                  <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <ul className="list-unstyled mt-2">
                  {log.items.map((item, i) => (
                    <li key={i}>• {item.name} × {item.quantity} = {item.total.toLocaleString()}đ</li>
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
