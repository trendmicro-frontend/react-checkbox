/* eslint no-alert: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import UncontrolledCheckboxGroup from './UncontrolledCheckboxGroup';
import ControlledCheckboxGroup from './ControlledCheckboxGroup';

class App extends React.Component {
    render() {
        const name = 'React Checkbox';
        const url = 'https://github.com/trendmicro-frontend/react-checkbox';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div style={{ padding: '20px 20px 0' }}>
                    <div className="col-lg-6 col-md-12">
                        <Uncontrolled />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Controlled />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <UncontrolledCheckboxGroup />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ControlledCheckboxGroup />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
