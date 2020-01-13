const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
	//console.log(req.body.crypto);

	request('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD', (error, response, body) => {
		console.log(response.body);
	});
});
app.listen(3000, () => console.log('listening'));
