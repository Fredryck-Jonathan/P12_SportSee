import {  GET_DATA, ERROR_500 } from "../actions/user.action";

const initialState = {
    "user_info": undefined,
    "user_activity": undefined,
    "user_average_sessions": undefined,
    "user_performance" : undefined
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                user_infos: action.payload
            }
        case ERROR_500:
            return {
                ...state,
                error: 500
            }
        default:
            return state;
    };
}
