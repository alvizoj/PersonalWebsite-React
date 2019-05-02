import React from 'react';
import '../App.css';

export default class AboutScreen extends React.Component {
    componentDidMount(){
        document.title = "About Page"
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    To get started, edit <code>src/AboutScreen.js</code> and save to reload.
                </p>
            </div>
        );
    }
}