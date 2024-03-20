(function($){
  
  $(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	$(".container").toggleClass("nav-open");
    	$("nav ul li").toggleClass("animate");
  });
  
})(jQuery);

// arrow
const arrowImage = document.getElementById("arrowImage");
const menuButton = document.querySelector(".menu-icon");
menuButton.addEventListener("click", event => {
    
    arrowImage.style.display = "none";
});
// arrow

// buttons
const buttons = document.querySelectorAll(".buttons");
const iFrame = document.getElementById("iFrame-embeded-tool");
const iFrameEmpty = document.getElementById("iFrame-empty");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("fa-home")){

            window.location.assign("../index.html");

        }
        else if(event.target.classList.contains("fa-list")){

            iFrame.src = "../tools/Apps/To-DoApp/todoApp.html";

        }
        else if(event.target.classList.contains("fa-arrow-up-9-1")){

            iFrame.src = "../tools/Apps/CounterProgram/counter.html";

        }
        else if(event.target.classList.contains("fa-dice")){

            iFrame.src = "../tools/Apps/DiceRoller/diceroller.html";

        }
        else if(event.target.classList.contains("fa-circle-xmark")){

            iFrame.src = "";

        }
    
    });
});
// buttons fa-arrow-up-9-1 fa-x