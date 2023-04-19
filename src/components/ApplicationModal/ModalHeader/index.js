import "./modalHeader.css";
import React, { Component } from "react";
import Select from "react-select";

import {
    acceptApplication,
    rejectApplication,
    waitlistApplication
} from '../../../utils/API/index.js';

const ModalHeader = ({ handleClose, name, id }) => {

    let options = [
        { value: 'pending', label: 'Pending' },
        { value: 'accepted', label: 'Accepted' },
        { value: 'rejected', label: 'Rejected' },
        { value: 'waitlist', label: 'Waitlist' }
    ];

    let curStatus = { value: 'pending', label: 'Pending'};

    function setValues(value) {
        curStatus = value;
    }

    function setStatus() {
        if (curStatus.value === 'pending') {
            //do nothing
        } else if (curStatus.value === 'accepted') {
            acceptApplication(id, (response) => {}, () => {});
        } else if (curStatus.value === 'rejected') {
            rejectApplication(id, (response) => {}, () => {});
        } else if (curStatus.value === 'waitlist') {
            waitlistApplication(id, (response) => {}, () => {});
        }
    }

    return (
        <div className="header">
            <h1>{name}</h1>
            <div className="status">
                <div className="dropdown">
                    <Select
                        className="basic-single" 
                        classNamePrefix="select" 
                        defaultValue={options[0]} 
                        options={options} 
                        onChange={(value) => setValues(value)} 
                    />
                </div>
                <button onClick={setStatus}>Change Status</button>
            </div>
            <div className="button">
                <div className="expand-button" onClick={handleClose}></div>
                <div className="close-button" onClick={handleClose}></div>
            </div>
        </div>
    );
};

export default ModalHeader
