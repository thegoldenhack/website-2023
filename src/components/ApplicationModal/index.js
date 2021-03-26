import React, { Component } from "react";
import ModalDisplay from './ModalDisplay';
import { Route, Link } from "react-router-dom";

class ApplicationModal extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                <Link to={`/exec/view`} onClick={this.showModal}>View Application Info</Link>

                <Route
                    path={`/exec/view`}
                    render={() => {
                        return (
                            <main>
                                <ModalDisplay show={this.state.show} handleClose={this.hideModal}>
                                    <p>Modal</p>
                                </ModalDisplay>
                            </main>
                        );
                    }}
                />
            </div>
        );
    }
}

export default ApplicationModal
