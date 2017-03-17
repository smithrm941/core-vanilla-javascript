function WordProblem(question){
  var questionMath = question.replace(/plus/g, '+ ').replace(/minus/g, '- ').replace(/multiplied/g, '* ').replace(/divided/g, '/ ');

  var mathArray = [];
  for(var i = 0; i<questionMath.length; i++){
    if(questionMath[i].match(/[[+\-\/*\{\d+:\d+\}]/ig)){
      if(questionMath[i].match(/[-]/ig)){
        mathArray.push(' ' + questionMath[i] + ' ');
      }else if (questionMath[i].match(/[[+\/*\{\d+:\d+\}]/ig)){
       mathArray.push(questionMath[i]);
      }
    }
  }

  var numberProblem = mathArray.join('');
  console.log(numberProblem);
  var answer = eval(numberProblem);
   return answer;
}


module.exports = WordProblem
