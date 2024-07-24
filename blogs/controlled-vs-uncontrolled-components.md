## 1. What are controlled components?

A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.

The controlled components will be implemented using the below steps,

1. Initialize the state using use state hooks in function components or inside constructor for class components.

2. Set the value of the form element to the respective state variable.

3. Create an event handler to handle the user input changes through useState updater function or setState from class component.

4. Attach the above event handler to form elements change or click events

For example, the name input field updates the user name using `handleChange` event handler as below,

```markdown
import React, { useState } from "react";

function UserProfile() {
const [username, setUsername] = useState("");

const handleChange = (e) => {
setUsername(e.target.value);
};

return (

<form>
<label>
Name:
<input type="text" value={username} onChange={handleChange} />
</label>
</form>
);
}
```

This method does not require any additional setup and works well for most Markdown processors.

## 2. What are uncontrolled components?

The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

The uncontrolled components will be implemented using the below steps,

1. Create a ref using useRef react hook in function component or React.createRef() in class based component.

2. Attach this ref to the form element.

3. The form element value can be accessed directly through ref in event handlers or componentDidMount for class components

In the below UserProfile component, the username input is accessed using ref.

#### Example

```markdown
import React, { useRef } from "react";

function UserProfile() {
const usernameRef = useRef(null);

const handleSubmit = (event) => {
event.preventDefault();
console.log("The submitted username is: " + usernameRef.current.value);
};

return (

<form onSubmit={handleSubmit}>
<label>
Username:
<input type="text" ref={usernameRef} />
</label>
<button type="submit">Submit</button>
</form>
);
}
```

## Summary

In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
