var lang = new Set();
lang.add("html")
lang.add("css")
lang.add("js")
console.log("=== using add method  ===");
for (const e of lang) {
    console.log(e);
}
console.log("=== added values ===");
var i = lang.entries();
for (const e of i) {
    console.log(e);
}
console.log("=== using for each ====");
lang.forEach(element => {
    console.log(element);
});
console.log("=== has method ====");
console.log(lang.has("js"));
console.log(lang.has("nodejs"));
console.log("=== using values for of loop ====");
var lg = lang.values();
for (const e of lg) {
    console.log(e);
}
console.log("=== using values execute single value ====");
var lg = lang.values();
console.log(lg.next());
console.log(lg.next());
console.log(lg.next());
