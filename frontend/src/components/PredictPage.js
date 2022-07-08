import React, { useState } from "react";
import axios from "axios";
import './css/PredictPage.css';
import '../App.css';
import Constants from "../Constants";
import Navbar from "./Navbar";
import {storage, firebase} from "../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LoadingSpin from "react-loading-spin";

function PredictPage() {
    const [img, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    const [result, setResult] = useState(null);
    const [file, setFile] = useState(null);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const tmp = window.sessionStorage.getItem(Constants.userCode);
    const user = JSON.parse(tmp); 
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImg(reader.result)
          }
        };
        let file = e.target.files[0];
        setFile(file);
        reader.readAsDataURL(file);
        setLoading(true);
        requestUploadImage(file);
    };
    function saveImage(e) {
      if(user === null){
        alert("Please log in to save image!");
        return;
      }
      if(file === null){
        alert("Please choose file!");
        return;
      }
        let fileName = user.username + (new Date).toString();
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(snapshot.ref).then((downloadURL) => {console.log(downloadURL);requestSaveImage(downloadURL);});
        });
    };
    async function requestSaveImage(url){
      const data = new FormData();
      data.append('username', user.username);
      data.append('password', user.password);
      data.append('link', url);
      data.append('label0', result[0]);
      data.append('label1', result[1]);
      data.append('label2', result[2]);
        await fetch(Constants.serverLink + 'save', {
          method:"POST",
          body: data
        }).then(res=>res.json()).then(response => {
          //document.getElementById("save-button").innerHTML = "Saved";
          setSaved(true);
          alert("Image saved!");
        })
        .catch((err) => console.log(err));
    }
    async function  requestUploadImage(img){
        const data = new FormData();
        data.append('img', img);
          await fetch(Constants.serverLink + 'x-ray', {
            method:"POST",
            body: data
          }).then(res=>res.json()).then(response => {
            let res = response.candidate;
            setResult(res);
            setSaved(false);
            setLoading(false);
            let firstRes = document.getElementById("first-res");
            let secondRes = document.getElementById("second-res");
            let thirdRes = document.getElementById("third-res");
            firstRes.innerHTML = res[0];
            secondRes.innerHTML = res[1];
            thirdRes.innerHTML = res[2];
          })
          .catch((err) => console.log(err));
      };
  return (
    <div className="page">
    <Navbar />
    <div className="main-container">
          <h1 className="heading">Add Your X-Ray Image</h1>
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
            <button id="save-button" className="image-save" onClick={saveImage}>
              {saved ===true && <p>Saved</p>}
            {saved === false && <p><i className="fa-solid fa-floppy-disk fa-xl"></i>
              Save</p>}
            </button>
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
          {loading !== false && <div id = "loading"><LoadingSpin/></div>}
    </div>
    </div>
  );
}

export default PredictPage;
