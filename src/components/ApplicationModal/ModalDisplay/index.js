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
                <ModalHeader />
                <div className="info-display">
                    <div class="info-column left">
                        <ModalContact />
                        <ModalBasicInfo />
                    </div>
                    <div class="info-column right">
                        <ModalApplicationInfo />
                    </div>
                </div>
                {/*children*/}
            </section>
        </div>
    );
};

export default ModalDisplay
