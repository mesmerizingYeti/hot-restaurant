document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault()

  axios.get('http://localhost:3000/tables')
    .then(({ data: tables }) => {

      let name = document.getElementById('name')
      let phone = document.getElementById('phone')
      let email = document.getElementById('email')
      let uniqueId = document.getElementById('uniqueId')

      if (name.value === '' || phone.value === '' || email.value === '' || uniqueId === '') {
        alert('Enter all fields')
      } else {
        const customer = {
          customerName: name.value,
          customerId: uniqueId.value,
          customerEmail: email.value,
          customerPhone: phone.value
        }
        console.log(tables.length)
        axios.post(`http://localhost:3000/${tables.length >= 5 ? 'waiting' : 'tables'}`, customer)
          .catch(e => console.log(e))
        document.getElementById('name').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('email').value = ''
        document.getElementById('uniqueId').value = ''
      }
    })
    .catch(e => console.log(e))
})