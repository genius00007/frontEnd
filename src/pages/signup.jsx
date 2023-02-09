import React from "react";
import "../App.css";
import Logo from "../assets/boginooLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const Sign = async () => {
    try {
      await axios.post("http://localhost:8000/user/signup", {
        password: password,
        email: email,
        username: username,
      });
      window.location.replace("/login");
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="header">
        <div className="topHeader">
          <p className="topHeaderShit">Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className="bottomHeader">
          <Link to={"/"}>
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div>
          <p className="headerShit">Бүртгүүлэх</p>
        </div>
      </div>
      <div className="main">
        <div className="input">
          <p className="holder">Хэрэглэгч нэр</p>
          <input
            type="text"
            className="inputs"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <p className="holder">Цахим хаяг</p>
          <input
            type="text"
            className="inputs"
            placeholder="name@mail.domain"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="holder">Нууц үг</p>
          <input
            type="text"
            className="inputs"
            placeholder="··········"
            style={{ fontWeight: "bolder" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="thridMain">
        <div className="help">
          <button className="button" onClick={() => Sign()}>
            Бүртгүүлэх
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="texts">
          <p className="secondMainShit" style={{ color: "black" }}>
            Made with ❤️ by Nest Academy
          </p>
          <p
            className="secondMainShit"
            style={{ color: "gray", fontSize: "13px", marginLeft: "60px" }}
          >
            ©boginoo.io 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
