import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChatMessages } from '../actions';
import firebase from '../firebase';

export default (WrappedComponent) => {
    class Db extends Component {
        componentDidMount(){
            firebase.collection('chat-log').onSnapshot(this.props.updateChatMessages);
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {
            messages: state.chat.messages
        }
    }

    return connect(mapStateToProps, { updateChatMessages })(Db);
}
