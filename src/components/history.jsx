import React from "react";
import "../App.css";
function history({ data, setData }) {
  console.log(data, "ahah");
  return (
    <div className="coogi">
      <span className="letter">Өгөгдсөн холбоос:</span>
      <p className="url One">{data.longLink}</p>
      <span className="letter">Богино холбоос:</span> <br />
      <span className="url Two">
        http://localhost:3000/{data.shortLink}
      </span>{" "}
      <span
        className="secondMainShit"
        style={{ textDecorationLine: "underline", marginLeft: 20 }}
      >
        Хуулж авах
      </span>
    </div>
  );
}

export default history;
