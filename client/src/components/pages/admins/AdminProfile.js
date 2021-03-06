import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../../ui/Loading';
import ConfirmButton from './../../ui/ConfirmButton';
import AdminActions from '../../../redux/actions/adminActions';
import DynamicForm from '../../ui/DynamicForm';
import adminInputs from './adminInputs';
import AuthActions from '../../../redux/actions/authActions';
import Dropdown from '../../ui/Dropdown';

export class AdminProfile extends Component {
    componentDidMount() {
        this.props.adminActions.get(this.props.match.params.id, _.noop, () => {
            this.props.history.push('/pageNotFound');
        });
    }

    componentDidUpdate(prevProps) {
        if (this.authAdminChanged()) {
            const newAuthAdmin = {
                id: this.props.admin._id,
                firstName: this.props.admin.firstName,
                lastName: this.props.admin.lastName,
                seniorCenterId: this.props.admin.seniorCenterId,
                accessLevel: this.props.admin.accessLevel
            };

            this.props.authActions.setCurrentAdmin(newAuthAdmin);
        }
    }

    authAdminChanged() {
        if (this.props.admin) {
            const { firstName, lastName, _id } = this.props.admin;
            const nameChanged =
                firstName !== this.props.auth.admin.firstName || lastName !== this.props.auth.admin.lastName;
            const idChanged = _id === this.props.auth.admin.id;
            return idChanged && nameChanged;
        }
    }

    getAdminName() {
        return this.props.loading ? (
            <Loading content="" />
        ) : (
            _.get(this.props.admin, 'firstName') + ' ' + _.get(this.props.admin, 'lastName')
        );
    }

    handleDeleteClick = () => {
        this.props.adminActions.delete(this.props.match.params.id, () => this.props.history.push('/admins'));
    };

    editAdmin = (modifiedInputs, onSuccess) => {
        this.props.adminActions.edit(_.get(this.props.admin, '_id'), modifiedInputs, onSuccess);
    };

    getDeleteButton() {
        if (this.props.auth.admin.id !== _.get(this.props.admin, '_id')) {
            return (
                <ConfirmButton
                    className="dropdown-content-row medium"
                    onConfirm={this.handleDeleteClick}
                    title="Confirm Delete"
                    message={`Are you sure you want to delete the admin '${this.getAdminName()}'?`}>
                    Delete Admin
                </ConfirmButton>
            );
        }
    }

    render() {
        return (
            <div className="page-container">
                <Link to="/admins" className="button small tertiary icon">
                    <i className="material-icons button-icon">keyboard_backspace</i> Back to all admins
                </Link>
                <div className="page-header">
                    <h1>{this.getAdminName()}</h1>
                    <div className="button-list">
                        <Dropdown icon="more_vert" kind="tertiary" align="right">
                            {this.getDeleteButton()}
                        </Dropdown>
                    </div>
                </div>
                <DynamicForm
                    inputs={adminInputs}
                    editValues={this.editAdmin}
                    values={this.props.admin}
                    editable={true}
                    loading={this.props.loading}
                    errors={this.props.errors}
                />
            </div>
        );
    }
}

export const mapStateToProps = (state, props) => {
    return {
        admin: state.admins.all[props.match.params.id],
        loading: state.admins.loading,
        errors: state.admins.errors,
        auth: state.auth
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        adminActions: bindActionCreators(AdminActions, dispatch),
        authActions: bindActionCreators(AuthActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminProfile);
