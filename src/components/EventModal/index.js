import React, { Component } from "react";
import EventModalDisplay from './EventModalDisplay';
import { Route, Link, withRouter } from "react-router-dom";

const id = 1020;

class EventModal extends Component {
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
        this.props.history.push('/manageEvents');
    };

    render() {
        return (
            <div>
                <Route
                    path={`/manageEvents/:id`}
                    render={() => {
                        return (
                            <main>
                                <EventModalDisplay show={true} handleClose={this.hideModal}>
                                </EventModalDisplay>
                            </main>
                        );
                    }}
                />
            </div>
        );
    }
}

export default withRouter(EventModal)
