import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../actions';

class ChooseName extends Component {

    constructor(props){
        super(props);

        const user = JSON.parse(localStorage.getItem('user')) || {};

        this.state = {
            name: user.name || '',
            color: user.color || '#ffffff',
            error: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, color } = this.state;

        if(!name || color === '#ffffff'){
            return this.setState({
                error: 'Please choose a username and a color'
            });
        }

        this.props.setUserData({name, color});
    }

    render(){
        const colorStyle = {
            height: '2em',
            width: '100%',
            border: 'none',
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)'
        }

        const { color, name, error } = this.state;

        return (
            <div>
                <h1 className="center">Pick Username</h1>
                <h5 className="center">and Favorite Color</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <label>Username</label>
                            <input 
                                type="text"
                                value={name}
                                onChange={ e => this.setState({
                                    name: e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <label>Favorite Color</label>
                            <input
                                style={colorStyle}
                                type="color"
                                value={color}
                                onChange={e => this.setState({
                                    color: e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2 right-align">
                            <button className="btn blue-grey">Set Preferences</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <p className="right-align red-text">{error}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { setUserData })(ChooseName);
