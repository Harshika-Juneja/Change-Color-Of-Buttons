let all_buttons = document.getElementsByTagName('button');//array of buttons return
let  copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}
function buttonColorChange(buttonThingy)
{
    if(buttonThingy.value === 'red')
    {
        buttonsRed();
    }else if(buttonThingy.value === 'green')
    {
        buttonsGreen();
    }else if(buttonThingy.value==='reset')
    {
        buttonColorReset()
    }else if(buttonThingy.value==='random'){
        randomColors();   
    }

}
function buttonsRed() {
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen() {
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors() {
    let choices=['btn-primary','btn-success']
    for(let i=0;i<all_buttons.length;i++){
        let randomNumber = Math.floor(Math.random() * 2);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}