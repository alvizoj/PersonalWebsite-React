import React from 'react';
import '../App.css';
import '../App.js';

export default class ProjectInspectScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = this.props.HeaderTitle;
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="AppHeaderTitle">{this.props.HeaderTitle}</h1>
                </header>

                <h1 style={{color: "black"}}>{this.props.mainh1}</h1>



                <footer className="Footer">
                    <p><b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b></p>
                </footer>
            </div>
        );
    }
}