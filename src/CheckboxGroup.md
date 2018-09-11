```jsx
initialState = { value: [] };
<div>
	<p>{`Selected: ${state.value}`}</p>
	<CheckboxGroup
		depth={2}
	    name="items"
	    value={state.value}
	    onChange={(value, e) => setState({ value })}
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
</div>
```

Inline

```
const Space = require('../examples/Space.jsx').default;
initialState = { comic: [] };
<div>
	<p>{`Selected: ${state.comic}`}</p>
	<CheckboxGroup
	    name="comic"
	    value={state.comic}
	    onChange={(value, e) => setState({ comic: value })}
	>
	    <Checkbox label="Batman (DC)" value="dc:batman" />
	    <Space width="16" />
	    <Checkbox label="Hulk (Marvel)" value="marvel:hulk" />
	    <Space width="16" />
	    <Checkbox label="Superman (DC)" value="dc:superman" />
	    <Space width="16" />
	    <Checkbox label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
	</CheckboxGroup>
</div>
```