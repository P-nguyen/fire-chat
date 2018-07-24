import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChatMessages } from '../actions';
import firebase from '../firebase';

export default (WrappedComponent) => {
    class Db extends Component {
        dbRef = firebase.collection('chat-log')

        componentDidMount(){
            this.dbRef.orderBy('timestamp').onSnapshot(this.props.updateChatMessages);
        }

        sendMessage = (msg) => {
            const { user } = this.props;
            
            const newMsg = {
                name: user.name || 'Guest',
                color: user.color || '#000000',
                message: msg,
                timestamp: new Date().getTime()
            };

            this.dbRef.add(newMsg);
        }

        render(){
            return <WrappedComponent {...this.props} sendMessage={this.sendMessage}/>
        }
    }

    function mapStateToProps(state){
        return {
            messages: state.chat.messages,
            user: state.chat.user
        }
    }

    return connect(mapStateToProps, { updateChatMessages })(Db);
}
