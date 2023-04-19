import "./modalBasicInfo.css";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";



const ModalBasicInfo = ({ schoolInfo, year }) => {
    return (
        <div className="info-box">
            <h1>Basic Info</h1>
            <div className="label">
                <div>
                    <img src={images.school}/>
                </div>
                <div>
                    <p>{schoolInfo}</p>
                    <p>{year}</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                dolor sit amet.
            </p>
        </div>
    );
};

export default ModalBasicInfo
