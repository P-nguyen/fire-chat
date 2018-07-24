import types from '../actions/types';

const DEFAULT_STATE = {
    messages: [],
    user: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.UPDATE_CHAT_MESSAGES:
            return { ...state, messages: action.messages };
        case types.SET_USER_DATA:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
