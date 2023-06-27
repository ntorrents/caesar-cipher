const alphabet = "abcdefghijklmnñopqrstuvwxyz";

function cesar(text, descifrar = false, pos = 2) {
    let newText = "";
    for (value of text.toLowerCase()) {
        if (alphabet.includes(value)) {
            index = alphabet.indexOf(value);
            if (!descifrar) {
                index = index + pos > 26 ? index + pos - 27 : index + pos;
            } else {
                index = index - pos < 0 ? index - pos + 27 : index - pos;
            }
            newText += alphabet.charAt(index);
        } else {
            newText += value;
        }
    }
    return newText;
}

frase = cesar("Luke, soy tu padre!");
console.log(frase);
codigo = cesar("nwmg, uqa vw rcftg!", true);
console.log(codigo);
codigo = cesar("pzoj, xtd yz ufiwj! jx gwtqf...", true, 5);
console.log(codigo);
