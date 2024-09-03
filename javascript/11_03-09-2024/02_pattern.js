let str = "Hello World";
// create pattern in between (backslash)/ /
// to match pattern create brackets
// check value frpm begin use ^ or end use $
// let ptn = /^[a-z]*$/i
let ptn = /^[a-zA-Z\s]*$/
// let ptn = /^[\D]*$/

if (ptn.test(str)) {
    console.log("true");
} else {
    console.log("false");
}