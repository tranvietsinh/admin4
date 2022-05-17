import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Col, Grid, Button, Select, Typography } from "antd";
import "antd/dist/antd.css";
import "../styles/AdminContent.css";
import { AiFillPlusCircle, AiFillDelete, AiFillFileAdd } from "react-icons/ai";

const { Option } = Select;

function AddCategory(props) {
  return (
    <Col className="admin__content">
      <Button className="button__category">
        <AiFillPlusCircle style={{ marginRight: "6px" }} />
        Thêm mới Danh Mục
      </Button>
      <Col style={{ marginTop: "12px", display: "flex" }}>
        <Col className="content__left">
          <Typography className="content__header">Tên Danh Mục</Typography>
          <Typography
            style={{
              height: "160px",
              backgroundColor: "#ccc",
              paddingLeft: "8px",
            }}
          >
            Thùng Hàng 1
          </Typography>
          <Typography style={{ height: "160px", paddingLeft: "8px", backgroundColor:'#ece5e5' }}>
            Thùng Hàng 1
          </Typography>
          <Typography
            style={{
              height: "160px",
              backgroundColor: "#ccc",
              paddingLeft: "8px",
            }}
          >
            Thùng Hàng 1
          </Typography>
          <Typography style={{ height: "160px", paddingLeft: "8px", backgroundColor:'#ece5e5' }}>
            Thùng Hàng 1
          </Typography>
          <Typography
            style={{
              height: "160px",
              backgroundColor: "#ccc",
              paddingLeft: "8px",
            }}
          >
            Thùng Hàng 1
          </Typography>
        </Col>
        <Col className="content__right">
          <Typography className="content__header">Chức Năng</Typography>
          <Col
            style={{
              height: "160px",
              backgroundColor: "#ccc",
              paddingLeft: "8px",
            }}
          >
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}} >
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col style={{ height: "160px", paddingLeft: "8px", backgroundColor:'#ece5e5'}}>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col
            style={{
              height: "160px",
              backgroundColor: "#ccc",
              paddingLeft: "8px",
            }}
          >
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}} >
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col style={{ height: "160px", paddingLeft: "8px", backgroundColor:'#ece5e5'}}>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
          <Col
            style={{
              height: "160px",
              backgroundColor: "#ccc",
              paddingLeft: "8px",
            }}
          >
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}} >
              <AiFillDelete />
            </Button>
            <Button style={{backgroundColor: 'rgb(65 185 175)', color:'#fff'}}>
              <AiFillFileAdd />
            </Button>
          </Col>
        </Col>
      </Col>
    </Col>
  );
}

AddCategory.propTypes = {};

export default AddCategory;
