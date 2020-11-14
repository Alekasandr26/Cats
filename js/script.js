
// scroll to top
const goTopBtn = document.querySelector('.scroll_to_top')

window.addEventListener('scroll', trackScroll)
goTopBtn.addEventListener('click', backToTop)

function trackScroll() {
  let coords = document.documentElement.clientHeight
  let scrolled = window.pageYOffset

  if (scrolled > coords) {
    goTopBtn.classList.add('scroll_to_top-show')
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('scroll_to_top-show')
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80)
    setTimeout(backToTop, 20)
  }
}


// Show menu
const btnShowMenu = document.querySelector('.btn-show-menu')
const menuMobile = document.querySelector('.menu__mobile')
btnShowMenu.addEventListener('click', () => {
    btnShowMenu.classList.toggle('active')
    menuMobile.classList.toggle('active')
})



// sort items
let $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  fitRows: {
      gutter: '.all-cats__gutter'
  },
  getSortData: {
    price: '.price parseInt',
    age: '.age parseInt',
    price: '.price parseInt'
  }
});
// bind sort button click

$('.sort-by-button-group').on( 'click', 'button', function() {
  let sortValue = $(this).attr('data-sort-value')
  $grid.isotope({ sortBy: sortValue })
})


// add Favorites
let favorite = 0
const like = document.querySelectorAll('.hearts')
for(let i = 0; i < like.length; i++){
    like[i].addEventListener('click', event => {
      let like = event.target.parentElement.parentElement
      like.classList.toggle('active')
      if(like.classList.contains('active')){
        favorite++
      }else{
        favorite--
      }
      return alert(`Избранные ${favorite}`)

   })
}



// show more cats
let showMoreCatsBtn = document.querySelector('.btn-show-more')
let hidden = []
let hiddenCats = document.querySelectorAll('.all-cats__box.d-none')
for(let i = 0; i < hiddenCats.length; i++){
  hidden.push(hiddenCats[i])
  showMoreCatsBtn.innerText = `Показать еще ${hidden.length - 6} из ${hidden.length}`
  if(hidden.length === 0) {
    showMoreCatsBtn.classList.add('d-none')
  }
  showMoreCatsBtn.addEventListener('click', () => {
      hidden.length - 6
      hidden[i].classList.remove('d-none')
  })
}





  
 

// validation email
const btnSendEmail = document.querySelector('.submin')
const emailInput = document.querySelector('.email')
const errorMessage = document.querySelector('.error-message')
const checkbox = document.querySelector('.check')
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnSendEmail.addEventListener('click', (event) => {
  if(emailInput.value === ''){
    errorMessage.innerText = 'Вы не заполнили Email'
    return  event.preventDefault()
  }else if(!emailInput.value.match(mailformat)){
     errorMessage.innerText = 'Введите Email правильно'
     return event.preventDefault()
  } else if(emailInput.value.match(mailformat) && !checkbox.checked){
    errorMessage.innerText = 'Вы не подписались на новости'
    return event.preventDefault()
  }
  return true
})




	