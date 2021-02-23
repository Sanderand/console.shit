'use strict';

console.shit = function shit(options) {
  let logWord = 'SHIT';
  if (options.case === 'kebab') {
    logWord = 'shit';
  } else if (options.case === 'emoji') {
    logWord = '💩';
  }
  console.log(logWord);
};

export default console.shit;
