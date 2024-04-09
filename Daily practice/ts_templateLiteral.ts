function myTag(strings, ...values) {
    // Process strings and values here
    console.log(strings,values)
}

const result = myTag`The sum of ${10} and ${20} is ${30}.`;

