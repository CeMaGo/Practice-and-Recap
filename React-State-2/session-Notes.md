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