//Default parameter
function greet(name = "guest") {
    return `Hello, ${name}`;
}
console.log(greet("Kumar"));
function greett(message = "welcome", name = "guest") {
    return `Hello, ${name}. ${message}`;
}
console.log(greett("GM"));
