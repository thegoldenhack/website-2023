import "./modalApplicationInfo.scss";
import React, { Component } from "react";

const ModalApplicationInfo = ({ handleClose, show, children }) => {
    return (
        <div className="info-box">
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
    );
};

export default ModalApplicationInfo
