const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
var cors = require('cors')


var xlsx = require ('xlsx');  
var wk = xlsx.readFile('list.xlsx');
var worksheet = wk.Sheets["Sheet1"];
var sheet=xlsx.utils.sheet_to_json(worksheet);
  
  app.use(cors());
  app.use(bodyParser.json());


   app.get('/', function (req, res) {
    res.send("hello world")
  })
  
app.get('/lists', function (req, res) {

  res.send(sheet)
})



app.post('/addnames', function (req, res) {

  sheet.push(req.body)
  console.log(sheet)

  xlsx.utils.sheet_add_json(wk.Sheets["Sheet1"],sheet)
  xlsx.writeFile(wk,"./list.xlsx")
  res.send(sheet)
  
 
  

})
 
app.listen(3000)

          