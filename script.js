// window.addEventListener('wheel', (event) => {
//     console.log(event.deltaY);
//     if (event.deltaY > 0) {
//       document.querySelector('.header').classList.remove('header--visible')
//     } else {
//       document.querySelector('.header').classList.add('header--visible')
//     }
// })
// Работа header

document.addEventListener('scroll', function() {
  const posTop = document.querySelector('.head').getBoundingClientRect().top;
  
  console.log(posTop);
  // Блок целиком находится в видимой зоне
  document.querySelector('.header').classList.toggle('header--visible', posTop + document.querySelector('.header').clientHeight <= window.innerHeight && posTop >= 0);
});