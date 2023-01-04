const str = `hello world
010-1234-5678.
thedfjlsdjf@gmail.com
https://www.omdbapi.com/?apikey=349827459=frozen
The quick brown fox jumps over the lazy ddog.
abbcccdddd
http://www.omdbapi.com/?apikey=349827459=frozen
동해물과_백두산이_마르고 닳도록
`;
console.log(
    str.match(/(?<=@).{1,}/g)
);