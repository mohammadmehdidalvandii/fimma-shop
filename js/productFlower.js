let flowers = [
    {id:1, Image:'./images/flower/1.png', title:'گلدان گل رز صورتی' , price:'18 تومان'},
    {id:2, Image:'./images/flower/2.png', title:'دسته گل رز' , price:'18 تومان'},
    {id:3, Image:'./images/flower/3.png', title:'رز سفید' , price:'16 تومان'},
    {id:4, Image:'./images/flower/4.png', title:'دسته گل رز قرمز' , price:' 20 تومان'},
    {id:5, Image:'./images/flower/5.png', title:'خواسته قلب' , price:'15 تومان'},
    {id:6, Image:'./images/flower/6.png', title:'انواع گل رز' , price:'17 تومان'},
    {id:7, Image:'./images/flower/7.png', title:'دسته گل سورپرایز' , price:'22 تومان'},
    {id:8, Image:'./images/flower/8.png', title:'لیلی صلح گرمسیری' , price:'14 تومان'},
]

let itemsFlower = document.querySelector('.items-flower')

flowers.forEach((product)=>{
    console.log(product);
    itemsFlower.insertAdjacentHTML('beforeend',`<div class="item-flower">
    <img src="${product.Image}" alt="" class="item-flower-img">
    <div class="item-flowr-btns">
        <a href="#" class="item-flower-button "><i class="fa fa-search"></i></a>
        <a href="#" class="item-flower-button ">افزودن به سبد خرید</a>
        <a href="#" class="item-flower-button "><i class="fa fa-share-alt"></i></a>
    </div>
    <div class="item-flower-txt">
        <span class="item-flower-title">${product.title}</span>
    <span class="item-flower-price">${product.price}</span>
    </div>
</div>`)
})

export {flowers}