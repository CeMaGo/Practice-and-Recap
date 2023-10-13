# Next Dynamic Routing

## Learning Objectives

  - [ ] Understanding the concept of dynamic paths
  - [ ] Knowing how to implement dynamic paths
  - [ ] Knowing how to generate links dynamically
  - [ ] knowing how to use imperative routing
  - [ ] Understanding the next/head component

  --- 

## Concept of Dynamic Routes

  If your app has many possible routes with repeating patterns it would be hard to impossible to create a JavaScript file per route.

  Using dynamic routes you can turn ( parts of ) the path into dynamic parameters using square brackets []. If the URL matches the path , Next.js will make the dynamiv parameters available using the `useRouter` hook.

  > [Dynamic Routing](./assets/dynamic-routes.excalidraw.png)

## Implementing Dynamic Routes

To create a dynamic route, you can add square brackets around file or folder names in the pages directory respectively: `pages/movies/[categorySlug]/page/[pageNumber].js`.

The following paths map to this example:

- `movies/romance/page/12`
- - `categorySlug` is `romance`
  - `pageNumber` is `12`
- `movies/action/page/1`
- - `categorySlug` is `action`
  - `pageNumber` is `1`
- - `movies/comedy/page/3`
  - `categorySlug` is `comedy`
  - `pageNumber` is `3`

To access the query parameters in a component use the `useRouter` hook imported from `next/router`;

```js
//pages/movies/categories/[categorySlug]/page/[pageNumber].js
Import { useRouter } from "next/router";

export default function CategoryPage() {
    const router = useRouter();
    const { categorySlug, pageNumber } = router.query;
    
    return (
        <div>
        <p>Category Slug: {categorySlug}</p>
        <p>Page NUmber: {pageNumber}</p>
        </div>
    );
}
```

This of course also applies to a simpler example with a single dynamic query parameter

```js
// pages/movies/[slug].js
import { useRouter } from "next/router";

export default function MoviePage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
        <p>Slug: {slug}</p>
        </div>
    );
}
```

> 💡 The name of the query parameter always maps to the name of the file/directory: `[slug].js` -> `const { slug } router.query;`

> 📙 Read more about [**Dynamic Routes** in Next.js Docs](https://nextjs.org/docs/routing/dynamic-routes).

## Linking to Dynamic Routes

You can use the `Link` component to link to dynamic paths. USe string interpolation with a template string to insert the dynamic query parameters into the path.

Considering a `Movies` component which renders a list of links of links to all movies, interpolation the `slug` into teh path as a query parameter:

```js
import Link from "next/link";

export default function Movies({ movies }) {
    return (
        <ul>
        {movies.map(({ id, slug, title }) => (
            <li key={id}>
            <Link href={`/movies/${slug}`}>{title}</Link>
            </li>
        ))}
        </ul>
    );
}
```

> 📙 Read more about
> [**Linking to dynamic paths** in the Next.js Docs](https://nextjs.org/docs/routing/introduction#linking-to-dynamic-paths).

## Imperative Routing

Using `<Link>` is the best option whenever the user navigates through the app on their own. There are  situations, however, where you cannot use a `Link` component because you want to navigate to another page programmatically. One example of **non-direct** user interaction is changing the page after submitting a form:

```js
import { useRouter } from "next/router";

export default function Form() {
    const router = useRouter();

    function handleSubmit(event) {
        //some data handling_ ✨

        router.push("/home");
    }

  return <form onSubmit={handleSubmit}>_</form>;
}
```

> 📙 Read more about [Routing **Imperatively** in the Next.js Docs](https://nextjs.org/docs/routing/imperatively).

## next/head component

Next.js comes with a built-in `<Head>` component for appending elements to the head of the page. This was, you can easily modify the metadata of the page such as the `<title>` HTML tag:

```js
import Head from "next/head";

export default function Movies() {
    return (
        <>
        <Head>
        <title>Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <ul>_</ul>
        </>
    );
}
```

> 📙 Read more about [**next/head** in the Next.js Docs](https://nextjs.org/api-reference/next/head).

---

- [Dynamic Routes in the Next.js Docs](https://nextjs.org/docs/routing/dynamic-routes)
- [Linking to dynamic paths in the Next.js Docs](https://nextjs.org/docs/routing/introduction#linking-to-dynamic-paths)
- [Routing Imperatively in the Next.js Docs](https://nextjs.org/docs/routing/imperatively)
- [next/head in the Next.js Docs](https://nextjs.org/docs/api-reference/next/head)


# Challenges: Next.js Dynamic Routes

## Lord of the Rings App: Dynamic routes

> 💡 If you are far enough along with your own Lord of the Rings App, follow the
> [instructions of this challenge](https://github.com/spicedacademy/fs-web-exercises/tree/main/sessions/nextjs-dynamic-routes/lotr-app-dynamic-routes#readme)
> using your own code.

Solve this challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/nextjs-dynamic-routes/lotr-app-dynamic-routes
```