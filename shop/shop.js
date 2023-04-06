


let = podatoci = document.getElementById('product');
let r = fetch('https://62d9c6909eedb69963626810.mockapi.io/proizvod/' )
        .then(response => response.json()).then(data =>{
       // console.log(data);

        for(let product of data){

        let neww = document.createElement('div');
        neww.classList.add('col-md-4');
        neww.classList.add('cards');

        neww.innerHTML = `        <div class="productCard"  >
                                        <div class='height' >
                                            <div class="imgBack">
                                                <img src="${product['img']}" alt="">
                                            </div>
                                            <a onclick='viewProduct(event)'><i class="fa fa-eye position-i" aria-hidden="true"></i></a>
                                        </div>    
                                        <div class="cardElements" name='${product["kategorija"]}'>
                                            <h3 id='${product['idProizvod']}' >${product['imeNaProizvod']}</h3>
                                            <p class="sortDescription">${product['opis'].slice(0,80)}</p>
                                            <p class="price">$${product['cena']}</p>
                                            <a href="javascript:void(0)" class='btn btn-dark' onclick='addToCard(event)'>Add To Card<i class="fa fa-cart-plus " aria-hidden="true"></i></a>
                                        </div>
                                    </div>`;
        
        podatoci.appendChild(neww);
        }
});


/*let  src = document.querySelector('.shop');
let  srcProducts = document.querySelector('.products');
if(window.location.href != 'http://127.0.0.1:5500/shop/shop.html#'){
    src.style.display= "block";
    srcProducts.style.display= "none";
}


function openProduct(){
    
    src.style.display= "none";
    srcProducts.style.display= "block";
    window.location ='http://127.0.0.1:5500/shop/shop.html#'
    //location.assign('https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click/');
    //window.location = '/products/products.html';

    //window.location ='http://127.0.0.1:5500/shop/shop.html'
    //window.getPath();
    

    //console.log(window.location.href );

}*/



function sort(event){
    let  src = event.srcElement;
    let atribute = src.getAttribute('name');
    let AllProduct = document.querySelectorAll('.cards');

    for(let product of AllProduct){
        
        let valiueOfProduct = product.querySelector('.cardElements');
        let atributOfProd = valiueOfProduct.getAttribute('name');
        //console.log('', product);

        if(atributOfProd == atribute || atribute=='All')
        {
            product.style.display= "block";
        }
        else{
            product.style.display= "none";
        }
    }

}


function sortByPrice(){
    let AllProduct = document.querySelectorAll('.cards');
    for(let el of AllProduct){
        el.style.display='none';
    }
    let r = fetch('https://62d9c6909eedb69963626810.mockapi.io/proizvod/' )
        .then(response => response.json()).then(data =>{

        let newData = data;
        
        for(let x=0; x < newData.length;x++){
            let pricetext = newData[x].cena;
            for(let y=0; y < newData.length; y++){
                let pricetextY = newData[y].cena;
                if(pricetext > pricetextY){        
                    let tret = newData[y];
                    newData[y] = newData[x];
                    newData[x] = tret;
                }
                else{
                    
                }
            }   
        }
        

        for(let product of newData){

        let neww = document.createElement('div');
        neww.classList.add('col-md-4');
        neww.classList.add('cards');

        neww.innerHTML = `        <div class="productCard"  >
                                        <div class='height' >
                                            <div class="imgBack">
                                                <img src="${product['img']}" alt="">
                                            </div>
                                            <a onclick='viewProduct(event)'><i class="fa fa-eye position-i" aria-hidden="true"></i></a>
                                        </div>    
                                        <div class="cardElements" name='${product["kategorija"]}'>
                                            <h3 id='${product['idProizvod']}' >${product['imeNaProizvod']}</h3>
                                            <p class="sortDescription">${product['opis'].slice(0,80)}</p>
                                            <p class="price">$${product['cena']}</p>
                                            <a href="javascript:void(0)" class='btn btn-dark' onclick='addToCard(event)'>Add To Card<i class="fa fa-cart-plus " aria-hidden="true"></i></a>
                                        </div>
                                    </div>`;
        
        podatoci.appendChild(neww);
        }
});
}

function sortByPriceLowToHigh(){
    let AllProduct = document.querySelectorAll('.cards');
    for(let el of AllProduct){
        el.style.display='none';
    }
    let r = fetch('https://62d9c6909eedb69963626810.mockapi.io/proizvod/' )
        .then(response => response.json()).then(data =>{

        let newData = data;
        
        for(let x=0; x < newData.length;x++){
            let pricetext = newData[x].cena;
            for(let y=0; y < newData.length; y++){
                let pricetextY = newData[y].cena;
                if(pricetext < pricetextY){        
                    let tret = newData[x];
                    newData[x] = newData[y];
                    newData[y] = tret;
                }
                else{
                    
                }
            }   
        }
        

        for(let product of newData){

        let neww = document.createElement('div');
        neww.classList.add('col-md-4');
        neww.classList.add('cards');

        neww.innerHTML = `        <div class="productCard"  >
                                        <div class='height' >
                                            <div class="imgBack">
                                                <img src="${product['img']}" alt="">
                                            </div>
                                            <a onclick='viewProduct(event)'><i class="fa fa-eye position-i" aria-hidden="true"></i></a>
                                        </div>    
                                        <div class="cardElements" name='${product["kategorija"]}'>
                                            <h3 id='${product['idProizvod']}' >${product['imeNaProizvod']}</h3>
                                            <p class="sortDescription">${product['opis'].slice(0,80)}</p>
                                            <p class="price">$${product['cena']}</p>
                                            <a href="javascript:void(0)" class='btn btn-dark' onclick='addToCard(event)'>Add To Card<i class="fa fa-cart-plus " aria-hidden="true"></i></a>
                                        </div>
                                    </div>`;
        
        podatoci.appendChild(neww);
        }
});
}



let openCart = false;
function cartOpen(){
    let el = document.querySelector('.cart');
    if(openCart){
        el.style.width='0%';
        openCart = false;
    }
    else{
        el.style.width='40%';
        openCart = true;
    }
    
}


let allTotal = 0;
let numItem = 0;
function addToCard(event){

    let table = document.getElementById('tableBody');
    let neww = document.createElement('tr');
    let carEl =  document.querySelector('#cart span'); 
    carEl.classList.add('bg-danger');

    let el = event.srcElement;
    let colorEl = el.querySelector('i');
    colorEl.style.color = 'green';
    colorEl.classList.remove('fa-cart-plus');
    colorEl.classList.add('fa-check');

    let closestDiv = el.closest('.productCard');
    let name = closestDiv.querySelector('h3').textContent ;
    let pricetext = closestDiv.querySelector('.price').textContent;
    let deleteS = pricetext.replace("$", "");
    let priceNum = parseFloat(deleteS.replace(",", "."));
    let qnt = 1;
    numItem++;

    let total = qnt * priceNum;

    neww.innerHTML = `  <th scope="row">${numItem}</th>
                        <td class='name'>${name}</td>
                        <td class='qnt'>${qnt}</td>
                        <td class='price'>${pricetext}</td>
                        <td class='totalPrice'>${total}</td>`;
    table.appendChild(neww);
    //<td class='totalPrice'><a class='btn btn-light'><i class="fa fa-minus-circle"></i></a></td>
    allTotal = allTotal + total;
    //let totalPrice = document.querySelectorAll('.totalPrice');
    document.getElementById('priceToPay').innerText=allTotal;
}

function viewProduct(event){
    let element = document.querySelector('.shop');
    let el = event.srcElement;
    let closestDiv = el.closest('.productCard');
    let id = closestDiv.querySelector('h3').getAttribute('id');

    fetch('https://62d9c6909eedb69963626810.mockapi.io/proizvod/' )
        .then(response => response.json()).then(data =>{
        let idNum = parseInt(id);
        idNum--;
        let dataProduct = data[idNum];
        let neww = document.createElement('div');
        //console.log(dataProduct);

        neww.innerHTML = `          <div class="bacblack" id='popUp'>
                                        <div class="viewProduct">    
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="imgBox">
                                                        <img src="${dataProduct['img']}" alt="">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                <a href="javascript:void(0)" class="closeBtn" onclick='closePopUp()'>X</a>
                                                    <div class="textBox">
                                                        <h2>${dataProduct['imeNaProizvod']}</h2>
                                                        <p>${dataProduct['opis']} </p>
                                                        <h3>$${dataProduct['cena']}</h3>
                                                        <div class="product-btn">
                                                            <div class="quantity">                
                                                                <form id='myform' method='POST' class='quantity' action='#'>
                                                                    <input type='button' value='-' class='qtyminus minus' field='quantity' onclick='itemMinus(event)'/>
                                                                    <input type='text' name='quantity' value='0' class='qty' />
                                                                    <input type='button' value='+' class='qtyplus plus' field='quantity' onclick='itemPlus(event)' />
                                                                </form>
                                                            </div>
                                                            <a href="javascript:void(0)" class="btn btn-dark" onclick='addToCard(event)'>Add to card<i class="fa fa-cart-plus " aria-hidden="true"></i></a>
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
        
        element.appendChild(neww); 
    });
}

function closePopUp(){
    let el = document.querySelector('.bacblack');
    el.remove('div');
    //let el2 = document.getElementById('popUp');
    //let closestt = el.closest('div');
    //console.log(el);
   // closestt.remove('div');
}

function newOrder(){
    let table = document.querySelector('#tableBody');
    let tr = table.querySelector('tr');
    let name = tr.querySelector('.name').textContent;
    let qntText = tr.querySelector('.qnt').textContent;
    let priceText1 = tr.querySelector('.price').textContent;
    let prceText = priceText1.replace("$", "");
    let totalPriceText = tr.querySelector('.totalPrice').textContent;
    let qnt = parseInt(qntText);
    let totalPrice = parseInt(totalPriceText);
    let price = parseInt(prceText);

    let priceToPay = parseInt(document.getElementById('priceToPay').textContent);

    console.log(name , qnt, price, totalPrice);
    console.log('price to pay',priceToPay);

}


let divProducts;
let produsctsList;

function hideCategory(event){
    let items = document.getElementById('item');
    let showBtn = document.querySelector('.showCategory');
    let el = event.srcElement;
    let closest = el.closest('.categori');
    let closest2 = el.closest('.hide');
    closest.style.display='none';
    showBtn.style.display='block';
    closest.style.visibility='hidden';

    closest2.classList.remove('col-md-3');
    closest2.classList.remove('rightMargin');
    closest2.classList.remove('border-end');
    closest2.classList.add('col-md-1');

    items.classList.remove('col-md-9');
    items.classList.add('col-md-11');

    divProducts = document.getElementById('product');
    produsctsList = divProducts.querySelectorAll('.col-md-4');
    for(let product of produsctsList){
        product.classList.remove('col-md-4');
        product.classList.add('col-md-3');
    }

}

function showCategory(event){
    let items = document.getElementById('item');
    let showBtn = document.querySelector('.categori');
    let el = event.srcElement;
    let closest = el.closest('.showCategory');
    let closest2 = el.closest('.hide');
    closest2.classList.remove('col-md-1');
    closest2.classList.add('rightMargin');
    closest2.classList.add('border-end');
    closest2.classList.add('col-md-3');

    items.classList.remove('col-md-11');
    items.classList.add('col-md-9');

    showBtn.style.display='block';
    closest.style.display='none';
    showBtn.style.visibility='visible';   







    for(let product of produsctsList){
        product.classList.remove('col-md-3');
        product.classList.add('col-md-4');
    }
}





function itemPlus(e){
    let el =document.getElementById('myform');
    let inputt = el.querySelector('.qty').value;
    let val = parseInt(inputt);
        if (val < 4) {
        el.querySelector('.qty').value=val+1;
        } 
};

function itemMinus(e){
    let el =document.getElementById('myform');
    let inputt = el.querySelector('.qty').value;
    let val = parseInt(inputt);
        if (val > 0) {
        el.querySelector('.qty').value=val-1;
        } 
};

class Orders {
    
    idOrder = '';
    item ='';
    price ='';
    quantity = '';
    totalPrice = '';
    api_url = 'https://62d9c6909eedb69963626810.mockapi.io';
    
    create(){
        let data = {
           
          item: this.item,
          price: this.price,
          quantity: this.quantity,
          totalPrice: this.totalPrice
        }
  
        console.log(data);
  
  
        fetch(this.api_url + '/order', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data =>{
            console.log('naracka kreirana',data)
        })
    }
  }

  function addNew(){
    let order = new Orders();
    
/*

    let table = document.querySelector('');

    //producti.idProizvod = document.querySelector('#userId').value;
    let select= document.querySelector('#categoi')
    producti.kategorija = select.options[select.selectedIndex].value;
    producti.imeNaProizvod = document.querySelector('#productName').value;
    producti.opis = document.querySelector('#description').value;
    producti.kolicina = document.querySelector('#quantiti').value;
    producti.cena = document.querySelector('#price').value;
    producti.img = document.querySelector('#img').value;
    console.log('doo ovde rabota' , producti.kategorija)
    producti.create();

    
     select.options[select.selectedIndex].value='';
     document.querySelector('#productName').value='';
    document.querySelector('#description').value='';
     document.querySelector('#quantiti').value='';
     document.querySelector('#price').value='';
     document.querySelector('#img').value='';*/

  }



