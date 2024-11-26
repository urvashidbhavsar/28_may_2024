var subject = ["html", "css", "js", "bootstrap", "react"];
// console.log(subject[0]);

var newkey = subject.keys()
for (const e of newkey) {
    console.log(e + "=>" + subject[e]);
}
console.log("--------------");
for (let i = 0; i < subject.length; i++) {
    console.log(i + "=>" + subject[i]);
}
console.log("--------------");
subject.forEach((e, key) => {
    console.log(key + "=>" + e);
})