var reddit = require('../data.json');

// Write your solutions below

console.log("forEach practice: All post titles:\n");
reddit.data.children.forEach(readTitle);

function readTitle(a) {
  console.log(a.data.title);
};

console.log("\n")
console.log("map practice:  Array of permalinks of all posts\n")

console.log(reddit.data.children.map(getPermalink) );

function getPermalink(element) {
return "http://reddit.com" + element.data.permalink;
}

console.log("\n")
console.log("filter practice: all posts with actual text in selftext key:\n")
console.log("To make display easier, number of posts in array is logged:\n")

console.log(reddit.data.children.filter(isThereTextInSelftext).length)

function isThereTextInSelftext(element){
  return !element.data.selftext.length > 0;
}
console.log("\n");
console.log("reduce practice: sum of score values across all posts \n");

console.log(reddit.data.children.reduce(
  function(accumulator, element, currentIndex, array) {
    return accumulator + element.data.score; 
  }, 0 ) ); 
  // must give .reduce's accumulator an initial value of zero
  // because " If no initialValue was provided, then accumulator will be 
  // equal to the first value in the array" (MDN website)
  // in this case that would be an object: reddit.data.children[0]
