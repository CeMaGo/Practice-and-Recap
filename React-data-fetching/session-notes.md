# React Data Fetching

## Learning Objectives

 - [ ] Understanding the advantage of fetching library in general 
 - [ ]  Knowing how to fetch with `SWR`:
          - `fetcher` function
          - loading and validating state
          - `mutate()`
 - [ ] Knowing hoe to combine local state with fetch data

---

## Why a data fetching library over `useEffect` and `fetch` ?

> 📙 Read more about [SWR's features](https://swr.vercel.app/#features).

---

 ## How to SWR

 ### Basic Fetching

In Order to use the `useSWR` hook. you first need to create a fetcher function, which is just a 
wrapper of the native fetch. A basic example
[recommended by the docs](https://swr.vercel.app/docs/getting-started) looks like this:

```js 
const fetcher = (...args) => fetch (...args).then((res) => res.json());
```

Then you can import the `useSWR` hook and pass it two arguments: the `url` you want to fetch and the 
`fetcher` function. `useSWR` returns a `data` object you can use in your JSX.

```js 
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Character() {
    const {data} = useSWR("https://swapi.dev/api/people/1", fetcher);

    // render data
    return <div>Hello {data.name}!</div>; // Hello Luke Skywalker!
}
```

> 💡 Note the `useSWR` returns an Object from whcih you destructure `data`. This is why zou cannot 
> simply call the `data` object as you like, but have to rename it according to destructuring rules:
> `{data: person }`. 📙 Read more avout
> [Getting Started in the docs](https:..swr.vercel.app/docs/getting-started).

 ### Configuration SWR

It can be useful to set some applictaion-wide configuration for `SWR`. You can do so by passing an config object to the `SWRConfig` component in your `App` (in Next.js that `pages/_app.js`). The following example sets an epplication wide `fetcher` function and 
an application wide `refreshInterval`:

```js
import { SWRConfig } from "swr";

const fetcher = (..args) => fetch(...args).then((res) => res.json());

function App () {
    return (
        <SWRConfig
        value={{
            fetcher,
            refreshInterval: 1000,
        }}
        >
        {/*... your app */}
    );
}
```

Setting an application-wide `fetcher` function is very convenient if you want to use the same fetcher function in many
places.

> 💡 All following examples will assume an applictaion-wide `fetcher` function configured via
> `SWRConfig`

 ### Loading Error State

The `useSWR` hook provides an `error`, `isLoadind` (loading data from first time) and `isValidating` (anztime data is (re-)loaded) state you can use to create the respective UI 
output.

You can destructure the like the `data` object and use them to conditionally return JSX:

```js 
function CHaracter () {
    const { data, error, isLoading, isValidating } = useSWR (
        "https://swapi.dev/api/people/1"
    );
    
    if (error) return <div> failed to load </div>;
    if (isLoading) return <div> Loading... </div>:

    //render Data
    return (
        <div>
        <span role="img" aria-label={isValidating ? "validating" : "ready"}>
        { isValidating ? "⏳" : "✅"} 
        </span>
        Hello {data.name}!
        </div>
    );
}
```

The `fetcher` function above does nto `throw` an `Error` object for non- `ok` Responses. Throwing is required for SWR to recognize an error and put it into the `error` property of the object returned by the hook.


You can customize the `fetcher` to `throw` an `Error` with additonal information (the following
[example is taken from the docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object)):

```js 
const fetcher = async (url) => {
    const res = await fetcher(url);

    //if the status code is not on the range 200-299,
    // we still try to parse and throw it.
    if(!res.ok) {
        const error = new Error ("An error occurred while fetching the data.");
        //ATtach extra info to the error object.
        error.info = await res.json();
        error.status = rs.status;
        throw error;
    }
    return res.json();
};
```

