# React custom Hooks

## Learning Objectives

 - [ ] Understanding what a custom hook is and how to create one
 - [ ] Understanding that custom hooks can abstract stateful logic (`useState`, `useEffect`)
 - [ ] Understand when to create a custom hook

 ---

 ## Introduction

 React comes with a few basic (but nevertheless _use_-ful) hooks. We learned about `useState` and `useEffect`.

 Sometimes you want a hook that is build for a more specific use case. You can create your own costum hooks. They are functions that start with `use` and can use other hooks.

 - [ ] A state with several specific update function (eg. `value`, `increment()`, `decrement`, `reset()` -> `useCount()`)
 - [ ] A state that is syncronized with window events and values (e.g. `useWindowWidth()`)
 - A state that represents a fetched resource (e.g. `useFetch()`)
 - A state that is persisted in the browser's local storage (e.g. [`useLocalStorageState()`](https://github.com/astoilkov/use-local-storage-state)).

 > 📙 Read more about [**Reusing Logic with Custom Hooks** in the React docs](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks).

##  Counter Example 

You could define a custom `useCount` hook like this:

```js
import { useState} from "react";

function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + 1);
    }
 function decrement() {
    setCount( count - 1);
 }

 function reset() {
    setCount(initialValue);
 }

 return {count, increment, decrement, reset}
}
```

And us it like this:

```js
import { useCount } from "./useCount";

function Counter() {
    const {count, increment, decrement, reset } = useCount(0);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Inrement +</button>
        <button onclick={decrement}>Decrement -</buttonc>
        <button onClick={reset}>Reset</button>
        </div>
    );
}
```

> 💡 Here `useCount` uses the `useState hook internally. This is why it needs to be a hook itself. Custom hooks need to follow the same rules as normal hooks: Only call hooks at the top level of your function, abd only call them from inside a React function component ar a custom hook. 

## Custom Hook Return Values

Costum hooks can return anything a normal function can return. Here are some examples of common return values:

### Returning a single value

Sometimes hooks only need to return a single value.

```js
function useWindowWidth() {
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

This hook only returns the current window width. It doesn't need to return anything else. The value can be given any name when using the hook.

```js
const currentWindowWidth = useWindowWidth();
```

### Returning an array

```js
function useD6() {
    const [vale, setValue] = useState();

    function roll( ) {
        setValue(Math.floor(Math.random() * 6) + 1);
    }

    return [value, roll];
}
```

This hook returns an array with the current value and a function to roll the dice. Returning an array is a common patter, since it allows you to use array destructuring to get the value analogous to hwo `useState` works. Array destructuring has the benefit that you can easily name values.

```js
const [firstDie, rollFirstDie] = useD6();
const [secondDie, rollSecondDie] = useD6();
```

### Returning an Object

```js
fuction useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increment( ) {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function reset() {
        setCount(initialValue)
}

return { count, increment, decrement, reset} ;
 }
 ```

 > 💡 The return statement makes use of objects shorthand notation. This is a nice way to an object with properties that have the same name as the variable. The above is equivalent  to :
>
> ```js
> return {
>    count: count,
>    increment: increment,
>    decrement: decrement,
>    reset: reset,
> };
> ```

When a hook exposes more values and functions, it is common to return an object. This allows you to use object destructuring to get the values . You can also omit the properties you don't need from the destructuring.

```js
function useCount(initialValue = 0) {
    // --
}

const { count, increment, decrement, rest } useCount(1337);
```

## Hooks and Modules

Custom hooks can be defined in the same file as the component uses them. But it is also common to define them in a separate file and import them.

```js 
// useCount.js

import { useState } from "react";

export function useCount(initialValue = 0) {
    const { count, increment, decrement, reset }
    // -
}
```

## Abstract recurring logic into custom hooks

### A simple `useFetch` hook

As fetch is a vert common use case, it is a goof candidate for a custom hook. Here is a simple `useFetch` hook that fetches a resource and returns the parsed response.

```js
import { useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState();

    useEffect(() => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
     } [url]);

     return data;
}
```

And use it like this:

```js
import { useFetch } from "./useFetch";

function App() {
    const jokes = useFetch("https://example-apis.vercel.app/api/bad-jokes");

    return (
        <div>
        <h1>Bad Jokes</h1>
        <ul>
        {jokes?.map(({id, joke }) => (
            <li key={id}>{joke}</li>
        ))}
        </ul>
        </div>
    );
}
```

> 💡 Notice that this hook does not implement any advanced features like handling race conditions, error handling, loading states or caching.

### A `usePokemon` hook that uses `useFetch`

If we now want to have a simple to use hook for a very specific use like fetching a single pokemon from the pokeapi, we can build a `usePokemon` hook that uses the `useFetch` hook internally.

```js
import{ useFetch } from "./useFetch";

export function usePokemon(name) {
    const pokemon = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return pokemon;
}
```

And use it like this:

```js
import { usePokemon } from "./usePokemon":

function App() {
    const pokemon = usePokemon("pikachu");

    return (
        <div>
        <h1> {pokemon?.name}</h1>
        <img src={pokemon?.sprites.font_default} alt={pokemon?.name}/>
        </div> 
    );
}
```

Here we are using a custom hook (`useFetch`) inside another custom hook (`usePokemon`).This allows for quite powerful abstractions.

## When should you create a custom hook?

Custom hooks are a powerful tool to abstract it. If you are using something twice: You might want to abstract it.

---

### Resources

- [Reusing Logic with Custom Hooks in the React docs](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)