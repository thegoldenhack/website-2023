import "./modal.scss";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";

const ModalDisplay = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
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
                <div className="info-display">
                    <div class="info-column left">
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
                    </div>
                    <div class="info-column right">
                        <div class="info-box">
                            <h1>Application Info</h1>
                            <h2>Why do you want to attend The Goldenhack?</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
                                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                                dolor sit amet.</p>
                            <h2>This is the second question?</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
                                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                                dolor sit amet.</p>
                            <h2>This is the second question? no it isn’t. It’s the third?</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
                                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                                dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                {/*children*/}
            </section>
        </div>
    );
};

export default ModalDisplay
