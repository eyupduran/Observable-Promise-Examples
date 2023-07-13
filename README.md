# Observable-Promise-Examples

This repository contains examples of using Observables and Promises in Angular. The examples demonstrate how to work with asynchronous operations using Promises.

***
## Observable
### Subject vs BehaviorSubject

When working with Observables in Angular, you may come across two commonly used classes: Subject and BehaviorSubject. While both are implementations of the Observable pattern, they have some differences in terms of functionality and behavior.

#### Subject

A Subject is a type of Observable that allows multiple subscribers to listen to the emitted values. When a new value is emitted, all subscribers will receive the value. However, if a subscriber subscribes after a value has been emitted, it will not receive the previously emitted values.


#### BehaviorSubject
A BehaviorSubject, on the other hand, extends the functionality of a Subject by allowing subscribers to access the most recent emitted value, even if they subscribe after the value has been emitted. When a new subscriber subscribes to a BehaviorSubject, it immediately receives the last emitted value or an initial value if no value has been emitted yet.

***
## Promise
Promises are a core feature of JavaScript that provide a way to handle asynchronous operations. A Promise represents the eventual completion or failure of an asynchronous operation and allows you to handle the result or error once it's available.

Promises have three states:

- **Pending**: The initial state. The Promise is still in progress and hasn't been fulfilled or rejected yet.

- **Fulfilled**: The Promise has been successfully resolved with a value. You can access the resolved value using the `.then()` method.

- **Rejected**: The Promise has encountered an error or failure. You can catch and handle the error using the `.catch()` method.
