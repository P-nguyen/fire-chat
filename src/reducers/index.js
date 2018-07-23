import { combineReducers } from 'redux';
import chat from './chat_reducer';
import chat_reducer from './chat_reducer';

export default combineReducers({ chat });


// import chatReducer from './chat_reducer';

// const rootReducer = combineReducers({
//     chat: chat_reducer
// });

// export default rootReducer;
