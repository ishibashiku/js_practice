function fizzbuzz(num){

var answer;

if(num%3===0&&num%5===0){
    answer = 'fizzbuzz';
}else if(num%3===0){
    answer = 'fizz';
}else if(num%5===0){
    answer = 'buzz';
}else{
    answer = num;
}

return answer;

}

for(i=1; i<101; i++){
    console.log(fizzbuzz(i));
}
