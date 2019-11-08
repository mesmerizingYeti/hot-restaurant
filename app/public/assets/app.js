// const axios = require('axios')


document.getElementById('viewTables').addEventListener('click', () => {
  console.log('hello')
  window.location.href = './viewTables.html'
})

document.getElementById('makeRes').addEventListener('click', function(e){
  e.preventDefault()
  console.log('hello')
  window.location.href = './reservation.html'
  // document.getElementById('makeRes').hidden = 'true'
})