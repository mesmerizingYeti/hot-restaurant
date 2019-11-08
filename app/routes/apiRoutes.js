const tableArr = require('../data/tableData')
const waitingArr = require('../data/waitingListData')

module.exports = function(app) {

  app.get('/tables', (req, res) => {
    res.send(JSON.stringify(tableArr))
  })

  app.get('/waiting', (req, res) => {
    res.send(JSON.stringify(waitingArr))
  })

  app.post('/tables', (req, res) => {
    tableArr.push(req.body)
    console.log(tableArr)
  })

  app.post('/waiting', (req, res) => {
    waitingArr.push(req.body)
    console.log(waitingArr)
  })

}

// axios.post(`http://localhost:3000/${tables.length === 5 ? 'waiting' : 'tables'}`)
//   .then(r => console.log(r))