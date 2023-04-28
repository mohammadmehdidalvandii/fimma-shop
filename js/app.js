import { ordercontent } from "./orderbox.js"
import { imgContent } from "./imagebox.js"
import { flowers } from "./productFlower.js"

let iconMenu = document.querySelector('#icon-menu')
let menuBox = document.querySelector(".menu-box")
let mobileMenu = document.querySelector('.down-menu-mobile')

iconMenu.addEventListener('click' , ()=>{
    if(iconMenu.classList.contains('fa-bars')){
        iconMenu.classList.remove('fa-bars')
        iconMenu.classList.add('fa-times')
        menuBox.style.right= "0"
        mobileMenu.style.right = "1rem"
    }else{
        iconMenu.classList.remove('fa-times')
        iconMenu.classList.add('fa-bars')
        menuBox.style.right= "-20rem"
        mobileMenu.style.right = "-20rem"
    }
})

// $ slider product$
$('.product__slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl:true,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          with:200,
          dots: true
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ] 
  });

// $ slider news$
  $('.news-slides').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl:true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3 ,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          with:200,
          dots: true
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ] 
  });