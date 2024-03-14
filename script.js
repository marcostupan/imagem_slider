let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


next.addEventListener('click', function() {
let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
 })

 prev.addEventListener('click', function() {
     let items = document.querySelectorAll('.item')
     document.querySelector('.slide').prepend(items[items.length - 1])
 })


if (window.innerWidth < 768) {
    alert("Esse lindo slider foi feito para ser visto em telas maiores, por favor recarregue-a no seu desktop.");
  }