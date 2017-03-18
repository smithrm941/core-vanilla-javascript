var Say = function(){};


Say.prototype.inEnglish = function say(numberValue) {
  var integerString = numberValue.toString();
  convertedNumberArray = [];
  if (numberValue >= 0 && numberValue <= 99) {
    if(integerString.length == 1){
      switch (integerString){
          case '0':
            return 'zero';
          case '1':
            return 'one';
          case '2':
            return 'two';
          case '3':
            return 'three';
          case '4':
            return 'four';
          case '5':
            return 'five';
          case '6':
            return 'six';
          case '7':
            return 'seven';
          case '8':
            return 'eight';
          case '9':
            return 'nine';
        }
    } else if(integerString.length == 2){
      if (integerString[0] == 1) {
        switch(integerString){
          case '11':
            return 'eleven';
          case '12':
            return 'twelve';
          case '13':
            return 'thirteen';
          case '14':
            return 'fourteen';
          case '15':
            return 'fifteen';
          case '16':
            return 'sixteen';
          case '17':
            return 'seventeen';
          case '18':
            return 'eighteen';
          case '19':
            return 'nineteen';
        }
      } else if (integerString[0] > 1) {
        switch(integerString[0]){
          case '2':
            convertedNumberArray.push('twenty');
            break;
          case '3':
            convertedNumberArray.push('thirty');
            break;
          case '4':
            convertedNumberArray.push('forty');
            break;
          case '5':
            convertedNumberArray.push('fifty');
            break;
          case '6':
            convertedNumberArray.push('sixty');
            break;
          case '7':
            convertedNumberArray.push('seventy');
            break;
          case '8':
            convertedNumberArray.push('eighty');
            break;
          case '9':
            convertedNumberArray.push('ninety');
            break;
        }
        switch(integerString[1]){
          case '0':
            var englishNumber = convertedNumberArray.join();
            return englishNumber;
          case '1':
            convertedNumberArray.push('-one');
            break;
          case '2':
            convertedNumberArray.push('-two');
            break;
          case '3':
            convertedNumberArray.push('-three');
            break;
          case '4':
            convertedNumberArray.push('-four');
            break;
          case '5':
            convertedNumberArray.push('-five');
            break;
          case '6':
            convertedNumberArray.push('-six');
            break;
          case '7':
            convertedNumberArray.push('-seven');
            break;
          case '8':
            convertedNumberArray.push('-eight');
            break;
          case '9':
            convertedNumberArray.push('-nine');
            break;
        }
          englishNumber = convertedNumberArray.join('');
          return englishNumber;
      }
    }
  } else if (numberValue > 99) {
      if(integerString.length == 3){
        switch (integerString[0]){
          case '1':
            convertedNumberArray.push('one hundred');
            break;
          case '2':
            convertedNumberArray.push('two hundred');
            break;
          case '3':
            convertedNumberArray.push('three hundred');
            break;
          case '4':
            convertedNumberArray.push('four hundred');
            break;
          case '5':
            convertedNumberArray.push('five hundred');
            break;
          case '6':
            convertedNumberArray.push('six hundred');
            break;
          case '7':
            convertedNumberArray.push('seven hundred');
            break;
          case '8':
            convertedNumberArray.push('eight hundred');
            break;
          case '9':
            convertedNumberArray.push('nine hundred');
            break;
        }
        switch (integerString[1]+integerString[2]){
          case '00':
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '11':
            convertedNumberArray.push(' eleven');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '12':
            convertedNumberArray.push(' twelve');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '13':
            convertedNumberArray.push(' thirteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '14':
            convertedNumberArray.push(' fourteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '15':
            convertedNumberArray.push(' fifteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '16':
            convertedNumberArray.push(' sixteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '17':
            convertedNumberArray.push(' seventeen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '18':
            convertedNumberArray.push(' eighteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '19':
            convertedNumberArray.push(' nineteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
        }
        switch (integerString[1]){
          case '2':
            if(integerString[2] != 0){
              convertedNumberArray.push(' twenty-');
            }
            if(integerString[2] == 0){
              convertedNumberArray.push('twenty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '3':
            if(integerString[2] != 0){
              convertedNumberArray.push(' thirty-');
            } else if(integerString[2] == 0){
                convertedNumberArray.push('thirty');
                englishNumber = convertedNumberArray.join('');
                return englishNumber;
              }
          break;
          case '4':
            if(integerString[2] != 0){
              convertedNumberArray.push(' forty-');
            } else if(integerString[2] == 0){
              convertedNumberArray.push('forty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '5':
            if(integerString[2] != 0){
              convertedNumberArray.push(' fifty-');
            } else if(integerString[2] == 0){
              convertedNumberArray.push('fifty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '6':
            if(integerString[2] != 0){
              convertedNumberArray.push(' sixty-');
            } else if(integerString[2] == 0){
              convertedNumberArray.push('sixty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '7':
            if(integerString[2] != 0){
              convertedNumberArray.push(' seventy-');
            } else if(integerString[2] == 0){
              convertedNumberArray.push('seventy');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '8':
            if(integerString[2] != 0){
              convertedNumberArray.push(' eighty-');
            } else if(integerString[2] == 0){
              convertedNumberArray.push('eighty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '9':
            if(integerString[2] != 0){
              convertedNumberArray.push(' ninety-');
            } else if(integerString[2] == 0){
              convertedNumberArray.push('ninety');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
        }
        switch (integerString[2]){
          case '1':
            convertedNumberArray.push('one');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '2':
            convertedNumberArray.push('two');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '3':
            convertedNumberArray.push('three');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '4':
            convertedNumberArray.push('four');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '5':
            convertedNumberArray.push('five');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '6':
            convertedNumberArray.push('six');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '7':
            convertedNumberArray.push('seven');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '8':
            convertedNumberArray.push('eight');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '9':
            convertedNumberArray.push('nine');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
        }
    } else if (integerString.length == 4){
        switch (integerString[0]){
          case '1':
            convertedNumberArray.push('one thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '2':
            convertedNumberArray.push('two thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '3':
            convertedNumberArray.push('three thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '4':
            convertedNumberArray.push('four thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '5':
            convertedNumberArray.push('five thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '6':
            convertedNumberArray.push('six thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '7':
            convertedNumberArray.push('seven thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '8':
            convertedNumberArray.push('eight thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
          case '9':
            convertedNumberArray.push('nine thousand');
            if(integerString[1]+integerString[2]+integerString[3] == '000'){
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            }
            break;
        }
        switch (integerString[1]){
          case '1':
            convertedNumberArray.push(' one hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '2':
            convertedNumberArray.push(' two hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '3':
            convertedNumberArray.push(' three hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '4':
            convertedNumberArray.push(' four hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '5':
            convertedNumberArray.push(' five hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '6':
            convertedNumberArray.push(' six hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '7':
            convertedNumberArray.push(' seven hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '8':
            convertedNumberArray.push(' eight hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
          case '9':
            convertedNumberArray.push(' nine hundred');
            if(integerString[2]+integerString[3] == '00'){
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
            break;
        }
        switch (integerString[2]+integerString[3]){
          case '11':
            convertedNumberArray.push(' eleven');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '12':
            convertedNumberArray.push(' twelve');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '13':
            convertedNumberArray.push(' thirteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '14':
            convertedNumberArray.push(' fourteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '15':
            convertedNumberArray.push(' fifteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '16':
            convertedNumberArray.push(' sixteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '17':
            convertedNumberArray.push(' seventeen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '18':
            convertedNumberArray.push(' eighteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
          case '19':
            convertedNumberArray.push(' nineteen');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
        }
        switch (integerString[2]){
          case '2':
            if(integerString[3] != 0){
              convertedNumberArray.push(' twenty-');
            }
            if(integerString[3] == 0){
              convertedNumberArray.push('twenty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '3':
            if(integerString[3] != 0){
              convertedNumberArray.push(' thirty-');
            } else if(integerString[3] == 0){
                convertedNumberArray.push('thirty');
                englishNumber = convertedNumberArray.join('');
                return englishNumber;
              }
          break;
          case '4':
            if(integerString[3] != 0){
              convertedNumberArray.push(' forty-');
            } else if(integerString[3] == 0){
              convertedNumberArray.push('forty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '5':
            if(integerString[3] != 0){
              convertedNumberArray.push(' fifty-');
            } else if(integerString[3] == 0){
              convertedNumberArray.push('fifty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '6':
            if(integerString[3] != 0){
              convertedNumberArray.push(' sixty-');
            } else if(integerString[3] == 0){
              convertedNumberArray.push('sixty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '7':
            if(integerString[3] != 0){
              convertedNumberArray.push(' seventy-');
            } else if(integerString[3] == 0){
              convertedNumberArray.push('seventy');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '8':
            if(integerString[3] != 0){
              convertedNumberArray.push(' eighty-');
            } else if(integerString[3] == 0){
              convertedNumberArray.push('eighty');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
          case '9':
            if(integerString[3] != 0){
              convertedNumberArray.push(' ninety-');
            } else if(integerString[3] == 0){
              convertedNumberArray.push('ninety');
              englishNumber = convertedNumberArray.join('');
              return englishNumber;
            }
          break;
        }
        switch (integerString[3]){
          case '1':
            convertedNumberArray.push('one');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '2':
            convertedNumberArray.push('two');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '3':
            convertedNumberArray.push('three');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '4':
            convertedNumberArray.push('four');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '5':
            convertedNumberArray.push('five');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '6':
            convertedNumberArray.push('six');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '7':
            convertedNumberArray.push('seven');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '8':
            convertedNumberArray.push('eight');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
          case '9':
            convertedNumberArray.push('nine');
            englishNumber = convertedNumberArray.join('');
            return englishNumber;
            break;
        }
    }
      return 'working?';
  }
}

module.exports = Say;
