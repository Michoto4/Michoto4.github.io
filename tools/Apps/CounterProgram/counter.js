const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    saveData()
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    saveData()
}

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    saveData()
}

function saveData(){
    localStorage.setItem("counterData", countLabel.textContent);
}
function showData(){
    countLabel.textContent = localStorage.getItem("counterData");
    count = localStorage.getItem("counterData");
}
showData()