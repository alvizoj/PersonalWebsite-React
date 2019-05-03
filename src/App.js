import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import {Button} from 'semantic-ui-react';


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
        return(
            <Button inverted className="NavbarButton" color="blue" onClick={() => this.setState({screenName})}>
                {screenName}
            </Button>
        );
    };

    render() {
        return (
            <div>
                <div className="Navbar">
                    <h1 className="HeaderText">josephalvizo.com</h1>
                    <div>
                    {this.renderNavItem("Home")}
                    {this.renderNavItem("About")}
                    {this.renderNavItem("Contact")}
                    </div>
                </div>
                <header className="App-header">
                    <h1 className="App-title">Welcome!</h1>
                </header>

                <ScreenRouter screen={this.state.screenName} />
            </div>
        );
    }
}

export default App;