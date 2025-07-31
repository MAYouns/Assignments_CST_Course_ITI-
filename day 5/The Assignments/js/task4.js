/*
    1.2.2. Write a function called dispVal that takes an object with two properties and a string as arguments.
        It should return the value of the property with key equal to the value of the string
        Example: if obj={nm:”ali”,age:10} then calling dispVal(obj,”age”) will return “10 years old”
*/

let object = {
    name: prompt("Enter name: "),
    age: prompt("Enter age: ")
};

function dispVal(obj, txt){
    if(txt ==='age') return obj[txt] + ' years old';
    return obj[txt];
}

console.log(dispVal(object, 'name'));
console.log(dispVal(object, 'age'));
