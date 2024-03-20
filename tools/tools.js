(function($){
  
  $(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	$(".container").toggleClass("nav-open");
    	$("nav ul li").toggleClass("animate");
  });
  
})(jQuery);


const buttons = document.querySelectorAll(".buttons");
const iFrame = document.getElementById("iframe-embeded-tool");

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("fa-home")){
            window.location.assign("../index.html");
        }
        else if(event.target.classList.contains("fa-list")){
            iFrame.src = "../To-DoApp/todoApp.html";

        }
    
    });
});