const express = require('express');
const app = express();
const mongoClient = require('mongodb').MongoClient;
const PORT = 4200;
const url = 'mongodb://mongo:27017';

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.get('/api/getName', (req, res) => {
	res.json({ name: 'Mahesh1' });
});

mongoClient.connect(url, () => {
	console.log('Connected to db');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
