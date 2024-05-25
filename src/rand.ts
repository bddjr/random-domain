import CryptoRandInt from 'webcrypto-random-int'

export function randomDomain(length: number, check09: boolean, checkaz: boolean, check_: boolean): string {
    let letters = "";
    if (check09) letters += "0123456789";
    if (checkaz) letters += "abcdefghijklmnopqrstuvwxyz";
    if (!check_) return CryptoRandInt.str(length, letters);
    let str = '';
    for (let i = 0; i < length; i++) {
        let ThisLetters = letters;
        if (i != 0 && i != length - 1 && str[i - 1] != '-')
            ThisLetters += '-';
        str += CryptoRandInt.str(1, ThisLetters)
    }
    return str
}
