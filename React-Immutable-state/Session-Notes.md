# React Immutable State

## Learn Objectives

 - [ ] Understanding why you should never mutate state directly
 - [ ] Working with nested arrays and objects in state
 - [ ] knowing the `useImmer` hook

---

## Never mutate state

 In the session **React state 3** we discussed how to work objects and arrays stored in state.

 As you have learned you can change (mutate) data stored dorectly. You have to treat the state as **read only**. To change state you call the setter function and pass the complete next state.

 Consider an object like this in state:

 ```js
 Const [user, setUser] = useState({
    name:"John Doe"
    email:"john@doh.com
 });
 ```

 You might be tempted to mutate a value object and pass it to the setter function.

 ```js
 user.email = "john_doe@example.com"; // ❌ direct state mutation : dont't try this at home!!!
 setUser(user)
 ```

 **This code will nor work as expected**: it mutates the objet stored in state directly!

 When you call the setter function, React checks if the object in state has changes and the UI needs to be updated. Since you mutated the previous state object, it's  equal to the new state you passed to the setter function. React won't recogniye a difference and wont't update theUI.

 There or, you  need to make a copy of the date using the spread syntax and apply the changes to the copy. This way you won't mutate the previous state object.

 ```s
 setUser({
    ...user,
    email:"john_doe@example.com"
 })
 ```

 ---

 ## Updating nested states

 It can get a bit complictaed when you need to change data in a deeper nested state.

 