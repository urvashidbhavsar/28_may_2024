let person = {
    firstname: "Suraj",
    lastname: "Patel",
    // address as a property but pass value as object value
    address: {
        homeno: "201",
        city: "surat"
    }
}
let p = person?.firstname
console.log(p);

// let addr = person.address && person.address.city;
let addr = person.address?.city

// let addr = person.address && person.address.pin;
// let addr = per.address && per.address.pin;
console.log(addr);

