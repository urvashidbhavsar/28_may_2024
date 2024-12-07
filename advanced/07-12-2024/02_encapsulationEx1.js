// using class
class person {
    constructor(address) {
        this.address = address;
    }
    show() {
        return this.address;
    }
}
var per = new person("surat");
console.log(per.show());

// using function
function new_person(address) {
    this.addr = address;

    Object.defineProperty(this, "address", {
        get: function () {
            return addr;
        },
        set: function (address) {
            return addr
        }
    })
}
var new_per = new new_person("Surat");
console.log(new_per.addr);
