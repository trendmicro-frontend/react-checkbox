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
