// const axios = require('axios')

axios.get('http://localhost:3000/tables')
  .then(r => console.log(r.data))
  .catch(e => console.log(e))

// axios.post(`http://localhost:3000/${tables.length === 5 ? 'waiting' : 'tables'}`, )
//   .then()

// document.getElementById('submit').addEventListener('click', () => {
//   document.getElementById('name') = ''
//   document.getElementById('phone') = ''
//   document.getElementById('email') = ''
//   document.getElementById('uniqueId') = ''
// })

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