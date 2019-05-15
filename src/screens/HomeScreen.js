import React from 'react';
import '../App.css';
import picture from '../resources/me.png';
import phone from '../resources/phone.png';
import linkedin from '../resources/linkedin.png';
import git from '../resources/github.png';
import gmail from '../resources/gmail.png';
import {Segment, Button, Label} from 'semantic-ui-react';

export default class HomeScreen extends React.Component {
    componentDidMount(){
        document.title = "Joseph Alvizo - Home"
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="AppHeaderTitle">Joseph Alvizo</h1>
                    <h1 className="HeaderDescription"><i>UI Designer and Developer</i></h1>
                </header>
                <div className="BodyContent">
                    <div className = "SideContent">
                        <img src={picture} className="MyPhoto" alt="MyPhoto"/>
                    </div>
                    <div className="MainContent">
                        <p className="App-intro">
                            Computer game Science major at UCI that has a love for video games.
                            Ever since taking a Human-Computer Interaction class, I have been fascinated with
                            designing and implementing sleek, easy-to-use interfaces. With this knowledge, I aim
                            to be a UI/ front-end developer.
                        </p>
                    </div>
                </div>
                <div className="ContactInformation">
                    <h1 style={{color: 'white', marginBottom: '0px'}}>
                        My Contact Information
                    </h1>
                    <Segment.Group compact style={{marginTop: '0px'}}>
                        <Segment style={{paddingTop: '0px'}}>
                        <img src={phone} className="GmailIcon" alt="PhoneIcon"/>
                        <Label as='a' color='green' image style={{font: '15px', height: '30px', width: '30px', paddingLeft: '5px'}}>
                            661-709-6653
                        </Label>
                        </Segment>
                        <Segment>
                        <img src={gmail} className="GmailIcon" alt="gmailIcon"/>
                        <Button inverted className="LinkButton2"><a href="mailto: jalvizo12@gmail.com">Email Me</a></Button>
                        </Segment>
                        <Segment>
                        <img src={linkedin} className="GmailIcon" alt="LinkedinIcon"/>
                        <Button inverted className="LinkButton" onClick={() => window.open('https://www.linkedin.com/in/joseph-alvizo-6a4b74182')}>
                            LinkedIn
                        </Button>
                        </Segment>
                        <Segment>
                        <img src={git} className="GmailIcon" alt="GitIcon"/>
                        <Button inverted className="LinkButton" onClick={() => window.open('https://www.github.com/alvizoj')}>
                            Github
                        </Button>
                        </Segment>
                    </Segment.Group>
                </div>


                <footer className="Footer">
                    <p><b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b></p>
                </footer>
            </div>
        );
    }
}