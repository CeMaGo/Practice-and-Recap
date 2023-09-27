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

## Imperative vs. Declarative Programming

The main difference between imperative and declarative code is that imperative code describes _how_
something should be built, and declarative code describes _what needs to be built.

>💡 Imagine building a stool. Imperative "code" would describe the steps you need to take to build
> the stool. Declarative "code" would describe the stool itself
>
> Imperative:
>
> - take 4 wooden slats
> - take 1 wooden board
> - take 4 screws
> - take a screwdriver
> - screw the slats under the board perpendicularly
> - position your work so that the board is on top
>
> Declarative:
>
> - a stoll with 4 legs and a seat, stading upright

In imperatibe programming, you code performs a series of actions.
in declarative programming, you code describes a desired outcome.

The way we have used JavaScript during this course so far has been mostly imperative. We have
descirbed what needs to be done to get a certain result.

```js
const p = document.createElemenet("p");
p.classList.add("introText");
p.textContent = "Hello World!";.
rootElement.append(p);
```

Now, React allows us to use JavaScript in a declarative waz. We describe to React what we want, and
React figures out how to update the DOM according to our description.

```js
root.render(<p className="introText">Hello World!</p>);
// React could interpret this to do the following:
// const p = document.createElement("p");
// p.classList.add("introText");
// p.textContent = "Hello World!";
// rootElement.append(p);
// -
```

##How React Renders

React needs to now where to render the elements it creates. We select the DOM element we want to
render into by using `document.querySelector()`. We the create a React root object. The root object
has a `render()` method that we can use to render React elements into the DOM.

**HTML**

```html
<div id="root"></div>
```

**JavaScript**

```js
const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<h1>Hello, world</h1>);
```

you'll probably never have to write this code yourself, because it is already included in all
templates and starters. In real world it usually looks like this:

```js
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot();

root.render(
  <React.StrictMode>
   <App />
  </React.StrictMood>
);
```

Here we have an imported `<App />` element that is wrapped in `<React.StrictMode>`.

> 💡 `StrictMode` sets up React to run in strict mood. IN strcit mood React points out potential
> pronlems in an application.

### React works smart, not hard

React only updates the DOM elements that have changed compared to the lst render. This is very
efficient and provides a great user experience (focus stays consistent, inputs keep their values,
etc.) as well as a greate developer experience (declarative code is much easier to reason about).

## Nice to know> React, JSX, transpilers and Bundlers

Since JSX is not a standard JavaScript syntax, we need to use a [transpiler](https://babeljs.io/) (a tool that translates one variant of language into another) to transform it into standard JavaScript, that can be understood by the browser.

A[bundler](https://webpack.js.org/) is a tool taht comnines all the files of our codebase into one file, that we can include in our HTML. The bundler also takes care of running the transpiller when needed.

The bundler creates a development server when we run `npm run start` locally. CodeSandBix does this
for us automatically.

> 💡 You might notice that in the challenges we are using an `import` statement to import `.css` files. This is not a standarrd JavaScript feature, but itis supported by the bunder. A css statemnet is transformed into a `<link>` element in HTML automatically.
> 
>```js
> import "./styles.css";
>```

---

##Resources

- [What is React: A Visual Introduction For Beginners on learnreact.design](https://learnreact.design/posts/what-is-react)
- [Writing Markup with JSX in the React Docs](https://beta.reactjs.org/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces in the React Docs](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)
- [Your First Component in the React Docs](https://beta.reactjs.org/learn/your-first-component)
- [Difference between a Framework and a Library on freecodecamp](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)
- 
