import React, {Component} from "react";
import "./App.css";
import SmurfsApp from "./smurfs/SmurfsApp";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>SMURFS</h1>
                <SmurfsApp/>
            </div>
        );
    }
}

export default App;
