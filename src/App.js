import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import {Button, Segment} from 'semantic-ui-react';


/**
 * Renders a single screen component
 * @param {object} props
 * @param {string} props.screen 
 */
function ScreenRouter(props) {
    switch(props.screen) {
        case "Home":
            return <HomeScreen/>;
        case "About":
            return <AboutScreen/>;
        case "Contact":
            return <ContactScreen/>;
        default:
            throw Error(`Invalid screen state: ${this.state.screenName}`);
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {screenName: "Home"};
    }

    renderNavItem(screenName) {
        let navItemStyle = {marginLeft: 20, marginRight: 20};
        return(
            <Button inverted color= 'blue'
                    onClick={() => {
                        this.setState({screenName});
                    }}
            >
                {screenName}
            </Button>
            /*
            <span
                style = {navItemStyle}
                onClick={() => {
                    this.setState({screenName});
                }}
            >

                {screenName}
            </span> */
        );
    };

    render() {
        return (
            <div>
                <div
                    style={{
                        height: 40,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "grey",

                    }}
                >
                    {this.renderNavItem("Home")}
                    {this.renderNavItem("About")}
                    {this.renderNavItem("Contact")}

                </div>

                <ScreenRouter screen={this.state.screenName} />
            </div>
        );
    }
}

export default App;
