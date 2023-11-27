# Backend Basics

## Learning Objectives

- [ ] Knowing that JavaScript can be executed outside of the browser
- [ ] Knowing Node.js is a runtime environment for JavaScript
- [ ] Understanding that the browser and Node.js provide environment specific APIs
- [ ] Knowing the terms server, backend and frontend
- [ ] Having a general understanding og the request - response mechanism

---

## JavaScript outside of the Browser

So far we have only used JavaScript in the browser. But JavaScript can also be used outside of the browser. 

Node.js is a runtime environment for JavaScript. It allows us to run JavaScript outside of the browser. Node has some differneces to the browser. For example, Node.js does not have a DOM. But provides some APIs that are not available in the browser. For example, Node.js an API to access the file system.

One thing that Node.ja can do is to create a web server. A web server is a program that listens for requests and responses back to the client. The web server can be user to serve web pages ot to provide an API for web application.

## Running a Node Program

To run a Node program you need to use the `node` command. The `node` command takes the path to a JavaScript file as an argument. The following `node` command will execute the JavaScript file `index.js` in the root of the project: `node index.js`.

For convenience, our templates include a script in the package.json that allows you to run the program with **`npm run start`**. The template includes a development mode, that automatically restarts the program when you make changes to the code. To start the development mode you can use **`npm run dev`**.

## A Basic Node.js Program

A Node.js program can be almost anything. It can be a web sever, a command line toll or a script that does some calculations. Trz out create a Node,js program that prints "Hello World" to the console or does some calculations.

```js
const answer = 32 + 4;
console.log(answer);
```

Run the program with the `node` command.