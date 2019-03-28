import React from 'react';
import PropTypes from 'prop-types';
import DynamicForm from '../../ui/DynamicForm';
import volunteerInputs from './volunteerInputs';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VolunteerActions from '../../../actions/volunteerActions';
import _ from 'lodash';

class AddVolunteer extends React.Component {
    static propTypes = {
        errors: PropTypes.object
    };

    static defaultProps = {
        errors: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            seniorCenterId: props.adminSeniorCenterId,
            firstName: 'poop'
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = () => {
        const volunteer = {
            ...this.state,
            occasionalOneDayProjects: this.state.occasionalOneDayProjects === 'Yes',
            singleDayActivity: this.state.singleDayActivity === 'Yes'
        };
        this.props.volunteerActions.create(volunteer, this.props.history);
    };

    render() {
        return (
            <div className="add-volunteer-container">
                <Link to="/volunteers" className="button small tertiary">
                    <i className="material-icons">keyboard_backspace</i> Back to all volunteers
                </Link>
                <div className="panel">
                    <h1 className="panel-title">Add Volunteer</h1>
                    <DynamicForm
                        inputs={volunteerInputs}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        submitButtonLabel="Register Volunteer"
                        errors={this.props.errors}
                        values={this.state}
                    />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => {
    return {
        adminSeniorCenterId: _.get(state.auth.admin, 'seniorCenterId'),
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
)(AddVolunteer);
