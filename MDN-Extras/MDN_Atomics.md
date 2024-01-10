# Atomics

The `Atomics` namespace object contains static methods for carrying out atomic operations. They used with SharedArrayBuffer and ArrayBuffer objects.

## Description 

Unlie most global objects, `Atomics` is not a constructor. You cannot use it with the `new` operator or invoke the `Atomics` object as a function. All properties and methods of `Atomics` are static (just like the `Meth` object).

### Atomic operations

When memory is shared, multiple threads ca read and write the same data in memory. ATomic operations are finsihed before the next operation starts and that operations are not interrupted.

## Wait and notify

