import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ViewByDate from '../../ui/ViewByDate';

const propTypes = {
    auth: PropTypes.object.isRequired
};

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activitiesDate: Date.now()
        };
    }

    requestDate = date => {
        console.log(moment(date).format('MMM Do, YYYY'));
        this.setState({ activitiesDate: date });
        // this.props.getActivities(date);
    };

    render() {
        const { admin } = this.props.auth;

        return (
            <div className="dashboard-container">
                <h2>Hey there, </h2>
                <h1>{admin.firstName + ' ' + admin.lastName}.</h1>
                <div className="panel">
                    <h1 className="panel-title">View All</h1>
                    <Link to="/admins" className="link primary">
                        Admins
                    </Link>
                    <br />
                    <Link to="/volunteers" className="link primary">
                        Volunteers
                    </Link>
                    <br />
                    <Link to="/members" className="link primary">
                        Members
                    </Link>
                </div>
                <div className="panel">
                    <h1 className="panel-title">Register New</h1>
                    <Link to="/register" className="link primary">
                        Admin
                    </Link>
                </div>
                <ViewByDate
                    requestDate={this.requestDate}
                    dateData={{
                        date: this.state.activitiesDate,
                        data: [
                            { id: '123', time: Date.now(), name: 'Bingo' },
                            { id: '321', time: Date.now() + 1500, name: 'Lunch' }
                        ]
                    }}
                />
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    };
};

Dashboard.propTypes = propTypes;
export default connect(mapStateToProps)(Dashboard);
