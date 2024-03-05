let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick=function(){
  menuToggle.classList.toggle('active')
}

const url = document.querySelector(".search-bar");

function googleEngine(){
    url.action = "https://www.google.com/search";
}

function ddgEngine(){
    url.action = "https://duckduckgo.com/";
}

function yahooEngine(){
    url.action = "https://search.yahoo.com/search";
}