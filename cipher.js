//I love cryptography!

string = 73,32,108,111,118,101,32,99,114,121,112,116,111,103,114,97,112,104,121,33

//I used the ASCII table to create this Cipher! 

const sentence = 'I love cryptography!'



function encoder(str) {
    let coded = []
    if (isNaN(str[0])) {
        for (let i=0; i<str.length; i++) {
            coded.push(str.charCodeAt(i))
        }
            return coded.toString();
    } else if (Number.isInteger(str[0])) {
        console.log('3')
        let deciphered = String.fromCharCode(str)
        return deciphered
    }
}

console.log(encoder(sentence))

// console.log(charCodeAt(a))