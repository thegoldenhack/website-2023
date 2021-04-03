import React, { Component } from "react";
import ModalDisplay from './ModalDisplay';
import { Route, Link, withRouter } from "react-router-dom";

const id = 1020;

class ApplicationModal extends Component {
    constructor(props) {
        super(props);
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
        this.props.history.push('/exec');
    };

    render() {
        return (
            <div>
                <Link to={`/exec/:id`}>View Application Info</Link>

                <Route
                    path={`/exec/:id`}
                    render={() => {
                        return (
                            <main>
                                <ModalDisplay show={true} handleClose={this.hideModal}>
                                    <p>test</p>
                                </ModalDisplay>
                            </main>
                        );
                    }}
                />
            </div>
        );
    }
}

export default withRouter(ApplicationModal)
