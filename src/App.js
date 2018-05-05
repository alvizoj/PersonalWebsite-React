import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {screenName: "Home"};
    }

    renderNavItem(screenName) {
        let navItemStyle = {marginLeft: 20};
        return(
            <span
                style = {navItemStyle}
                onClick={() => {
                    this.setState({screenName});
                }}
            >

                {screenName}
            </span>
        );
    };

    renderScreen() {
        switch(this.state.screenName) {
            case "Home":
                return <HomeScreen/>;
            case "About":
                return <AboutScreen/>;
            case "Contact":
                return <ContactScreen/>;
            default:
        }
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        height: 30,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#D0D0D0",

                    }}
                >
                    {this.renderNavItem("Home")}
                    {this.renderNavItem("About")}
                    {this.renderNavItem("Contact")}
                </div>

                <div>
                    {this.renderScreen()}
                </div>
            </div>
        );
    }
}

export default App;
