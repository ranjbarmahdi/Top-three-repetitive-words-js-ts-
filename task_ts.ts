
// Removing punctuation marks and extracting words => Return an array like ['a', 'a', 'b']
function splitWords(text: string): string[] {
    let cleanText = text.toLowerCase().replace(/[^a-zA-Z' ]/g, '');
    const words: string[] = cleanText.split(" ");
    return words;
}


// Calculates the number of repetitions of each word => Return an array like ['a': 2, 'b': 1]
function calculateWordsRepetitionsNumber(words: string[]): [string, number][] {
    const wordsRepetition: { [key: string]: number } = {};
    words.forEach((word) => {
        if (word in wordsRepetition) wordsRepetition[word] += 1;
        else wordsRepetition[word] = 1;
    });
    if ('' in wordsRepetition) delete wordsRepetition[''];

    let res: any[] = []
    for (const key in wordsRepetition) {
        res.push([key, wordsRepetition[key]])
    }
    return res;
}


// Find top three(0-3) repetitive words => Return an array like ['a', 'b']
function topRepetitiveWorsd(text: string): string[] {
    const words: string[] = splitWords(text);
    const wordsRepetitionsNumber: [string, number][] = calculateWordsRepetitionsNumber(words);

    const sortedWordsCount = wordsRepetitionsNumber.sort((a, b) => b[1] - a[1]);
    const topWords = sortedWordsCount.slice(0, 3).map((item) => item[0]);
    return topWords;
}


// Text Program
let text_1: string = `In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;
let text_2: string = `e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e`;
let text_3: string = ` //wont won't won't`;

console.log(topRepetitiveWorsd(text_1));
console.log(topRepetitiveWorsd(text_2));
console.log(topRepetitiveWorsd(text_3));