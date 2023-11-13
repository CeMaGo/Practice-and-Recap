# JS Unit Testing

## Learning Objectives

- [ ] Understanding What unit testing is and how it relates to others testing methods
- [ ] Know how to write a test that checks the output of a function
- [ ] Understand what Test Driven Development is and how it is used
- [ ] Know how to run unit tests locally (via the command line)

---

## what are unit tests

when developing apps, errors inevitably emerge in your code. That's why apps must be tested regularly to ensure that they work as expected.
Since manual testing bu clicking in the UI is very time consuming and cumbersome, test are automated.

Test automation can be performed in several ways. A good classification is provided bu the  [Test Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testinf-classifications).

Static Testing refers to linting and can be understood as a spell checker for your code.

Unit tests check wether a sing;e function works as intended. The goal is to test each individual unit independently and isolate from other data and external influences. The test can be run automatically after each modification to ensure latest changes won't break the app.

---

## Test Driven Development (TDD)

With Test driven development (TDD) the test is written first. Afterwards you write the function, which should create a desired result.

Following this approach you get feedback as early as possible wether your work is going into the right direction. In the beginning all tests will fail. Gradually more and more test will be successful. The implemntation of you function is finished as soon as all test runs are successful.

---

## How to test with Jest

Test are placed in a file next to the code you like to test, but with `test.js` as filename ending.

```
calculator.js           <--- Code used in your app
calculator.test.js      <--- Test for this code

When writing tests, you built various different scenarios that check a certain desired result of a function. Each of suh test cases in wrapped into a function called
[test()](https://jestjs.io/docs/api#testname-fn-timeout). The first argument of the `test()` function is a description of the test case in plain english.

Unit tests usually have a similar structure. First, the function to be tested is called and any  required argument are passed.
Afterwards the result of this function call is passed to the [expect()](https://jestjs.io/docs/expect) function. Thus different
[matcher](https://jestjs.io/docs/using-matchers) function like `toBe()` or `toEqual()` can be used.

This way the actually generated result of the function is checked against an expected result defined in the test case.

```js 
import { add } from "calculator";

test("adds the numbers 1,2, and 3 correctly", () => {
    const result = add(13,28,42);
    expect(result).toBe(83);
});
```

---

## Run Tests locally 

Run all test:

```sh
npm run test
```

When executing this commands you will see the result of the test run: a lisr of all included tests and wether they were successful or failed.

---

### Resources

- [Jest](https://jestjs.io/)
- [Tetsing Trophy and Testing Classification](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- 