# Next.js Basics and Routing

## Learning Objectives 
  - [ ] Knowing the difference between a library and a framework
  - [ ] Understanding why Next.js is such a popular Framework
  - [ ] Knowing which features will be used during the bootcamp
  - [ ] Understanding the basic concepts of Next.js:
    - [ ] Client-side routing
    - [ ] Page navigation with `next/link`
    - [ ] Image optimization with `next/image`

---

## Difference between a Library and a Framework 

Next.js is a React framework, i.e. it is built on top os the React library. Both, a library as well as a framework like Next.js is more rigid: you only have a few limited choices when and how to use the given code. If zou accept these limitations, a framework takes a lot of work off your hands in the background.

### What is Next.js?

Next.js is a framework that gives you building blocks to create fast web applications. These building blocks provide pre-built solutions for main concepts you will encounter when building modern applications, such as user interfaces, routing, data fetching, infrastructure, etc.

### Which Features of Next.Js are we going to use in the Bootcamp?

Next.js will help us with the following topics:

- A template to use as a starting point
- A bundler, transpiler and development server
- Routing: Navigate between pages, Dynamic Routing
- Auto-optimized images
- API Routes

> 📙 Next.js has a lot more to offer, which is why it is such a popular framework. To get an impression of all features, [have a quick look at the documentation](https://nextjs.org/docs/).

---

### How ro Next.js : Basics

#### Differences to Create React App

Here you can see a comparison of some relevant differences between Next.js and Create React App (CRA):

|                       | Next.js (new)                    | Create React App (old)|
|----------------------:|----------------------------------|----------------------|
|Start local dev server | `npm run dev`                    | `npm run start`      |
|        Root component | `_app.js`                        | `App.js`             |
|              Document | `_document.js`                   | `public.index.html`  |
|       Default styling | CSS modules\*                    | CSS\*                |
|             Rendering | Server and Client Side           | Client Side          |
|    routing Definition | file Structure in `pages` folder | n/a                  |
|      Client side link | `<Link>` Component               | n/a                  |
|    Image optimization | `<Image>` Component              | n/a                  |
|     Modifying `<head>`| `<Head>` Component               | n/a                  |
|          Font loading | `@next/font` package             | n/a                  |
|            API router | `pages/api` folder               | n/a                  |
|                ESLint | Next.js specific rules           | CRA specific rules   |
|  Bundler + transpiler | Webpack/Turbopack + SWC          | Webpack + Babel      |

\*Both Next.js and CRA support all modern style solutions.

#### Server-Side Rendering

With CRA the browser loads an almost empty HTML document (`public/index.html`). Your React code is only executed in the browser.

next.js comes with a feature called "server-side rendering". This feature will execute your React component on the server to send a complete HTML document to the client (teh browser). On the client your React code gets executed again.

This enables a lot of optimization technique we wont't discuss. However, there is one important implication you need to know:

Since your React code is executed in a server environment and not just a browser environment, you need to pay attention when using browser APIs (like `window` or `document`). They are only available in the browser and will break the app on the server. When using browser API you need to ensure that your code is only executes on the client. For example code inside a `useEffect` hook is only executed on the client, since effects are not executed on the server, but only on the client. Event handlers Like `onClick` are also only executed on the client.

```js
useEffect(() => {
    console.log(window.innerWidth);
},[]);

return <button onCLick={() => console.log(window.innerWidth)}>Click me</button>;
```

#### Routing

Until now our React application only ever displayed a single page. The process of conditionally rendering different pages on the URL (path name) and navigating between these pages is called routing.

Since a good routing as a built-in feature, so that you don\t need another library.

Routing in Next.js is based on the file system in the `pages` folder:

- `pages/index.js` -> `/` (`index.js` always implies the root route of a folder)
-`pages/about.js` -> `/about`

To support more complex rules, you can create the appropriate nested folder structure:

- `pages/about/me.js` -> `about/me`
- `pages/about/all-others.js` -> `/about/all-others`
- `pages/about/some/long/route.js` -> `about/some/long/route`

> 💡 You can define dynamic routes (routes that have dynamic parameters) as well. This will be a topic of a future session.

>💡 File based routing can be ambiguous. The files `pages/about/index.js` and `pages/about.js` are both associated with `/about`. In practice, this is rarely a problem. Nevertheless, you should be aware of it.

> 📙 Read more about [**Routing** in the Next.js Docs](http://nextjs.org/docs/routing/introduction).

#### `<Link>` component

For client-side transitions between routes use the `<Link>` component provided by next/link. Given a `page` directory with

- `pages/index.js`
- `pages/about.js`
- `pages/about/me.js`,

You can link to each of these pages in the following way:

```js
import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/about/me">Me</Link>
        </li>
        </ul>
    );
}
```

> 📙 Read more about [**next/link** in the Next.js Docs](http://nextjs.org/docs/api-reference/next/link).

#### Image Organization - the next/image component. This feature, for example, avoids shipping large images to devices with a smaller viewport and images are layz-loaded by default. Keep in mind that using `<Image>` comes with a little bit of default styling.

Here's an example implementation. Note that the `height` and `width` props should be the desired rendering style, with an aspect ration identical to the source image.

```js
import Image from "next/image";

export default function AnimalImage() {
    <Image
    src="/images/a_small_dog.jpg"
    height={144}
    width={144}
    alt="A picture of a small dog"
    />;
}
```

When using images from external domains, you need to configure teh allowed domains in the `next.config.js` file:

```js
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["images.unsplash.com"],
    },
};
```

> 📙 Read more about [configuring **domains** from next/image](http://nextjs.org/docs/api-refercence/next/image@domains) and [**next/image** in generale the Next.js Docs](http://nextjs.org/docs/api-reference/next/image).

---

## Resources

- [Next.js Homepage](https://nextjs.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Routing in the Next.js Docs](https://nextjs.org/docs/routing/introduction)
- [next/link in the Next.js Docs](https://nextjs.org/docs/api-reference/next/link)
- [next/image in the Next.js Docs](https://nextjs.org/docs/api-reference/next/image)
- [Difference between a Framework and a Library on freecodecamp](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)