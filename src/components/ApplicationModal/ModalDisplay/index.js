import "./modal.scss";
import images from "../../../assets/icons/modal";
import React, { Component, useEffect, useState } from "react";
import ModalHeader from '../ModalHeader/index';
import ModalContact from '../ModalContact/index';
import ModalBasicInfo from '../ModalBasicInfo/index';
import ModalApplicationInfo from '../ModalApplicationInfo';
import { useParams } from 'react-router-dom';
import { getApplication } from '../../../utils/API/index.js';
import LoadingSpinner from "../../LoadingSpinner";

const ModalDisplay = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let id = useParams().id;
    let name = '';
    let [ loading, setLoading ] = useState(true);

    // useEffect(async () => {
    //     await getApplication(id,
    //         (response) => {
    //             console.log(response);
    //             name = response.first_name + ' ' + response.last_name;
    //             console.log(name);
    //         }, () => {
    //             console.log("FAILURE");
    //         }
    //     );
    // });

    async function asyncCall() {
        await getApplication(id,
            (response) => {
                name = response.first_name + ' ' + response.last_name;
                setLoading(false);
            }, () => {
                console.log("FAILURE");
            }
        );
    }
    asyncCall();

    if (loading) {
        return (<LoadingSpinner />)
    } else {
        console.log(name);
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <ModalHeader handleClose={handleClose} name={name}/>
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
    }
};

export default ModalDisplay
