//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;

let arr = [
  "The Virupaksha Temple", 
  "a Victoria Memorial", 
  "an Tajmahal", 
];
let articleLessArray = [];
let mp = {};
for (let i = 0; i < arr.length; i++) {
  let articleLessItem = arr[i].replace(regexp, "").trim();
  articleLessItem = articleLessItem.replace(/  /g, " "); // remove two spaces with a single space
  articleLessArray.push(articleLessItem);
  mp[articleLessItem] = arr[i];
 
}
articleLessArray.sort();
 for(let i of articleLessArray){
	 console.log(i);
 }


