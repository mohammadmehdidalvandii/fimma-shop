let ordercontent = [
    {id:1, Image:'./images/svg/8-trolley.svg' , title:'ارسال رایگان',text:'خرید بالای 100 تومان'},
    {id:2, Image:'./images/svg/9-money.svg' , title:'تضمین کیفیت',text:'تضمیت کیفیت گل ها'},
    {id:3, Image:'./images/svg/10-credit-card.svg' , title:'امنیت در خرید',text:'عضو شبکه شتاب'},
    {id:4, Image:'./images/svg/11-gift-card.svg' , title:'تخفیفات و جوایز روزانه',text:'خرید بالای 200 تومان'},
]

let orderItems = document.querySelector('.order-items')

ordercontent.forEach((item)=>{
    // console.log(item);
    orderItems.insertAdjacentHTML('beforeend',`<div class="order-item">
    <div class="order-item-img">
        <img src="${item.Image}" alt="" class="item-img">
    </div>
    <div class="order-item-txt">
        <span class="order-item-title">${item.title}</span>
        <span class="order-item-text">${item.text}</span>
    </div>
</div>`)

})

export{ordercontent}