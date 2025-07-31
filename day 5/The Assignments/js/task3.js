/*
1.2.1. Write a function called showAddr that accepts an address addObj
        with the following properties: street, buildingNum, and city.

        It should return the complete address of the user with the registered date.
        
        Example: if the addrObj={street:”abc st.”,buildingNum:15,city:”xyz”},
        calling showAddr(addrObj) will return “15 abc st., xyz city registered in 15/10/2024”.
*/

let addObj = {
    street: prompt("Enter street address: ") + ' st., ',
    buildingNum: prompt("Enter Building Number: "),
    city: prompt("Enter City Name: ")
};
    
function showAddr(obj) {
    let currentDate = new Date();
    let fullDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    return obj.buildingNum + " " + obj.street  + obj.city + " city" + " registered in " + fullDate;
}

console.log(showAddr(addObj));