import React from 'react';
import ReactDOM from 'react-dom/client';

//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

//<HelloWorldApp />
//<FirstApp />

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20} />
        {/*<FirstApp title='Hola Mundo soy un title' />        */}
    </React.StrictMode>
);
