var issueOne = $('#issueOne');
var container = $('.container');

issueOne.on("click", showOne);

function showOne(){
  container.empty();
  container.append(`<h4 class = "titleIssue">Coming Soon!</h4>`)
}
