import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/PredictPage.css';


function PredictPage() {
    const [img, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImg(reader.result)
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      //this.uploadImage2( e.target.files[0]);
      };
    const  uploadImage = (img) =>{
        const data = new FormData();
        console.log(img);
        data.append('img', img);
        
        axios({
          method: 'post',
          url: 'http://dfd0-34-125-192-87.ngrok.io/x-ray2',
          data: data,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data' 
          },
        })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      };
  return (
    <div className="container">
          <h1 className="heading">Add your Image</h1>
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
              Choose your Photo
            </label>
          </div>
          <div id="result-section">
            <h3>Result</h3>
            <p>Edema</p>
          </div>
    </div>
  );
}

export default PredictPage;
