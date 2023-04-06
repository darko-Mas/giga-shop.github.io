
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "rgba(25, 25, 25, 0.984)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".imgSection").css("opacity", "1");
        $(".logoSection").css("opacity", "0");
    } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        $(".imgSection").css("opacity", "0");
        $(".logoSection").css("opacity", "1");
      }
    });
  });



//add New  Costumer 
class Costumer {
    
  idCostumer = '';
  name ='';
  surname ='';
  email = '';
  password = '';
  gender = '';
  adress = '';
  phone = '';
  api_url = 'https://62d9c6909eedb69963626810.mockapi.io';
  
  create(){
      let data = {
         
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        gender: this.gender,
        adress: this.adress,
        phone: this.phone
      }

      console.log(data);


      fetch(this.api_url + '/korisnik', {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json',
          },
          
          body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data =>{
          console.log('korisnik kreiran',data)
      })
  }
}

function saveCustumer(){
  let costumer = new Costumer();
  
  costumer.name = document.getElementById('name').value;
  costumer.surname = document.querySelector('#surname').value;
  costumer.email = document.querySelector('#email').value;
  costumer.password = document.querySelector('#password').value;
  costumer.gender = document.querySelector('#gender').value;
  costumer.adress = document.querySelector('#zipCode').value;
  costumer.phone = document.querySelector('#phone').value;
  console.log('doo ovde rabota' , costumer)
  costumer.create();
}

//add new costumer end

//login 

function LogIn(){
    let name = document.getElementById('emailtext').value;
    let surname = document.getElementById('passtext').value; 
    

    let r = fetch('https://62d9c6909eedb69963626810.mockapi.io/korisnik/' )
    .then(response => response.json()).then(data =>{
    //console.log(data);

    for(let costumers of data){
        if(costumers.email == name && costumers.password==surname)
        {
          //let menageorders = document.getElementById('menageOrdes');
          //menageorders.style.display = 'block';
          //console.log(menageorders);
          let logInEl = document.querySelector('.logInForm');
          logInEl.style.display='none';
          let logInApp = document.querySelector('.ordesrsApp');
          logInApp.style.display='block';
        } 
    }
    document.getElementById('emailtext').value=null;
    document.getElementById('passtext').value=null;
});

}


//login end

let menuOpen = false;

function openMenu(){
  let element = document.querySelector('nav');
  let nav = document.querySelector('.navBar');
  
  if(menuOpen == true){
    element.style.display = "none";
    nav.style.height = "70px";
    menuOpen = false;
  }
  else{
    element.style.display = "block";
    nav.style.height = "70%";
    menuOpen = true;
  }
}

var logINform = document.querySelector('.logInForm');
var logIn = document.querySelector('#login');
var registerIn = document.querySelector('#registerin');

function LogInOpen(){
  logINform.style.display = "block";

  registerIn.style.display = "none";

  logIn.style.display = "block";
}

function register(){
  logINform.style.display = "block";
  
  logIn.style.display = "none";
  
  registerIn.style.display = "block";
}


/*
function closeLogIN(){
 logINform.style.display = "none";
  
 logIn.style.display = "none";
 
 registerIn.style.display = "none";
}


*/
//get element
document.getElementById('name');
/*
function saveCustumer(){
  let name =   document.getElementById('name');
  let surname =  document.getElementById('surname');
  let email =   document.getElementById('email').value;
  let password =  document.getElementById('password').value;
  let city =   document.getElementById('city').value;
  let phone =  document.getElementById('phone').value;
  let zipCode =  document.getElementById('zipCode').value;

  console.log(name.value , surname.value , email , password , city , phone , zipCode)

  name.value = null;
}*/

//let darko = document.scripts.item(0).text;
//let elemmentiii = darko.querySelector('footer');



let cardLoaction = document.querySelector("#orders");
//console.log(cardLoaction);

function addToCard(event){
  let src = event.srcElement;
  let closestEl = src.closest('.cardElements');
  let idEl = closestEl.querySelector('h3').id;

  console.log(cardLoaction);
  /*

  let r = fetch('https://62d9c6909eedb69963626810.mockapi.io/proizvod/' )
        .then(response => response.json()).then(data =>{
        console.log(data);

        for(let product of data){
          if(product.idProizvod == idEl){
              let neww = document.createElement('div');
              neww.classList.add('col-md-4');
              neww.classList.add('cards');

              neww.innerHTML = `        <div class="productCard" >
                                              <div class="imgBack">
                                                  <img src="${product['images']}" alt="">
                                              </div>
                                              <div class="cardElements" name='${product["kategorija"]}'>
                                                  <h3 id='${product['idProizvod']}' >${product['imeNaProizvod']}</h3>
                                                  <p class="sortDescription">${product['opis']}</p>
                                                  <p class="price">$${product['cena']}</p>
                                                  <a href="#" onclick='addToCard(event)'>Add To Card</a>
                                              </div>
                                          </div>`;
              
              podatoci.appendChild(neww);
            }
          }

        
  });*/

}




