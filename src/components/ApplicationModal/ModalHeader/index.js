import "./modalHeader.scss";
import React, { Component } from "react";

const ModalHeader = ({ handleClose }) => {
    return (
        <div className="header">
            <h1>Dunja Tomic</h1>
            <div className="status">
                <div className="dropdown">
                    <span>Pending</span>
                    <div className="arrow"></div>
                    <div className="dropdown-content">
                        <ul>
                            <li>
                                Approved
                            </li>
                            <li>
                                Rejected
                            </li>
                        </ul>
                    </div>
                </div>
                <button>Change Status</button>
            </div>
            <div className="button">
                <div className="expand-button" onClick={handleClose}></div>
                <div className="close-button" onClick={handleClose}></div>
            </div>
        </div>
    );
};

export default ModalHeader
