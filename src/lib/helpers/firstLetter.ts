export default function firstLettter(word: string) {
    if (!word) return;
    if (typeof word !== 'string') return word;
    const convertStringToArray = word.split("");
    return convertStringToArray[0] + '.';
}
