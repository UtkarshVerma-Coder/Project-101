var insta = document.getElementById("insbut");
var Twitter = document.getElementById("gitbut");
var github = document.getElementById("twitbut");


var titlebar = document.getElementById("title");
var username = document.getElementById("username");


var followbutton = document.getElementById("followbutt");


// Make It Insta

var text = "Follow"

function makeitinsta() {
    username.innerHTML = "utkarshverma___"
    var instalink = text.link("https://www.instagram.com/utkarshverma___/")
    followbutton.innerHTML = instalink;
}
function makeittwitter() {
    username.innerHTML = "@Utkarsh_Verma_"
    var githublink = text.link("https://twitter.com/Utkarsh_Verma_")
    followbutton.innerHTML = githublink;

}
function makeitgithub() {
    username.innerHTML = "UtkarshVerma-Coder"
    var twittelink = text.link("https://github.com/UtkarshVerma-Coder")
    followbutton.innerHTML = twittelink;

}





function project() {
    username.innerHTML = "My Projects"
    followbutton.innerHTML = twittelink;
    

}
