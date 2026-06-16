// This is a Common JS module. It is used in Node.js environment. It uses require() to import modules and module.exports to export modules.
     // We use this before ES6 modules were introduced. It is still widely used in Node.js environment.
const hello = () => {
    console.log("Hello Ayush");
}

const ahello = (name) => {
    console.log("Hello" + name);
}

module.exports = {hello, ahello}

