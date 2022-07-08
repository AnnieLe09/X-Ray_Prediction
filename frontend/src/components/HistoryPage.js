import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/HistoryPage.css';
import '../App.css';
import Constants from "../Constants";
import Navbar from "./Navbar";


function HistoryPage() {
  const [img, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  console.log(new Date());
  return (
    <div className="page">
    <Navbar />
    <div className="main-container">
      <h1 className="heading">X-Ray image history</h1>
      <div className="imgs-container">
        <div className="history-tag">
          <div className="history-holder">
            <img src={img} alt="" id="img" className="img" />
          </div>
          <div className="history-info">
            <span className="highline-res">Edema</span><span>- Effusion - Nodule</span>
            <br/>
            <p>Time: Thu Jul 07 2022 22:56:44 GMT+0700</p>
          </div>
        </div>
        <div className="history-tag">
          <div className="history-holder">
            <img src={img} alt="" id="img" className="img" />
          </div>
          <div className="history-info">
            <span className="highline-res">Edema</span><span>- Effusion - Nodule</span>
            <br/>
            <p>Time: Thu Jul 07 2022 22:56:44 GMT+0700</p>
          </div>
        </div>
        <div className="history-tag">
          <div className="history-holder">
            <img src={img} alt="" id="img" className="img" />
          </div>
          <div className="history-info">
            <span className="highline-res">Edema</span><span>- Effusion - Nodule</span>
            <br/>
            <p>Time: Thu Jul 07 2022 22:56:44 GMT+0700</p>
          </div>
        </div>
        <div className="history-tag">
          <div className="history-holder">
            <img src={img} alt="" id="img" className="img" />
          </div>
          <div className="history-info">
            <span className="highline-res">Edema</span><span>- Effusion - Nodule</span>
            <br/>
            <p>Time: Thu Jul 07 2022 22:56:44 GMT+0700</p>
          </div>
        </div>
        <div className="history-tag">
          <div className="history-holder">
            <img src={img} alt="" id="img" className="img" />
          </div>
          <div className="history-info">
            <span className="highline-res">Edema</span><span>- Effusion - Nodule</span>
            <br/>
            <p>Time: Thu Jul 07 2022 22:56:44 GMT+0700</p>
          </div>
        </div>
      </div>   
    </div>
    </div>
  );
}

export default HistoryPage;
