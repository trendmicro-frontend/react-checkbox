/* eslint no-alert: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Example from './Example';

class Index extends React.Component {
    render() {
        const name = 'React Checkbox';
        const url = 'https://github.com/trendmicro-frontend/react-checkbox';

        return (
            <div>
                <Navbar name={name} url={url} />
                <Example />
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('container')
);
