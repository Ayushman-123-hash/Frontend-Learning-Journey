let student = {
    name: "Ayushman",
    course: "BCA"
}

console.log(student)        // Object

console.log(student.name)   // Dot Notation
console.log(student["name"])  // Bracket Notation
console.log(student.course)   // Dot Notation
console.log(student["course"])  // Bracket Notation

student.name = "Ayushman Singh"  // Updating the name property
console.log(student.name)   // Updated name

student.roll_no = 12345  // Adding a new property 'roll' with a nested property 'no'
console.log(student.roll_no)  // Accessing the nested property 'no' of 'roll'

console.log(student)        // Object



// This ~ Keyword in Object
            /* This keyword sirf object mai kaam krta hai aur y function mai tbh hi kaam krega jb 
                function object k andar hoga */
let person = {
    name: "Ayushman",
    age: 22,
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.")

    }
}

person.greet()  // Calling the greet method to see the output
person.name = "Ayushman Singh"  // Updating the name property
person.greet()  // Calling the greet method again to see the updated output

