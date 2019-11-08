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
    console.log(req.body)
  })

}