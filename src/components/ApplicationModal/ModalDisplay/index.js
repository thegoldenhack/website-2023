import "./modal.scss";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";
import ModalHeader from '../ModalHeader/index';
import ModalContact from '../ModalContact/index';
import ModalBasicInfo from '../ModalBasicInfo/index';
import ModalApplicationInfo from '../ModalApplicationInfo';

const ModalDisplay = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <ModalHeader handleClose={handleClose}/>
                <div className="info-display">
                    <div className="info-column left">
                        <ModalContact />
                        <ModalBasicInfo />
                    </div>
                    <div className="info-column right">
                        <ModalApplicationInfo />
                    </div>
                </div>
                {/*children*/}
            </section>
        </div>
    );
};

export default ModalDisplay
