//brends logo slider

let brends = document.getElementById('bredndsID');
let ul = brends.querySelector('ul');
let li = ul.querySelectorAll('li');
let counter=0;
for (let element of li ) {
  if(counter<=3)
  {
    counter++;
    element.style.display='inline-block';
  }
  else
  {
    element.style.display='none';
  }
}

let listaDiv = document.querySelectorAll('.brends ul li');


//console.log(listaDiv);

let pozicijaLevo = 0;
let pozicijaDesno = 3;


function leftBtn(){
    listaDiv[pozicijaDesno].style.display = 'none';
    pozicijaLevo--;
    pozicijaDesno--;

    document.getElementById("rigntBtn").disabled = false;

    if(pozicijaLevo < 1){
        document.getElementById("leftBTn").disabled = true;
    }
    listaDiv[pozicijaLevo].style.display = 'inline-block';
};


function rightBtn(){

    listaDiv[pozicijaLevo].style.display = 'none';
    pozicijaLevo++;
    pozicijaDesno++;
    document.getElementById("leftBTn").disabled = false;

    if(pozicijaDesno === listaDiv.length-1){
        document.getElementById("rigntBtn").disabled = true;
    }
    listaDiv[pozicijaDesno].style.display = 'inline-block';

};