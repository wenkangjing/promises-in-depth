//
// a function returns a promise
//
function foo(flag) {
  return new Promise((resolve, reject) => {
    return flag ? resolve(flag) : reject(flag);
  });
}

foo(false)
  .then(result => console.log(result))
  .catch(error => console.error(error));

//
// Sequential execution
//

const p1 = Promise.resolve('p1');
const p2 = Promise.resolve('p2');

p1
  .then(result1 => {
    console.log(result1)
    return p2;
  })
  .then(result2 => {
    console.log(result2);
    return true;
  });

//
// Parallel execution all
//

const p3 = Promise.resolve('p3');
const p4 = Promise.resolve('p4');

Promise.all([p3, p4]) // ----> input an array of promises
  .then(([result3, result4]) => { // ----> output an array of results
    console.log('result3', result3);
    console.log('result4', result4);
    return { result3, result4 };
  })
  .then(done => console.log('DONE!!!', done));

//
//  Parallel racing execution
//
Promise.race([Promise.resolve(1), Promise.resolve(2)]) 
  .then(done => console.log('DONE!!!', done)); // ----> the result of the first resolve promise

// 
// Exception in promise chain
//

const pException = () => {
  throw new Error("Expected exception");
};

Promise.resolve()
  .then(() => pException())
  .catch(error => console.error(error));