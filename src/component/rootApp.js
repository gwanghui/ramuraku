import React, { Component } from 'react';
import logo from '../asset/image/logo.svg';

class RootApp extends Component {
    render() {
        return (
            <div className="ramu-main">
                <div className="ramu-header">
                    라무라쿠
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> .
                </p>
            </div>
        );
    }
}

export default RootApp;