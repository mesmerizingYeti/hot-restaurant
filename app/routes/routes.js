const path = require('path')

module.exports = function(app){

    app.get('/viewTables', function (req, res){
        res.sendFile(path.json(__dirname,'public' , 'viewTables.html'))
    })

    app.get('/reservation', function(req, res){
        res.sendFile(path.json(___dirname, 'public', 'reservation.html'))
    })

    app.get('/', function(req, res){
        res.sendFile(path.json(___dirname, 'public', 'home.html'))
    })
}