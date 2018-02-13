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
