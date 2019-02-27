import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAdmin } from '../../../actions/authActions';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

const propTypes = {
    logoutAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

export class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutAdmin();
    };

    render() {
        const { admin } = this.props.auth;

        return (
            <div className="dashboard-container">
                <h2>Hey there, </h2>
                <h1>{admin.firstName + ' ' + admin.lastName}.</h1>
                <Button content="Log out" onClick={this.onLogoutClick} />
                <br />
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
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        logoutAdmin: () => dispatch(logoutAdmin())
    };
};

Dashboard.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
