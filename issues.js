var issueOne = $('#issueOne');
var container = $('.container');

issueOne.on("click", showOne);

function showOne(){
  container.empty();
  container.append(`<h4 class = "titleIssue">Issue One:</h4>`)
}
