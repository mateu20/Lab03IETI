import React, { Component } from 'react';
import './App.css';
import MyDrawer from "./components/MyDrawer";
import { Login } from "./components/Login";

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('username', 'Mateo');
        localStorage.setItem('password', 'IETI1234');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {localStorage.getItem('page') === 'home' ?
                        < Login /> : <MyDrawer />
                    }
                </header>
            </div>
        );
    }
}

export default App;