# React Basics

## Learning Objectives

- [ ] Understanding what React is and whu it is used
- [ ] Understanding JSX and differences to HTML
- [ ] Understanding the declarative approach of React
- [ ] Creating React components
- [ ] Understanding rendering with React
- [ ] Knowing about the React ecosystem

## What is React and why do we use it?

React is a Javascript library with the purpose if making the developer's life easier: zou don't neet to work
with the DOM API (e.g. `createElement`) in most cases. You jsut write simpler (declarative) code
descirbing what the user interface should look like and React handles the DOM under the hood.

To wirte declarative code for React, you use JSX.

## Using JSX

JSX is a syntax extention to JavaScript. JSX is neither a sting, nor HTML as we know it. JSX
expressions can be used anywhere a JavaScript expression can be used.

```js
const element = <p>Some Text</>;
```

We use JSX to create react elemnts. React elements are an intermediary formate that React converts
to the DOM element during the rendering process. This allows us to declaratively describe our user
interface using JSX.

### Creating Elemnts.

Just like in HTML, JSX elements are described using opening and closing tags. The opening taf
contains the tag name or the component type (see [Using Components](#using-components)) and any
attributes. The closing tag contains the same tag name or the same component type as the opening tag does and 
children, the closing tag can be omitted and the element is self-closing.

# React Basics

## Learning Objectives

- [ ] Understanding what React is and why it is used
- [ ] Understanding JSX and differences to HTML
- [ ] Understanding the declarative approach of React
- [ ] Creating React components
- [ ] Understanding rendering with React
- [ ] Knowing about the React ecosystem

## What is React and why do we use it?

React is a JavaScript library with the purpose of making the developer's life easier: you don't need to work directly
with the DOM API (e.g. `createElement`) in most cases. You just write simpler (declarative) code
describing what the user interface should look like and React handles the DOM under the hood.

To write declarative code for React, you use JSX.

## Using JSX

JSX is a syntax extension to JavaScript. JSX is neither a string, nor HTML as we know it. JSX
expressions can be used anywhere a JavaScript expression can be used.

```js
const element = <p>Some Text</p>;
```

We use JSX to create React elements. React elements are an intermediary format that React converts
to DOM elements during the rendering process. This allows us to declaratively describe our user
interface using JSX.

### Creating Elements

Just like in HTML, JSX elements are described using opening and closing tags. The opening tag
contains the tag name or the component type (see [Using Components](#using-components)) and any
attributes. The closing tag contains the same tag name or the same component type as the opening tag does and nothing else. The
children of the element are placed between the opening and closing tag. If the element has no
children, the closing tag can be omitted and the element is self-closing.

```js
// Element with children
//
//              opening tag         children
//              |  attributes       |        closing tag
//              |  |                |        |
const element = <p className="text">Some Text</p>;
//               | |         |                 |
//               | |         attribute value   |
//               | attribute name              |
//               tag name or component type ---+

// Self-closing element
//
//            self closing tag   slash denotes self closing
//            |      attributes  |
//            |      |           |
const input = <input type="text" />;
//             |     |    |
//             |     |    attribute value
//             |     attribute name
//             tag name or component type
```

> 💡 Elements that do not support closing tags in HTML like `<br>` `<input>` must be self-closing
> in JSX (like `<br>` or `<input type="text" />`).

> 💡 Unlike HTML, which is resilient to missing closing tags, JSX is not. If zou forgwt to close a
> tag, you will get an error.

### Attributes

Attributes for built-in HTML elemnts use JavaScript-centriv names from the DOM API. In most cases
the names are the same as in HTML, but there are some exceptions. For example, the `class` attribute
from HTM: is called `className` in JSX.

Passing string values to sttributes is done by double quotes. To pass `any JavaScripte
expression use curly braces.

```js
const element = <p className="text">Some Text</p>;

const myValue = "This is a string";
const input = <input type="text" value={myValue} minLength={5} />;
```

### Nesting Elements

React elements can be nested the same way we have been nesting our HTML elements.

```js
const element = (
  <div>
    <p>Some Text</p>
    <p>Some more Text</p>
  </div>
);
```

>💡 Multiline JSX expressions are wrapped in paraentheses to make them easier to read, No worries:
> Prettier will take care of that for you.

### Interpolating Expressions

We can use JAvaScript expression inside JSX by wrapping it in curly braces. This is called
interploation. It is similar to sting interpolation in JavaScript template strings.

```js
const name = "Pawtricia";
const element = <p>My cat's name is {name}<p/>;
```

```js
const a = 5;
const b = 10;

const element = (
    <p>
     {a} + {b} = {a + b}
    </p>
);
```

< 💡 You can only use expressions inside JSX. Statements like `if` or `for` are not allowed.

> 💡 To learn how to interpolate JavaScript expressions inside JSX attribute , refer to the [Attributes](#attributes) section.

> 📚 Read more about [**JavaScript in JSX with Curley Bracess**
> in the React Docs](https://beta.reactjs.org/learn/javascript-in-jsx-with-curley-braces)

## React Components

React applicationss are built using components. A component is an independent and reusable piece of the user interface that conatins its own structure, logic, and potentially styling.

React components are JavaScript functions that
retutn React elemenrs. Those elements are turned into DOM elemenets by React during the
rendering process.

In order to create a React component, we wirte a named function (using PascalCase) and have it
return the desired element in JSX.

```js
function MyButton() {
    return (
    <button type="buttton" className="default-button">
     I'm a button
     </button>
    );
}}
```

This is a very powerful consept, because it allows us to resue the same component in multiole places
in our applictaion.

> 💡  See [Using Components](#using-components) for more information on how to use components is JSX.

> 💡 There are hardly any limitations to how 'small' a component can be (i.e. a button), or how 
> 'big' (i.e. an entire page).

> Read 📚 about [**Your First Component**
> in the React Docs](https://beta.reactjs.org/learn/your-first-component).
>
>**Note** _Exporting the component_ and _Nesting and organiying components_ are out of scope for this first session.

## Imperative vs. Declarative Programminf

The main difference between imperative and declarative code is that imperative code describes _how_
something should be built, and declarative code describes _what needs to be built.


