module.exports = function (app){
    app.get('/', function (req, res){

    })

    app.get('/waitlist', function (req, res){
        
    })

    app.get('/tables', function(req, res){
        res.json(tableData)
    })
}