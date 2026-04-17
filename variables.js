//vypis hodnot promennych
console.log("Hello World!");

//promenne
//datove typy umi JS sam rozeznat protoze ma dynamicky typovy system

let number = 5; //cele cislo
let floatNumber = 5.5; //desetinne cislo
let message = "Hello World!"; //retezec
let isAdmin = true; //pravdivostni typ

//pole je datova struktura ktera umi ulozit vice hodnot
let fruits = ["mango", "pineapple", "banana", "raspberry", "kiwi"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mix = [true, false, 1, 2, 3, "one", "two", "three", 1.1, 2.2, 3.3];

//vypisy do konzole
console.log("Number: " + number);
console.log("Float number: " + floatNumber);
console.log("String: " + message);
console.log("Bool: " + isAdmin);
console.log("Fruits: " + fruits);
console.log("Numbers: " + numbers);
console.log("Mix: " + mix);

//nacteni hodnoty od uzivatele
let numberA = Number(prompt("Choose a number"));
let numberB = Number(prompt("Choose another number"));
//vychozi cislo ktere nacteme od uzivatele je retezec proto musime pouzit Number() (KONVERTACE STRINGU NA CISLO)
let result = numberA + numberB;
console.log("A + B = " + result);
