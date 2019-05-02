import React from 'react';
import '../App.css';

export default class ContactScreen extends React.Component {
    componentDidMount(){
        document.title = "Contact Me"
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    To get started, edit <code>src/ContactScreen.js</code> and save to reload.
                </p>
            </div>
        );
    }
}