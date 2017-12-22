import '../setupTests';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';
import { test } from 'tap';
import Checkbox from '../lib';

test('<Checkbox />', (t) => {
    const wrapper = mount(<Checkbox />);
    t.equal(wrapper.find(Checkbox).length, 1, 'should render <Checkbox /> component');
    t.end();
});

test('checked and indeterminate state', (t) => {
    test('default state', (t) => {
        const wrapper = mount(<Checkbox />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, false, 'the default checked state is false');
        t.equal(checkbox.indeterminate, false, 'the default indeterminate state is false');
        t.end();
    });

    test('controlled state', (t) => {
        const wrapper = mount(<Checkbox checked={false} indeterminate={false} />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, false, 'the checked state is initially set to false');
        t.equal(checkbox.indeterminate, false, 'the indeterminate state is initially set to false');
        wrapper.setProps({ checked: true, indeterminate: true });
        t.equal(checkbox.checked, true, 'the checked state is set to true');
        t.equal(checkbox.indeterminate, true, 'the indeterminate state is set to true');
        wrapper.setProps({ checked: true, indeterminate: false });
        t.equal(checkbox.checked, true, 'the checked state is set to true');
        t.equal(checkbox.indeterminate, false, 'the indeterminate state is set to false');
        t.end();
    });

    test('props: defaultChecked', (t) => {
        const wrapper = mount(<Checkbox defaultChecked />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, true);
        t.equal(checkbox.indeterminate, false);
        t.end();
    });

    test('props: defaultIndeterminate', (t) => {
        const wrapper = mount(<Checkbox defaultIndeterminate />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, false);
        t.equal(checkbox.indeterminate, true);
        t.end();
    });

    test('props: defaultChecked, defaultIndeterminate', (t) => {
        const wrapper = mount(<Checkbox defaultChecked defaultIndeterminate />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, true);
        t.equal(checkbox.indeterminate, true);
        t.end();
    });

    test('props: checked', (t) => {
        const wrapper = mount(<Checkbox checked />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, true);
        t.equal(checkbox.indeterminate, false);
        t.end();
    });

    test('props: indeterminate', (t) => {
        const wrapper = mount(<Checkbox indeterminate />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, false);
        t.equal(checkbox.indeterminate, true);
        t.end();
    });

    test('props: checked, indeterminate', (t) => {
        const wrapper = mount(<Checkbox checked indeterminate />);
        const checkbox = wrapper.instance();
        t.equal(checkbox.checked, true);
        t.equal(checkbox.indeterminate, true);
        t.end();
    });

    t.end();
});

test('renders text label', (t) => {
    const wrapper = mount(<Checkbox />);
    t.equal(wrapper.props().label, undefined, 'text label should be empty');
    wrapper.setProps({ label: 'My label' }); // Set new label
    t.equal(wrapper.props().label, 'My label', `text label should be equal to 'My label'`);
    t.equal(wrapper.text(), 'My label', `text label should be equal to 'My label'`);
    t.end();
});

test('renders children when passed in', (t) => {
    const wrapper = mount(
        <Checkbox>
            <p>Lorem ipsum</p>
        </Checkbox>
    );
    t.ok(wrapper.contains(<p>Lorem ipsum</p>));
    t.end();
});

test('simulates change event', (t) => {
    const onChange = sinon.spy();
    const wrapper = mount(<Checkbox onChange={onChange} />);
    wrapper.find('input').simulate('change');
    t.ok(onChange.calledOnce);
    t.end();
});
