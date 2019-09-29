const express = require('express');
const app =express();
const bd = require('../bd/bd')


app.use(express.json())
app.use(express.urlencoded({extended : true}))

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


app.use(allowCrossDomain);

bd.client.connect()

app.get('/', (req, res)=>{

    console.log('Connected successfuly')
    bd.client.query("select * from cliente")
    .then(results => res.send(results.rows))
    
})

app.post('/', (req, res)=>{
    bd.client.query("insert into cliente values ('"+req.body.ced+"','"+req.body.nom+"','"+req.body.ape+"', '"+req.body.tel+"','"+req.body.cor+"', '"+req.body.dir+"', '"+req.body.cel+"')")
}) 

app.delete('/', (req,res)=>{
    bd.client.query("delete from cliente where id_cliente = "+"'"+req.body.ced+"'")
    
})


const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});