
var display = document.getElementById("display");
function message(){
    if(event.keyCode == 13){
        var inputMessage = event.target.value;
        display.innerHTML += "<li>" + inputMessage + "</li>"
        if(['hi', 'hello', 'hey'].indexOf(inputMessage) !== -1){
            setTimeout(function(){
                display.innerHTML += "<li>Hello</li>";
            }, 2000);
        }
        event.target.value = "";
    }
}