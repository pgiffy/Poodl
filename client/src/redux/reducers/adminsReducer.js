import Types from '../actions/types';
import _ from 'lodash';

const initialState = {
    loading: false,
    all: {},
    errors: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Types.admin.ERROR:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case Types.admin.filter.BEGIN:
            return {
                ...state,
                loading: true
            };
        case Types.admin.filter.SUCCESS:
            return {
                ...state,
                loading: false,
                all: _.keyBy(action.payload, '_id'),
                errors: {}
            };
        case Types.admin.get.BEGIN:
            return {
                ...state,
                loading: true
            };
        case Types.admin.get.SUCCESS:
            return {
                ...state,
                loading: false,
                all: { ...state.all, [action.payload._id]: action.payload },
                errors: {}
            };
        case Types.admin.edit.BEGIN:
            return {
                ...state,
                loading: true
            };
        case Types.admin.edit.SUCCESS:
            return {
                ...state,
                loading: false,
                all: { ...state.all, [action.payload._id]: action.payload },
                errors: {}
            };
        case Types.admin.delete.BEGIN:
            return {
                ...state,
                loading: true
            };
        case Types.admin.delete.SUCCESS:
            const { [action.payload._id]: deletedAdmin, ...newState } = state.all;
            return {
                ...state,
                loading: false,
                all: newState,
                errors: {}
            };
        default:
            return state;
    }
}
