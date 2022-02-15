import React, { Component } from "react";
import { Button } from "antd";
import "./myself.css";
import "../../store";
import store from "../../store";
import info_icon from "../../imgs/touxiang.png";
import left_icon from "../../imgs/zhuyi.png";
import right_icon from "../../imgs/youjiantou.png";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

class Myself extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Developed by Yongxi Zhou and his team",
    };
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    this.clickBtn = this.clickBtn.bind(this);
  }
  clickBtn() {
    //清楚登录缓存
    localStorage.clear();
  }
  storeChange() {
    this.setState({
      userName: store.getState().userName,
    });
  }
  render() {
    return (
      <div className="myself">
        <div className="header">My Profile</div>
        <div className="body">
          <div className="info">
            <img className="info_icon" src={info_icon}></img>
            <div className="username">{this.state.userName}</div>
          </div>
          <div className="about">
            <div className="left">
              <img className="icon_left" src={left_icon}></img>
              <div className="username">About us</div>
            </div>
            <img className="icon_right" src={right_icon}></img>
          </div>
          <Button type="primary" onClick={this.clickBtn}>
            <Link to="/login">Logout</Link>
          </Button>
        </div>

        <Nav></Nav>
      </div>
    );
  }
}

export default Myself;
