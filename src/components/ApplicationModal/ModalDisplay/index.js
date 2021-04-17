import "./modal.scss";
import { withRouter } from "react-router";
import images from "../../../assets/icons/modal";
import React, { Component } from "react";
import ModalHeader from '../ModalHeader/index';
import ModalContact from '../ModalContact/index';
import ModalBasicInfo from '../ModalBasicInfo/index';
import ModalApplicationInfo from '../ModalApplicationInfo';
import { useParams } from 'react-router-dom';
import { getApplication } from '../../../utils/API/index.js';
import LoadingSpinner from "../../LoadingSpinner";
import { ResponsiveEmbed } from "react-bootstrap";

class ModalDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            dataRetrieved: true,
        };
    };

    hideModal = () => {
        this.setState({ show: false });
        this.props.history.push('/exec');
    };

    componentDidMount() {
        getApplication(this.state.id,
        (response) => {
            this.setState({
                userName: response.first_name ?? 'N/A' + ' ' + response.last_name ?? 'N/A',
                userSchoolInfo: response.school ?? 'N/A' + ' - ' + response.degree ?? 'N/A',
                userBirthDate: response.birth_date ?? 'N/A',
                userNextCoop: response.coop_terms[0] ?? 'N/A',
                userHowHeard: response.how_heard ?? 'N/A',
                userGithub: response.github_url ?? 'N/A',
                userDribbble: response.dribbble_url ?? 'N/A',
                userResume: response.link_to_resume ?? 'N/A',
                userLinkedIn: response.linkedin_url ?? 'N/A',
                userPersonalSite: response.personal_url ?? 'N/A',
                userPhoneNumber: response.phone_number ?? 'N/A',
                userWhyGoldenhack: response.why_goldenhack ?? 'N/A',

                error: false,
                dataRetrieved: true,
            });
        }, () => {
            console.log("API FAILURE");
            this.setState({
                userName: 'N/A',
                userSchoolInfo: 'N/A',
                userBirthDate: 'N/A',
                userNextCoop:'N/A',
                userHowHeard: 'N/A',
                userGithub:'N/A',
                userDribbble:'N/A',
                userResume: 'N/A',
                userLinkedIn: 'N/A',
                userPersonalSite: 'N/A',
                userPhoneNumber: 'N/A',
                userWhyGoldenhack: 'N/A',

                error: true,
                dataRetrieved: true,
            });
        });
    };

    render() {
        if (!this.state.dataRetrieved) {
            return (<LoadingSpinner />)
        } else {
            return (
                <div className="modal display-block">
                    <section className="modal-main">
                        <ModalHeader name={this.state.userName} id={this.state.id} handleClose={this.props.handleClose}/>
                        <div className="info-display">
                            <div className="info-column left">
                                <ModalContact email={this.state.id} phoneNumber={this.state.userPhoneNumber}/>
                                <ModalBasicInfo schoolInfo={this.state.userSchoolInfo}/> {/* add year */}
                            </div>
                            <div className="info-column right">
                                <ModalApplicationInfo userWhyGoldenhack={this.state.userWhyGoldenhack}/>
                            </div>
                        </div>
                    </section>
                </div> 
            );
        }
    }
};

export default withRouter(ModalDisplay);