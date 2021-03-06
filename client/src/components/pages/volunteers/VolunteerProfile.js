import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import VolunteerActions from '../../../redux/actions/volunteerActions';
import { Link } from 'react-router-dom';
import DynamicForm from '../../ui/DynamicForm';
import volunteerInputs from './volunteerInputs';
import ConfirmButton from './../../ui/ConfirmButton';
import Loading from './../../ui/Loading';
import Dropdown from '../../ui/Dropdown';

export class VolunteerProfile extends Component {
    static defaultProps = {
        errors: {}
    };

    componentDidMount() {
        // call redux action to retrieve specified profile from api
        this.props.volunteerActions.get(this.props.match.params.id, _.noop, () => {
            this.props.history.push('/pageNotFound');
        });
        window.scrollTo(0, 0);
    }

    editVolunteer = (modifiedInputs, onSuccess) => {
        this.props.volunteerActions.edit(_.get(this.props.volunteer, '_id'), modifiedInputs, onSuccess);
    };

    getVolunteerName() {
        return this.props.loading ? (
            <Loading content="" />
        ) : (
            _.get(this.props.volunteer, 'firstName') + ' ' + _.get(this.props.volunteer, 'lastName')
        );
    }

    handleDeleteClick = () => {
        this.props.volunteerActions.delete(this.props.match.params.id, () => this.props.history.push('/volunteers'));
    };

    render() {
        return (
            <div className="page-container">
                <Link to="/volunteers" className="button small tertiary icon">
                    <i className="material-icons button-icon">keyboard_backspace</i> Back to all volunteers
                </Link>
                <div>
                    <div className="page-header">
                        <h1>{this.getVolunteerName()}</h1>
                        <div className="button-list">
                            <Dropdown icon="more_vert" kind="tertiary" align="right">
                                <ConfirmButton
                                    className="dropdown-content-row medium"
                                    onConfirm={this.handleDeleteClick}
                                    title="Confirm Delete"
                                    message={`Are you sure you want to delete the volunteer '${this.getVolunteerName()}'?`}>
                                    Delete Volunteer
                                </ConfirmButton>
                            </Dropdown>
                        </div>
                    </div>

                    <DynamicForm
                        inputs={volunteerInputs}
                        editValues={this.editVolunteer}
                        values={this.props.volunteer}
                        editable={true}
                        loading={this.props.loading}
                        errors={this.props.errors}
                    />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => {
    return {
        volunteer: state.volunteers.all[props.match.params.id],
        loading: state.volunteers.loading,
        errors: state.volunteers.errors
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        volunteerActions: bindActionCreators(VolunteerActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VolunteerProfile);
