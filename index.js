localStorage.names=JSON.stringify([]);

function addEvent() {

    let input = document.getElementById("inputName1");
    let namesArray = JSON.parse(localStorage.names);
    namesArray.push(input.value);
    localStorage.names = JSON.stringify(namesArray);
    input.value = "";

    updatelist();

}
function updatelist()
{
    let ul= document.getElementById("int1");
    let namesArray=JSON.parse(localStorage.names);
    let length =namesArray.length;
    let html="";

    for(let i=0;i<length;i++)
    {
        html+=  '<li class="list-group-item" >'+namesArray[i]+
      '</li>';
    
    }
    ul.innerHTML=html;
}

function random()
{
    let arrayNames =JSON.parse(localStorage.names);
    let len=arrayNames.length;
    randomposition= Math.floor(Math.random()*len);
randomname=arrayNames[randomposition];
let ui=document.getElementById("out");
let outp="";

outp='<h1><strong> heyyyy !!!!     '+randomname+'  will buy the lunch today 😍 !</h1></strong>';
ui.innerHTML=outp;
}

