/*From the README: Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He says 'Fine. Be that way!' if you address him without actually saying
anything.
He answers 'Whatever.' to anything else.*/

// var Bob = function() {};
//
// Bob.prototype.hey = function( what ) {
//   what.replace(/[^\A-Z]/gi, '')
//   if ( what.endsWith('?')) {
//     return 'Sure.';
//   } else if (what == what.toUpperCase()){
//     return 'Whoa, chill out!';
//   } else if (what.trim() === ''){
//     return 'Fine. Be that way!'
//   }
//   return 'Whatever.'
//
// }
//
// module.exports = Bob;

var Bob = function() {};

Bob.prototype.hey = function( what ) {
  what.replace(/[^\A-Z0-9]/gi, '')
  console.log(what.replace(/[^\A-Z0-9]/gi, ''));
  if (what.match(/[A-Z]/) && what == what.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (what.endsWith('?')) {
    return 'Sure.';
  } else if (what.trim() === ''){
    return 'Fine. Be that way!'
  }
  return 'Whatever.'

}

module.exports = Bob;
