import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      isLogin: false,
    };
  }
  render() {
    var inputCss = {
      border: 0,
      display: "inline-block",
    };
    var liCss = {
      listType: "none",
      margin: "20px",
    };
    var line = {
      width: "100%",
    };
    var loginBtn = {
      border: "none",
      width: "100%",
      height: "42px",
      backgroundColor: "RGB(249,219,97)",
      color: "black",
      fontSize: "16px",
      borderRadius: "25px",
      cursor: "pointer",
      textAlign: "center",
    };
    var formStyle = {
      marginTop: "30px",
    };
    var container = {
      display: "flex",
      width: "100%",
      height: "300px",
      marginLeft: "50px",
      marginRight: "20px",
      marginTop: "10px",
      // backgroundColor:"red"
    };
    var flexLeftStyle = {
      flex: "0 0 50%",
      border: "none",
    };
    var flexRightStyle = {
      flex: "0 0 auto",
      border: "none",
      marginLeft: "90px",
    };
    var registerAndFind = {
      cursor: "pointer",
      border: "none",
      backgroundColor: "white",
      color: "grey",
      fontSize: "small",
    };
    return (
      <div style={formStyle}>
        <form>
          <ul>
            <li type="none" style={liCss}>
              <label>
                Accout:
                <input
                  type="text"
                  placeholder=" John"
                  style={inputCss}
                  value={this.state.account}
                  onChange={this.getAccount.bind(this)}
                />
              </label>
              <hr style={line} />
            </li>
            <li type="none" style={liCss}>
              <label>
                Password:
                <input
                  type="password"
                  placeholder=" 123456"
                  style={inputCss}
                  value={this.state.password}
                  onChange={this.getPassword.bind(this)}
                />
              </label>
              <hr style={line} />
            </li>
            <li
              type="none"
              style={{ marginTop: "30px", width: "95%", marginLeft: "10px" }}
            >
              {this.state.isLogin && <Redirect to="/Statistics" />}
              <input
                style={loginBtn}
                value="Login"
                readOnly
                onClick={this.loginFn.bind(this)}
              ></input>
            </li>
            {localStorage.getItem("username") &&
              localStorage.getItem("password") && <Redirect to="/Statistics" />}
          </ul>
        </form>
        <div style={container}>
          <div style={flexLeftStyle}>
            <input
              type="button"
              value="Forget password"
              style={registerAndFind}
            />
          </div>
          <div style={flexRightStyle}>
            <Link to="/register">
              <input type="button" value="Register" style={registerAndFind} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  getAccount(e) {
    this.setState({
      account: e.target.value,
    });
  }
  getPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  getIslogin() {
    this.setState({
      isLogin: true,
    });
    // console.log(this.state.isLogin);
  }
  loginFn() {
    if (this.state.account.length === 0 || this.state.password.length === 0) {
      alert("please fill in your account and password");
      return;
    }
    const promise = fetch("https://qcw4cy.fn.thelarkcloud.com/login", {
      method: "POST",
      // credentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: this.state.account,
        password: this.state.password,
      }),
    }).then((response) => response.json());

    promise.then((response) => {
      if (response.isExist === true && response.login === true) {
        localStorage.setItem("username", this.state.account);
        localStorage.setItem("password", this.state.password);
        // console.log(localStorage.getItem("username"));
        // console.log(localStorage.getItem("password"));
        //alert("成功");
        this.getIslogin();
      } else {
        alert("password is incorrect");
      }
      // console.log(response);
    });
  }
}

export default Body;
