# React Props

## Learning Objectives 

  - [ ] Understanding what props are
  - [ ] Understanding how to pass props to a component
  - [ ] Understanding how to use props in a component
  - [ ] Understanding how to render conditionally

  ---

  ## Using Props

   Props is short for properties. They are a way to pass data to a child component. A component receives a props object as the first function parameter.

   Props are [passes to a component as attributes](#passing-props-to-a-component).

   ```js
   function UserCard(props) {
       return <div>{prop.name}</div>:
   }
   ```

   For convenience the props object is often desturtured in the function parameter.

   ```js
   function UserCard({name}) {
       return <div>{name}</div>;
   }
   ```

You can choose any names for your props.

> 💡 There are some naming conventions though. Boolean props are often prefixed with `is`, `has` or `should`. For example `isDisabled`, `hasError` or `shouldShow`.
Props that take functions are often pre=fixed with `on`. Fir example `onClick`, `onSubmit` or `onHover`. Following these conventions makes it easier to understand the purpose of the prop.
 
 Props can be of any type (string, number, array, object, fumction, ...).

 You should treat the props object as immutable and read-only.

 ---

# Passing Props to a Component

Props are passes to a component as attributes.

```js
<userCard name="Alex" />
```
You can pass any type of data as a prop.

```js
<UserCard
name="Alex"
age={25}
onContact={() => console.log("lets chat!" )}
isFavorite={true}
favoriteFoods={["Pasta", "Salad"]}
contactDetails={{email="alex@spiced.com", phone="12345678'}}
/>
```

String props can be passed using double quotes. All other props must be passed using curly braces.

> 💡 Notice the double curly braces for the object. This is because the outer curlu braces are used to signify a JavaScript expression. The inner Curly braces are used to define an object.

> 💡 There is a shorthand syntax for boolean props. If the value shoiuld be `true` you can omit the values.
>
>```js
>  <Usercard isFavorite/>
>```

### Conditional Rendering

You can props to conditionally render parts of a component.

```js
function UserCard({ name, isFavorite }) {
    return (
    <div>
    {name}
    {isFavorite ? <span>🌟</span> : null}
    </div>
    ):
}
```

> 💡 In JSX `null` is a way to render nothing.
You can use an `if`1 statement within JSX because only expressions are allowed. You can use an `if` statemnet outside of the JSX though.

```js
function UserCard({ name, isFavorite })     {
    let favoriteStar = null;
    if (isFavorite) {
        favoriteStar = <span>🌟</span>:
    }
    return (
    <div?
    {name}
    {favoriteStar}
    </div>
    ):
}
```

> 📙 Read more about [**Conditional Rendering**
> in the React Docs](https://beta.reactjs.org/learn/conditional-rendering).)

---

## Resources

- [Passing props to a Component int the React Docs](https://beta.reactjs.org/leranlpassing=props-to-a-component)
-[Conditional Rendering in the React Docs](https://beta.reactjs.org/learn/conditional-rendering)
