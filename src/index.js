const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '', counter = 0, counter_max = expr.length / 10;
    for (let i = 0; i < counter_max; i++) {
        let str = '';
        let letter = expr.slice(0, 10).replace(/^0+/, '');
        expr = expr.substring(10, expr.length);
        if (letter[0] === '*') {
          res += ' ';
          continue;
        }
        for (j = 1; j < letter.length; j += 2) {
          if (letter[j-1] + letter[j] === '11') str += '-';
          else str += '.';
        }
        let bin = Object.keys(MORSE_TABLE).find(key => key === str);
        word = MORSE_TABLE[bin];
        res += word;
    }
    return res;
}

module.exports = {
    decode
}