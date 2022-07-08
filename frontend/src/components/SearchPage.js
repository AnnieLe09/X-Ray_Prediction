import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/HistoryPage.css";
import "../App.css";
import Constants from "../Constants";
import Navbar from "./Navbar";
import HistoryTag from "./HistoryTag";

function SearchPage() {
    const [historyTags, setHistoryTags] = useState(null);
    const tmp = window.sessionStorage.getItem(Constants.userCode);
    const user = JSON.parse(tmp);
    const [curLabel, setLabel] = useState(null);
    function requestSearch() {
        console.log("search " + curLabel);
        if (curLabel) {
            const data = new FormData();
            data.append("label", curLabel);
            fetch(Constants.serverLink + "search", {
                method: "POST",
                body: data,
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    //let container = document.getElementById("imgs-container");
                    let idx = 1;
                    let container = [];
                    res.forEach((tag) => {
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
                })
                .catch((err) => console.log(err));
        }
    }
    useEffect(() => { requestSearch(); }, [curLabel]);
    const all_labels = ['Atelectasis','Consolidation', 'Infiltration', 'Pneumothorax', 'Edema', 'Emphysema','Fibrosis', 
              'Effusion', 'Pneumonia', 'Pleural_Thickening','Cardiomegaly', 'Nodule', 'Mass', 'Hernia']

    return (
        <div className="page">
            <Navbar />
            {user !== null && (
                <div className="main-container">
                    <h1 className="heading">Search X-ray Image</h1>
                    <select name="label" id="label" onChange={(event)=>setLabel(event.target.value)}>
                        <option disabled selected>Chọn label</option>
                        {all_labels.map(label => (
                            <option value={label}>{label}</option>
                        ))}
                    </select>
                    <div className="imgs-container">
                        {historyTags !== null && historyTags}
                    </div>
                </div>
            )}
            {user === null && <h1>Page not found</h1>}
        </div>
    );
}

export default SearchPage;
