import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Col, Grid, Button, Select, Typography } from "antd";
import "antd/dist/antd.css";
import "../styles/AdminContent.css";

const { Option } = Select;

const EvenCustom = () => {
  return (
    <Col className="col-even">
      <Checkbox className="col__checkbox"></Checkbox>
      <Typography style={{ width: "30%" }}>#2508 Trần Viết Sinh</Typography>
      <Typography style={{ width: "30%" }}>Th4 20, 2022</Typography>
      <Typography style={{ width: "30%" }}>
        <p class="pending">Tạm giữ</p>
      </Typography>
      <Typography>0 đ</Typography>
    </Col>
  );
};

const OddCustom = () => {
  return (
    <Col className="col-odd">
      <Checkbox className="col__checkbox"></Checkbox>
      <Typography style={{ width: "30%" }}>#2508 Trần Viết Sinh</Typography>
      <Typography style={{ width: "30%" }}>Th4 20, 2022</Typography>
      <Typography style={{ width: "30%" }}>
        <p class="processing">Đang xử lý</p>
      </Typography>
      <Typography>0 đ</Typography>
    </Col>
  );
};

function AdminContent(props) {
  return (
    <Col className="admin__content">
      <Col>
        <Select
          style={{ width: 200 }}
          className="select"
          defaultValue={"Hành Động"}
          placeholder={"Hành Động"}
        >
          <Option>Option 1</Option>
          <Option>Option 1</Option>
          <Option>Option 1</Option>
        </Select>
        <Button className="button">Áp Dụng</Button>
        <Select
          style={{ width: 160 }}
          className="select"
          defaultValue={"Tất Cả Các Ngày"}
          placeholder={"Tất Cả Các Ngày"}
        >
          <Option>Option 1</Option>
          <Option>Option 1</Option>
          <Option>Option 1</Option>
        </Select>
        <Select
          style={{ width: 200 }}
          className="select"
          placeholder={"Lọc Theo Tài Khoản Khách Hàng"}
        >
          <Option>Option 1</Option>
          <Option>Option 1</Option>
          <Option>Option 1</Option>
        </Select>
        <Button className="button">Lọc</Button>
      </Col>{" "}
      <Col style={{ marginTop: "12px" }}>
        <Col className="col-even">
          <Checkbox className="col__checkbox"></Checkbox>
          <Typography style={{ width: "30%" }}>Đơn Hàng</Typography>
          <Typography style={{ width: "30%" }}>Ngày</Typography>
          <Typography style={{ width: "30%" }}>Tình Trạng</Typography>
          <Typography>Tổng</Typography>
        </Col>

        <OddCustom />
        <EvenCustom />
        <OddCustom />
        <EvenCustom />
        <OddCustom />
        <EvenCustom />
        <OddCustom />

        <Col className="col-even">
          <Checkbox className="col__checkbox"></Checkbox>
          <Typography style={{ width: "30%" }}>Đơn Hàng</Typography>
          <Typography style={{ width: "30%" }}>Ngày</Typography>
          <Typography style={{ width: "30%" }}>Tình Trạng</Typography>
          <Typography>Tổng</Typography>
        </Col>
      </Col>
      <Col style={{ marginTop: "12px" }}>
        <Select
          style={{ width: 200 }}
          className="select"
          defaultValue={"Bỏ Vào Thùng Rác"}
          placeholder={"Bỏ Vào Thùng Rác"}
        >
          <Option>Option 1</Option>
          <Option>Option 1</Option>
          <Option>Option 1</Option>
        </Select>

        <Button className="button">Lọc</Button>
      </Col>
    </Col>
  );
}

AdminContent.propTypes = {};

export default AdminContent;
