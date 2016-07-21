 /*the html structur*/
 var currentStory = 1;
 /*the html structur*/

 var loginNames = [];

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
    console.log(questionCursor);
    console.log(questions[questionCursor]);
    
    }
  }
  /*the html structur*/
  function getCurentStoryEl () {
    return document.getElementById('story-' + currentStory);
  }

  function makeContentItemActive (contentItem) {

    $('.content-item').removeClass('active');
    $('.content-item-' + contentItem).addClass('active');
  }

  function makeStoryActive (storyId) {
    $('.story').removeClass('active');
    $('#story-' + storyId).addClass('active');
  }

  function goToNextStory () {
    currentStory++;
    makeStoryActive(currentStory);
  }
  /*the html structur*/


  function logIn (){
    var user = $("#userName").val();
    loginNames.push(user);
    console.log(loginNames);
    document.getElementById('currentUser').innerHTML = user;
    $(".content").hide();
  }

  function setup (){
    $('#storyLink').click(function() { makeContentItemActive('stories') })
    $('#homePage').click(function() { makeContentItemActive('login') })
    $('#aboutPage').click(function() { makeContentItemActive('about') })
    update();
  }
  setup();



