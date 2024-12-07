function furniture(f_name) {
    this.name = f_name;
    throw new Error("You cant create instance of abstract class")
}
furniture.prototype.details = function () {
    return this.name;
}
function callData(f_name) {
    return this.name = f_name
}
// var fur = new furniture("Table")
callData.prototype = Object.create(furniture.prototype)
// create an instance
var c = new callData("table")
// console.log(f.name);
console.log(c.details());


