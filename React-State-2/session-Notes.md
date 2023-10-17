# React State 2

## Learning Objectives

  - [ ] Knowing how to handle from fields: controlled components, uncontrolled components
  - [ ] Knowing how to handle submit events
  - [ ] Understanding the concept of lifting state up
  - [ ] Knowing how to pass state and the function via props
  - [ ] Understanding that state updates are not synchronous
  - [ ] Knowing what a `hook` in React is and which rules apply to hooks

---

## Sharing State Between Components

### Passing State Down

The value of a state variable and the setter function can be passed down to child-components as props.
Thez are functions and values, so they can be passed down like any other data.

```js
function Parent() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount( count +1);
    }
    return <Child count={count} OnIncrement={handleIncrement} />;
}
```

```js
function Child ({ count, onIncrement }) {
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>increment</button>
        </>
    );
}
```

### Lifting State Up

When we have multiple components that need to share state, we can lift the state up to the parent-component and pass it down as prop.
This isi called "lifting state up" because you usually start with 
the state directory in the child component and then move it up to the parent components as you need it in more components.

A state variable can be passed down to multiple child components. The child components can then update the state variable by calling the setter function.

Any state variable should live as low in the components tree as possible but as high as needed. (keep it close to where it belongs duh!)
If the whole `App` needs to know about the state variable, it should live in the `App` component. If
only child-components of the `Article`  need to know about the state variable, it should live in the `Article` component.

Consider the following example:

<img src="./assets/lifting-state-up.png" width="616 height="694" />

Here we find that a `link` in the `Navigation` component needs to know about a state that previously
existed in the `Article` component. WE CAN LIFT THE STATE UP TO THE `App` component and pass it down 
to the `Article` component as a prop.

> 📙 Read more about 
> [**Sharing State Between Components in the React Docs**](https://beta.reactjs.org/learn/sharing-state-between-components).


## Handling Form Data

### Using Form Data `onSubmit`

We cab use `onSubmit` event handler to handle from data. The `onSubmit` event handler is called
when the user submits the form. We can get the form data (just like with regular JavaScript) form 
the `event` object.

```js
function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.elements.searchTerm.value;
    console.log("A new search term was submitted:", searchTerm);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Search</label>
      <input name="searchTerm" id="searchTerm" />
      <button>Search</button>
    </form>
  );
}
```

In this example the input is not manually controlled by React: The input is an
"uncontrolled input"/ It's value is managed by the browser. In the submitt event handler we just
"peek" at the input field and read the value from the DOM.

### Using Controlled Inputs

We can use React to control the value of an input element.