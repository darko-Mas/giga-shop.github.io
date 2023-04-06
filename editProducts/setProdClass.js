class Producti {
    
    idProizvod = '';
    kategorija ='';
    imeNaProizvod ='';
    opis = '';
    kolicina = '';
    cena = '';
    img = '';
    api_url = 'https://62d9c6909eedb69963626810.mockapi.io';
    
    create(){
        let data = {
           
          // idProizvod: this.idProizvod,
           kategorija: this.kategorija,
           imeNaProizvod: this.imeNaProizvod,
           opis: this.opis,
           kolicina: this.kolicina,
           cena: this.cena,
           img: this.img

        }

        console.log(data);


        fetch(this.api_url + '/proizvod', {
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

function addNew(){
    let producti = new Producti();
    

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
     document.querySelector('#img').value='';

  }