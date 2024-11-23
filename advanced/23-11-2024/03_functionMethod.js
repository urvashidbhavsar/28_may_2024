let student = {
    firstname: "Abc",
    lastname: "xyz"
}
let stud_details = {
    details: function () {
        return this.firstname + " " + this.lastname
    }
}
console.log(stud_details.details.call(student));
console.log(stud_details.details.apply(student));

