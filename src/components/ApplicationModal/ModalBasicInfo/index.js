import "./modalBasicInfo.scss";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";



const ModalHeader = () => {
    return (
        <div class="info-box">
            <h1>Basic Info</h1>
            <div class="label">
                <div>
                    <img src={images.school}/>
                </div>
                <div>
                    <p>University of Waterloo - Computer Science</p>
                    <p>Class of 2022</p>
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

export default ModalHeader
