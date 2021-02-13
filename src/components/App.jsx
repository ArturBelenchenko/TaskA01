import React from 'react';
import DataItems from './DataItems';
import Header from './Header';
import { cardItems } from './data/data';

function App() {
    return (
        <div className="container">
            <Header />
            <DataItems cardItems={cardItems} />
        </div>
    )
}



export default App;