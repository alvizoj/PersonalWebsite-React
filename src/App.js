import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import {Button} from 'semantic-ui-react';
import ProjectInspectScreen from "./screens/ProjectInspectScreen";


/**
 * Renders a single screen component
 * @param {object} props
 * @param {string} props.screen
 */
function ScreenRouter(props) {
    switch(props.screen) {
        case "Home":
            return <HomeScreen/>;
        case "Projects":
            return <ProjectsScreen/>;
        case "Website":
            return <ProjectInspectScreen
                HeaderTitle='Personal Website Project'
                mainh1='main content!!!'
                />;
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
        if (screenName === this.state.screenName) {
            return (
                <Button inverted active className="NavbarButton" color="blue" onClick={() => this.setState({screenName})}>
                    {screenName}
                </Button>
            );
        }
        else {
            return (
                <Button inverted className="NavbarButton" color="blue" onClick={() => this.setState({screenName})}>
                    {screenName}
                </Button>
            );
        }
    };

    render() {
        return (
            <div>
                <div className="Navbar">
                    <h1 className="NavbarText">josephalvizo.com</h1>
                    <div>
                    {this.renderNavItem("Home")}
                    {this.renderNavItem("Projects")}
                    {this.renderNavItem("Contact")}
                    {this.renderNavItem("Website")}
                    </div>
                </div>

                <ScreenRouter screen={this.state.screenName} />
            </div>
        );
    }
}

export default App;