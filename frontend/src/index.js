import './index.css';
import 'flexboxgrid'
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './views/routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Smooch from 'smooch';
import { Router,browserHistory} from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
injectTapEventPlugin();
Smooch.init({appToken: 'dcyf6kjkgw0zn3t0z3ji2vojv'});

const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: 'http://localhost:8000/graphql'}),
});

ReactDOM.render((
        <ApolloProvider client={client}>
            <Router routes={routes} history={browserHistory}/>
        </ApolloProvider>
    ),
    document.getElementById('root')
);





