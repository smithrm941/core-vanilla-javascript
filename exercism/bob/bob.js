/*From the README: Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He says 'Fine. Be that way!' if you address him without actually saying
anything.
He answers 'Whatever.' to anything else.*/

var Bob = function() {};

Bob.prototype.hey = function( what ) {
  console.log(what);
  what.replace(/[^\A-Z]/gi, '')
  if ( what.charAt(what.length - 1) == '?' ) {
    return 'Sure.';
  } else if (what == what.toUpperCase()){
    return 'Whoa, chill out!';
  } else if (what == ''){
    return 'Fine. Be that way!'
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;
