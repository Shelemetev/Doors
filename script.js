window.addEventListener('wheel', (event) => {
    // console.log(event.deltaY);
    if (event.deltaY > 0) {
      document.querySelector('.header').classList.remove('header--visible')
    } else {
      document.querySelector('.header').classList.add('header--visible')
    }
})
// Работа header

const header = document.querySelector('.header')

// document.addEventListener('scroll', function() {
//   let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
//   console.log(posTop);
//   // Блок целиком находится в видимой зоне
//   document.querySelector('.header').classList.toggle('header--black', posTop + document.querySelector('.header').clientHeight <= window.innerHeight && posTop >=  1000);
// });



window.addEventListener('scroll', () => {
  let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(posTop);
  if (posTop > 100) {
    header.classList.add('header--white')
  } else {
    header.classList.remove('header--white')
  }
})

window.addEventListener('DOMContentLoaded', () => {
  let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(posTop);
  if (posTop > 750) {
    header.classList.add('header--white')
  } else {
    header.classList.remove('header--white')
  }
})