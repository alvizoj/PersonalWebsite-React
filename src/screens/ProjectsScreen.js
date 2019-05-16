import React from 'react';
import '../App.css';
import Selfie from '../resources/me.png';
import {Button} from 'semantic-ui-react';
import '../App.js';
import ProjectInspectScreen from './ProjectInspectScreen.js';


const Projects = [
    {
        title: "Personal Website",
        description: "This is my personal website done using the React.JS front-end framework.",
        picture: Selfie,
        pictureCaption: "Photo of Joseph",
        individualProjectScreen: "Website",
        link: "https://github.com/alvizoj/PersonalWebsite-React",
        titleClassName: "ProjectTitle1",
        backgroundClassName: "ProjectsBackground1",
    },
    {
        title: "WebGL graphics programs",
        description: "Graphics program displaying letters rotating 'UCI'.",
        picture: Selfie,
        pictureCaption: "",
        individualProjectScreen: "WebGL-Program1",
        link: "https://github.com/alvizoj/CS112-Project1",
        titleClassName: "ProjectTitle2",
        backgroundClassName: "ProjectsBackground2",
    },
];

function Project(props) {
    return [
        <h1 className={props.titleClassName}>{props.title}</h1>,
        <div className={props.backgroundClassName}>
            <div className="SideContent">
                <img
                    src={props.picture}
                    style={{width: '150px', height: '150px'}}
                    className="MyPhoto"
                    alt={props.pictureAlt}
                />
            </div>
            <div className="MainContent">
                <h1 className="HeaderDescription">{props.description}</h1>
                <Button inverted className="LinkButton" onClick={() => this.setState("Website")}>
                    View Project
                </Button>
            </div>
        </div>,
    ];
}

function ScreenRouter(props) {
    switch(props.screen) {
        case "Website":
            return <ProjectInspectScreen/>;
    }
}

export default class ProjectsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {screenName: "Projects"};
    }

    componentDidMount(){
        document.title = "My Projects"
    }

    render() {
        const projects = Projects.map((projectInfo) => {
            return (
                <Project
                    {...projectInfo}
                    key={projectInfo.title}
                />
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="AppHeaderTitle">The work I've done.</h1>
                </header>

                {projects}

                <footer className="Footer">
                    <p><b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b></p>
                </footer>
            </div>
        );
    }
}