const msg = () => {
    var a = "Hello"

    return function () {
        // inner function access outer function variable
        console.log(a);
    }
}
msg()();


const add = (() => {
    let b = 15;

    return function () {
        if (b <= 10) {
            b++;
        } else {
            b;
        }
        console.log(b);
    }
})();
add()