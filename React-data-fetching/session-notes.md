****# React Data Fetching

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

> 💡 Note the `useSWR` returns an Object from whcih you destructure `data`. This is why you cannot 
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

This function throws an error with the leys `info` and `status` if the status code of the response is not in the range  of 200-299.

> 💡 The advanced `fetcher` above  uses two concepts we have not covered:
> [the `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
> and 
> [the `throw` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).
> These are advanced JS features we don;t need to go into detail by now, but diving into it will
> give you a better understanding of JS as a programming language.
> 📙 Read more about [Status Code and Error Object](https://swr.vercel.app/doc/error-handeling#status-code-and-error-object).     

 You can use the `error` object to display a more detailed error message ('message' is the string from `new Error()`);

```js 
function Character() {
    const { data, error, isLoading } = useSWR("https://swapi.dev/api/people/1");

    if (error) return <div>{error.message}</div>;
    if (isLoading) return <div>loading...</div>;

    //render data
    return <div> Hello{data.name}!</div>;
}
```

### Fetching on Interval and Button Click

To refetch the API on Interval, pass a `refreshInterval` value inside of an object as an additional
argument to the `useSWR` hook:. In the following example, `SWR` will refetch the API every second:

```js
useSWR("https://swapi.dev/api/people/1", { refreshInterval: 1000 });
```

> 📙 Read more about
> [Revalidate on Interval](https://swr.vercel.app/docs/revalidation#revalidate-on-interval).

To fetch data programmatically (like clicking a button), you can use the `mutate` function provided
by the `useSWR` hook.

```js
function Character() {
    const { data, mutate } = useSWR("https://swapi.dev/api/people/1");

    return <RefetchButton onRefetch={() => mutate()}>
            Refetch data
            </RefetchButton>;
}

function RefetchButton ( {children, onRefetch }) {
    return (
        <button type="button" onClick={onRefetch}>
        {children}
        </button>
    );
}
```

### Data is Cached

`SWR` will cache the fetched data in the browser's memory. This means that if you fetch the same
data twice, the second time it will be loaded from the cache instead of the network. This means that you can use the `useSWR` hook multiple times in your app without
having to worry about fetching the same data multiple times.

```js
function CharacterName() {
    const {data } = useSWR("https://swapi.dev/api/people/1");
    return <div> Hello {data.name}!</div>; // Hello Luke SKywalker
}
function CharacterHairColor() {
    const {data } = useSWR("https://swapi.dev/api/people/1");
    return <div> His hair color {data.hair_color}!</div>; // His Hair color is blond
}
function CharacterHeight() {
    const {data } = useSWR("https://swapi.dev/api/people/1");
    return <div> He is  {data.height}cm tall!</div>; // He is 172 cm tall.
}

function App() {
    return (
        <>
        <CharacterName/>>
        <CharacterHairColor/>
        <CharacterHeight/>
        </>
    );
}
```

This application will fetch the date only once, even tough teh `useSWR` hook is used three time.

Additionally, if you were to manually `mutate` the data (triggering a revalidation), the cach would be updated and the data would be available to all components using the `useSWR` hook with the same key (URL).

This is true even if you were to call `mutate` from yet another component, as long as it has the same key (URL):

```js
function RevalidateButton() {
  const { mutate } = useSWR("https://swapi.dev/api/people/1");
  return (
    <button type="button" onClick={() => mutate()}>
      Revalidate
    </button>
  );
}

// … other components

function App() {
  return (
    <>
      <CharacterName />
      <CharacterHairColor />
      <CharacterHeight />
      <RevalidateButton />
    </>
  );
}
```

### SWR Response API

The `useSWR` hook returns an SWR response object with the following properties:

| response property | description                                            |
| ----------------: | ------------------------------------------------------ |
|            `data` | The data fetched for the given key (URL)               |
|           `error` | An error object if the fetcher function threw an error |
|       `isLoading` | `true` if the data is being loaded for the first time  |
|    `isValidating` | `true` if there is any request or revalidation loading |
|        `mutate()` | A function to mutate the data                          |


## Combine Fetched Data with local State

With SWR you don't control the state container the fetched data yourself. Because of this you can\t modifu the state directly. This is a **good thing** because modifying state that has been fetched from a server is anti-pattern. If your sever gives you data it has to be the single source of truth.

If you want enrich server data with local state (like attaching an `isFavorite` property to a movie) you can use the `useSWR` hook to fetch the data and the `useState` should be connected to the server data via a unique identifier (like `id` or `slug`).


```js
function Movies() {
  /* let's assume the API return a list of movies like this:
    [
      {
        id: 1,
        title: "Star Wars",
        year: 1977,
      },
      {
        id: 2,
        title: "The Empire Strikes Back",
        year: 1980,
      }
    ]
  */
  const { data: moviesData } = useSWR("/api/movies");

  // initialize the local state with an empty array
  const [moviesInfo, setMoviesInfo] = useState([]);

  function handleToggleFavorite(id) {
    setMoviesInfo((moviesInfo) => {
      // find the movie in the state
      const info = moviesInfo.find((info) => info.id === id);

      // if the movie is already in the state, toggle the isFavorite property
      if (info) {
        return moviesInfo.map((info) =>
          info.id === id ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }

      // if the movie is not in the state, add it with isFavorite set to true
      return [...moviesInfo, { id, isFavorite: true }];
    });
  }

  return (
    <ul>
      {moviesData.map(({ id, title, year }) => {
        // find the movie in the state and destructure the isFavorite property
        // if it is not in the state, default isFavorite to false
        const { isFavorite } = moviesInfo.find((info) => info.id === id) ?? {
          isFavorite: false,
        };

        return (
          <li key={id}>
            {title} ({year})
            <button type="button" onClick={handleToggleFavorite(id)}>
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
```

If you use Immer and `useImmer` you can simplify the update code a bit:

```js
function handleToggleFavorite(if) {
    updateMoviesInfo((draft) => {
        // find the movie in the state
        const info = draft.find((info) => info.id === id);

    // find the movie in the state, toggle the isFavorite property
    draft.push({ id, isFavorite: true });
    }
)
}
```

> 💡 When using this pattern you are relying on your local state being created ad-hoc. Therefor your local array will return `undefined` on `find` if the movie is not in the state. This is why we use the `??` operator to default to `{ isFavorite: false }` if the movie is not in the state.

---

## Resources

- [SWR Docs](https://swr.vercel.app/docs/getting/started)