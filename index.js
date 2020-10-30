const express = require('express')
const app = express()
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/test', (req, res)=>{
    res.status(200).send({message : 'ok'})
})

app.get('/time' , (req, res)=>{
    var myDate = new Date();
    var time = myDate.getHours() + ":" + myDate.getMinutes();
    res.status(200).send({message : time});
})

app.get('/hello/' , userId , (req,res)=>{

})