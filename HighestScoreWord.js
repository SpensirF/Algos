function high(x){
    let words = x.split(' '); // Split the string into an array of words
    let highestScore = 0;
    let highestScoringWord = '';
  
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        let word = words[i];
    
    // Calculate the score for this word
    for (let j = 0; j < word.length; j++) {
      wordScore += word.charCodeAt(j) - 96;
    }
    
    // Check if this word has a higher score than the current highest scoring word
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestScoringWord = word;
    }
  }
  
  return highestScoringWord;


}
console.log(high('man i need a taxi up to ubud'))


// let alphabets = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];
  
//   let words = x.split(" ");
//   let highestScore = 0;
//   let highestScoreWord = "";
  
//   for (let word of words) {
//     let lettersSum = 0;
    
//     for (let letter of word) {
//       lettersSum += alphabets.indexOf(letter) + 1;
//     }
    
//     if (lettersSum > highestScore) {
//       highestScore = lettersSum;
//       highestScoreWord = word;
//     }
//   }
  
//   return highestScoreWord;