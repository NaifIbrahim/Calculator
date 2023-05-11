var buttons = document.querySelectorAll(`.button`)
var string = ""

Array.from(buttons) .forEach((_buttons)=>{
    _buttons.addEventListener(`click`,(_e)=>{
    if(_e.target.innerHTML== "="){
        string = eval(string);
        document.querySelector(`input`).value=string;
    }
    else if(_e.target.innerHTML== "C"){
        string = "";
        document.querySelector(`input`).value=string;

    }
   else{ console.log(_e.target)
     string = string + _e.target.innerHTML;
     document.querySelector(`input`).value=string;
   } 

    })

})