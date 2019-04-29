const express = require('express');
const app = express()
const PORT = 3000;
const request = require('request');

//app.get('/', (req, res) => {console.log('hi there')});
const URL = 'https://www.worldtradingdata.com/api/v1/history_multi_single_day?symbol=AAPL,MSFT&date=2018-01-02&api_token=0UfBvUmJZFeJd0qo17DEHOAjQbLbvhIFxw2ZoGIJb3vkQuoQcw7CP0haBz7L';
request(URL, function (err, res, body) {
         if (err) throw err;
         //res.send(body);
         console.log(res.body);
     });


app.listen(PORT);


 

 