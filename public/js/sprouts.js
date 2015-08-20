// YOUR CODE GOES HERE
var next_page = $(".more-sprouts");
var tweets_div = $(".tweets");
var next_page_number = 2;

var create_tweet = function(tweetJSON){
  html_string = "";
  html_string += "<li class='tweet'>\n";
  html_string += "<div class='body'>" + tweetJSON.text + "</div>";
  html_string += "<div class='user'>" + tweetJSON.username + "</div>";
  html_string += "</li>";
  return html_string;
}

var add_tweets = function(tweets) {
  for (var i = 0; i < tweets.length; i++) {
    tweets_div.append(create_tweet(tweets[i]));
  };
}

var post_tweets = function(){
  $.get('/tweets.json', {page: next_page_number}, add_tweets);
}

var next_page_clicked = function() {
  post_tweets();
  next_page_number++;
};

next_page.on("click", function(event) {
  event.preventDefault();
  next_page_clicked();
})
