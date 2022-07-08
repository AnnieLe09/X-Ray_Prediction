import './css/HistoryPage.css';
import '../App.css';
import React from "react";

function HistoryTag(props){
    return(
    <div className="history-tag">
        <div className="history-holder">
          <img src={props.img} alt="" className="history-img" />
        </div>
        <div className="history-info">
          <h3 className="highlight-res">{props.label0}</h3>
          <span>{props.label1}/{props.label2}</span>
          <br/>
          <p>{props.dateTime}</p>
        </div>
      </div>
    );
}
export default HistoryTag;