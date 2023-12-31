const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const port = 3000
const app = express()
app.use(cors())

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nwm"
})
con.connect((err)=>{
    if(err) console.log(err)
    else console.log("connected :D")
})
app.get("/add/:przedmiot/:ocena",(req,res)=>{
    const przedmiot = req.params.przedmiot
    const ocena = req.params.ocena

    const sql = `INSERT INTO tabela (przedmiot, ocena) VALUES ('${przedmiot}', '${ocena}')`

    con.query(sql,(err,result)=>{
        if(err) console.log(err)
        else res.send({dodano:true})
    })
})
app.get("/select_all",(req,res)=>{
    const sql = `SELECT * FROM tabela`

    con.query(sql,(err,result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.get("/min_max/:value",(req,res)=>{
    var value = req.params.value
    if(value === "MAX"){
        var sql = `SELECT * FROM tabela ORDER BY ocena DESC`
    } else if(value === "MIN"){
        var sql = `SELECT * FROM tabela ORDER BY ocena ASC`
    }
    con.query(sql,(err,result)=>{
        if (err) console.log(err)
        else res.send(result)
    })
})
app.get("/delete",(req,res)=>{
    const sql = `DELETE FROM tabela`

    con.query(sql,(err,result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})


app.listen(port)