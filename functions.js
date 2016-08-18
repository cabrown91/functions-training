// TODO: add your solutions here!

//exercise 1
function combineWords(word1, word2) {
 return word1 + word2;
}

var result = combineWords('dog', 'house');
console.log(result);

//exercise 2
function repeatPhrase(phrase, n) {
   return phrase.repeat(n);
}

repeatPhrase("Hello", 5);


//exercise 3
function toTheNthPower(number, power) {
    if (power === 0){
        return 1;
} else {
    return number * toTheNthPower(number, power - 1);

    }

}

var result = toTheNthPower(4, 5);
console.log(result);


//exercise 4
function areaOfACircle(radius) {
    var pi = 3.14;
   return pi * radius * radius;
}

var result = areaOfACircle(2);
console.log(result);


//exercise 5

function pythagoreanTheorem(a, b) {
    var c = (a * a) + (b * b);
        return Math.sqrt(c);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);

//exercise 7
var vowels = ["a","e","i","o","u"];

function countVowels(word) {
  var count = 0;
    for(i=0; i<=word.length; i++) {
        word.indexOf(vowels);
        return count + 1;
    }


}

var result = countVowels("stealing");
console.log(result);

//exercise 8
function findWdi(arr){
    for(i=0; i<=arr.length; i++){
        if(arr.includes('wdi')){
            console.log("true!");
        } else {
            console.log("false!");
        }
    }
}

findWdi([9,'Bart Simpson', true, 'wdi']);
findWdi(['a','b','c']);

//exercise 9
function printTriangle(length) {
    for(i=0; i<=length; i++){
        var layer = '';
        
        for(j=0; j < i; j++){
            layer += '*';
        }
        console.log(layer);
    }
}

printTriangle(10);
