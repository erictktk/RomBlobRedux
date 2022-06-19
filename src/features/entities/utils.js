export function hexStringTo6(hexString) {
  //console.log(hexString.length);
  for (let i = 0; 6 - hexString.length; i += 1) {
    hexString = "0" + hexString;
  }

  return "0x" + hexString;
  //console.log(hexString);
}

export function hexStringTo2(hexString) {
  for (let i = 0; 2 - hexString.length; i += 1) {
    hexString = "0" + hexString;
  }

  return "0x" + hexString;
}
