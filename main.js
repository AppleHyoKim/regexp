let str = `hello world
010-1234-5678
the
https://www.omdbapi.com/?apikey=349827459=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd`;

// const regexp = RegExp('the', 'gi');
const regexp = /fox/gi;
// console.log(srt.match(regexp));
// console.log(regexp.test(str));
str = str.replace(regexp, 'ddddddddddd');
console.log(str)