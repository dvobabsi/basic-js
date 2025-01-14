const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];

      if (/[A-Z]/.test(char)) {
        const messageCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26;
        result += String.fromCharCode(encryptedCharCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];

      if (/[A-Z]/.test(char)) {
        const encryptedCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
        result += String.fromCharCode(decryptedCharCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
