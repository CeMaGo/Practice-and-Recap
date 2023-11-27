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

Run the program with the `node` command. For example, if you save the program in a file called `index.js` you can run the program with `node index.js`.

> 💡 You can use the console.log` function to print values to the console. In the case of Node.js the console is the terminal and not the browser console.

## Node.js Servers

You can use Node.js to create web servers, To di so you can use the `http` module provided by Node.js.

You can import a native node module by using the `node:` prefix. For example, to important the `http` module you can use the following code:

```js 
import { createServer } from "node:http";
```

You don't need to installed the `http` module. It is included in Node.js.

### Creating a Server

The `http` module provides a function called `createServer` that takes a callback function as an argument. The callback function is called whenever a request is made to the server. The callback function is called with two arguments: `request` and `response`. The `request` objects information about the request that was made to the server, The `response` object is user to send a response back to the client.

```js
import { createServer } from "node:http";

export const server = createServer ((request, response) => {
    response.statuseCode = 200;
    response.end("HELLO WORLD");
});
```

The `response.statusCode` property is used to set the status code of the response. The `response.end` method tales a string as an argument. The string is sent back to the client.

You can access the `request` object to get information about the request thats was made to the server. For example, you can access the `url` property of the `request` object to get the URL that was requested.

```js
import { createServer } from "node:http";

export const server = createServer ((req, res) =>{
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Hello World");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});
```

> 💡 Online you will find the abbriviations `req` and `res` for `request` and `response`. This is a common convention but `req` and `res` are very hard to distinguish so we will use the full name in this Bootcamp.

### Start the Server (Listening for Requests)

To start the server you need to call the `listen` method on the server objects. The `listen` method takes  two arguments: the prot number and an optional callback function. The callback function is called when server is ready to accept requests.

To separate the code that creates the server from the code that starts the server you can export the server object from a `server.js` file and start the server in `index.js`:

```js
import { Server } from "./server.js";

const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1${port}/`)
});
```

> 💡 When you call `listen`, Node.js will keep the program running instead of exiting immediately. This is necessary because the program needs to keep running in order to accept requests.

## Resources

- [Node.js Website](https://nodejs.org/)
- [`http.createServer()` in the Node.js Docs](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
- [`server.listen()` in the Node.js Docs](https://nodejs.org/api/http.html#serverlisten)