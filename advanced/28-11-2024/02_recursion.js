// let decre = (num) => {
//     if (num == 0) return;
//     console.log(num);
//     decre(num - 1);
// }
// decre(10);

let oddNumber = (num, end) => {
    if (num >= end) return
    if (num % 2 != 0) {
        console.log(num);
    }
    oddNumber(num + 1, end);
}
oddNumber(1, 10);
oddNumber(11, 50)