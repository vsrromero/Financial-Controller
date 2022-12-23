import React from 'react';

import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import Form from './components/form/Form';

import './styles/global.sass'


function App () {
    return (
        <>
            <Header />
            <main>
                <Summary />
                <Form />
            </main>
        </>
    )
}

export default App;