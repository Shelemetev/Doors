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


let Post = (color,door) => {
  let promise = fetch('/' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: {color:color, door:door}
  })

  promise.then((data) => {
    console.log(data);
  })
}

const outsideDoor = document.querySelector('.main__door-img--outside')

let ReBack = (color,doors) => {
  console.log(color,doors);
  if (color === '#000000' && doors === "1") {
    outsideDoor.setAttribute('src', "./images/Door!.png")
  } else if (color === '#000000' && doors === "2") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/304/3040e8df3f422265abc383969a33e9ed/9b5893fc5cf0130232bd38b1c7ba0590_outside.png")
  } else if (color === '#3A3A3A' && doors === "1") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/1fd/1fd111746b0b0fdb8967192a223b9f6a/e87a8e4254034d04720ee1c31abf67a4_outside.png")
  } else if (color === '#3A3A3A' && doors === "2") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/e6c/e6c86e79efad3040665042a4e45a875a/69f92f07cbc08a31b0d63a2b89e3e15a_outside.png")
  }
}


const colorInputs = document.querySelectorAll('.main__color')

colorInputs.forEach(item => {
  item.addEventListener('click', () => {
    colorInputs.forEach(item => {
      item.classList.remove('main__color-active')
    })
    const doorInputActive = document.querySelector('.main__door-active')
    item.classList.add('main__color-active')
    // Post(item.getAttribute('value'),doorInputActive.getAttribute('value'))

    ReBack(item.getAttribute('value'),doorInputActive.getAttribute('value'))
  })
})

const doorInputs = document.querySelectorAll('.main__door')

doorInputs.forEach(item => {
  item.addEventListener('click', () => {
    doorInputs.forEach(item => {
      item.classList.remove('main__door-active')
    })
    const colorInputActive = document.querySelector('.main__color-active')
    item.classList.add('main__door-active')
    // Post(item.getAttribute('value'),colorInputActive.getAttribute('value'))
    ReBack(colorInputActive.getAttribute('value'),item.getAttribute('value'))
  })
})