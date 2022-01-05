const calCheck = input => {
    const num  = [];
    const ma = [];
    let output = 0;
    input.map(item =>{
        if(!isNaN(+item)){
            num.push(+item);
        }else{
            ma.push(item);
        };
    });
    ma.map(item => {
        const num1 = num.pop();
        const num2 = num.pop();
        switch(item){
            case '+':
                output = num1 + num2;
                num.push(output);
                break;

            case '*':
                output = num1 * num2;
                num.push(output);
                break;
      
            case '-':
                if(num1>num2){
                    output = num1 - num2;
                }else{
                    output = num2 - num1;
                };
                num.push(output);
                break;
      
            case '/': 
                if (num2 === 0) {
                    throw "Can't divide by 0";
                } else {
                    output = num1 / num2;
                };
                num.push(output);
                break; 

            default:
            throw `Invalid instruction:${item}`;        
        }; 
    });  
    return output;
};

const stackCalc = input => {
    if(typeof input !== 'string'){
        throw 'please enter string';
    };

    input = input.split(" ");

    if(input === ""){
        return 0;
    };
    input.map((item , index) => {
        if(item === 'DUP'){
           input.splice(index,1,input[index-1]);
        }
    });
    const resault = calCheck(input);
    return resault;
}
console.log(stackCalc(""));
console.log(stackCalc("5 6 +"));
console.log(stackCalc("3 DUP +"));
console.log(stackCalc("6 5 5 7 * - /"));
console.log(stackCalc("x y +"));