import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import logo from './logo.png';

import Launches from './components/Launches';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className='container'>
                    <img src={logo} alt='SpaceX' style={{ width: 400, display: 'block', margin: '0 auto' }} />
                    <h1>space x</h1>

                    <Launches />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
