// console.log('connected');

let tittleCount = 1;
let totalPrice = 0;

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('click', function () {

        //   get the tittle 
        const tittle = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);

        const tittleContainer = document.getElementById('title-container');

        const p = document.createElement('p');
        p.innerText = tittleCount + '. ' + tittle;
        tittleCount++;
        tittleContainer.appendChild(p)

        const p2 = document.createElement('p');
        p2.innerText = price;

        tittleContainer.appendChild(p2);

        //    total price;

        totalPrice += price;
        totalPrice++;

        document.getElementById('totalPrice').innerText = totalPrice;



    })
}


const btn = document.getElementById('apply-btn');

btn.addEventListener('click', function () {



    const couponCode = document.getElementById('input-field').value;
    const coupon = couponCode.split(' ').join('').toUpperCase();
    if (totalPrice >= 200) {
        if (coupon === 'SELL200') {

            const discountElement = document.getElementById('discountPrice')
            const discount = totalPrice * 0.2;
            discountElement.innerText = discount;

            const restTotal =document.getElementById('total');

            restTotal.innerText = totalPrice - discount;

            document.getElementById('input-field').value='';


        } else {
            alert('invalid coupon')
        }


    } else {
        alert('you have to buy more');
    }




})





