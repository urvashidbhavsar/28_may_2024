function employee(name, sal) {
    var ename = name;
    var salary = sal;
    Object.defineProperty(this, "name", {
        get: function () {
            return ename;
        },
        set: function (ename) {
            this.ename = ename;
        }
    });
    Object.defineProperty(this, "sal", {
        get: function () {
            return salary;
        },
        set: function (salary) {
            this.salary = salary;
        }
    });
}
var emp = new employee("Urvashi", 40000);
console.log(emp.name);
console.log(emp.sal);
