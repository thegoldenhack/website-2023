import "./modalHeader.scss";
import React, { Component } from "react";

const ModalHeader = ({ handleClose, show, children }) => {
    return (
        <div className="header">
            <h1>Dunja Tomic</h1>
            <div class="status">
                <div class="dropdown">
                    <span>Pending</span>
                    <div class="arrow"></div>
                    <div class="dropdown-content">
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
            <div class="button">
                <div class="expand-button" onClick={handleClose}></div>
                <div class="close-button" onClick={handleClose}></div>
            </div>
        </div>
    );
};

export default ModalHeader
