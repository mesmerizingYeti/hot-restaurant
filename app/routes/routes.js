const path = require('path')

module.exports = function(app){

    app.get('/viewTables', function (req, res){
        res.redirect('/viewTables.html')
    })

    app.get('/reservation', function(req, res){
        res.redirect('/reservation.html')
    })

    app.get('/', function(req, res){
        res.redirect('/home.html')
    })
}