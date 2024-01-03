# Performance fundamentals

> Performance means efficiency. In the context of Open Web Apps, this document explains in general what performance is, how the browser platform helps improve it and what tools and processes you can use to test and improve it.

## What is performance?

Ultimately, user-perceived performance is the only performance that matters. Users provide inputs to the system though touch, movement, and speech. In return, they perceive output though sight, touch, and hearing. Performance is quality of system outputs in response to user inputs.

All other things being equal, code optimized for some target besides user-perceived performance (hereafter UPP) loses when competing against code optimized for UPP.
USer prefer, say, a responsive, smooth app that only process 1,000 database transactions per second, over a choppy, unresponsive app that processes 100,0000,000 per second. Of course, it's by no means pointless to optimize other metrics, but real UPP targets come first.

The next few subsections point out and discuss essential performance metrics.

## Responsiveness

Responsiveness ,means how fast the system provides outputs (possible multiple ones) in response to user inputs. For example, when a user taps the screen, they expect the pixel ot change in a certain way. For this interaction, the responsiveness metric is the time elapse between the tap and the pixel change.

Responsiveness sometimes involves multiple stages of feedback. Application launch is one particularly important case discussed in more details below.

Responsiveness is important because people get frustrated and angry when they're ignored. Your app is ignoring the user every second that it fails to respond to the user's input.

## Frame rate

Frame rate is that rate at which the system changes pixels displayed to the user. This is a familiar concept: everyone prefers, say, games that display 60 frames per second over ones that display 10 Frames per second, even if they can't explain why.

Frame rate is important as a "quality of service" metric. Computer displays are designed to "fool" user's eyes, by delivering photons to them that mimic reality. For example, paper covered with printed text reflects photons to the user's eyes in the some pattern. By manipulating pixel, a reader app emits photons in a similar pattern to "fool" the user's eyes.

As your infers, motion is not jerky and discrete, but rather "updates" smoothly and continuously. (Strobe lights are fun because they turn that upside down, starving your brain of inputs create the illusion of discrete reality). On a computer display, a higher frame rate makes for a more faith imitation of reality.

> 💡 Note: Humans usually cannot perceive differences in frame rates above 60Hz. That's why most moderns electriv displays are designed to refresh at that rate. A television probably looks choppy and unrealistic to a hummingbird, for example.


## Memory usage

Memory usage is another key metric. Unlike responsiveness and frame rate, users don't directly perceive memory usage, but memory usage closely approximates "user stat". An Ideal system would maintain 100% od user state at all times: all applications in the system would maintain run simultaneously, and all applications would retain the state created by thw user the lst time the user interacted with the application (application state is stored in computer memory, which is why the approximation is close).

From this comes an important but counter-intuitive corollary: a well-designed system does not maximize the amount of **free** memory. Memory is a resource, and free memory is an unused resource. Rather, a well-designed system has been optimized to **use** as much memory as possible to maintain user state, while meeting other UPP goals.

That doesn't mean the system should **waste** memory. WHen a system uses more memory than necessary tp maintain some particular user state, the system is wasting a resource is could us to retain some other user state. In practice, no system can maintain all user states. Intelligently allocation memory to user state is an important concern that we go over in ore detail below.

## Power usage

The final metric discussed here is **power usage**. Like memory usage, users perceive power usage only indirectly, by how long their devices can maintain all other UPP goals. In service of meeting UPP goals, the system must use only the minimum power required.

The remainder of this document will discuss performance in terms of these metrics.

## Platform performance optimizations

This section provides a brief overview of how Firefox/Gecko contributes to performance generally, below the level of all applications. From a developer's or user's perspective, this answers the question, "What does the platform do for you?"

## Web technologies

The Web platform provides many tools, some better suited for particular jobs than others. All application logic is written in JAvaScript. To display graphics, developers can use HTML or CSS (i.e. high-level declarative languages), or use low-level imperative offered by the `<canvas>` element (which includes [WebGL]("https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API")). Somewhere "in between" HTML/CSS and Canvas is SVG, which offers some benefits of both.

HTML and CSS greatly increase productivity, sometimes at the expense of frame rate or pixel-level control over rendering. Text and images reflow automatically, UI elements automatically receive the system theme, and the system provides "built-in" support for some use cases developers may not think of initially, like different-resolution display or right-to-left languages. 

The `canvas` element offers a pixel buffer directly for developers to draw on. This gives developers pixel-level control or over rendering and precise control of frame rate, but now the developer need to deal with multiple resolutions and orientations, right-to-left languages, and so forth. Developers draw to canvases using either a familiar 2D drawing API, or WebGL, a "close to the metal" binding that mostly follows OpenGL ES 2.0.

## Gecko rendering

The Gecko JavaScript engine supporys just-in-time (JIT) compilation. This enables application logic to perform comparably to other virtual machines -- Such as Java virtual machines -- and in some cases even closer to "native code"

The graphic pipeline in GEcko that underpins HTML, CSS and Canvas is optimized in several ways. The HTML/CSS layout and graphics code in GEcko reduces invalidation and repainting for common cases like scrolling; developers get this support "for free". Pixel buffer painted by both Gecko "automatically" and applications to `canvas` "manually" minimize copies when being drawn to the display framebuffer. This is done by avoiding intermediate surfaces where they would create overhead (such as per-application "back buffers" in many other operation systems) , and by using special memory for graphics buffers that can be directly accessed by the compositor hardware. Complex scenes are rendered using the device's GPU for maximum performance. To improve usage,simply scenes are rendered using special dedicated compositions hardware, while the GPU idles ot turns off.

Fully static content is the exception rather than the rule for rich applications. Rich applications use dynamic content with `animation` and `transition` effects. Transitions and animations are particularly important to applications: developers can use CSS to declare complicated behavior with a simple, high-level syntax. In turn, Gecko's graphics pipeline is highly optimized to render common animations efficiently. Common-case animations are "offloaded" to the system compositor, which can render them in a performant, power-efficient fashion.

An app's startup performance matters just as much as its runtime performance. Gecko is optimized to load a wide variety of content efficiently: the entire Web! MAny years of improvements targeting this content,like parallel HTML parsing, intelligent scheduling of reflows and image decoding, clever layout algorithms, etc., translate just aas well to improving Web applications on Firefox.

## Application performance

This section is intended for developers asking the question "How can I make my app faster?"

## Startup performance

Application startup is punctuated by three user-perceived events, generally speaking:

* The first is the application **first paint** -- the pont at which sufficient application resources have been loaded to paint at initial frame
  
* The second is when the application becomes **interactive** - for example, users are able to tap a button and the application responds

*The final event is **full load** -- for example when all the user's albums have been listed in a music player

The key to fast startup is to keep two things in mind: UPP is all thta matters, and there's a "critical path" to each user-perceived event above. The critical path is exactly and only the code that must run to produce the event.

For example, to paint an application's first frame that comprises visually some HTML and CSS to style that HTML":

1. The HTML must be parsed
2. THe DOM for that HTML must be constructed
3. Resources like images in that part of the DOM have to be loaded and decoded
4. The CSS styles must be applied to that DOM
5. The styled document has to be reflowed

Nowhere in that list is "load the JS fils needed for an uncommon menu"; "fetch and decode the image for the High Scores list", etc. Those work items are not on the critical path to painting the first frame.

It seems obvious, but to reach a user-perceived startup event more quickly, the main "trick" is run *only the code on the critical path*. Shorten the critical path by simplifying the scene. 

The Web platform is highly dynamic. JavaScript is a dynamically-types language,
and the Web platform allows loading code, HTML, CSS, images and other resource dynamically. These features can be used to defer work that's off the critical path by loading unnecessary content "lazily" some time after startup.

Another problem that can delay startup in idle time, caused byt waiting for responses to requests(like database loads). To avoid this problem, applications should issue requests as early as possible in startup (this is called "front-loading"). Then when the data is needed later, hopefully it's already available and the application doesn't have to wait.

> ℹ Note: For much more information on improving startup performance, read Optimizing startup performance.

ON the same note. notice that locally-cached, static resources ca be loaded much faster taht dynamic data fetched over high-latency, low-bandwidth mobile networks. Network requests should never be on the critical path to early application startup. Local caching/offline apps can be achieved via [Service Workers]("https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"). See [Offline and background operation for]("https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation") a guide about using service workers for offline and background sync capabilities.

### Frame rate

The first important thing for high frame rate is to chooses the right tool. Use Html and CSS to implement content that's mostly static, scrolled, and infrequently animated. Use Canvas to implement highly dynamic content, like games that need tight control over rendering and don't need theming.

For content drawn using Canvas, it's up to the developer to hit frame rate targets: they have direct control over what's drawn.

For HTML and CSS content, the path to high frame rate is to use the right primitives. Firefox is highly optimized to scroll arbitrary content; this is usually not a concern. But often trading some generality and quality for speed, such as using a static rendering instead of a CSS radial gradient, can push scrolling frame rate over a target. CSS [media queries]("https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries") allow these compromises to be restricted only to devices that need them.

MAny applications use transitions or animations thought "pages", or "panels". For example, the user taps a "setting" button to transition into an application configuration screen, or a settings menu "pops up". Firefox is highly optimized to transition and animate scenes that"

 * use pages/panels approximately the size of the device screen or smaller
 * transition.animate the CSS `transform` and `opacity` properties

Transition and animations that adhere to these guidelines can be offloaded to the system compositor and run maximally efficiently.

### Memory and power usage

Improving memory and power usage is a similar problem to speeding up startup:
don't do unneeded work or lazily load uncommonly-used UI resources. Do use efficient data structures and ensure resources like images are optimized well.

Modern CPUs can enter a lower-power mode when mostly idle. Applications that constantly fire times or keep unnecessary animations running prevent CPUs from entering low-power mode. Power-efficient application shouldn't do that.

HWen application are sent to the background, a `visibilitychange` event is fired on their documents. This event is a developers's friend; applications should listen for it.

### Specific coding tips for application performance

The following practical tips will help improve one pr more of the Application performance factors discussed above.

### Use CSS animation and transitions

Instead of using some library's `animate()` function, which probably currently uses many badly performing technologies ( `setTimeOut()` or `top/left` positioning, for example) use [CSS animations]("https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations"). In many cases, you can actually use [CSS Transitions]("https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions") to get the job done. This works well because the browser is designed to optimize these effects and use GPU to handle them smoothly with minimal impact on processor performance. ANother benefit is that you can define these effects in CSS along with the rest of you app's look-and-feel, using a standardized syntax.

CSS animations give you very granular control over your effects using [keyframes]("https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes"), and you can even watch events fired during the animation process in order to handle other tasks that need to be performed st set points in the animation process. You can easily trigger these animations with the `:hover`, `:focus` or `:target` or by dynamically adding and removing classes on parent elements.

If you want to create animations on the fly or modify them in JAvaScript, James Long has written a simple library for that called [CSS-animation.js]("https://github.com/jlongster/css-animations.js/")

### use css transforms

INstead of tweaking absolute positioning and fiddling with all that math yourself, use the `transform` CSS property to adjust the position, scale and so forth of your content. Alternatively, you can use the individual transformation properties of `translate`, `scale` and `rotate`. The reason is , once again, hardware acceleration. THe browser can do these tasks on your GPU, letting the CPU hand;e other things.

In addition, transforms give you capabilities you might not otherwise have. Not only can you translate elements in 2D space, but you can transform in three dimensions,skew and rotate, and so forth. Paul Irish has a [in-depth analysis of the benefits of `translate()`]("https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/") (2012) from a performance point of view. In general, however, you have the same benefits you get from using CSS animations: you use an easily extensible way of positioning elements -- something tha needs a lot od extra code if simulate translation `top` and `left` positioning. Another bonus is that this is just like working in a canvas element.

> 