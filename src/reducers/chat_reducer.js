import types from '../actions/types';

const DEFAULT_STATE = {
    messages: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.UPDATE_CHAT_MESSAGES:
            return { ...state, messages: action.messages };
        default:
            return state;
    }
}
