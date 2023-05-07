//Task1
// function stringToArray(text){
//    return text=text.split(" ");
// }
// console.log(stringToArray("Robin Singh"));

//Task2
// function textSlice(text,count){
//    return text=text.slice(0,count);
// }
// console.log(textSlice("Robin Singh",4));

//Task3
// hideEmail = function (email) {
//     let mid, splitted, partOne, partTwo;
//     splitted = email.split("@");
//     partOne = splitted[0];
//     mid = partOne.length / 2;
//     partOne = partOne.substring(0, (partOne.length - mid));
//     partTwo = splitted[1];
//     return partOne + "...@" + partTwo;
// };
// console.log(hideEmail("robin_singh@example.com"));

//Task4
function repeatText(text, count) 
  {
    if ((text == null) || (count < 0) || (count == null))
      {
        return("Invalid value");
      }
    return new Array(count+1).join(text);
  }
  console.log(repeatText('a', 4));
  console.log(repeatText('a'));

//Task5
// function findMatch (sentence,search_word)
// {
//     const words = sentence.split(' ');
//     let count = 0;
//     for (let i = 0; i < words.length; i++) {
//     if (words[i] === search_word) {
//       count++;
//     }
// }
// return `${search_word} was found ${count} times`;
// }
// console.log(findMatch('The quick brown fox', 'fox'));