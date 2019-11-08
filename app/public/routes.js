module.exports = function (app){
    app.get('/', function (req, res){

    })

    app.get('/waitlist', function (req, res){
        res.json(waitData)
    })

    app.get('/tables', function(req, res){
        res.json(tableData)
    })

    app.post('/table', function (req, res){
        if( tableData.length> 5)
    })
}