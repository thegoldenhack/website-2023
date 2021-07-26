import "./modal.scss";
import { withRouter } from "react-router";
import React, { Component } from "react";
import LoadingSpinner from "../../LoadingSpinner";

class EventModalDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: this.props.match.params.name,
            dataRetrieved: true,
        };
    };

    hideModal = () => {
        this.setState({ show: false });
        this.props.history.push('/exec');
    };

    render() {
        return (
                <div className="modal display-block">
                    <section className="modal-main">
                        <div className="header">
                            <div>
                                <h1>Workshop #1</h1>
                            </div>
                            <svg width="10" height="10" onClick={this.props.handleClose}>
                                    <line x1="0" y1="0" x2="100%" y2="100%" style={{stroke:"#000000", strokeWidth:1}} />
                                    <line x1="0" y1="100%" x2="100%" y2="0" style={{stroke:"#000000", strokeWidth:1}} />
                            </svg>
                        </div>

                        <div className="attendees">
                            <p>3:00 - 4:00</p>
                            <p>Super fun workshop</p>
                        </div>
                        
                        <svg width="100%" height="5">
                            <line x1="0" y1="2.5" x2="100%" y2="2.5" style={{stroke:"#000000", strokeWidth:1}}></line>
                        </svg>

                        <section className="attendees-list">
                            <h2>Attendees</h2>
                            <ul>
                                <li>test1@test.com</li>
                                <li>test2@test.com</li>
                                <li>test3@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                                <li>test4@test.com</li>
                            </ul>
                        </section>

                        <svg width="100%" height="5">
                            <line x1="0" y1="2.5" x2="100%" y2="2.5" style={{stroke:"#000000", strokeWidth:1}}></line>
                        </svg>

                        <div className="attendees">
                            <h2>Add attendees</h2>
                            <p>Separate emails below by a comma</p>
                            <form>
                                <textarea></textarea>
                                <div className="submit">
                                    <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </section>
                </div> 
            );
    }
};

export default withRouter(EventModalDisplay);