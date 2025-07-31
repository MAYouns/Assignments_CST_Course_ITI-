let x = 0,
    y = 0,
    z = '',
    messege = "",
    sum = 0;

function check(str) {
    let num;
    do {
        num = prompt("Enter the " + str + " number: ");
        num = Number(num);
        if(isNaN(num)){
            alert("Please Enter valid Number.");
        }
    } while (isNaN(num));
    return num;
}

x = check("start");
y = check("end");
z = prompt("Enter a String(odd/even/no): ");



if(z === "odd"){
    if(x < y){
        for(let i = x; i <=y; i++ ){
            if(i%2) {
                messege += i + ", ";
                sum+= i;
            }
        }
    } else{
        for(let i= x; i >= y; i--){
            if(i%2) {
                messege += i + ", ";
                sum+= i;
            }
        }
    }
} else if(z === "even"){
    if(x < y){
        for(let i = x; i <=y; i++ ){
            if(!(i%2)) {
                messege += i + ", ";
                sum+= i;
            }
        }
    } else{
        for(let i= x; i >= y; i--){
            if(!(i%2)) {
                messege += i + ", ";
                sum+= i;
            }
        }
    }
    } else if(z === "no"){
        for(let i = x; i <= y; i++){
            messege += i  + ", ";
            sum += i;
        }
}

messege += "and their sum value the is " + sum;
console.log(messege);