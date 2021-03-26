import "./modalContact.scss";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";



const ModalHeader = () => {
    return (
        <div class="info-box">
            <h1>Contact Info</h1>
            <div class="label">
                <div>
                    <img src={images.email}/>
                </div>
                <div>
                    <p>dunja.tomic@thegoldenhack.ca</p>
                </div>
            </div>
            <div class="label">
                <div>
                    <img src={images.phone}/>
                </div>
                <div>
                    <p>+1 647 123 456</p>
                </div>
            </div>
        </div>
    );
};

export default ModalHeader
