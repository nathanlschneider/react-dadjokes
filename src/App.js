import React, { Component } from 'react';
import './App.scss';
let headers = new Headers({
    Accept: 'application/json',
    'User-Agent': 'react-dadjokes (https://github.com/nathanlschneider/react-dadjokes)'
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { joke: null };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        fetch('https://icanhazdadjoke.com/', { method: 'GET', headers: headers })
            .then(res => res.text())
            .then(text => JSON.parse(text))
            .then(json => this.setState({ joke: json.joke }));
    }

    componentDidMount() {
        this.handleOnClick();
    }
    render() {
        return (
            <main className='App'>
                <article className='App__article'>
                    <section className='App__section'>{this.state.joke}</section>
                    <hr className='App__hr' style={{width: '80%'}}/>
                    <button className='App__btn' onClick={this.handleOnClick}>
                        Tell me a joke
                    </button>
                </article>
            </main>
        );
    }
}

export default App;
