var done = false;
var currentQuestion = 0;
while (!done) {
    if (currentQuestion == engine.questions.length ) {
        done = true
        break;
    }
    var text = engine.questions[currentQuestion].text;
    engine.questions[currentQuestion].answers.forEach(element => {
        text += element;
    });
    text += "-1 - exit game";
    var userAnswer = prompt (text)
    if (userAnswer == -1) {
        done = true;
        break;
    }
    else {
        if(userAnswer < 0 || userAnswer > engine.questions[currentQuestion].answers.length){
            alert("No such answer");
        }
        else {
            if (userAnswer == engine.questions[currentQuestion].correct)
            {
                currentQuestion ++;
            }
            else {
                done = true;
            }
        }
    }
    
}
alert('Спасибо за игру')
if (currentQuestion > 0) {
    alert('Поздравляю вы выиграли бабосы: ' +  engine.questions[currentQuestion - 1 ].money);
}

