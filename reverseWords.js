function reverseWords(sentence) {
    var words = sentence.split(' ');
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });
    var reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

// var inputSentence = "My Name is Abhishek";
 var input = prompt();
var result = reverseWords(input);
console.log(result);
