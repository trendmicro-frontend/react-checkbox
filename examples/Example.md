```jsx
<Example />
```

```jsx static
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

```

Controlled.jsx

```jsx static
import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { Checkbox } from '../src';

const LabelText = styled.span`
    display: inline-block;
    vertical-align: middle;
`;

export default () => (
    <Section className="row-sm-13 row-md-8 row-lg-10 row-xl-14">
        <h3>Controlled Checkbox</h3>
        <div className="col-md-12">
            <h5>Native Checkbox (stacked)</h5>
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={false} />
                    <LabelText>Unchecked</LabelText>
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked />
                    <LabelText>Checked</LabelText>
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input
                        ref={c => {
                            if (c) {
                                c.indeterminate = true;
                            }
                        }}
                        type="checkbox"
                        checked
                    />
                    <LabelText>Partially checked</LabelText>
                </label>
            </div>
            <div className="checkbox disabled">
                <label>
                    <input type="checkbox" checked={false} disabled />
                    <LabelText>Unchecked (disabled)</LabelText>
                </label>
            </div>
            <div className="checkbox disabled">
                <label>
                    <input type="checkbox" checked disabled />
                    <LabelText>Checked (disabled)</LabelText>
                </label>
            </div>
            <div className="checkbox disabled">
                <label>
                    <input
                        ref={c => {
                            if (c) {
                                c.indeterminate = true;
                            }
                        }}
                        type="checkbox"
                        checked
                        disabled
                    />
                    <LabelText>Partially checked (disabled)</LabelText>
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" checked={false} />
                    <LabelText>Unchecked</LabelText>
                    <p style={{ marginLeft: (13 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </label>
            </div>
            <h5>Native Checkbox (inline)</h5>
            <div className="checkbox-inline">
                <label>
                    <input type="checkbox" checked={false} />
                    <LabelText>Unchecked</LabelText>
                </label>
            </div>
            <div className="checkbox-inline">
                <label>
                    <input type="checkbox" checked />
                    <LabelText>Checked</LabelText>
                </label>
            </div>
            <div className="checkbox-inline">
                <label>
                    <input
                        ref={c => {
                            if (c) {
                                c.indeterminate = true;
                            }
                        }}
                        type="checkbox"
                        checked
                    />
                    <LabelText>Partially checked</LabelText>
                </label>
            </div>
        </div>
        <div className="col-md-12">
            <h5>React Checkbox (stacked)</h5>
            <div className="checkbox">
                <Checkbox
                    checked={false}
                    label="Unchecked"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    checked
                    label="Checked"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    checked
                    indeterminate
                    label="Partially checked"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    checked={false}
                    disabled
                    label="Unchecked (disabled)"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    checked
                    disabled
                    label="Checked (disabled)"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    checked
                    indeterminate
                    disabled
                    label="Partially checked (disabled)"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    checked={false}
                    label="Unchecked"
                >
                    <p style={{ marginLeft: (16 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Checkbox>
            </div>
            <h5>React Checkbox (inline)</h5>
            <div className="checkbox-inline">
                <Checkbox
                    checked={false}
                    label="Unchecked"
                />
            </div>
            <div className="checkbox-inline">
                <Checkbox
                    checked
                    label="Checked"
                />
            </div>
            <div className="checkbox-inline">
                <Checkbox
                    checked
                    indeterminate
                    label="Partially checked"
                />
            </div>
        </div>
    </Section>
);

```

Uncontrolled.jsx

```jsx static
import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { Checkbox } from '../src';

const LabelText = styled.span`
    display: inline-block;
    vertical-align: middle;
`;

export default () => (
    <Section className="row-sm-13 row-md-8 row-lg-10 row-xl-14">
        <h3>Uncontrolled Checkbox</h3>
        <div className="col-md-12">
            <h5>Native Checkbox (stacked)</h5>
            <div className="checkbox">
                <label>
                    <input type="checkbox" />
                    <LabelText>Unchecked</LabelText>
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" defaultChecked />
                    <LabelText>Checked</LabelText>
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input
                        ref={c => {
                            if (c) {
                                c.indeterminate = true;
                            }
                        }}
                        type="checkbox"
                        defaultChecked
                    />
                    <LabelText>Partially checked</LabelText>
                </label>
            </div>
            <div className="checkbox disabled">
                <label>
                    <input type="checkbox" disabled />
                    <LabelText>Unchecked (disabled)</LabelText>
                </label>
            </div>
            <div className="checkbox disabled">
                <label>
                    <input type="checkbox" defaultChecked disabled />
                    <LabelText>Checked (disabled)</LabelText>
                </label>
            </div>
            <div className="checkbox disabled">
                <label>
                    <input
                        ref={c => {
                            if (c) {
                                c.indeterminate = true;
                            }
                        }}
                        type="checkbox"
                        defaultChecked
                        disabled
                    />
                    <LabelText>Partially checked (disabled)</LabelText>
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" />
                    <LabelText>Unchecked</LabelText>
                    <p style={{ marginLeft: (13 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </label>
            </div>
            <h5>Native Checkbox (inline)</h5>
            <div className="checkbox-inline">
                <label>
                    <input type="checkbox" />
                    <LabelText>Unchecked</LabelText>
                </label>
            </div>
            <div className="checkbox-inline">
                <label>
                    <input type="checkbox" defaultChecked />
                    <LabelText>Checked</LabelText>
                </label>
            </div>
            <div className="checkbox-inline">
                <label>
                    <input
                        ref={c => {
                            if (c) {
                                c.indeterminate = true;
                            }
                        }}
                        type="checkbox"
                        defaultChecked
                    />
                    <LabelText>Partially checked</LabelText>
                </label>
            </div>
        </div>
        <div className="col-md-12">
            <h5>React Checkbox (stacked)</h5>
            <div className="checkbox">
                <Checkbox
                    label="Unchecked"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    defaultChecked
                    label="Checked"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    defaultChecked
                    defaultIndeterminate
                    label="Partially checked"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    disabled
                    label="Unchecked (disabled)"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    defaultChecked
                    disabled
                    label="Checked (disabled)"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    defaultChecked
                    defaultIndeterminate
                    disabled
                    label="Partially checked (disabled)"
                />
            </div>
            <div className="checkbox">
                <Checkbox
                    label="Unchecked"
                >
                    <p style={{ marginLeft: (16 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Checkbox>
            </div>
            <h5>React Checkbox (inline)</h5>
            <div className="checkbox-inline">
                <Checkbox
                    label="Unchecked"
                />
            </div>
            <div className="checkbox-inline">
                <Checkbox
                    defaultChecked
                    label="Checked"
                />
            </div>
            <div className="checkbox-inline">
                <Checkbox
                    defaultChecked
                    defaultIndeterminate
                    label="Partially checked"
                />
            </div>
        </div>
    </Section>
);
```


ControlledCheckboxGroup.jsx

```jsx static
import React, { PureComponent } from 'react';
import Section from './Section';
import { CheckboxGroup, Checkbox } from '../src';
import Space from './Space';

export default class extends PureComponent {
    state = {
        items: [],
        comic: []
    };

    handleChangeByKey = (key) => (value, event) => {
        this.setState(state => ({
            [key]: value
        }));
    };

    render() {
        return (
            <Section className="row-sm-11 row-md-6">
                <h3>Controlled Checkbox Group</h3>
                <h5>Stacked</h5>
                <p>{`Selected: ${this.state.items}`}</p>
                <CheckboxGroup
                    depth={2}
                    name="items"
                    value={this.state.items}
                    onChange={this.handleChangeByKey('items')}
                >
                    <div>
                        <Checkbox label="Item #1" value="item.1" />
                    </div>
                    <div>
                        <Checkbox label="Item #2" value="item.2" />
                    </div>
                    <div>
                        <Checkbox label="Item #3" value="item.3" />
                    </div>
                </CheckboxGroup>
                <h5>Inline</h5>
                <p>{`Selected: ${this.state.comic}`}</p>
                <CheckboxGroup
                    name="comic"
                    value={this.state.comic}
                    onChange={this.handleChangeByKey('comic')}
                >
                    <Checkbox label="Batman (DC)" value="dc:batman" />
                    <Space width="16" />
                    <Checkbox label="Hulk (Marvel)" value="marvel:hulk" />
                    <Space width="16" />
                    <Checkbox label="Superman (DC)" value="dc:superman" />
                    <Space width="16" />
                    <Checkbox label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
                </CheckboxGroup>
            </Section>
        );
    }
}
```

UncontrolledCheckboxGroup.jsx

```jsx static
import React, { PureComponent } from 'react';
import Section from './Section';
import { CheckboxGroup, Checkbox } from '../src';
import Space from './Space';

export default class extends PureComponent {
    state = {
        items: [],
        comic: []
    };

    handleChangeByKey = (key) => (value, event) => {
        this.setState(state => ({
            [key]: value
        }));
    };

    render() {
        return (
            <Section className="row-sm-11 row-md-6">
                <h3>Uncontrolled Checkbox Group</h3>
                <h5>Stacked</h5>
                <p>{`Selected: ${this.state.items}`}</p>
                <CheckboxGroup
                    depth={2}
                    name="items"
                    onChange={this.handleChangeByKey('items')}
                >
                    <div>
                        <Checkbox label="Item #1" value="item.1" />
                    </div>
                    <div>
                        <Checkbox label="Item #2" value="item.2" />
                    </div>
                    <div>
                        <Checkbox label="Item #3" value="item.3" />
                    </div>
                </CheckboxGroup>
                <h5>Inline</h5>
                <p>{`Selected: ${this.state.comic}`}</p>
                <CheckboxGroup
                    name="comic"
                    onChange={this.handleChangeByKey('comic')}
                >
                    <Checkbox label="Batman (DC)" value="dc:batman" />
                    <Space width="16" />
                    <Checkbox label="Hulk (Marvel)" value="marvel:hulk" />
                    <Space width="16" />
                    <Checkbox label="Superman (DC)" value="dc:superman" />
                    <Space width="16" />
                    <Checkbox label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
                </CheckboxGroup>
            </Section>
        );
    }
}
```