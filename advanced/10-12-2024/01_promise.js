var newpromise = new Promise((resolve, reject) => {
    var total = 10 + 10;
    if (total == 20) {
        resolve("task solved")
    } else {
        reject("task rejected")
    }
})
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))