import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';


const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql' // BE data link
});


// start APP component
class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div className='container'>
                        <Link to={'/'}>
                            <img
                                src={logo}
                                alt='SpaceX'
                                style={{ width: 400, display: 'block', margin: '0 auto' }}
                            /></Link>

                        <Route exact path="/" component={Launches} />
                        <Route exact path="/launch/:flight_number" component={Launch} />
                    </div>
                </Router>
            </ApolloProvider>
        ); // end render return
    } // end render
} // end APP

export default App;