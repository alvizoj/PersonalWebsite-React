import React from 'react';
import logo from '../logo.svg';
import '../App.css';

/* Change Logo here */
export default class HomeScreen extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Home</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/HomeScreen.js</code> and save to reload.
                </p>
            </div>
        );
    }
}