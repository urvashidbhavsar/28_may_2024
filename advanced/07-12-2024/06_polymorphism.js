class parent {
    display() {
        console.log("parent class");
    }
}
class child extends parent {
    display() {
        console.log("child class");
    }
}
// var ch = new child();
var ch = [new child(), new parent()]
ch.forEach(element => {
    element.display()
});
