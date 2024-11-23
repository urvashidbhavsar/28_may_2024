var school = {
    name: "r. n. nayak",
    address: "udhana",

    schoolDetails: function () {
        return this.name + " " + this.address
    }
}
var anotherschool = {
    name: "academy",
    address: "surat",
}
var detail = school.schoolDetails.bind(anotherschool);
console.log(detail());
console.log(school.schoolDetails());


