# React State

## Learning Objectives

- [ ] Knowing how to attach events in React
- [ ] Understandinf the consept of "state"
- [ ] Using `useState()` to handle state in React
- [ ] Understanding the React Lifecycle

---

## What is state?

State is data that changes over time. Think of the lamp on your desk. It can be switched on or
switched off. The lamp is in a paticular state at a given time and taht state ch change over time.

Another example could be the amount of money in your purse. At any given time you have a certain amoun
of money in your purse, but the amouny of money can change. The state of your purse can change.
Going to the grocery store will decrease the amount of money, while going to the ATM will increase it.

This concept also applies to software. Your ap can have data that changes over time.

Think of a post on a social media app. You might have liked a specific post, or not. The "liked"
state of a post can be on or off, Like the lamp on your desk.

The website of your bank rferes to your purse in the analog world. At any given time, the bank software
displays the current balance of zour account, the current state. You can use the banking software to
change that state. For example you could transfer money to another account to decrease the number stored in the "balance" state.

Oftentimes such stateful data chnages after a user inetraction, like a click on a button.

---

## State in React

In React we work with state by using the `useState` hook function.

We call the `useState` funtion and pass the **initial state** value as argument. This is the value
that is used in out app until something changes.

Calling the `useStatea function gives us two things in return:

- a variable with the **current state** 

```js
import { useState } from "react';

function SocialMediaPost() {
    const [liked, setLiked] = useState(false);

    function toggleLike() {
        setLiked(!liked);
    }

    return (
    <article>
    <p>Liked : {liked ? "Yes" : "No"}</p>
    <button type="button" onClick={toggleLikr}>
    {liked ? "Remove like" : "Add like"}
    </button>
    </article>
    );
};
```
> 💡 There is a namin convention for React apps that stated variable and the function alwazs
> follow the pattern of `x` and `setX`

> 📙 Read more abour the
> [**concept of state** in the React Docs](https>//bet.reactjs.org/learn/adding-interactivivty).

In React state is encapsulated per instance of a component. Think of a feed in a social media app.
The feed is a list of posts. Each post is an indicidual instance of the `socilaMediaPost` component,
each with individual state. When zou change the "liked" state specific post, all other post
stay as they are.

 A React component can have multiple stated. You can use the `useState` function as much as you need.

 Ypu can store all kinds of data in state (like boolean, numbers, strings, objects or arrays).

 ```js
 import { useState } from "react";

 function SocialMediaPost() {

    const [liked,setLiked] = useState(false)
    const [commments, setComments] = useState([]);
    const [views, setViews] = useState(0);

    /* ... */

    return <article>{/* ...*/}</artcile>
 }
 ```

 ---

## What happens when state changes ?

To handle state in React we can not simply use a "normal" variable and assign a new value.
React needs to be informed that the data was changes.

This is related to the render cycle of React components.

When React renders a component it execures the componet fuhnction, which returns JSX. If the JSX
includes a state variable, it uses the variable's value at the time to place into the JSX.alling
the `set` function with a new value informs React, that the state has changed.

> 💡 Changing a state triggers a re-render of the component.

When re-rendering the component, React executes the component function again from top to bottom,
which will again return JSX. However, this time the variable has a new value - the value that was 
passed with the call od the `set` function. This menas the return JSX includes the new value.

> 📙 Read More About
> [**state update and re-rendering** in the React Docs](https://beta.reactjs.org/learn/render-and-commit).

---

## Resources

 - [React Docs: Adding Interactivity](https://beta.reactjs.org/learn/adding-interactivity)
 - [React Docs: Responding to Events](https://beta.reactjs.org/learn/responding-to-events)
 - [React Docs: A Simple variable is not enough](https://beta.reactjs.org/learn/state-a-components-memory#when-a-regular-variable-isnt-enough)
 - [React Docs: Render and Commit](https://beta.reactjs.org/learn/render-and-commit)
 - [MDN: react events and state](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)

