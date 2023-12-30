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

Memory usage is another key metric. Unlike responsiveness and frame rate, users don't directly perceive memory usage, but memory usage closely approximates "user state".