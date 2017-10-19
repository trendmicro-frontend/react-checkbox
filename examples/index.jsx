/* eslint no-alert: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import { Button } from '@trendmicro/react-buttons';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Section from './Section';
import Checkbox from '../src';

const htmlIndeterminate = false;
const htmlChecked = false;
const indeterminate = false;
const checked = false;
const indeterminate2 = false;
const checked2 = false;

class App extends React.Component {
    state = {
        htmlIndeterminate: htmlIndeterminate,
        indeterminate: indeterminate,
        indeterminate2: indeterminate2,
        htmlCheckboxStstus: 'checked: ' + htmlChecked + ', indeterminate: ' + htmlIndeterminate,
        checkboxStatus: 'checked: ' + checked + ', indeterminate: ' + indeterminate,
        checkboxStatus2: 'checked: ' + checked2 + ', indeterminate: ' + indeterminate2
    }

    fields = {
        htmlCheckbox: null,
        checkbox: null
    };

    actions = {
        buildStatusMessage: (node) => {
            if (!node) {
                return null;
            }

            return (
                'checked: ' + node.checked + ', indeterminate: ' + node.indeterminate
            );
        },
        setHtmlCheckboxIndeterminate: () => {
            this.fields.htmlCheckbox && (this.fields.htmlCheckbox.indeterminate = true);
            this.setState({
                htmlIndeterminate: true
            }, () => {
                this.setState({
                    htmlCheckboxStstus: this.actions.buildStatusMessage(this.fields.htmlCheckbox)
                });
            });
        },
        setCheckboxIndeterminate: () => {
            this.setState({
                indeterminate: true
            }, () => {
                this.setState({
                    checkboxStatus: this.actions.buildStatusMessage(this.fields.checkbox)
                });
            });
        },
        setCheckbox2Indeterminate: (isIndeterminate) => {
            const indeterminate = typeof (isIndeterminate) !== 'undefined' ? isIndeterminate : true;
            this.setState({
                indeterminate2: indeterminate
            }, () => {
                this.setState({
                    checkboxStatus2: this.actions.buildStatusMessage(this.fields.checkbox2)
                });
            });
        }
    }

    render() {
        const name = 'React Checkbox';
        const url = 'https://github.com/trendmicro-frontend/react-checkbox';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div style={{ padding: '20px 20px 0' }}>
                    <div className="col-md-12">
                        <Section className="row-md-7">
                            <div className="col-md-12">
                                <h3 style={{ margin: '16px 0' }}>
                                    Checkboxes
                                </h3>
                                <p>Checkboxes are used to permit the user to select one or more options from a set.</p>
                                <ul>
                                    <li>The user can select one, one, or multiple options from a set</li>
                                    <li>When clicked, a checkbox displays or removes its check mark</li>
                                    <li>Use sentence case for checkbox labels</li>
                                    <li>Align checkbox labels vertically whenever possible</li>
                                    <li>Make labels clickable whenever possible</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML Checkbox</h6>
                                <label className="checkbox">
                                    <input type="checkbox" name="optionscheckboxs" />
                                    Normal
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="optionscheckboxs" defaultChecked />
                                    Checked
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="optionscheckboxs" ref={elem => elem && (elem.indeterminate = true)} />
                                    Partial checked
                                </label>
                                <label className="checkbox disabled">
                                    <input type="checkbox" name="optionscheckboxs" defaultChecked disabled />
                                    Checked disabled
                                </label>
                                <label className="checkbox disabled">
                                    <input type="checkbox" name="optionscheckboxs" disabled />
                                    Disabled
                                </label>
                            </div>
                            <div className="col-md-6">
                                <h6>React Checkbox</h6>
                                <Checkbox className="checkbox">
                                    Normal
                                </Checkbox>
                                <Checkbox defaultChecked>
                                    Checked
                                </Checkbox>
                                <Checkbox className="checkbox" defaultIndeterminate>
                                    Partial checked
                                </Checkbox>
                                <Checkbox className="checkbox" indeterminate disabled>
                                    Partial checked disabled
                                </Checkbox>
                                <Checkbox className="checkbox" checked disabled>
                                    Checked disabled
                                </Checkbox>
                                <Checkbox className="checkbox" disabled>
                                    Disabled
                                </Checkbox>
                            </div>
                        </Section>
                    </div>
                    <div className="col-md-12">
                        <Section className="row-md-4">
                            <div className="col-md-12">
                                <h5>Default (stacked)</h5>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML Checkbox</h6>
                                <label className="checkbox">
                                    <input type="checkbox" name="default" />
                                    Normal label one
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="default" />
                                    Normal label two
                                </label>
                                <label className="checkbox disabled">
                                    <input type="checkbox" name="default" disabled />
                                    Disabled label
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="default" defaultChecked />
                                    Checked label
                                    <div>
                                        <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                        <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                                    </div>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <h6>React Checkbox</h6>
                                <Checkbox className="checkbox" name="default2">
                                    Normal label one
                                </Checkbox>
                                <Checkbox className="checkbox" name="default2">
                                    Normal label two
                                </Checkbox>
                                <Checkbox className="checkbox" name="default2" disabled>
                                    Disabled label
                                </Checkbox>
                                <Checkbox className="checkbox" name="default2" checked>
                                    Checked label
                                </Checkbox>
                                <div>
                                    <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                    <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                                </div>
                            </div>
                        </Section>
                    </div>
                    <div className="col-md-12">
                        <Section className="row-md-2">
                            <div className="col-md-12">
                                <h5>Inline</h5>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML Checkbox</h6>
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="inline" />
                                    Normal label
                                </label>
                                <label className="checkbox-inline disabled">
                                    <input type="checkbox" name="inline" disabled />
                                    Disabled label
                                </label>
                                <label className="checkbox-inline">
                                    <input type="checkbox" name="inline" defaultChecked />
                                    Checked label
                                </label>
                            </div>
                            <div className="col-md-6">
                                <h6>React Checkbox</h6>
                                <Checkbox className="checkbox-inline" name="inline2">
                                    Normal label
                                </Checkbox>
                                <Checkbox className="checkbox-inline" name="inline2" disabled>
                                    Disabled label
                                </Checkbox>
                                <Checkbox className="checkbox-inline" name="inline2" checked>
                                    Checked label
                                </Checkbox>
                            </div>
                        </Section>
                    </div>
                    <div className="col-md-12">
                        <Section className="row-md-3">
                            <div className="col-md-12">
                                <h5>Get checked and indeterminate status</h5>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML Checkbox</h6>
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        ref={node => {
                                            this.fields.htmlCheckbox = node;
                                        }}
                                        onChange={() => {
                                            this.setState({
                                                htmlCheckboxStstus: this.actions.buildStatusMessage(this.fields.htmlCheckbox)
                                            });
                                        }}
                                    />
                                    Click me. { this.state.htmlCheckboxStstus }
                                </label>
                                <div>
                                    <Button
                                        onClick={this.actions.setHtmlCheckboxIndeterminate}
                                    >
                                        Set indeterminate to true
                                    </Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h6>React Checkbox</h6>
                                <Checkbox
                                    ref={node => {
                                        this.fields.checkbox = node;
                                    }}
                                    className="checkbox"
                                    defaultChecked={checked}
                                    defaultIndeterminate={this.state.indeterminate}
                                    onClick={() => {
                                        this.setState({
                                            indeterminate: false
                                        });
                                    }}
                                    onChange={() => {
                                        this.setState({
                                            checkboxStatus: this.actions.buildStatusMessage(this.fields.checkbox)
                                        });
                                    }}
                                >
                                    Click me. { this.state.checkboxStatus }
                                </Checkbox>
                                <div>
                                    <Button
                                        onClick={this.actions.setCheckboxIndeterminate}
                                    >
                                        Set indeterminate to true
                                    </Button>
                                </div>
                            </div>
                        </Section>
                    </div>
                    <div className="col-md-12">
                        <Section className="row-md-3">
                            <div className="col-md-12">
                                <h5>Set fixed indeterminate status (Do not change by click)</h5>
                            </div>
                            <div className="col-md-6">
                                <h6>React Checkbox</h6>
                                <Checkbox
                                    ref={node => {
                                        this.fields.checkbox2 = node;
                                    }}
                                    className="checkbox"
                                    defaultChecked={checked2}
                                    indeterminate={this.state.indeterminate2}
                                    onChange={() => {
                                        this.setState({
                                            checkboxStatus2: this.actions.buildStatusMessage(this.fields.checkbox2)
                                        });
                                    }}
                                >
                                    Click me. { this.state.checkboxStatus2 }
                                </Checkbox>
                                <div>
                                    <Button
                                        onClick={() => {
                                            this.actions.setCheckbox2Indeterminate();
                                        }}
                                    >
                                        Set indeterminate to true
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            this.actions.setCheckbox2Indeterminate(false);
                                        }}
                                    >
                                        Set indeterminate to false
                                    </Button>
                                </div>
                            </div>
                        </Section>
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
