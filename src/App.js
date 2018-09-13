import React, { Component } from 'react';
import './App.css';

// live search component
import LiveSearch from "./component/LiveSearchRank";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            title: ["일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "십"]
        }
    }
    render() {
        return (
            <div className="App">
                <LiveSearch rank={this.state.rank} title={this.state.title}></LiveSearch>
            </div>
        );
    }
}

export default App;
