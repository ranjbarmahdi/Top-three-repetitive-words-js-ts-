"use strict";
// Removing punctuation marks and extracting words => Return an array like ['a', 'a', 'b']
function splitWords(text) {
    let cleanText = text.toLowerCase().replace(/[^a-zA-Z' ]/g, '');
    const words = cleanText.split(" ");
    return words;
}
// Calculates the number of repetitions of each word => Return an array like ['a': 2, 'b': 1]
function calculateWordsRepetitionsNumber(words) {
    const wordsRepetition = {};
    words.forEach((word) => {
        if (word in wordsRepetition)
            wordsRepetition[word] += 1;
        else
            wordsRepetition[word] = 1;
    });
    if ('' in wordsRepetition)
        delete wordsRepetition[''];
    let res = [];
    for (const key in wordsRepetition) {
        res.push([key, wordsRepetition[key]]);
    }
    return res;
}
// Find top three(0-3) repetitive words => Return an array like ['a', 'b']
function topRepetitiveWorsd(text) {
    const words = splitWords(text);
    const wordsRepetitionsNumber = calculateWordsRepetitionsNumber(words);
    const sortedWordsCount = wordsRepetitionsNumber.sort((a, b) => b[1] - a[1]);
    const topWords = sortedWordsCount.slice(0, 3).map((item) => item[0]);
    return topWords;
}
// Text Program
let text_1 = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;
let text_2 = `e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e`;
let text_3 = ` //wont won't won't`;
console.log(topRepetitiveWorsd(text_1));
console.log(topRepetitiveWorsd(text_2));
console.log(topRepetitiveWorsd(text_3));
