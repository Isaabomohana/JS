 /*the html structur*/
 var currentStory = 1;
 /*the html structur*/

 var loginNames = [];

 var questionCursor = 0;
 var progressbar = 0;


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

function update () {

  var question = questions[questionCursor]
  document.getElementById('fragen').innerHTML = question.title ;
  document.getElementById('ans0').innerHTML = question.options[0];
  document.getElementById('ans1').innerHTML = question.options[1];
  document.getElementById('ans2').innerHTML = question.options[2];
}
function answerChecked (evt) {
  evt.preventDefault();
  var rightAnswer = questions[questionCursor].rightAnswer;
  if ($("[data-index="+rightAnswer+"]").prop("checked")){
    console.log(rightAnswer);
    progressbar = progressbar + 10 ;
    $( ".progress-bar-class" ).html( progressbar + "%" + "success");
    $ (".progress-bar-success").css("width", progressbar + "%");
    questionCursor = questionCursor +1;
    console.log(questionCursor);
    update();
  } else {
    console.log("wrong answer");
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

$("#submit-answer").click(answerChecked)
setup();



