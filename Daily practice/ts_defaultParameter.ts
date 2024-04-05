//Default parameter
function greet(name: string = "guest"){
    return `Hello, ${name}`;
}

console.log(greet("Kumar"));



function greett(message: string = "welcome",name: string = "guest"){
    return `Hello, ${name}. ${message}`
}

console.log(greett("GM"));



function changeLanguage(language: string = "English"){
    return `language changed to ${language}`;
}