import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/HistoryPage.css";
import "../App.css";
import Constants from "../Constants";
import Navbar from "./Navbar";
import HistoryTag from "./HistoryTag";

function HistoryPage() {
  const [historyTags, setHistoryTags] = useState(null);
  const tmp = window.sessionStorage.getItem(Constants.userCode);
  const user = JSON.parse(tmp);
  function requestHistory() {
    if (user) {
      const data = new FormData();
      data.append("username", user.username);
      data.append("password", user.password);
      fetch(Constants.serverLink + "history", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          const { code, list } = res;
          if (code === 0) {
            console.log(res);
            //let container = document.getElementById("imgs-container");
            let idx = 1;
            let container = [];
            list.forEach((tag) => {
              container.push(
                <HistoryTag
                  key={"key" + idx}
                  img={tag.link}
                  label0={tag.label0}
                  label1={tag.label1}
                  label2={tag.label2}
                  dateTime={tag.datetime}
                />
              );
              idx++;
            });
            setHistoryTags(container);
          }
        })
        .catch((err) => console.log(err));
    }
  }
  useEffect(()=>{requestHistory();}, []);
  return (
    <div className="page">
      <Navbar />
      {user !== null && (
        <div className="main-container">
          <h1 className="heading">X-Ray Image History</h1>
          <div className="imgs-container">
            {historyTags !== null && historyTags}
          </div>
        </div>
      )}
      {user === null && <h1>Page not found</h1>}
    </div>
  );
}

export default HistoryPage;
