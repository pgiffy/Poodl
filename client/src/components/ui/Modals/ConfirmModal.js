import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Button from '../Button';

const propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};

class ConfirmModal extends Component {
    handleKeyDown = e => {
        if (e.keyCode === 27) {
            this.props.onCancel();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <Modal>
                <h2 className="title">{this.props.title || 'Confirm'}</h2>
                <p className="message">{this.props.message || 'Are you sure?'}</p>
                <div className="buttons">
                    <Button id="cancel" onClick={this.props.onCancel} content="Cancel" kind="tertiary" width="8em" />
                    <Button
                        id="submit"
                        onClick={this.props.onSubmit}
                        content="Yes"
                        kind="tertiary"
                        width="8em"
                        autoFocus
                    />
                </div>
            </Modal>
        );
    }
}

ConfirmModal.propTypes = propTypes;
export default ConfirmModal;
