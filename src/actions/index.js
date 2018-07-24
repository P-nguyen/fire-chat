import types from './types';

export function updateChatMessages(snapshot){
    const messages = [];

    snapshot.forEach(document => {
        const doc = document.data();
        doc.id = document.id;
        
        messages.push(doc);
    });

    return {
        type: types.UPDATE_CHAT_MESSAGES,
        messages
    }
}

export function setUserData(payload){

    localStorage.setItem('user', JSON.stringify(payload));

    return {
        type: types.SET_USER_DATA,
        payload
    }
}
