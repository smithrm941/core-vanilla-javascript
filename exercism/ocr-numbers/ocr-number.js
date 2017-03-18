var Ocr = function(){}

  Ocr.prototype.convert = function(ocrString) {
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

    var finalOcr = [];
    var ocrFinal = (function(){
      for(var x=0; x < choppedOcr[0].length; x++){
         for(var i=0; i < choppedOcr.length; i++){
           finalOcr.push(choppedOcr[i][x]);
        }
      }
      return finalOcr;
    });
    ocrFinal();


    var convertedOcr = [];
    var ocrMachine = function(){
      while(finalOcr.length > 0){
        var ocrNumber = finalOcr.slice(0,4).join('\n');
          if(ocrNumber ==
              ' _ \n' +
              '| |\n' +
              '|_|\n' +
              '   '
          ){
         convertedOcr.push(0);

          }else if(ocrNumber ==
              '   \n' +
              '  |\n' +
              '  |\n' +
              '   '
            ){
           convertedOcr.push(1);

          }else if(ocrNumber ==
              ' _ \n' +
              ' _|\n' +
              '|_ \n' +
              '   '
            ){
          convertedOcr.push(2);
          }else if(ocrNumber ==
             ' _ \n' +
              ' _|\n' +
              ' _|\n' +
              '   '
            ){
           convertedOcr.push(3);
           }else if(ocrNumber ==
              '   \n' +
              '|_|\n' +
              '  |\n' +
              '   '
            ){
            convertedOcr.push(4);
          } else if(ocrNumber ==
              ' _ \n' +
              '|_ \n' +
              ' _|\n' +
              '   '
            ){
            convertedOcr.push(5);
          } else if(ocrNumber ==
              ' _ \n' +
              '|_ \n' +
              '|_|\n' +
              '   '
          ){
            convertedOcr.push(6);
          } else if(ocrNumber ==
              ' _ \n' +
              '  |\n' +
              '  |\n' +
              '   '
          ){
            convertedOcr.push(7);
          } else if(ocrNumber ==
              ' _ \n' +
              '|_|\n' +
              '|_|\n' +
              '   '
          ){
            convertedOcr.push(8);
          } else if(ocrNumber ==
              ' _ \n' +
              '|_|\n' +
              ' _|\n' +
              '   '
          ){
            convertedOcr.push(9);
          }else {
            convertedOcr.push('?');
          }

          finalOcr.splice(0, 4);

      }



    }
        ocrMachine();
        var string = convertedOcr.join('');
        return string;

  }





module.exports = Ocr;
