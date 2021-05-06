document.querySelector('.button').addEventListener('click', function () {
  let value = document.querySelector('input').value
  if (value < 13) {
    alert('G rated')
  } else if (value >= 13 && value < 18) {
    alert('Pg-13 rated')
  } else {
    alert('R rated')
  }
})
