const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const input = '124fsdfJFS13491)(#$)#@*!(//##$\3343jads90adS the quick brown fox jumps over the lazy dog!!!!';

if (containsAlphabet(input)) {
  console.log(true);
} else {
  console.log(false);
}

function containsAlphabet(input) {
    input = input.replace(/[^a-zA-Z]/gi, '').toLowerCase(); // Remove non-letters (numbers, special chars, etc) && convert to all lower case.
    let count = 0;
    for (let i=0; i < alphabet.length; i++) {
      if (input.indexOf(alphabet[i]) > -1) count++;
      if (count === 26) return true;
    }
    return false;
  }
