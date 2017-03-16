var ocr function(){}

ocr.prototype.convert(ocrStrings){
  // var ocrString = (
  //       '    _  _ \n' +
  //       '  | _| _|\n' +
  //       '  ||_  _|\n' +
  //       '         \n'
  //     );
  var ocrString = (
        '    _ \n' +
        '  || |\n' +
        '  ||_|\n' +
        '      '
      );



  var ocrSplit = ocrString.split('\n');

  var choppedOcr = [];
  var ocrLoop = (function(){
    for(i=0; i < ocrSplit.length; i++ ){
      var nestedOcr = ocrSplit[i].match(/.{1,3}/g);
      choppedOcr.push(nestedOcr);
    }
    return choppedOcr;


  });
  ocrLoop();



  var ocrNumber = (function(){
    var finalOcr = [];
    for(var x=0; x < choppedOcr[x].length; x++){
       for(var i=0; i < choppedOcr.length; i++){
         finalOcr.push(choppedOcr[i][x]);
      }
    }

      var ocrNumberOutput = finalOcr.join('\n');
  console.log(ocrNumberOutput)
  //     // console.log(ocrNumberOutput.substring(0,16));
  //     // console.log(ocrNumberOutput.substring(16,31));
  // var ocrNumberInputDivide = ocrNumberOutput.match(/.{1,16}/g);
  //       console.log(ocrNumberInputDivide.join('\n'))
  //       console.log(ocrNumberInputDivide)
   });

  // var ocrNumberInputDivide = (function(){
  //   for(var c=0; c < ocrNumberOutput; c++ ){
  //       ocrNumberOutput.substring(0,16)
  //   }
  // })


  console.log(ocrNumber());

  //       function ocrHell(ocrNumber){
  //         var convertedOcr = [];
  //       // if(ocrNumber.length < 16 || ocrNumber.length > 12){
  //       //   return "Error";}else
  //         if(ocrNumber ==
  //         ' _ \n' +
  //         '| |\n' +
  //         '|_|\n'

  //     ){
  //     convertedOcr.push(0);

  //     }else if(ocrNumber ==
  //         '   \n' +
  //         '  |\n' +
  //         '  |\n'

  //       ){
  //     convertedOcr.push(1);

  //     }else if(ocrNumber ==
  //         ' _ \n' +
  //         ' _|\n' +
  //         '|_ \n'

  //       ){
  //     convertedOcr.push(2);
  //     }

  //     console.log(convertedOcr);
  //   }




  // var ocrInput = (
  //       '    _ \n' +
  //       '  || |\n' +
  //       '  ||_|\n' +
  //       '      '
  //     );

  //   console.log(ocrMachine(ocrInput));












module.exports = ocr;
