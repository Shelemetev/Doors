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
  if (color === 'RAL9005' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280000f05-small.png")
  } else if (color === 'RAL5014' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280000d05-small.png")
  } else if (color === 'RAL3031' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280000co5-small.png")
  } else if (color === 'RAL1018' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280001205-small.png")
  } else if (color === 'RAL7004' && doors === "1" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280000f85-small.png")
  } else if (color === 'RAL9005' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280004f05-small.png")
  } else if (color === 'RAL5014' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280004f05-small.png")
  } else if (color === 'RAL3031' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280004co5-small.png")
  } else if (color === 'RAL1018' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280005205-small.png")
  } else if (color === 'RAL7004' && doors === "2" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280004f85-small.png")
  } else if (color === 'RAL9005' && doors === "3" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280006f05-small.png")
  } else if (color === 'RAL5014' && doors === "3" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280006d05-small.png")
  } else if (color === 'RAL3031' && doors === "3" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280006co5-small.png")
  } else if (color === 'RAL1018' && doors === "3" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280007205-small.png")
  } else if (color === 'RAL7004' && doors === "3" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/000020003000000280006f85-small.png")
  } else if (color === 'RAL9005' && doors === "4" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028000af05-small.png")
  } else if (color === 'RAL5014' && doors === "4" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028000ad05-small.png")
  } else if (color === 'RAL3031' && doors === "4" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028000aco5-small.png")
  } else if (color === 'RAL1018' && doors === "4" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028000b205-small.png")
  } else if (color === 'RAL7004' && doors === "4" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028000af85-small.png")
  } else if (color === 'RAL9005' && doors === "5" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028001cf05-small.png")
  } else if (color === 'RAL5014' && doors === "5" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028001cd05-small.png")
  } else if (color === 'RAL3031' && doors === "5" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028001cco5-small.png")
  } else if (color === 'RAL1018' && doors === "5" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028001d205-small.png")
  } else if (color === 'RAL7004' && doors === "5" && type === "home") {
    outsideDoor.setAttribute('src', "https://img.termodver.ru/shweda/bqvwx/00002000300000028001cf85-small.png")
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