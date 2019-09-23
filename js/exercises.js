//Exercise 1 
console.log('This is exercise 1');
console.log('#');
console.log('##');
console.log('###');
console.log('####');
console.log('#####');
console.log('######');
console.log('#######');


//Exercise 2
console.log('');
console.log('This is exercise 2');
for(i = 0; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i +': FizzBuzz');
    }
    else if(i % 3 === 0){
        console.log(i + ': Fizz');
    }
    else if(i % 5 === 0){
        console.log(i + ': Buzz');
    }
} 


//Exercise 3
console.log('');
console.log('This is exercise 3');
var chessBoard = ' ';
for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
        if((i + j) % 2 === 0){
            chessBoard += ' '; 
        }
        else{
            chessBoard += '#';
        }
    }
    chessBoard += "\n";
}
console.log(chessBoard);


//Exercise 4
console.log('');
console.log('This is exercise 4');

function min(a, b){
    if(a < b){
        console.log(a);
    } else console.log(b);
}
//To show that my function works
console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0, 1000));
console.log(min(23844, 398478));





