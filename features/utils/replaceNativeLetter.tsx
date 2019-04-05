export function replaceNativeLetter(arr: []) {
  return arr.map((letter: string) => {
    let changedLetter = letter;
    if (letter === "ę") changedLetter = "e";
    if (letter === "ą") changedLetter = "a";
    if (letter === "ó") changedLetter = "o";
    if (letter === "ś") changedLetter = "s";
    if (letter === "ł") changedLetter = "l";
    if (letter === "ę") changedLetter = "e";
    if (letter === "ż") changedLetter = "z";
    if (letter === "ź") changedLetter = "z";
    if (letter === "ń") changedLetter = "n";
    return changedLetter;
  })
}