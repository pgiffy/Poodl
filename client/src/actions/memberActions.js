import axios from 'axios';

import {
    GET_ERRORS,
    FETCH_MEMBERS_BEGIN,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBER_BEGIN,
    FETCH_MEMBER_SUCCESS,
    EDIT_MEMBER_BEGIN,
    EDIT_MEMBER_SUCCESS
} from './types';

export const fetchMembers = () => dispatch => {
    dispatch(fetchMembersBegin());
    axios
        .post('/api/members/filter')
        .then(res => {
            dispatch(fetchMembersSuccess(res.data));
            return res.data;
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get specificied member by ID
export const fetchMember = id => dispatch => {
    dispatch(fetchMemberBegin());
    axios
        .get(`/api/members/${id}`)
        .then(res => {
            dispatch(fetchMemberSuccess(res.data));
            return res.data;
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Edit specificied member by ID
export const editMember = (id, memberData) => dispatch => {
    dispatch(editMemberBegin());
    axios
        .patch(`/api/members/${id}`, memberData)
        .then(res => {
            dispatch(editMemberSuccess());
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const fetchMembersBegin = () => ({
    type: FETCH_MEMBERS_BEGIN
});

export const fetchMembersSuccess = members => ({
    type: FETCH_MEMBERS_SUCCESS,
    payload: members
});

export const fetchMemberBegin = () => ({
    type: FETCH_MEMBER_BEGIN
});

export const fetchMemberSuccess = member => ({
    type: FETCH_MEMBER_SUCCESS,
    payload: member
});

export const editMemberBegin = () => ({
    type: EDIT_MEMBER_BEGIN
});

export const editMemberSuccess = () => ({
    type: EDIT_MEMBER_SUCCESS
});
