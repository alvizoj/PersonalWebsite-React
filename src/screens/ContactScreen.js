import React from 'react';
import '../App.css';
import picture from '../resources/me.png';

export default class ContactScreen extends React.Component {
    componentDidMount(){
        document.title = "Contact Me"
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="AppHeaderTitle">My Contact Information</h1>
                    <p className="HeaderDescription">Don't hesitate to get in touch!</p>
                </header>
                <div className="BodyContent">
                    <img src={picture} className="MyPhoto" alt="MyPhoto"></img>
                    <p className="App-intro">
                        To get started, edit <code>src/ContactScreen.js</code> and save to reload.
                    </p>
                </div>
                <footer className="Footer">
                    <p><b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b></p>
                </footer>
            </div>
        );
    }
}