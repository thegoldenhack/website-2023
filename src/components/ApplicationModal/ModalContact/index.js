import "./modalContact.scss";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";

const ModalContact = () => {
    return (
        <div className="info-box">
            <h1>Contact Info</h1>
            <div className="label">
                <div>
                    <img src={images.email}/>
                </div>
                <div>
                    <p>dunja.tomic@thegoldenhack.ca</p>
                </div>
            </div>
            <div className="label">
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

export default ModalContact
