import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'assets/fonts/Samim.ttf'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from 'redux/store';
// pages/_app.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>
);
