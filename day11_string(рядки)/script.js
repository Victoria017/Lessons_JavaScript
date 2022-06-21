// Рядки і їх властивості
/*
const nameSt = "Andriy";
console.log(nameSt[2]);
console.log(nameSt[6]); //undefined

/////////////////////////////////////////////

let nameSt1 = new String("Igor\\");

//  \n, \t, \r, \\ = \
//alert(nameSt1);

console.log(nameSt1);

console.log("============================");

// 1) Порахувати кількість div в тексті

let text = "<div> <div> <span> ifo text</span> </div> </div>";
let word = "div";
let counter = 0;

let index = text.indexOf(word);
while(index != -1) {
    counter++;
    index = text.indexOf(word, index+1);

}

console.log(`count "${word}" = ${counter}`);

///////////////////////////////////////////////////
console.log("============================");


let useWord = (text.includes("div")) ? "use" : "not use";
console.log(useWord);
console.log(text.length);

useWord = (text.includes("span", 40)) ? "use" : "not use";
console.log(useWord);

///////////////////////////////////////////////////
console.warn("substring() & slice()============================");

//substring() slice();

text = "<div> <div> <span> ifo text about method substring and slice</span> </div> </div>";

word = "span";

index = text.indexOf("word");


///////////////////////////////////////////////////


*/