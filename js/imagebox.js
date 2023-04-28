let imgContent = [
    {id:1, Image:'./images/1.jpg'},
    {id:2, Image:'./images/2.jpg'},
    {id:3, Image:'./images/3.jpg'},
]

let imgItems= document.querySelector('.image-items')


imgContent.forEach((img)=>{
    imgItems.insertAdjacentHTML('beforeend',` <div class="image-box-item">
    <img src="${img.Image}" alt="" class="box-item-img">
</div>`)
})

export{imgContent}