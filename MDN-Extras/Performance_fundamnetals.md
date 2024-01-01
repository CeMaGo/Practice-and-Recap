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

