class employee {
    constructor() {
        this.firstname = "Abc"
        this.lastname = "Xyz"
        this.address = "Surat"
    }
}
class senior extends employee {
    constructor() {
        super()
        this.designation = "web development"
    }
}
var s = new senior();
console.log(s);
