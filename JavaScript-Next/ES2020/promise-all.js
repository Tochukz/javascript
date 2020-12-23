const randomInt = Math.round(Math.random() * 10);

const promise1 = Promise.resolve(randomInt);

const promise2 = new Promise((resolve, reject) => {
  const random = Math.round(Math.random() * 10);
  const millisecs = random * 100;
  setTimeout(() => {
    if (random < 5) {
        return reject(`promise2 rejected: ${random}`);
      }
      return resolve(`promise2 resolved: ${random}`);
  }, millisecs);
});

const promise3 = new Promise((resolve, reject) => {
    const random = Math.round(Math.random() * 10);
    const millisecs = random * 100;
    setTimeout(() => {
      if (random <= 7) {
          return reject(`promise3 rejected: ${random}`);
        }
        return resolve(`promise3 resolved: ${random}`);
    }, millisecs);
});

const promises = [promise1, promise2, promise3];
Promise.allSettled(promises)
        .then(results => {
          results.forEach((res, i) => {     
              let score = ''  
              if (res.status == 'fulfilled') {
                score = `Passed, (${res.value})`;
              } else if(res.status == 'rejected') {
                score = `Failed, ${res.reason}`;
              }
              console.log(i, res, score);
          });
        });
/**
 * The Promise.allSettled() method returns a promise that resolves after all of the given promises are either fulfilled ot rejected.  
 */