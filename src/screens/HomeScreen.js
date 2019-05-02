import React from 'react';
import '../App.css';

export default class HomeScreen extends React.Component {
    componentDidMount(){
        document.title = "Joseph Alvizo - Home"
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    To get started, edit <code>src/HomeScreen.js</code> and save to reload.
                </p>
            </div>
        );
    }
}