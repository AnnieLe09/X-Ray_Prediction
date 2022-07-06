import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/PredictPage.css';
import '../App.css';
import Constants from "../Constants";
import Navbar from "./Navbar";


function PredictPage() {
    const [img, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    const [result, setResult] = useState(null);
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImg(reader.result)
          }
        };
        reader.readAsDataURL(e.target.files[0]);
        uploadImage(e.target.files[0]);
      };
    async function  uploadImage(img){
        const data = new FormData();
        console.log(img);
        data.append('img', img);
        axios.post( Constants.serverLink + 'x-ray3');
        /*axios({
          method: 'get',
          url: Constants.serverLink + 'x-ray3',
          headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'multipart/form-data' 
          }
        })*/
        /*axios({
          method: 'post',
          url: Constants.serverLink + 'x-ray4',
          
          headers: { 
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'multipart/form-data' 
          },
          data: "{}",
        })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));*/
          /*await fetch(Constants.serverLink + 'x-ray2', {
            method:"POST",
            mode: "no-cors",
            body: data
          }).then(response => {
            console.log(response.json());
            let res = ["Nodule", "Edema", "Effusion"];
            setResult(res);
            let firstRes = document.getElementById("first-res");
            let secondRes = document.getElementById("second-res");
            let thirdRes = document.getElementById("third-res");
            firstRes.innerHTML = res[0];
            secondRes.innerHTML = res[1];
            thirdRes.innerHTML = res[2];
          })
          .catch((err) => console.log(err));*/
          /*fetch(Constants.serverLink + 'x-ray2', {
            method:"POST",
            mode: 'cors',
            credentials: 'include',
            headers: { 
              
              'Content-Type': 'multipart/form-data' 
            },
            body: data
          }).then(response => { return response.json();}).then(data=> console.log(data)).catch((err) => console.log(err));*/
      };
  return (
    <div className="page">
    <Navbar />
    <div className="main-container">
          <h1 className="heading">Add your X-Ray image</h1>
          <div className="img-holder">
            <img src={img} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose
            </label>
          </div>
          {result !== null &&
          <div id="result-section">
            <h3>Result</h3>
            <p id='first-res'>Edema</p>
            <div id='res-container'>
            <p id='second-res'>Effusion</p>
            <p id='third-res'>Nodule</p>
            </div>
          </div>}
          {result === null && <div id="result-section"><h3>The result will show here!</h3></div>}
    </div>
    </div>
  );
}

export default PredictPage;
