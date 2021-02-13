var done = false;

while (!done) {
    var questionNumber = prompt("Enter question number or -1 to exit")
    if (questionNumber == -1) {done = true; break;}
    else{
        if (questionNumber > engine.questions.length){
            alert(`There is no such question number {$questionNumber}`);
        }
        else{
            while (!done){
                var text =engine.questions[questionNumber].text;
                engine.questions[questionNumber].answers.forEach(element => {
                    text += element;
                });
                text += "-1 - exit game";
                var userAnswer = prompt (text)
                if (userAnswer == -1) {
                    done = true;
                    break;
                }
                else {
                    if(userAnswer < 0 || userAnswer > engine.questions[questionNumber].answers.length){
                        alert("No such answer");
                    }
                    else {
                        engine.answers.push({questionNumber, userAnswer});
                        break;
                    }
                }
            }
        }
    }
}
