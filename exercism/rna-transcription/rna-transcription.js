var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  rna = [];
  function UserException(message){
    this.message = message;
    this.name = 'UserException';
  }
  if(dna.match(/[^gcta]/ig)){
    throw new UserException('Invalid input');
  }else {
    for (var i = 0; i<dna.length; i++){
      if(dna[i] == 'G'){
        rna.push('C');
      } else if (dna[i] == 'C'){
        rna.push('G');
      } else if (dna[i] == 'T'){
        rna.push('A');
      } else if (dna[i] == 'A'){
        rna.push('U');
      }
    }
    var rnaString = rna.join('');
    return rnaString;
  }
}

module.exports = DnaTranscriber;
