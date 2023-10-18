# React State 3

## Learning Objectives

 - [ ] Knowing how to handle arrays and objects in state
 - [ ] Knowing what state mutation is and how to avoid it

---

## Avoid State Mutation

Regardless of how complex the state you have in application (object, array, array of objects)
This means that you should not directly mutate the state .eg. with reassigning a new value to it.

To avoid mutation when updating state, you need to

1. create a new object / array (or make a copy of the existing one), and
2. use the setter function with the recently created / updtaed copy in order to cause a re-render.

---

## Updating Objects in State

To make a copy of an object and change only some properties, you can use the spread syntax:

```js
const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
});

function handleChangeFirstName(firstName){
    setPerson({ ...person, firstName });
} 

// Somewhere else:

handleChangeFirstName("Jane");
```

> ❗️ If you were to assign a  new value directly, you would mutate the state. This is bad because we must treat state as immutable. Doing so can lead to hard to find bugs.
>
> ```js
> // NEVER DO THIS:
> function handleChangeFirstName(firstName) {
>    person.firstName = firstName;
>   setPerson(person);
>}
>```

> 📙 Learn more about [**Updating Objects in State** in the React Docs](https://beta.reactjs.org/learn/updating-objects-in-state).

---

## Updating Arrays in State

As you know, there are several ways to update arrays. Some of them, however, mutate the array, and some of them don't.


|           | avoid (mutates the array)           | prefer (returns a new array) |
| --------- | ----------------------------------- | ---------------------------- |
| adding    | `push`, `unshift`                   | `[...arr]` spread syntax     |
| removing  | `pop`, `shift`, `splice`            | `filter`                     |
| replacing | `splice`, `arr[i] = ...` assignment | `map`                        |
| sorting   | `reverse`, `sort`                   | copy the array first         |

> 💡 It does not matter whether your array state contains only primitives or other objects / arrays'
> in all cases, you should only use the preferred array methods.

### Adding to an Array

To add an element to an array, you can use the spread syntax:

```js
const [numbers, setNumbers] = useState([0,1,2]);

function handleAppendNumber(Number){
    setNumber([...numbers,number]);
}

// Somewhere else far far away:
handleAppendNumber(3);

function handlePrependNumber(number) {
    setNumber([number, ...numbers])  //spread syntax after the to-prepend data
}

// Somewhere else in Codeland:

handlePrependNumber( -1 );
```

### Removing from an Arraz

To remove an element from an array, you can use the `filter` method:

```js 
const[number, setNumber] = useState([0,1,2]);

function handleRemoveNumber(numberToRemove) {
    setNumbers(number.filter((number) => number !== numberToRemove));
}

//Somewhere else...
handleRemoveNumber(1);
```

### Replace an Array Element

To replace an element in an array, you can use the `map` method:

```js
const [numbers, setNumbers] = useState([0, 1, 2]);

function handleReplaceNumber(oldNumber, newNumber) {
  setNumbers(
    numbers.map((number) => {
      if (number === oldNumber) return newNumber;
      return number;
    })
  );
}

// Somewhere else:
handleReplaceNumber(1, 1337);
trees.filter((tree) => tree.height > 7);
```

### Sorting an Array

To sort an array, you can use the spread syntax to make a copy of the array first, then sort the copy:

```js
const [number, setNumber] = useState([12,2,42,4]);

function handleSortNumbers(){
    setNumbers([...numbers].sort())
}
```

> 📙 Learn more about [**Updating arrays without mutation** in the React Docs](https://beta.reactjs.org/learn/updating-arrays-without-mutation).

---

## Updating Arrays of Objects in State

Most of the time, you will encounter arrays of objects in your state.

### Adding a new Object

You can add a new object to the state array by using the spread syntax:

```js 
const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5}
    { id: 1, name: "Beech", height: 6}
    { id: 2, name: "Pine", height: 10}
])

function handleAddTree(tee) {
    setTrees([...trees,tree]);
}

// Somewhere in Code: ...

handleAddTree({id: 3, name: "Spruce", height: 13})
```

### Removing an Object

To remove an object, you can `filter` the array for a unique identifier. In most cases, this
identifier is in scope because the relevant object is rendered via `map`.

```js
const [trees, setTrees] = useState([
    { id: 0, name: "Oak", height: 7.5}
    { id: 1, name: "Beech", height: 6}
    { id: 2, name: "Pine", height: 10}
    ]);

    function handleRemoveTree(idToRemove) {
        setTrees(trees.filter((tree) => tree.id !== idToRemove));
    }

    // Somewhere in Code: ...
    handleRemoveTree(0);
 ```

 To replace an object, you can use `map` to create  a new array with the old object. Remember to create a copy of the object first, otherwise you will mutate the state.

```js 
const [trees, setTrees] = useState([
    {id: 0, name: "Oak", height: 7.5}
    { id: 1, name: "Beech", height: 6}
    { id: 2, name: "Pine", height: 10}
]);

function handleSetNewHeightForTree(id, height) {
    setTrees(
        trees.map((tree) => {
            if (tree.id === id) return {...tree, height};
            return tree;
        })
    );
}

//Somewhere else in code:
handleSetNewHeightForTree(0,8);
```

### Sorting an Array of Objects

To sort an array of objects, you can use `sort` on a _copy of the array_ with a custom compare function .
The compare function returns a number, which is used to determine the oder of the elements.

```js
const [trees, setTrees] = useState([
    {id: 0, name: "Oak", height: 7.5}
    { id: 1, name: "Beech", height: 6}
    { id: 2, name: "Pine", height: 10}
]);

function handleSortTreesByHeight() {
    setTrees([...trees].sort((a,b,) => a.height - b.height));
}
```

> 📙 Read more about [**Updating objects inside Arrays** in the React Docs](https:///beta.reactjs.org/lear/updating-arrays-in-state#updating-objects-inside-arrays).

## Choosing Related State

If you have state that belongs (and updates) together, group it into a single object. This makes it easier to update the state.

