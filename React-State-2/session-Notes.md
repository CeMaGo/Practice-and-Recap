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

We can use React to control the value of an input element. This is called a "cotrolled input". This
means that we manually set the value attribute of the input element. We can wire up a state variable
to the value attribute of the input element. This way the input element will always have the same value as the state variable. Combine with the `onChange`  event handler we can update the state
variable when the user types in the input field.

```js 
function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit () {
        event.preventDefault();
        consol.log("A new search term was submitted:", searchTerm);
        }
        return (
            <form onSubmit={handleSubmit}>
            label htmlFor="searchTerm">Search</label>
            <input
            name="searchTerm"
            id="searchTerm"
            value={searchTerm}
            onChange={(event) => setSearhTerm(event.target.value)}
            />
            <button>Search for {searchTerm}</button>
            </form>
        );
    }
```

In this example you always know the value of the search term input. Since it is a state variable,
zou can use it in other places in your application. You should prefer using uncontrolled inputs
when possible, but sometimes you need to use a controlled input.

Ypu might need a controlled input when

- showing search results while the user is typing,
- auto-completing the user's input or 
- validating the user's input.

## State Updates are not Immediate! 

WHen we call the setter function of a state variable, React will not immediately update the state
variable. Instead, it will update it's internal value and schedule a re-render of the component.

```js
// ⚠ This code is broken!
function Counter() {
    const [count, setCount] = useState(0); // count is 0 initially

    function handleIncrement () {
        //ehen this is first called, count is still 0
        console.log(count); // -> 0

        // this will set react internal state to 1,
        // but does not update the count variable
        setCount(count + 1);
        console.log(count); // -> 0

        // since setter functions were called
        // react will schedule a re-render of
        // the components with the new count value of 1
    }
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={handleIncrement by 2}></button>
        </>
    );
}
```

This behavior can be unexpected, but it is important to understabd that state variables are not immediately updated.

There are a few ways to fix the code above. In example we could call `setCount{count +2}` and
be done. If for some reason we need to call `setCount` twice, we can use the functional form of the setter function, which provides the current internal value of the state variable as an argument.

```js 
// ⚠️ this code is unnecessary complicated but it works!
function Counter() {
    const [count, setCount] = useState(0); // count is initially 0

    function handleIncrement() {
        // When this is first called count is still 0
        console.log(count) // -> 0

        // this will set reacts internal state to 1.
        // but does not update the count variable
        setCount((preCount) => prevCount +1);
        console.log(count) // => 0
        
        // the internal value of xount is 1,
        // we get as the first parameter of the function we pass to the setter.
        // 1 + 1 is 2, so react;s internal state will now be _2_
        console.log(count) // -> 0

        // since setter function were calles 
        // react will schedule a re-render of
        // the component with the new count values of _2_
}
       return (
        <>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}> Increment by 2 </button>
       );
}
```

> 💡 Here the prefix `prev` is useed to indicate that the value is the previous value of the state
> variable. Another common convention is to use the just first letter of the state variable as
> the parameter `setCount(c => c + 1)`.
>
> 📙 Read more about 
> [**Update state based on the previous state**](https://beta.reactjs.org/api.react/useState#updateing-state-based-on-the-previous-state)
> and
> [**I've updated the state, but logging gives me the old value**](https://beta.reactjs.org/api/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value)
> in the React Docs.

## React Hooks

