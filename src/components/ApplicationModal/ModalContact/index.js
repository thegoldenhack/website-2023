import "./modalContact.css";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";

const ModalContact = ({email, phoneNumber}) => {
    return (
        <div className="info-box">
            <h1>Contact Info</h1>
            <div className="label">
                <div>
                    <img src={images.email}/>
                </div>
                <div>
                    <p>{email}</p> 
                </div>
            </div>
            <div className="label">
                <div>
                    <img src={images.phone}/>
                </div>
                <div>
                    <p>{phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalContact
