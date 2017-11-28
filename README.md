# promises-in-depth

notes taken:  http://exploringjs.com/es6/ch_promises.html

## Overview

> Promises are a pattern that helps with one particular kind of asynchronous programming



### Asynchronous programming using Promise
- 3 states: `pending`, `fulfilled`, `rejected` 
- a promise returns a promise - *chaining then()*
- returned values are passing thru the chain 
```js
p.then(() => result) // ----> the returned value in then
 .then(result => console.log(result)) // it's the input values of the following then
```

### Sequential execution
- chain by `then`

### Parallel execution
- push promises to an array
- `Promise.all`

### Calbacks vs Promises

  ```js
  p1.then(result => { // then notifies callbacks with result
    console.log(result); // register the callbacks via then 
  });
  ```
  
- standard
- in callbacks, the parameters are mixed with `inputs` and `callbacks`, in promises, all parameters of a promise are input, callbacks are returned value
- central error/exception handling
- composing async calls (`looping`, `mapping`, etc) *put promise to array or object*