// this method only access with functions
function student(fname, lname, address) {
    this.fname = fname;
    this.lname = lname;
    this.address = address;
}

student.prototype.getDetails = function () {
    return this.fname + " " + this.lname + " " + this.address
}
function std(num) {
    this.num = num
}
var stud = new student("Raj", "Patel", "Surat");
var st = new std(11)
std.prototype = stud;
console.log(st.getDetails() + " " + st.num);

