const caesarCipher = (str, shift, decrypt) => {
  const s = decrypt ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join("");
};

//caesarCipher("Hello World!", -3); // 'Ebiil Tloia!'
//caesarCipher("Ebiil Tloia!", 23, true); // 'Hello World!

const userInput = document
  .getElementById("text")
  .addEventListener("input", (event) => {
    const shift = document.getElementById("shift").value;
    let cipherShift = -shift;
    const isDecrypt = document.getElementById("decrypt").checked;
    if (isDecrypt) {
      cipherShift = 26 - shift;
    }
    const result = caesarCipher(event.target.value, cipherShift, isDecrypt);
    console.log(result);
    const output = (document.querySelector(".output").innerHTML = result);
  });

//const result = caesarCipher(userInput, cipherShift, isDecrypt);
//console.log(result);
