import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import ChatRoom from './chat_room';

const App = () => (
    <div>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/chat-room" component={ChatRoom}/>
        </div>
    </div>
);

export default App;
