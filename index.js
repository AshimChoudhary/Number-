const increaseButton = document.getElementById("btnThree");
const resetButton = document.getElementById("btnTwo");
const decreaseButton = document.getElementById("btnOne");
const labelButton = document.getElementById("labelId");
let count = 0;

increaseButton.onclick = function(){
    count++;
    labelButton.textContent = count;
    document.getElementById('myh1').textContent = "Is it All you got GO!!!!!!";
    document.getElementById('btnOne').style.opacity = 0.5;
    document.getElementById('btnTwo').style.opacity = 0.5;

}

decreaseButton.onclick = function(){
    count--;
    labelButton.textContent = count;
    
    document.getElementById('myh1').textContent = "Do you really want to go like that!";
    document.getElementById('btnTwo').style.opacity = 0.5;
    document.getElementById('btnThree').style.opacity = 0.5;
}

resetButton.onclick = function(){
    count=0;
    labelButton.textContent = count;
    
    document.getElementById('myh1').textContent = "Daddy's Home🦅";
    document.getElementById('btnOne').style.opacity = 0.5;
    document.getElementById('btnThree').style.opacity = 0.5;
}