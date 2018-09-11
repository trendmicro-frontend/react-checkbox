/* eslint no-alert: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import UncontrolledCheckboxGroup from './UncontrolledCheckboxGroup';
import ControlledCheckboxGroup from './ControlledCheckboxGroup';

const Example = () => (
    <div>
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

export default Example;
