import React, { Component, createContext } from "react";
import axios from "axios";

export const globalC = createContext();

export class Gprov extends Component {
  state = {
    authLogin: null,
    authLoginerror: null
  };
  componentDidMount() {
    var localData = JSON.parse(localStorage.getItem("loginDetail"));
    if (localData) {
      this.setState({
        authLogin: localData
      });
    }
  }

  loginData = async () => {
    let payload = {
      token: "ctz43XoULrgv_0p1pvq7tA",
      data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 300
      }
    };
    await axios
      .post(`https://app.fakejson.com/q`, payload)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            authLogin: res.data
          });
          localStorage.setItem("loginDetail", JSON.stringify(res.data));
        }
      })
      .catch((err) =>
        this.setState({
          authLoginerror: err
        })
      );
  };
  render() {
    // console.log(localStorage.getItem("loginDetail"));
    return (
      <globalC.Provider
        value={{
          ...this.state,
          loginData: this.loginData
        }}
      >
        {this.props.children}
      </globalC.Provider>
    );
  }
}
