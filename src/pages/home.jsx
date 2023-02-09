import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import "../App.css";
import Logo from "../assets/boginooLogo.png";
import { Link } from "react-router-dom";
import History from "../components/history";
import axios from "axios";
import { useState } from "react";
function Home({ data, setData }) {
    const [url, setUrl] = useState("");
    const [id, setId] = useState("");
    const createPost = async () => {
        const res = await axios.post("http://localhost:8000/link", {
            Longlink: url,
        });
        setId(res.data.data);
    };
    return (
        <>
            <div className="header">
                <div className="topHeader">
                    <p
                        className="topHeaderShit"
                        style={{ marginRight: "60px" }}
                    >
                        Хэрхэн ажилладаг вэ?
                    </p>

                    <Link to={"/login"}>
                        <button
                            className="button"
                            style={{
                                width: "200px",
                                height: "40px",
                                marginRight: 150,
                                marginTop: 20,
                            }}
                        >
                            Нэвтрэх
                        </button>
                    </Link>
                </div>
                <div
                    className="bottomHeader"
                    style={{ marginTop: "160px", marginBottom: 40 }}
                >
                    <Link to={"/"}>
                        <img src={Logo} alt="" className="logo" />
                    </Link>
                </div>
            </div>
            <div className="main">
                <div className="input">
                    <input
                        type="text"
                        className="inputs"
                        placeholder="https://www.web-huudas.mn"
                        onChange={(e) => setUrl(e.target.value)}
                        style={{ width: "700px", height: "35px" }}
                    />
                    <button
                        className="button"
                        style={{
                            width: "200px",
                            height: "45px",
                            marginLeft: 40,
                        }}
                        onClick={() => createPost()}
                    >
                        Богиносгох
                    </button>
                </div>
            </div>
            <div className="historyContainer">
                <div className="history">
                    {id && (
                        <div>
                            <History data={id} setData={setId} />;
                        </div>
                    )}
                    {data &&
                        data.map((data) => {
                            return <History data={data} setData={setData} />;
                        })}
                </div>
            </div>
            <div className="footer">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Item>{7}</Pagination.Item>
                    <Pagination.Item>{8}</Pagination.Item>
                    <Pagination.Item>{9}</Pagination.Item>
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Last />
                </Pagination>
                <div className="texts" style={{ marginTop: "410px" }}>
                    <p className="secondMainShit" style={{ color: "black" }}>
                        Made with ❤️ by Nest Academy
                    </p>
                    <p
                        className="secondMainShit"
                        style={{
                            color: "gray",
                            fontSize: "13px",
                            marginLeft: "60px",
                        }}
                    >
                        ©boginoo.io 2023
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
