//extract the last four characters from the string below.
let text = 'extravaganza';
console.log(text.substr(8, ));

//Insert in the fourth index of the variable 1.'eat' const food = 'The quick fox jumped over the lazy dog'
const food = "The quick fox jumped over the lazy dog";
let subStr = "eat";
let pos = 5;
console.log(food.substr(0,pos) + subStr + food.substr(pos));

//Count how many times the following string appers in the string variable "the"
function stry(params) {
    const story = 'The quick brown fox jumps over the lazy dog';
    console.log(
        (story.match(/the/g)).length);
}
stry()

//"are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = 'The pupils are reading in the library';
console.log(string1.matchAll(/are/g));

const string2 = 'The child was sitting on the table before it fell';
console.log(string2.match(/the/g))
//Convert the following strings into the specified format
let word = 'wonderful';
let state = word.toUpperCase();
console.log(state);

let statement = 'amazing';
let c = statement.toLowerCase();
console.log(c);

let sentence = 'UndERneath';
let d = sentence.toLowerCase();
console.log(d);

let x = 'A wonderful world';
let y = x.titleCase();
console.log(y);


