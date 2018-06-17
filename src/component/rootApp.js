import React, { Component } from 'react';
import logo from '../asset/image/logo.svg';
import Header from "./menu/header";

class RootApp extends Component {
    render() {
        return (
            <div className="ramu-main">
                <Header/>
                <div className="ramu-first">
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> .
                </p>
            </div>
        );
    }
}

export default RootApp;