# react-checkbox [![build status](https://travis-ci.org/trendmicro-frontend/react-checkbox.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-checkbox) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-checkbox/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-checkbox?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-checkbox.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-checkbox/)

React Checkbox

Demo: https://trendmicro-frontend.github.io/react-checkbox

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-checkbox](https://github.com/trendmicro-frontend/react-checkbox):

  ```
  npm install --save react @trendmicro/react-checkbox
  ```

2. At this point you can import `@trendmicro/react-checkbox` and its styles in your application as follows:

  ```js
  import { Checkbox, CheckboxGroup } from '@trendmicro/react-checkbox';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-checkbox/dist/react-checkbox.css';
  ```

## Usage

```jsx
<Checkbox label="Checkbox label" />
```

The label prop is optional, you can use children to pass through the component.

```jsx
<Checkbox label="Checkbox label">
    <p style={{ marginLeft: 24 }}>
        Lorem ipsum dolor sit amet...
    </p>
</Checkbox>

<Checkbox>
    <span style={{ verticalAlign: 'middle', marginLeft: 8 }}>
        Lorem ipsum dolor sit amet...
    </span>
</Checkbox>
```

### Uncontrolled Checkbox

```js
// Default checked
<Checkbox defaultChecked />

// Default partially checked
<Checkbox defaultChecked defaultIndeterminate />
```

### Controlled Checkbox

```js
// Checked
<Checkbox checked />

// Partially checked
<Checkbox checked indeterminate />
```

### CheckboxGroup

When rendering checkboxes deeply nested inside the checkbox group, you need to pass a `depth` prop to limit the recursion depth.

```jsx
<CheckboxGroup
    name="comic"
    value={this.state.value}
    depth={3} // This is needed to minimize the recursion overhead
    onChange={(value, event) => {
        this.setState({ value: value });
    }}
>
    <div className="row">
        <div className="col-xs-12 col-sm-6">
            <Checkbox label="Batman (DC)" value="dc:batman" />
            <Checkbox label="Hulk (Marvel)" value="marvel:hulk" />
        </div>
        <div className="col-xs-12 col-sm-6">
            <Checkbox label="Superman (DC)" value="dc:superman" />
            <Checkbox label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
        </div>
    </div>
</CheckboxGroup>
```

## Prevent onChange Propagation

You may need to use `event.stopPropagation()` to stop **onChange** propagation when wrapping an input element inside the **CheckboxGroup** or **Checkbox** component.

```jsx
<CheckboxGroup
    name="checkboxgroup"
    value={this.state.value}
    onChange={(value, event) => {
        this.setState({ value: value });
    }}
>
    <Checkbox label="First option" value="one">
        <div style={{ marginLeft: 22 }}>
            <input
                type="text"
                onChange={(event) => {
                    // Prevent onChange propagation
                    event.stopPropagation();
                }}
            />
        </div>
    </Checkbox>
    <Checkbox label="Second option" value="two">
        <div style={{ marginLeft: 22 }}>
            <input
                type="text"
                onChange={(event) => {
                    // Prevent onChange propagation
                    event.stopPropagation();
                }}
            />
        </div>
    </Checkbox>
</CheckboxGroup>
```

## API

### Properties

#### Checkbox

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
className | Object | | Customized class name for the component.
style | Object | | Customized style for the component.
label | Node or String | | Text label to attach next to the checkbox element.
inputClassName | Object | | Customized class name for the checkbox element.
inputStyle | Object | | Customized style for the checkbox element.
disabled | Boolean | false | If true, the checkbox shown as disabled and cannot be modified.
checked | Boolean | | The checked state of the checkbox element.
defaultChecked | Boolean | | The default checked state of the checkbox element.
indeterminate | Boolean | | The indeterminate state of the checkbox element.
defaultIndeterminate | Boolean | false | The default indeterminate state of the checkbox element.

#### CheckboxGroup

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
disabled | Boolean | false | If true, the checkbox group will be displayed as disabled.
name | String | | Name for the input element group.
value | any | | The value of the checkbox group.
defaultValue | any | | The default value of the checkbox group.
onChange | Function | | Callback function that will be invoked when the value changes.
depth | Number | 1 | Limits the recursion depth when rendering checkboxes deeply inside a checkbox group.

### Class Properties

Use the ref property to get a reference to the component:

```jsx
<Checkbox
    ref={node => {
        if (node) {
            this.checkbox = node;
            console.log(this.checkbox.checked);
            console.log(this.checkbox.indeterminate);
        }
    }}
/>
```

Name | Type | Description
:--- | :--- | :----------
checked | Boolean | Get the checked state.
indeterminate | Boolean | Get the indeterminate state.

#### CheckboxGroup

Use the ref property to get a reference to this component:

```jsx
<CheckboxGroup
    ref={node => {
        if (node) {
            this.checkboxGroup = node;
            console.log(this.checkboxGroup.value);
        }
    }}
/>
```

Name | Type | Description
:--- | :--- | :----------
value | any | Get the value of the checkbox group.

## License

MIT
