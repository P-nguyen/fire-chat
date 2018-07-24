import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import ChooseName from './choose_name';
import ChatRoom from './chat_room';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/chat-room" component={ChatRoom}/>
            <Route path="/choose-name" component={ChooseName}/>
        </div>
    </div>
);

export default App;
