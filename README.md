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
  import Checkbox from '@trendmicro/react-checkbox';

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

## API

### Properties

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
label | Node or String | | Text label to attach next to the checkbox element.
labelClassName | Object | | Customized class name for the text label.
labelStyle | Object | | Customized style for the text label.
inputClassName | Object | | Customized class name for the checkbox element.
inputStyle | Object | | Customized style for the checkbox element.
className | Object | | Customized class name for the label element.
style | Object | | Customized style for the label element.
disabled | Boolean | false | If true, the checkbox shown as disabled and cannot be modified.
checked | Boolean | | The checked state of the checkbox element.
defaultChecked | Boolean | | The default checked state of the checkbox element.
indeterminate | Boolean | | The indeterminate state of the checkbox element.
defaultIndeterminate | Boolean | false | The default indeterminate state of the checkbox element.

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

## License

MIT
