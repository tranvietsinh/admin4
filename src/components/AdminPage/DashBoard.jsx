import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

import { Button, Col, Dropdown, Layout, Menu, Select, Space, Typography } from "antd";
import "../styles/DashBoard.css"

import "antd/dist/antd.css";
import React from "react";
import AdminContent from "./AdminContent";
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Sản Phẩm", "sub1", <UserOutlined />, [
    getItem("Tất Cả Sản Phẩm", "1"),
    getItem("Thêm Mới Sản Phẩm", "2"),
    getItem("Chỉnh Sửa Sản Phẩm", "3"),
    getItem("Danh Mục", "4"),
  ]),
  getItem("Đơn Đặt Hàng", "sub2", <LaptopOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Phản Hồi", "sub4", <NotificationOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];



function DashBoard(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} />
        <Typography
          style={{
            color: "white",
          }}
        >
          Sinh Admin
        </Typography>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Col style={{ marginTop:'16px' }} >
            <Select style={{ width: 200 }} className='select' defaultValue={'Hành Động'} placeholder={'Hành Động'} >
              <Option>Option 1</Option>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
            </Select>
            <Button className="button">Áp Dụng</Button>
            <Select style={{ width: 160 }} className='select' defaultValue={'Tất Cả Các Ngày'} placeholder={'Tất Cả Các Ngày'}>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
            </Select>
            <Select style={{ width: 200 }} className='select' placeholder={'Lọc Theo Tài Khoản Khách Hàng'}>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
            </Select>
            <Button className="button">Lọc</Button>
          </Col>
          <Content
            className="site-layout-background"
            style={{
          
              margin: '12px 0',
              backgroundColor:'#fff',

              minHeight: 280,
            }}
          >
            <AdminContent />
          </Content>
          <Col>
            <Select style={{ width: 200 }} className='select'  defaultValue={'Bỏ Vào Thùng Rác'} placeholder={'Bỏ Vào Thùng Rác'}>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
              <Option>Option 1</Option>
            </Select>
           
            <Button className="button">Lọc</Button>
          </Col>
        </Layout>
      </Layout>
    </Layout>
  );
}

DashBoard.propTypes = {};

export default DashBoard;
