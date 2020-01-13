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

	const currency = req.body.currency;
	const crypto = req.body.crypto;
	request(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${crypto}${currency}`, (error, response, body) => {
		const data = JSON.parse(body);
		const price = data.last;
		// let currency = ' USD';
		// let crypto = 'Bitcoin';
		//console.log(price);
		const date = data.display_timestamp;
		res.write(`<p>The current date is ${date}</p>`);
		res.write(`<h1>The current price of ${crypto} is ${price} ${currency}</h1>`);
		res.send();
	});
});
app.listen(3000, () => console.log('listening'));
