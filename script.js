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


let Post = (color,door, type) => {
  let promise = fetch('/' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: {color:color, door:door, type : type}
  })

  promise.then((data) => {
    outsideDoor.setAttribute('src', data.image)
  })
}

const outsideDoor = document.querySelector('.main__door-img--outside')
const insideDoor = document.querySelector('.main__door-img--inside')

let ReBack = (color,doors,type) => {
  console.log(color,doors);
  if (color === '#000000' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "./images/Door!.png")
    insideDoor.setAttribute('src', "./images/Door1.png")
  } else if (color === '#000000' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/304/3040e8df3f422265abc383969a33e9ed/9b5893fc5cf0130232bd38b1c7ba0590_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/9ea/9eaed45cce3d1a567116ec2a4669d964/655c8fb2afcf0bf16394de48d1504cb4_outside.png")
  } else if (color === '#3A3A3A' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/1fd/1fd111746b0b0fdb8967192a223b9f6a/e87a8e4254034d04720ee1c31abf67a4_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/dda/ddaccfdc9eb1eaaaf11ba62fb99b0155/a549aa5bd26b2b089179fb62e7d762bc_outside.png")
  } else if (color === '#3A3A3A' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/e6c/e6c86e79efad3040665042a4e45a875a/69f92f07cbc08a31b0d63a2b89e3e15a_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/392/392a82c83386722bda77f00536d60442/0b8eb3dd34c9325af7891c7c265273e9_outside.png")
  } else if (color === '#000000' && doors === "1" && type === "floor") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/6fa/6fa9b1451d1abf8d14dc35add4f6c7da/367a61334aca95a48b290a1fe00e8eef_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/f71/f711b619e69682a03da5892a6694bf36/bba6b0b2344837e229e71b09157a70b7_inside.png")
  } else if (color === '#000000' && doors === "2" && type === "floor") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/ddd/ddd4dc46bfbc523bdfa03bd2537547b4/8aaae5a1cc2edadb4bc7094b48bd55ce_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/ed1/ed1220d64d7f72c9085523b75067d4f5/d971359752b3814faad93be82a8dcdf0_inside.png")
  } else if (color === '#3A3A3A' && doors === "1" && type === "floor") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/d26/d26325c43440f08e8dcddd4abce1d40b/f11216f38bc1af894d3d449683a30bdb_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/674/674e3030c3e0430b5ab8deab7f637225/0493cefcc8c4c8a32b332e6a25a502d3_inside.png")
  } else if (color === '#3A3A3A' && doors === "2" && type === "floor") {
    outsideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/9ea/9eaed45cce3d1a567116ec2a4669d964/655c8fb2afcf0bf16394de48d1504cb4_outside.png")
    insideDoor.setAttribute('src', "https://190601.selcdn.ru/torex.ru/iblock/40e/40ee5a6ba4bdec2895cd089508330bde/60b43878fdf60245fc247b1380e9cded_inside.png")

  }
}


const colorInputs = document.querySelectorAll('.main__color')

colorInputs.forEach(item => {
  item.addEventListener('click', () => {
    colorInputs.forEach(item => {
      item.classList.remove('main__color-active')
    })
    const doorInputActive = document.querySelector('.main__door-active')
    const typeSelectActive = document.querySelector('.main__select-type--active')
    item.classList.add('main__color-active')
    // Post(item.getAttribute('value'),doorInputActive.getAttribute('value'),typeSelectActive.getAttribute('value'))

    ReBack(item.getAttribute('value'),doorInputActive.getAttribute('value'),typeSelectActive.getAttribute('value'))
  })
})

const doorInputs = document.querySelectorAll('.main__door')

doorInputs.forEach(item => {
  item.addEventListener('click', () => {
    doorInputs.forEach(item => {
      item.classList.remove('main__door-active')
    })
    const colorInputActive = document.querySelector('.main__color-active')
    const typeSelectActive = document.querySelector('.main__select-type--active')
    item.classList.add('main__door-active')
    // Post(item.getAttribute('value'),colorInputActive.getAttribute('value'),typeSelectActive.getAttribute('value'))
    ReBack(colorInputActive.getAttribute('value'),item.getAttribute('value'),typeSelectActive.getAttribute('value'))
  })
})

const typeSelects = document.querySelectorAll('.main__select-type')

typeSelects.forEach(item => {
  item.addEventListener("click", () => {
    typeSelects.forEach(item => {
      item.classList.remove('main__select-type--active')
    })
    const doorInputActive = document.querySelector('.main__door-active')
    const colorInputActive = document.querySelector('.main__color-active')
    // Post(colorInputActive.getAttribute('value'),doorInputActive.getAttribute('value'),item.getAttribute('value'))
    ReBack(colorInputActive.getAttribute('value'),doorInputActive.getAttribute('value'),item.getAttribute('value'))
    item.classList.add('main__select-type--active')
  })
})

const modelSelects = document.querySelectorAll('.main__select-model')

modelSelects.forEach(item => {
  item.addEventListener('click', () => {
    modelSelects.forEach(item => {
      item.classList.remove('main__select-model--active')
    })
    item.classList.add('main__select-model--active')
    if (item.getAttribute('value') === "out") {
      document.querySelector('.main__door-box--out').classList.remove('main__door-box--hidden')
      document.querySelector('.main__door-box--in').classList.add('main__door-box--hidden')
    } else {
      document.querySelector('.main__door-box--out').classList.add('main__door-box--hidden')
      document.querySelector('.main__door-box--in').classList.remove('main__door-box--hidden')

    }
  })
})