let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

let x = 1;
try {
    console.log("The sum is", sum*x);
} catch (error) {
    console.log('Error agya bhai');
}

finally{
    console.log('files are being closed and db connection is being closed');
    
}
