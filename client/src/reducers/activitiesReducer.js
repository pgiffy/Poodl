import {
    FETCH_ACTIVITIES_BEGIN,
    FETCH_ACTIVITIES_SUCCESS,
    FETCH_ACTIVITY_BEGIN,
    FETCH_ACTIVITY_SUCCESS
} from '../actions/types';

const initialState = {
    loading: false,
    all: [],
    one: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITIES_BEGIN:
            return {
                ...state,
                loading: true
            };
        case FETCH_ACTIVITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                all: action.payload.data
            };
        case FETCH_ACTIVITY_BEGIN:
            return {
                ...state,
                loading: true
            };
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                one: action.payload
            };
        default:
            return state;
    }
}
