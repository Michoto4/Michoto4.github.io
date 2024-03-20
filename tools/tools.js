(function($){
  
  $(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	$(".container").toggleClass("nav-open");
    	$("nav ul li").toggleClass("animate");
  });
  
})(jQuery);


const buttons = document.querySelectorAll(".buttons");
const iFrame = document.getElementById("iFrame-embeded-tool");
const iFrameEmpty = document.getElementById("iFrame-empty");
console.log(iFrame.src);
console.log(iFrameEmpty.src);

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("fa-home")){
            window.location.assign("../index.html");
        }
        else if(event.target.classList.contains("fa-list")){

            if(iFrame.src == iFrameEmpty.src){
                iFrame.src = "../To-DoApp/todoApp.html";
            }
            else{
                iFrame.src = "";
            }

        }
    
    });
});