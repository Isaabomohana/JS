var questionCursor = 0;

var questions = [
        {
            title: "Wie geht es Ihnen",
            options: ["gut Danke", "es geht", "gut"],
            rightAnswer: 0,
            image: ''
        },
        {
            title: "bla bla ",
            options: ["1", "2", "3"],
            rightAnswer: 1,
            image: ''
        },
        {
          title: "bla bla bla ",
            options: ["1", "2", "3"],
            rightAnswer: 2,
            image: ''
        }
    ];

function isCorrentAnswer(options) {
    var question = story.questions[questionCursor];
    return question.options.indexOf(option) === question.rightAnswer;
}
function update () {
    var question = questions[questionCursor]
    document.getElementById('fragen').innerHTML = question.title ;
    document.getElementById('ans1').innerHTML = question.options[0];
    document.getElementById('ans2').innerHTML = question.options[1];
    document.getElementById('ans3').innerHTML = question.options[2];
}
function answerChecked () {
    for (var i=0; i = questions[i].options.length; i++){
        if (questions[questionCursor].options[i].checked === questions[i].rightAnswer){
            questionCursor +=1 ;
         
        } else{
            console.log("false");
        }

    }
}
update();