let orders = document.getElementById('orders');


function changePage(event){
    let orders = document.querySelector('.orders');
    let product = document.querySelector('.addNewProducts');
    let member = document.querySelector('.addnewMember');

    let ellements = document.querySelectorAll('.myApp ul li a');

    for(let elemet of ellements){
        elemet.classList.remove('active');
    }

    let el = event.srcElement;
    let atrinuteName = el.getAttribute("name");

    orders.style.display = "none";
    product.style.display = "none";
    member.style.display = "none";

    switch(atrinuteName)
    {
        case 'orders':
            orders.style.display = "block";
            el.classList.add('active');
        break;
        case 'member':
            member.style.display = "block";
            el.classList.add('active');
        break;
        case 'product':
            product.style.display = "block";
            el.classList.add('active');
        break;

    }
}